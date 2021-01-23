import { Typography } from 'antd';
import styled from 'styled-components';

export const StyledTitle = styled(Typography.Title)`
  color: ${({ theme }) => theme.colors.primaryColor} !important;
`;
