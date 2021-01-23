import { Layout, Switch } from 'antd';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import {
  StyledContent,
  StyledHeader,
  StyledMenu,
  StyledMenuItem,
} from './styles';

import { Props } from './types';

const PageLayout: Props = ({ children }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Layout>
      <StyledHeader>
        <StyledMenu mode="horizontal" defaultSelectedKeys={['users']}>
          <StyledMenuItem key="users">Users</StyledMenuItem>
          <StyledMenuItem key="posts">Posts</StyledMenuItem>
        </StyledMenu>
        <Switch
          checkedChildren="dark"
          unCheckedChildren="light"
          onClick={toggleTheme}
        />
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
    </Layout>
  );
};

export default PageLayout;
