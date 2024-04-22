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
        '2xl': '1440px',
      }
    },
  },
  plugins: [
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
