import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

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

  img: {
    width: "132px",
  },
});
