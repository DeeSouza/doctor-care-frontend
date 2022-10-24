import { styled } from "@stitches/react";
import { theme } from "../../styles/themes";

export const Wrapper = styled("div", {
  background: `linear-gradient(0deg, ${theme.colors.gray100} 50%, ${theme.colors.background} 50%)`,
  padding: "0 24px",
});

export const Container = styled("div", {
  width: "100%",
  maxWidth: "1120px",
  borderRadius: "6px",
  margin: "auto",
  backgroundColor: theme.colors.beige,
  border: "1px solid #DCE9E2",
  padding: "40px 24px",
  position: "relative",
  display: "flex",
  flexDirection: "column",
  textAlign: "center",
  alignItems: "center",
  gap: "40px",

  "@media screen and (min-width: 768px)": {
    padding: "60px 24px",
    flexDirection: "row",
    justifyContent: "center",
    gap: "60px",
  },
});

export const Separator = styled("div", {
  height: "1px",
  width: "80px",
  backgroundColor: "#00856F",
  opacity: 0.5,

  "@media screen and (min-width: 768px)": {
    transform: "rotate(90deg)",
  },
});
