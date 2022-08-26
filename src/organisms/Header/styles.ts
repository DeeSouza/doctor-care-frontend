import { styled } from "@stitches/react";
import { theme } from "styles/themes";

export const Navigation = styled("nav", {
  variants: {
    fixedMenu: {
      true: {
        position: "fixed",
        zIndex: 1,
        boxShadow: "#000 0px 0px 8px 0px",

        header: {
          backgroundColor: theme.colors.primary,
        },
      },
    },

    toggleMenu: {
      true: {
        height: "100%",

        header: {
          backgroundColor: theme.colors.primary,
        },
      },
      false: {
        height: "0%",
        transition: "all 0.35s ease-in-out",

        header: {
          backgroundColor: theme.colors.background,
          transition: "all 0.05s ease",
        },
      },
    },
  },

  backgroundColor: theme.colors.primary,
  width: "100%",
  minHeight: "72px",
  height: "0%",
  overflow: "hidden",
  transition: "all 0.65s ease-in-out 0.25s, box-shadow 0ms",
});

export const Container = styled("header", {
  backgroundColor: theme.colors.background,
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
});
