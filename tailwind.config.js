/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      tall: { raw: '(min-height: 800px)' },
      tall2x: { raw: '(min-height: 1200px)' },
      laptop: '1024px',
    },
    extend: {
      keyframes: {
        rotationPortrait: {
          from: {
            transform: 'rotateX(90deg)',
          },
          to: {
            transform: 'rotateX(360deg)',
          },
        },
        rotationLandscape: {
          from: {
            transform: 'rotateY(90deg)',
          },
          to: {
            transform: 'rotateY(360deg)',
          },
        },
        backsidePortrait: {
          from: {
            transform: 'rotateX(270deg)',
          },
          to: {
            transform: 'rotateX(540deg)',
          },
        },
        backsideLandscape: {
          from: {
            transform: 'rotateY(270deg)',
          },
          to: {
            transform: 'rotateY(540deg)',
          },
        },
        pokerDiceRotate: {
          // from: { transform: 'rotate(0deg)' },
          // to: { transform: 'rotate(360deg)' },
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        wiggle: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
          // '50%': { transform: 'rotate(3deg)' },
        },
        // wiggle: {
        //   '0%, 100%': { transform: 'rotate(360deg)' },
        // },
      },
      animation: {
        rotationPortrait: 'rotationPortrait .5s 1 linear',
        backsidePortrait: 'backsidePortrait .5s 1 linear',
        // rotationLandscape: 'rotationLandscape .5s 1 linear',
        // backsideLandscape: 'backsideLandscape  .5s 1 linear',
        // wiggle: 'wiggle .5s 1 ease-out',
        // wiggle: 'wiggle 1s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
