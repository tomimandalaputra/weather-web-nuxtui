<script setup lang="ts">
import type { CodeIcon } from '~/types/responses/weather_response'

defineProps({
  codeIcon: {
    type: String as PropType<CodeIcon>,
    required: true,
  },
  classImg: {
    type: String,
    default: '',
  },
})

const urlIcon = computed(() => (code: CodeIcon) => `https://openweathermap.org/img/wn/${code}.png`)
</script>

<template>
  <img
    :src="urlIcon(codeIcon)"
    alt="icon weather"
    :class="classImg"
  >
</template>
