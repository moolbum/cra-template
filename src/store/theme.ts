import { create } from 'zustand';
import { persist } from 'zustand/middleware';
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

export const useThemePersistTest = create(
  persist(
    set => ({
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
          set(
            (state: {
              theme: {
                value: {
                  zIndex: { switch: number; dialogContent: number; alertDialogContent: number; toast: number };
                  fontWeights: { regular: number; medium: number; semibold: number; bold: number };
                  colors: { white: string; black: string };
                };
              };
            }) => ({
              theme: { value: state.theme.value === lightMode ? darkMode : lightMode },
            })
          ),
      },
    }),
    {
      name: 'persist-theme',
      getStorage: () => localStorage,
    }
  )
);

export default useTheme;
