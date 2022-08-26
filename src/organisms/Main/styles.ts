import { styled } from "@stitches/react";

export const Container = styled("main", {
  variants: {
    fixedMenu: {
      true: {
        paddingTop: "72px",
      },
    },
  },

  display: "flex",
  flexDirection: "column",
  flex: 1,
});
