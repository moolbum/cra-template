import { fontWeights } from './typography';
import { zIndex } from './zIndex';

export const commonTheme = {
  zIndex,
  fontWeights,
};

export const darkMode = {
  colors: {
    white: '#000000',
    black: '#ffffff',
  },
  ...commonTheme,
};

export const lightMode = {
  colors: {
    white: '#ffffff',
    black: '#000000',
  },
  ...commonTheme,
};

export type ColorTypes = typeof lightMode;
