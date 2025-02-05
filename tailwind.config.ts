import type { Config } from 'tailwindcss'
// import { getIconCollections, iconsPlugin } from '@egoist/tailwindcss-icons'

const colors = {} as const

export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        ...colors,
      },
    },
    fontFamily: {
      sans: ['Montserrat', 'sans-serif'],
    },
  },
  plugins: [
    // Select the icon collections at https://icones.js.org/ when you want to use
    // iconsPlugin({
    //   collections: getIconCollections(['mdi', 'svg-spinners']),
    // }),
  ],
}
