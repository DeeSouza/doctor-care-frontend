import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Section = styled("section", {
  padding: "100px 24px",
  backgroundColor: "#FFFFFF",

  h2: {
    fontSize: "30px",
    fontWeight: 700,
    color: theme.colors.gray500,
    marginBottom: "32px",
  },

  "div[role='column']": {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",

    "& + div": {
      marginTop: "16px",
      marginBottom: "32px",
    },

    span: {
      marginLeft: "8px",
    },
  },

  "> img": {
    maxWidth: "100%",
    marginTop: "60px",
  },
});
