import { styled } from "@stitches/react";
import { theme } from "styles/themes";

export const Button = styled("button", {
  variants: {
    fixedMenu: {
      true: {
        "@media screen and (min-width: 1280px)": {
          backgroundColor: "transparent",
          border: `1px solid ${theme.colors.gray100}`,
          color: theme.colors.gray100,

          "&:hover": {
            backgroundColor: theme.colors.gray100,
            color: theme.colors.primary,
          },
        },
      },
    },
  },

  backgroundColor: "#FFF",
  padding: "16px 32px",
  display: "block",
  margin: "0 auto",
  borderRadius: "40px",
  color: theme.colors.primary,
  fontSize: "1.28rem",
  fontWeight: "700",
  border: "1px solid transparent",
  transition: "all 0.25s ease",

  a: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "&:hover": {
    backgroundColor: "transparent",
    border: "1px solid #FFF",
    color: "#FFF",
  },

  "@media screen and (min-width: 1280px)": {
    margin: "0",
    marginLeft: "195px",
    backgroundColor: "transparent",
    border: `1px solid ${theme.colors.primary}`,
    color: theme.colors.primary,
    fontSize: "14px",
    padding: "10px 24px",

    "&:hover": {
      backgroundColor: theme.colors.primary,
      color: "#FFF",
    },
  },
});
