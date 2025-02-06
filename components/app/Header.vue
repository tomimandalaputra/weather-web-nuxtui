<script setup lang="ts">
import { storeToRefs } from 'pinia'

const uiInputModal = {
  color: {
    white: {
      outline: 'bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-0 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-0',
    },
  },
}

const isOpen = ref<boolean>(false)

const { q } = storeToRefs(useWeatherStore())
</script>

<template>
  <nav id="header--landing">
    <div class="header__container">
      <NuxtLink
        to="/"
      >
        <h4 class="text-xl font-semibold flex items-center gap-x-2">
          <UIcon
            name="i-iconoir-home-temperature-in"
            class="w-7 h-7"
          />
          Rumah Cuaca
        </h4>
        <p class="text-xs font-medium text-primary">by spacegamesindo</p>
      </NuxtLink>

      <div class="md:order-2">
        <div class="hidden md:flex items-center space-x-1 rtl:space-x-reverse">
          <ColorScheme>
            <UButton
              v-if="$colorMode.value === 'dark'"
              icon="i-iconoir-half-moon"
              variant="ghost"
              color="black"
              @click="$colorMode.preference = 'light'"
            />

            <UButton
              v-if="$colorMode.value === 'light'"
              icon="i-iconoir-sun-light"
              variant="ghost"
              color="black"
              @click="$colorMode.preference = 'dark'"
            />
          </ColorScheme>

          <UButton
            icon="i-iconoir-github"
            variant="ghost"
            color="black"
          />
        </div>

        <UButton
          icon="i-iconoir-menu"
          variant="ghost"
          color="black"
          class="md:hidden"
          @click="isOpen = true"
        />
      </div>

      <div
        id="navbar-sticky"
        class="w-full hidden md:flex md:w-1/2 md:order-1"
      >
        <div class="w-full">
          <UInput
            v-model="q"
            placeholder="Search City"
            icon="i-heroicons-magnifying-glass"
          />
        </div>
      </div>
    </div>
  </nav>

  <UModal
    id="modal--header"
    v-model="isOpen"
  >
    <UInput
      v-model="q"
      placeholder="Search City"
      icon="i-heroicons-magnifying-glass"
      :ui="uiInputModal"
    />

    <UDivider />
    <div class="px-4 py-2 pb-4 flex flex-col gap-1">
      <h6 class="text-sm font-medium">
        Theme
      </h6>

      <ColorScheme>
        <UButton
          :disabled="$colorMode.value === 'light'"
          icon="i-iconoir-sun-light"
          variant="ghost"
          color="black"
          label="Light"
          class="w-full"
          size="sm"
          @click="$colorMode.value = 'light'"
        />

        <UButton
          :disabled="$colorMode.value === 'dark'"
          icon="i-iconoir-half-moon"
          variant="ghost"
          color="black"
          label="Dark"
          class="w-full"
          size="sm"
          @click="$colorMode.value = 'dark'"
        />
      </ColorScheme>
    </div>
  </UModal>
</template>

<style lang="postcss" scoped>
#header--landing {
  @apply ring-1 ring-gray-200 dark:ring-gray-800;

  .header__container {
    @apply max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-4;
  }
}
</style>
