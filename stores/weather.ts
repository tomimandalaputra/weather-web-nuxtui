export const useWeatherStore = defineStore('weather', () => {
  const q = ref<string>('')

  function $reset() {
    q.value = ''
  }

  return { q, $reset }
})
