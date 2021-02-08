import { Button } from 'antd';
import styled, { css } from 'styled-components';
import { IProps } from './types';

export const StyledButton = styled(Button)<IProps>`
  ${({ type, theme }) =>
    type === 'primary' &&
    css`
      background-color: ${theme.colors.primaryButton};
      color: ${theme.colors.bodyBackgroundColor};
      border-color: ${theme.colors.primaryButton};
      border-radius: 8px;
      &:hover {
        background-color: ${theme.colors.hoverPrimaryButtonColor};
        border-color: ${theme.colors.hoverPrimaryButtonColor};
      }
    `}
`;
