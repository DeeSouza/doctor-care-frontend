import { styled } from "@stitches/react";
import * as ToggleButton from "@radix-ui/react-toggle";

import { theme } from "../../styles/themes";

export const Button = styled(ToggleButton.Root, {
  variants: {
    display: {
      true: {
        span: {
          backgroundColor: "#FFFFFF",

          "&:before, &:after": {
            backgroundColor: "#FFFFFF",
          },
        },
      },
    },
  },

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
    transition: "all 0.25s ease-in-out",

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
