import { Layout, Menu } from 'antd';
import React from 'react';
import { StyledContent, StyledHeader } from './styles';

import { Props } from './types';

const PageLayout: Props = ({ children }) => {
  return (
    <Layout>
      <StyledHeader>
        <Menu mode="horizontal" defaultSelectedKeys={['users']}>
          <Menu.Item key="users">Users</Menu.Item>
          <Menu.Item key="posts">Posts</Menu.Item>
        </Menu>
      </StyledHeader>
      <StyledContent>{children}</StyledContent>
    </Layout>
  );
};

export default PageLayout;