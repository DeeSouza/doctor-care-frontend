import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Container = styled("footer", {
  backgroundColor: theme.colors.primary,
  padding: "60px 24px",
  color: "#FFF",
});

export const WrapperContainer = styled("div", {
  width: "100%",
  maxWidth: "1120px",
  margin: "auto",

  "@media screen and (min-width: 580px)": {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export const Copyright = styled("div", {
  "> img": {
    marginBottom: "24px",
  },

  p: {
    "& + p": {
      marginTop: "12px",
    },
  },

  marginBottom: "32px",

  "@media screen and (min-width: 580px)": {
    marginBottom: 0,
  },
});
