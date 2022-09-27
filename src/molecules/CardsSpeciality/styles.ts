import { styled } from "@stitches/react";

export const Container = styled("div", {
  textAlign: "left",
  margin: "60px auto 0",
  maxWidth: "1121px",
  display: "grid",
  gap: "2.857rem",

  "@media (min-width: 347px)": {
    gridTemplateColumns: "repeat(auto-fit, minmax(347px, 1fr))",
  },
});
