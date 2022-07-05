import { styled } from "@stitches/react";
import { theme } from "../styles/themes";

export const Button = styled("button", {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.colors.primary,
  color: "#FFF",
  padding: "16px 32px",
  borderRadius: "40px",
  width: "263px",
  height: "52px",
  margin: "auto",
  fontWeight: 700,
});
