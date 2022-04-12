import { defineConfig } from 'windicss/helpers';

function generateSafeList() {
  const utilities = ['border', 'text'];
  const values = ['facebook', 'twitter', 'youtube'];
  return utilities.flatMap((utility) => {
    return values.map((value) => `${utility}-${value}`);
  });
}

export default defineConfig({
  darkMode: 'class',
  safelist: generateSafeList(),
  theme: {
    colors: {
      'blue-gray': {
        50: 'hsl(225, 100%, 98%)',
        100: 'hsl(227, 47%, 96%)',
        400: 'hsl(228, 34%, 66%)',
        750: 'hsl(228, 12%, 44%)',
        800: 'hsl(228, 28%, 20%)',
        850: 'hsl(232, 19%, 15%)',
        900: 'hsl(230, 17%, 14%)',
      },
      facebook: 'hsl(208, 92%, 53%)',
      instagram: {
        yellow: 'hsl(37, 97%, 70%)',
        pink: 'hsl(329, 70%, 58%)',
      },
      lime: 'hsl(163, 72%, 41%)',
      red: 'hsl(356, 69%, 56%)',
      toggle: {
        blue: 'hsl(210, 78%, 56%)',
        green: 'hsl(146, 68%, 55%)',
        light: 'hsl(230, 22%, 74%)',
      },
      transparent: 'transparent',
      twitter: 'hsl(203, 89%, 53%)',
      white: 'hsl(0, 0%, 100%)',
      youtube: 'hsl(348, 97%, 39%)',
    },
    fontFamily: {
      inter: ['Inter', 'sans-serif'],
    },
  },
});
