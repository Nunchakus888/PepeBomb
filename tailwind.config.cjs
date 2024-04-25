/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      textShadow: {
        title: '0px 2px 1px rgba(0, 0, 0, 0.25)',
      },
      boxShadow: {
        header: '0px 4px 4px rgba(0, 0, 0, 0.15000000596046448)',
      },
      backgroundColor: {
        bomb: '#4C9540',
      },
      fontFamily: {
        bomb: ['Raleway'],
        roboto: ['Roboto'],
      },
      screens: {
        // desktop first
        'lg': {'max': '1920px'},
        'md': {'max': '1439px', min: '1024px'},
        'sm': {'max': '1023px', min: '1px'},
        // 'md': {'max': '1023px', min: '768px'},
        // 'sm': {'max': '767px'},
      }
    },
  },
  plugins: [
    require('tailwindcss-convert-px-to-rem'),
    require('@tailwindcss/typography'),
    plugin(function ({matchUtilities, theme}) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        {values: theme('textShadow')}
      )
    }),
  ],
};
