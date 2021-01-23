import { Menu } from 'antd';
import styled from 'styled-components';

export const StyledMenuItem = styled(Menu.Item)`
  &.ant-menu-item-selected,
  &.ant-menu-item:hover {
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor} !important;
  }

  &.ant-menu-item-selected a,
  &.ant-menu-item a:hover {
    color: ${({ theme }) => theme.colors.primaryColor} !important;
  }

  &.ant-menu-item a {
    color: ${({ theme }) => theme.colors.secondaryColor};
  }
`;
