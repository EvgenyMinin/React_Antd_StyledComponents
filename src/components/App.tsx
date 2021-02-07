import React, { useState } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from '../utils/globalStyled';

import Users from './Users';
import Posts from './Posts';
import UserDetail from './UserDetail';

import { lightTheme } from 'themes/light';
import { darkTheme } from 'themes/dark';
import Products from './Products';

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
          <Redirect exact from="/" to="/users" />
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/posts">
            <Posts />
          </Route>
          <Route exact path="/users/:id">
            <UserDetail />
          </Route>
          <Route exact path="/products">
            <Products />
          </Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
