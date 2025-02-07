export const useWeatherStore = defineStore('weather', () => {
  const { public: { apiKey } } = useRuntimeConfig()

  const searchQuery = ref<string>('')

  const params = computed(() => ({
    q: searchQuery.value || 'Jakarta',
    units: 'metric',
    appid: apiKey,
  }))

  return {
    searchQuery,
    params,
  }
})
