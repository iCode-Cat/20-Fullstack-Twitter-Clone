module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 column grid
        16: 'repeat(auto-fill, minmax(0, auto))',
      },
    },
  },
  plugins: [],
};
