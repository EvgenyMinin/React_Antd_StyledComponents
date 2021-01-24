import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;
    colors: {
      primaryColor: string;
      secondaryColor: string;
      bodyBackgroundColor: string;
      secondaryBackground: string;
      tableBackground: string;
      border: string;
    };

    toggleTheme?: () => void;
  }
}
