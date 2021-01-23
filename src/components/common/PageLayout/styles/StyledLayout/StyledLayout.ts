import { Layout } from 'antd';
import styled from 'styled-components';

export const StyledLayout = styled(Layout)`
  background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
`;
