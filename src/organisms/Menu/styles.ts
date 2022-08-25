import { styled } from "@stitches/react";
import { theme } from "styles/themes";

export const List = styled("ul", {
  paddingTop: "60px",
  textAlign: " center",
});

export const ListItem = styled("li", {
  "& + li": {
    marginTop: "48px",
  },

  a: {
    fontSize: "1.7rem",
    fontWeight: 700,
    color: "#FFF",
    display: "block",
  },

  variants: {
    button: {
      true: {
        a: {
          backgroundColor: "#FFF",
          padding: "16px 32px",
          display: "inline-block",
          borderRadius: "40px",
          color: theme.colors.primary,
          fontSize: "1.28rem",
        },
      },
    },
  },
});
