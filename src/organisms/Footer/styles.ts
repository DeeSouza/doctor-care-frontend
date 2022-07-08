import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Container = styled("footer", {
  backgroundColor: theme.colors.primary,
  padding: "60px 24px",

  div: {
    color: "#FFF",

    "&:first-of-type": {
      marginTop: "24px",
    },

    "&:last-of-type": {
      marginTop: "32px",
    },

    span: {
      display: "block",

      "& + span": {
        marginTop: "12px",
      },
    },

    a: {
      marginRight: "32px",
    },
  },
});
