import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import postcss from 'postcss';
import pxtorem from 'postcss-pxtorem';

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind()],
  vite: {
    plugins: [
      postcss({
        plugins: [
          pxtorem({
            rootValue: 16, // Conversion rate, default 16
            propList: ['*'], // Properties to convert, default: ['*']
            minPixelValue: 2 // Minimum pixel value to convert, default: 2
          })
        ]
      })
    ]
  }
});
