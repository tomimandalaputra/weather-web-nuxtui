export default defineAppConfig({
  ui: {
    primary: 'orange',
    gray: 'neutral',
    strategy: 'override',
    toggle: {
      default: {
        size: 'lg',
      },
    },
    input: {
      default: {
        size: 'lg',
      },
    },
    button: {
      color: {
        black: {
          ghost: 'text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400',
        },
      },
      default: {
        size: 'lg',
      },
    },
    modal: {
      container: 'flex min-h-full items-center justify-center text-center',
    },
  },
})
