import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    id: string;

    colors: {
      primaryColor: string;
      secondaryColor: string;
      bodyBackgroundColor: string;
    };

    toggleTheme?: () => void;
  }
}
