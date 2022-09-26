import { styled } from "@stitches/react";
import { theme } from "styles/themes";

export const List = styled("ul", {
  paddingTop: "60px",
  textAlign: "center",
  listStyle: "none",

  "@media screen and (min-width: 1280px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: "0",
    gap: "32px",
    height: "100%",
  },
});

export const ListItem = styled("li", {
  variants: {
    active: {
      true: {
        borderBottom: `2px solid ${theme.colors.primary}`,

        a: {
          fontWeight: 700,
        },
      },
    },
  },

  height: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "& + li": {
    marginTop: "48px",
  },

  a: {
    fontSize: "1.7rem",
    fontWeight: 700,
    color: "#FFF",
    display: "block",
  },

  "&:hover": {
    borderBottom: `2px solid ${theme.colors.primary}`,
  },

  "@media screen and (min-width: 1280px)": {
    borderBottom: "2px inset transparent",
    transition: "all 0.25s ease-in",

    "& + li": {
      marginTop: 0,
    },

    a: {
      fontSize: "1.143rem",
      color: theme.colors.primary,
      fontWeight: "normal",
      paddingTop: "2px",
    },
  },
});
