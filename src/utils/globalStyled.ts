import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  background-color: ${({ theme }) => theme.colors.bodyBackgroundColor};
  min-height: 100vh;
  margin: 0;
  color:  ${({ theme }) => theme.colors.primaryColor};
  box-sizing: border-box;
}
`;
