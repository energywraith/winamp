import defaultTheme from "./default";

export type Theme = {
  colors: {
    appBackground: string;
    winampGreen: string;
  };
  size: {
    width: string;
    height: string;
  };
};

export default defaultTheme;

export { defaultTheme };
