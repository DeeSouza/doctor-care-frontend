import { globalCss } from "@stitches/react";
import { theme } from "./themes";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  "html, body, #root": {
    height: "100%",
  },
  body: {
    backgroundColor: theme.colors.background,
  },
  button: {
    background: "none",
    border: "none",
    outline: "none",
  },
});

export { globalStyles };
