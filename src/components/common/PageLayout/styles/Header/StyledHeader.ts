import { Layout } from 'antd';
import styled from 'styled-components';

export const StyledHeader = styled(Layout.Header)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
  padding: 0 16px;
`;
