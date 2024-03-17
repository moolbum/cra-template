import { create } from 'zustand';
import { ThemeTypes, darkMode, lightMode } from '@styles/index';

type ThemeState = {
  theme: { value: ThemeTypes };
  themeActions: {
    lightMode: () => void;
    darkMode: () => void;
    themeToggle: () => void;
  };
};

const useTheme = create<ThemeState>(set => ({
  theme: { value: lightMode },
  themeActions: {
    lightMode: () =>
      set(() => ({
        theme: { value: lightMode },
      })),
    darkMode: () =>
      set(() => ({
        theme: { value: darkMode },
      })),
    themeToggle: () =>
      set(state => ({
        theme: { value: state.theme.value === lightMode ? darkMode : lightMode },
      })),
  },
}));

export default useTheme;
