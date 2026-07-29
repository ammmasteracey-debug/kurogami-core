module.exports = {
  content: [
    './app/**/*.{js,jsx,ts,tsx}',
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './pages/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        kuromagenta: '#ff2d55',
        kurocyaan: '#00f0ff',
        kurodark: '#050615'
      },
      backgroundImage: {
        'city-gradient': 'radial-gradient(ellipse at center, rgba(0,0,0,0.2), rgba(0,0,0,0.8))'
      }
    }
  },
  plugins: []
}
