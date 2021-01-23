import { Menu } from 'antd';
import styled from 'styled-components';

export const StyledMenuItem = styled(Menu.Item)`
  color: ${({ theme }) => theme.colors.secondaryColor};
  &.ant-menu-item-selected,
  &.ant-menu-item:hover {
    color: ${({ theme }) => theme.colors.primaryColor} !important;
    border-bottom: 2px solid ${({ theme }) => theme.colors.primaryColor} !important;
  }
`;
