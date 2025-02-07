import { joinURL, withQuery } from 'ufo'
import type { H3Event } from 'h3'

export default defineEventHandler(async (event: H3Event) => {
  const requestedWith = getRequestHeader(event, 'X-Requested-With')

  if (requestedWith !== 'XMLHttpRequest') {
    throw createError({
      statusCode: 403,
      message: 'Forbidden Access',
    })
  }

  const { apiBaseUrl } = useRuntimeConfig()
  const path = getRouterParam(event, 'path') ?? ''
  const queryParam = getQuery(event)

  return await proxyRequest(
    event,
    withQuery(joinURL(apiBaseUrl, path), queryParam),
  )
})
