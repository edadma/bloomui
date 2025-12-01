import daisyui from 'daisyui'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    '../../bloomui/src/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [daisyui],
  daisyui: {
    themes: ['light', 'dark'],
  },
}
