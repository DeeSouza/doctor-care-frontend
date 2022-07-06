import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",

  strong: {
    fontSize: "3rem",
    fontWeight: 700,
    color: theme.colors.gray500,
  },

  small: {
    fontSize: "1rem",
    fontWeight: 400,
    color: theme.colors.primary,
  },
});
