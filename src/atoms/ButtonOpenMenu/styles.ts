import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Button = styled("button", {
  width: "40px",
  height: "40px",
  padding: "12px 10px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  span: {
    width: "20px",
    height: "2px",
    backgroundColor: theme.colors.primary,
    position: "relative",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    "&:before, &:after": {
      content: "",
      height: "2px",
      position: "absolute",
      backgroundColor: theme.colors.primary,
    },

    "&:before": {
      width: "12px",
      top: "8px",
    },

    "&:after": {
      width: "20px",
      bottom: "8px",
    },
  },
});
