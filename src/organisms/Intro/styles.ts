import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const SectionContainer = styled("section", {
  padding: "40px 0 0",
  position: "relative",
});

const SectionWrapper = styled("div", {
  maxWidth: "1120px",
  width: "100%",
  margin: "auto",

  "@media screen and (min-width: 968px)": {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
    padding: "0 24px",
  },

  "@media screen and (min-width: 1168px)": {
    padding: 0,
  },
});

const SectionIntro = styled("div", {
  width: "100%",
  textAlign: "center",
  padding: "0 24px",
  margin: "auto",

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

  button: {
    margin: "auto",
  },

  "@media screen and (min-width: 968px)": {
    textAlign: "left",
    padding: "0 0",

    h1: {
      fontSize: "3.714rem",
    },

    button: {
      margin: 0,
    },
  },
});

const SectionImage = styled("div", {
  img: {
    margin: "60px auto 0 auto",
    display: "block",
    verticalAlign: "middle",
    height: "338px",
  },

  "@media screen and (min-width: 968px)": {
    img: {
      marginTop: 0,
      marginRight: "44px",
      height: "488px",
    },
  },
});

export const Section = {
  Root: SectionContainer,
  Wrapper: SectionWrapper,
  Intro: SectionIntro,
  Image: SectionImage,
};
