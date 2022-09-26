import { styled } from "@stitches/react";
import { theme } from "styles/themes";

export const Button = styled("button", {
  backgroundColor: "#FFF",
  padding: "16px 32px",
  display: "block",
  borderRadius: "40px",
  color: theme.colors.primary,
  fontSize: "1.28rem",
  fontWeight: "700",
  margin: "48px auto 0",
  border: "2px solid transparent",
  transition: "all 0.25s ease",

  a: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  "&:hover": {
    backgroundColor: "transparent",
    border: "2px solid #FFF",
    color: "#FFF",
  },
});
