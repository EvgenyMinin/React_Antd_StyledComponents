import { Layout } from 'antd';
import styled from 'styled-components';

export const StyledContent = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
  max-width: 992px;
  width: 100%;
  margin: 32px auto 0;
  padding: 0 16px;
`;
