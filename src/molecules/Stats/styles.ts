import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Container = styled("div", {
  borderRadius: "6px",
  backgroundColor: theme.colors.beige,
  border: "1px solid #DCE9E2",
  padding: "40px 0",
  display: "flex",
  flexDirection: "column",
  gap: "40px",
});
