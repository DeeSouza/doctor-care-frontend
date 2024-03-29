import { styled } from "@stitches/react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import { theme } from "styles/themes";

export const Navigation = styled(NavigationMenu.Root, {
  variants: {
    fixedMenu: {
      true: {
        backgroundColor: theme.colors.primary,
        boxShadow: "#000 0px 0px 8px 0px",
        position: "fixed",
        zIndex: 1,
      },
    },

    toggleMenu: {
      true: {
        height: "100%",
        backgroundColor: theme.colors.primary,
      },
      false: {
        height: "0%",
        transition: "all 0.35s ease-in-out",
        backgroundColor: theme.colors.background,
      },
    },
  },

  backgroundColor: theme.colors.background,
  width: "100%",
  minHeight: "72px",
  height: "0%",
  overflow: "hidden",
  transition: "all 0.25s ease-in-out",

  "@media screen and (min-width: 1280px)": {
    div: {
      height: "100%",
    },
  },
});

export const Container = styled("header", {
  display: "flex",
  flexDirection: "row",
  flex: 1,
  justifyContent: "space-between",
  alignItems: "center",
  height: "72px",
  width: "100%",
  padding: "24px",
  transition: "all 0.25s ease-in-out",

  img: {
    width: "132px",
  },

  "@media screen and (min-width: 1168px)": {
    padding: "24px 0",
  },
});

export const WrapperNavigation = styled("div", {
  maxWidth: "1120px",
  margin: "auto",

  "@media screen and (min-width: 1280px)": {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    height: "100%",
  },
});
