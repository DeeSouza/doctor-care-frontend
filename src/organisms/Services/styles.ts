import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Section = styled("section", {
  backgroundColor: theme.colors.gray100,
  padding: "0 24px",
  marginTop: "-218px",
  paddingTop: " 218px",

  h2: {
    marginTop: "100px",
    textAlign: "center",
  },

  p: {
    fontSize: "1.875rem",
    textAlign: "center",
    fontWeight: 700,
    marginTop: "16px",
  },
});
