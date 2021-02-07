import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ThemeContext } from 'styled-components';
import {
  StyledLayout,
  StyledContent,
  StyledHeader,
  StyledMenu,
  StyledMenuItem,
  StyledSwitch,
} from './styles';

import { Props } from './types';

const PageLayout: Props = ({ children }) => {
  const { id, toggleTheme } = useContext(ThemeContext);

  const { pathname } = useLocation();

  return (
    <StyledLayout>
      <StyledHeader>
        <StyledMenu mode="horizontal" selectedKeys={[pathname]}>
          <StyledMenuItem key="/users">
            <Link to="/users">Users</Link>
          </StyledMenuItem>
          <StyledMenuItem key="/posts">
            <Link to="/posts">Posts</Link>
          </StyledMenuItem>
          <StyledMenuItem key="/products">
            <Link to="/products">Products</Link>
          </StyledMenuItem>
        </StyledMenu>
        <StyledSwitch
          checkedChildren={'dark'}
          unCheckedChildren={'light'}
          onClick={toggleTheme}
          checked={id === 'dark'}
        />
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
    </StyledLayout>
  );
};

export default PageLayout;
