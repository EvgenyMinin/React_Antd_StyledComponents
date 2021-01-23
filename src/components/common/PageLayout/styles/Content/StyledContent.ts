import { Layout } from 'antd';
import styled from 'styled-components';

export const StyledContent = styled(Layout.Content)`
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
  max-width: 992px;
`;
