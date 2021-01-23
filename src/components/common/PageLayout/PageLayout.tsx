import { Layout, Menu, Switch } from 'antd';
import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { StyledContent, StyledHeader, StyledMenu } from './styles';

import { Props } from './types';

const PageLayout: Props = ({ children }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <Layout>
      <StyledHeader>
        <StyledMenu mode="horizontal" defaultSelectedKeys={['users']}>
          <Menu.Item key="users">Users</Menu.Item>
          <Menu.Item key="posts">Posts</Menu.Item>
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
