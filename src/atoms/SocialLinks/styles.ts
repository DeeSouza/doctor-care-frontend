import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  gap: "32px",
  marginTop: "80px",

  a: {
    transition: "all 0.25 ease-in-out",

    "&:hover": {
      opacity: 0.6,
    },
  },
});
