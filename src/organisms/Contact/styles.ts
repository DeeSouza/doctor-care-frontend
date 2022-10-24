import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

const SectionContainer = styled("section", {
  padding: "100px 24px",
  backgroundColor: "#FFFFFF",
});

const SectionWrapper = styled("div", {
  maxWidth: "1120px",
  margin: "auto",

  "@media screen and (min-width: 768px)": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

const SectionDescription = styled("section", {
  maxWidth: "320px",

  h2: {
    fontSize: "30px",
    fontWeight: 700,
    color: theme.colors.gray500,
    marginBottom: "32px",
  },

  address: {
    fontStyle: "normal",

    "div[role='column']": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",

      "& + div": {
        marginTop: "16px",
        marginBottom: "32px",
      },

      "a, span": {
        marginLeft: "8px",
        color: theme.colors.gray300,
      },
    },
  },
});

const SectionImage = styled("div", {
  width: "100%",
  maxWidth: "575px",

  img: {
    marginTop: "60px",
    width: "100%",

    "@media screen and (min-width: 768px)": {
      marginTop: 0,
    },
  },
});

export const Section = {
  Root: SectionContainer,
  Wrapper: SectionWrapper,
  Description: SectionDescription,
  Image: SectionImage,
};
