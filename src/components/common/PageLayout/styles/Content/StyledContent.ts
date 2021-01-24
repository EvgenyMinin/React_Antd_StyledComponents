import { Layout } from 'antd';
import styled from 'styled-components';

export const StyledContent = styled(Layout.Content)`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
  max-width: 992px;
  margin: 0 auto;
`;
