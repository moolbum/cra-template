import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import publicRoute from '@routes/public';
import { GlobalStyle, dark, light } from './styles';

const router = createBrowserRouter([...publicRoute]);

function App() {
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>('light');
  const theme = themeMode === 'light' ? light : dark;

  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light'); // 테마 변경하기 이벤트

  return (
    <>
      <ThemeProvider theme={theme}>
        <button onClick={toggleTheme}>Test</button>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
