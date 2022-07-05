import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Section = styled("section", {
  paddingTop: "40px",
  textAlign: "center",
  h6: {
    color: theme.colors.primary,
  },
  h1: {
    color: theme.colors.gray500,
    fontSize: "2.43rem",
    marginTop: "16px",
    fontWeight: 700,
    lineHeight: 1.3,
  },
  h5: {
    color: theme.colors.gray300,
    fontSize: "1.28rem",
    marginTop: "24px",
    marginBottom: "32px",
    fontWeight: 400,
  },
});
