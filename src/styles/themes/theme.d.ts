import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      background: string;
      theme: string;
      typography: string;
      heading: string;
    };
  }
}
