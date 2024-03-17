import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import publicRoute from '@routes/public';
import useTheme from './store/theme';
import { GlobalStyle } from './styles';

const router = createBrowserRouter([...publicRoute]);

function App() {
  const { theme, themeActions } = useTheme();

  return (
    <>
      <ThemeProvider theme={theme.value}>
        <button onClick={themeActions.themeToggle}>Test</button>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
