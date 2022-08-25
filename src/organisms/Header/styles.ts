import { styled } from "@stitches/react";
import { theme } from "styles/themes";

export const Navigation = styled("nav", {
  variants: {
    toggleMenu: {
      true: {
        height: "100%",
      },
      false: {
        height: "0%",
        transition: "all 0.35s ease-in-out",
      },
    },
  },

  backgroundColor: theme.colors.primary,
  minHeight: "72px",
  height: "0%",
  overflow: "hidden",
  transition: "all 0.65s ease-in-out 0.25s",
});

export const Container = styled("header", {
  variants: {
    backgroundColor: {
      true: {
        backgroundColor: theme.colors.primary,
      },
      false: {
        backgroundColor: theme.colors.background,
        transition: "all 0.05s ease",
      },
    },
  },

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
