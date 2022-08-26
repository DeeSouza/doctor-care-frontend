import { styled } from "@stitches/react";
import { theme } from "styles/themes";

export const List = styled("ul", {
  paddingTop: "60px",
  textAlign: " center",
});

export const ListItem = styled("li", {
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

    social: {
      true: {
        paddingTop: "32px",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        gap: "32px",

        a: {
          transition: "all 0.25 ease-in-out",

          "&:hover": {
            opacity: 0.6,
          },
        },
      },
    },
  },

  "& + li": {
    marginTop: "48px",
  },

  a: {
    fontSize: "1.7rem",
    fontWeight: 700,
    color: "#FFF",
    display: "block",
  },
});
