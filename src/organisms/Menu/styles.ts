import { styled } from "@stitches/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { theme } from "styles/themes";

export const List = styled(NavigationMenu.List, {
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

export const ListItem = styled(NavigationMenu.Item, {
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

  "@media screen and (min-width: 1280px)": {
    borderBottom: "2px inset transparent",
    transition: "all 0.25s ease-in",

    "& + li": {
      marginTop: 0,
    },

    "&:hover": {
      borderBottom: `2px solid ${theme.colors.primary}`,
    },
  },
});

export const ListLink = styled(NavigationMenu.Link, {
  fontSize: "1.7rem",
  fontWeight: 700,
  color: "#FFF",
  display: "block",

  "@media screen and (min-width: 1280px)": {
    fontSize: "1.143rem",
    color: theme.colors.primary,
    fontWeight: "normal",
    paddingTop: "2px",
    transition: "all 0.25s ease-in",
    opacity: 1,

    "&:hover": {
      opacity: 0.6,
    },
  },
});
