import React, { useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import publicRoute from '@routes/public';
import { GlobalStyle, darkMode, lightMode } from './styles';

const router = createBrowserRouter([...publicRoute]);

function App() {
  const [themeMode, setThemeMode] = useState(lightMode);
  const toggleTheme = () => setThemeMode(themeMode === lightMode ? darkMode : lightMode);

  return (
    <>
      <ThemeProvider theme={themeMode}>
        <button onClick={toggleTheme}>Test</button>
        <GlobalStyle />
        <RouterProvider router={router} />
      </ThemeProvider>
    </>
  );
}

export default App;
