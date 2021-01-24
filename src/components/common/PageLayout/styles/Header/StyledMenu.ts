import { Menu } from 'antd';
import styled from 'styled-components';

export const StyledMenu = styled(Menu)`
  background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
  color: ${({ theme }) => theme.colors.primaryColor};

  &.ant-menu-horizontal {
    border-bottom: 0;
  }
`;
