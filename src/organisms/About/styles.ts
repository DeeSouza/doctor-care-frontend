import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

const SectionContainer = styled("section", {
  backgroundColor: theme.colors.beige,
  padding: "100px 23px",
});

const SectionWrapper = styled("div", {
  maxWidth: "1120px",
  margin: "auto",

  "@media screen and (min-width: 768px)": {
    display: "flex",
    gap: "67px",
  },
});

const SectionDescription = styled("div", {
  p: {
    fontSize: "1.875rem",
    fontWeight: 700,
    marginTop: "16px",
  },

  div: {
    color: theme.colors.gray300,
    margin: "24px 0 60px",
  },

  "@media screen and (min-width: 768px)": {
    order: 2,
    maxWidth: "573px",
  },
});

const SectionImage = styled("div", {
  width: "100%",

  img: {
    width: "100%",
    maxWidth: "480px",
  },
});

export const Section = {
  Root: SectionContainer,
  Wrapper: SectionWrapper,
  Description: SectionDescription,
  Image: SectionImage,
};
