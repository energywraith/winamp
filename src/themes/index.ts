import defaultTheme from "./default";

export type Theme = {
  colors: {
    appBackground: string;
  };
  size: {
    width: string;
    height: string;
  };
};

export default defaultTheme;

export { defaultTheme };
