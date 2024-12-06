import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      colors: {
        'titan': {
          '50': '#f5f6fd',
          '100': '#e6e6fa',
          '200': '#dbdbf9',
          '300': '#c0bff3',
          '400': '#9f9aeb',
          '500': '#7e71e1',
          '600': '#6952d5',
          '700': '#5940c1',
          '800': '#4a35a2',
          '900': '#3f2d85',
          '950': '#251b5a',
        },

      }
    },

  },

  plugins: [typography]
} satisfies Config;
