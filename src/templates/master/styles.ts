import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Main = styled("main", {
  backgroundColor: theme.colors.background,
  display: "flex",
  flexDirection: "column",
  flex: 1,
  height: "100%",
  width: "100%",
});
