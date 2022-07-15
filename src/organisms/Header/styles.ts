import { styled } from "@stitches/react";
import { theme } from "styles/themes";

export const Container = styled("header", {
  variants: {
    backgroundColor: {
      true: {
        backgroundColor: theme.colors.primary,
      },
      false: {
        backgroundColor: theme.colors.background,
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
