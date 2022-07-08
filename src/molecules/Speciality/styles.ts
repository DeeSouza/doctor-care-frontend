import { styled } from "@stitches/react";

export const Container = styled("div", {
  padding: "24px",
  background: "#FFFFFF",
  border: "1px solid #DCE9E2",
  borderRadius: "6px",
  marginBottom: "32px",
  transition: "all 0.25s ease-in",
  transform: "translateY(0)",
  boxShadow: "3px 2px 5px 0px transparent",

  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "3px 2px 5px 0px #cecece",
  },

  "&:last-child": {
    marginBottom: 0,
  },

  h2: {
    fontSize: "1.5rem",
    fontWeight: 700,
    margin: "16px 0",
  },

  p: {
    fontSize: "1rem",
    fontWeight: 400,
  },
});
