import { defu } from 'defu'
import type { UseFetchOptions } from 'nuxt/app'

export interface ErrorApiResponse {
  status: number
  body: {
    ok: boolean
  }
}

export type ApiFetchOptions<T> = UseFetchOptions<T> & {
  excludeInterceptor?: number[]
  onSuccess?: (response: {
    status: number
    body: T
  }) => Promise<void> | void
  onError?: (response: ErrorApiResponse) => Promise<void> | void
}

export function useApi<T>(
  url: string | Request | Ref<string | Request> | (() => string) | Request,
  opts: ApiFetchOptions<T> = {}) {
  const { excludeInterceptor, ...options } = opts

  const defaults: UseFetchOptions<T> = {
    async onRequest({ options }) {
      options.headers = new Headers(options.headers)
      options.headers.set('X-Requested-With', 'XMLHttpRequest')
    },

    async onResponse({ response }) {
      if (typeof opts.onSuccess === 'function' && response.status >= 200 && response.status < 300) {
        await opts.onSuccess({
          status: response.status,
          body: response._data,
        })
      }
    },

    async onResponseError(ctx) {
      if (typeof opts.onError === 'function') {
        await opts.onError({
          status: ctx.response.status,
          body: ctx.response._data,
        })
      }
    },
  }

  const params = defu(options, defaults)

  return useFetch(`${url}.json`, params)
}
