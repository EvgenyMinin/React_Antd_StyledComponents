import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../utils/globalStyled';

import Users from './Users';
import Posts from './Posts';

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
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Users />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
