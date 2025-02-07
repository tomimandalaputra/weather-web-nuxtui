<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { API_ENDPOINT } from '~/constants/api_endpoint'
import { timestampFormat, DATE_FORMAT } from '~/utils/date_utils'

import type { ResponseWeather } from '~/types/responses/weather_response_type'
import type { ResponseForecast } from '~/types/responses/forecast_response_type'

definePageMeta({
  layout: 'landing',
})

const store = useWeatherStore()

const errorMessage = ref<string | null>(null)

const { data: currentWeather, refresh: refreshWeather } = useApi<ResponseWeather>(API_ENDPOINT.AIR_QUALITY, {
  watch: false,
  params: storeToRefs(useWeatherStore()).params,
  onSuccess: () => {
    errorMessage.value = null
  },
  onError: ({ body }) => {
    errorMessage.value = body.message
  },
})

const { data: currentForecast, refresh: refreshForecast } = useApi<ResponseForecast>(API_ENDPOINT.FORECAST, {
  watch: false,
  params: storeToRefs(useWeatherStore()).params,
  transform: (data) => {
    return {
      ...data,
      list: data?.list.filter((_, index) => index % 7 === 0),
    }
  },
})

watchDebounced(
  () => store.searchQuery,
  () => {
    refreshWeather()
    refreshForecast()
  },
  { debounce: 800 },
)
</script>

<template>
  <section id="section--wheather">
    <template v-if="errorMessage">
      <div class="flex justify-center items-center h-screen">
        <h3 class="text-lg md:text-2xl font-bold capitalize">
          {{ errorMessage }}
        </h3>
      </div>
    </template>

    <template v-if="currentWeather">
      <h4 class="text-lg mb-4">
        Today's overview
      </h4>

      <div class="grid grid-cols-12 gap-4 mb-10">
        <div class="col-span-12 md:col-span-6 lg:col-span-4">
          <UCard class="h-full flex items-center">
            <h3 class="text-lg font-bold">
              {{ currentWeather.name }}, {{ currentWeather.sys.country }}
            </h3>

            <p class="text-sm">
              Sunrise {{ timestampFormat(currentWeather.sys.sunrise, DATE_FORMAT.TIME) }}
            </p>

            <p class="text-sm">
              Sunset {{ timestampFormat(currentWeather.sys.sunset, DATE_FORMAT.TIME) }}
            </p>
          </UCard>
        </div>

        <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <UCard class="h-full flex items-center">
            <div class="flex justify-start items-start gap-1">
              <UIcon
                name="i-wi-thermometer"
                class="w-8 h-8"
              />

              <div>
                <p class="text-sm">
                  {{ currentWeather.main.temp }}&deg;C
                </p>
                <p class="text-sm">
                  Temperature
                </p>
              </div>
            </div>
          </UCard>
        </div>

        <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <UCard class="h-full flex items-center">
            <div class="flex justify-start items-start gap-1">
              <UIcon
                name="i-wi-humidity"
                class="w-8 h-8"
              />

              <div>
                <p class="text-sm">
                  {{ currentWeather.main.humidity }}%
                </p>
                <p class="text-sm">
                  Humidity
                </p>
              </div>
            </div>
          </UCard>
        </div>

        <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <UCard class="h-full flex items-center">
            <div class="flex justify-start items-start gap-1">
              <UIcon
                name="i-wi-strong-wind"
                class="w-8 h-8"
              />

              <div>
                <p class="text-sm">
                  {{ currentWeather.wind.speed }} m/s
                </p>
                <p class="text-sm">
                  Wind speed
                </p>
              </div>
            </div>
          </UCard>
        </div>

        <div class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2">
          <UCard class="h-full flex items-center">
            <div class="flex justify-start items-start gap-1">
              <UIcon
                name="i-wi-barometer"
                class="w-8 h-8"
              />

              <div>
                <p class="text-sm">
                  {{ currentWeather.main.pressure }} hPa
                </p>
                <p class="text-sm">
                  Pressure
                </p>
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </template>

    <template v-if="currentForecast">
      <h4 class="text-lg mb-4">
        5-Day Forecast
      </h4>

      <div class="grid grid-cols-12 gap-4">
        <div
          v-for="(data, i) in currentForecast.list"
          :key="i"
          class="col-span-6 sm:col-span-4 md:col-span-3 lg:col-span-2"
        >
          <UCard class="text-center">
            <template #header>
              <p>
                {{ timestampFormat(data.dt, DATE_FORMAT.DATE) }}
              </p>
            </template>

            <AppIconWeather
              :code-icon="data.weather[0].icon"
              class-img="w-20 h-auto mx-auto"
            />

            <h3 class="text-base md:text-lg font-bold">
              {{ data.weather[0].main }}
            </h3>
          </UCard>
        </div>
      </div>
    </template>
  </section>
</template>
