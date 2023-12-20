/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      mobile: { max: '1023px' },
      tall: { raw: '(min-height: 800px)' },
    },
    extend: {
      backgroundImage: {
        landscapeFelt: "url('./src/assets/craps_images/table/felt.png')",
        portraitFelt: "url('./src/assets/craps_images/table/felt0m.png')",
      },
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
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
      },
      animation: {
        rotationPortrait: 'rotationPortrait .5s 1 linear',
        backsidePortrait: 'backsidePortrait .5s 1 linear',
        // rotationLandscape: 'rotationLandscape .5s 1 linear',
        // backsideLandscape: 'backsideLandscape  .5s 1 linear',
      },
    },
  },
  plugins: [],
};
