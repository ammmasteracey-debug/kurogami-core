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
        bg0: '#050507',
        bg1: '#0b0b10',
        bg2: '#12121a',
        line: '#23232f',
        text1: '#f4f1ea',
        text2: '#a7a3b2',
        gold: '#d7b56d',
        gold2: '#f0d59a',
        crimson: '#8f1636',
        glow: 'rgba(215,181,109,0.18)'
      },
      fontFamily: {
        display: ['Cinzel', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'sans-serif']
      }
    }
  },
  plugins: []
}
