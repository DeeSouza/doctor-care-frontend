import { styled } from "@stitches/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { theme } from "styles/themes";

export const List = styled(NavigationMenu.List, {
  paddingTop: "60px",
  textAlign: "center",
  listStyle: "none",
  marginBottom: "48px",

  "@media screen and (min-width: 1280px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingTop: "0",
    gap: "32px",
    height: "100%",
    marginBottom: 0,
  },
});

export const ListItem = styled(NavigationMenu.Item, {
  variants: {
    active: {
      true: {
        "@media screen and (min-width: 1280px)": {
          borderBottom: `2px solid ${theme.colors.primary}`,
        },
      },
    },

    fixedMenu: {
      true: {
        "@media screen and (min-width: 1280px)": {
          "&:hover": {
            borderBottom: `2px solid ${theme.colors.gray100}`,
          },
        },
      },
    },

    switchStyle: {
      true: {
        "@media screen and (min-width: 1280px)": {
          borderBottom: `2px solid ${theme.colors.gray100}`,
        },
      },
    },
  },

  defaultVariants: {
    active: false,
    fixedMenu: false,
    switchStyle: false,
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
  variants: {
    active: {
      true: {
        "@media screen and (min-width: 1280px)": {
          fontWeight: 700,
          opacity: 1,
        },
      },
      false: {
        "@media screen and (min-width: 1280px)": {
          opacity: 0.7,
        },
      },
    },

    fixedMenu: {
      true: {
        "@media screen and (min-width: 1280px)": {
          color: theme.colors.gray100,
        },
      },
    },
  },

  fontSize: "1.7rem",
  fontWeight: 700,
  color: "#FFF",
  display: "block",

  "@media screen and (min-width: 1280px)": {
    fontSize: "1.143rem",
    color: theme.colors.primary,
    fontWeight: 400,
    paddingTop: "2px",
    transition: "all 0.25s ease-in",

    "&:hover": {
      opacity: 1,
    },
  },
});
