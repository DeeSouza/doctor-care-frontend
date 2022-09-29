import { styled } from "@stitches/react";

export const Container = styled("div", {
  variants: {
    align: {
      left: {
        justifyContent: "flex-start",
      },
      center: {
        justifyContent: "center",
      },
    },
    show: {
      false: {
        "@media screen and (min-width: 1280px)": {
          display: "none",
        },
      },
    },
  },

  defaultVariants: {
    align: "center",
    show: true,
  },

  display: "flex",
  flexDirection: "row",
  gap: "32px",

  a: {
    transition: "all 0.25 ease-in-out",

    "&:hover": {
      opacity: 0.6,
    },
  },
});
