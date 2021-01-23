import { Switch } from 'antd';
import styled from 'styled-components';

export const StyledSwitch = styled(Switch)`
  color: ${({ theme }) => theme.colors.primaryColor};
  background-color: ${({ theme }) => theme.colors.secondaryBackground};
`;
