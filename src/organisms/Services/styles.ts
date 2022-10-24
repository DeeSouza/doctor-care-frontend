import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Section = styled("section", {
  backgroundColor: theme.colors.gray100,
  padding: "100px 24px 100px",

  "> h2": {
    textAlign: "center",
  },

  "> p": {
    fontSize: "1.875rem",
    textAlign: "center",
    fontWeight: 700,
    maxWidth: "280px",
    margin: "16px auto 0",

    "@media screen and (min-width: 1280px)": {
      fontSize: "2.5rem",
      maxWidth: "440px",
    },
  },

  "@media screen and (min-width: 768px)": {
    padding: "160px 24px 100px",
  },
});
