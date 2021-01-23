import { Typography } from 'antd';
import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../utils/globalStyled';

import PageLayout from './common/PageLayout';

import { lightTheme } from 'themes/light';
import { darkTheme } from 'themes/dark';

const App: React.FC = () => {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () => {
    setTheme((theme) => (theme.id === 'light' ? darkTheme : lightTheme));
  };

  return (
    <ThemeProvider
      theme={{
        ...theme,
        toggleTheme,
      }}
    >
      <GlobalStyle />
      <PageLayout>
        <Typography.Title level={1}>React app</Typography.Title>
      </PageLayout>
    </ThemeProvider>
  );
};

export default App;
