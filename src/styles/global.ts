import { globalCss } from "@stitches/react";

const globalStyles = globalCss({
  "*": { margin: 0, padding: 0 },
  "html, body, #root": { height: "100%" },
});

export { globalStyles };
