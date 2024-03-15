export const darkMode = {
  colors: {
    white: '#000000',
    black: '#ffffff',
  },
};

export const lightMode = {
  colors: {
    white: '#ffffff',
    black: '#000000',
  },
};

export type ColorTypes = typeof lightMode;
export type Colors = keyof (typeof lightMode)['colors'];
