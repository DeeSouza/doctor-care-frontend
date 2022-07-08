import { styled } from "@stitches/react";

import { theme } from "../../styles/themes";

export const Section = styled("section", {
  backgroundColor: theme.colors.beige,
  padding: "100px 23px",

  div: {
    "> p": {
      fontSize: "1.875rem",
      fontWeight: 700,
      marginTop: "16px",
    },

    "> div": {
      color: theme.colors.gray300,
      margin: "24px 0 60px",
    },

    img: {
      maxWidth: "100%",
    },
  },
});
