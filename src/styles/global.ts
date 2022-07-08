import { globalCss } from "@stitches/react";
import { theme } from "./themes";

const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  html: {
    fontSize: "14px",
  },
  "html, body, #root": {
    height: "100%",
  },
  body: {
    backgroundColor: theme.colors.background,
    font: "normal 400 1rem/1.5 'DM Sans', sans-serif",
  },
  button: {
    background: "none",
    border: "none",
    outline: "none",
    cursor: "pointer",
  },
  "h1, h2, h3, h4, h5, h6": {
    fontSize: "1rem",
  },
});

export { globalStyles };
