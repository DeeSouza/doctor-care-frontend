import { createStitches } from "@stitches/react";

const { theme, createTheme } = createStitches({
  theme: {
    colors: {
      background: "#DCE9E2",
      greenHover: "#00453A",
      primary: "#00856F",
      secondary: "#DCE9E2",

      gray100: "#F7F9F9",
      gray300: "#495057",
      gray500: "#212529",

      beige: "#FFFAF1",
    },
  },
});

const darkTheme = createTheme({
  colors: {
    primary: "#00856F",
    secondary: "#DCE9E2",
  },
});

export { theme, darkTheme };
