import { keyframes, styled, VariantProps } from "@stitches/react";
import * as ToggleButton from "@radix-ui/react-toggle";

import { theme } from "styles/themes";

const rotateBarsOn = keyframes({
  "0%": { transform: "rotate3d(0, 0, 1, 0deg)" },
  "100%": { transform: "rotate3d(0, 0, 1, 765deg)" },
});

const rotateBarsOff = keyframes({
  "0%": { transform: "rotate3d(0, 0, 1, 765deg)" },
  "100%": { transform: "rotate3d(0, 0, 1, 0deg)" },
});

const firstSpanOn = keyframes({
  "0%": { transform: "translate3d(0, 0, 0)" },
  "100%": { transform: "translate3d(0, 8px, 0)" },
});

const firstSpanOff = keyframes({
  "0%": { transform: "translate3d(0, 8px, 0)" },
  "100%": { transform: "translate3d(0, 0px, 0)" },
});

const middleSpanOn = keyframes({
  "0%": { transform: "rotate3d(0, 0, 1, 0deg)" },
  "100%": { transform: "rotate3d(0, 0, 1, 90deg)" },
});

const middleSpanOff = keyframes({
  "0%": { transform: "rotate3d(0, 0, 1, 90deg)" },
  "100%": { transform: "rotate3d(0, 0, 1, 0deg)" },
});

const lastSpanOn = keyframes({
  "0%": { opacity: 1, transform: "translate3d(0, 0, 0)" },
  "100%": { opacity: 0, transform: "translate3d(20px, 0, 0)" },
});

const lastSpanOff = keyframes({
  "0%": { opacity: 0, transform: "translate3d(20px, 0, 0)" },
  "100%": { opacity: 1, transform: "translate3d(0px, 0, 0)" },
});

export const Button = styled(ToggleButton.Root, {
  variants: {
    fixedMenu: {
      true: {
        div: {
          span: {
            backgroundColor: "#FFF",
          },
        },
      },
    },

    animation: {
      true: {
        div: {
          animation: `${rotateBarsOn} .25s forwards`,
          animationDelay: ".5s",

          span: {
            backgroundColor: "#FFFFFF",

            "&:nth-child(1)": {
              animation: `${firstSpanOn} .25s forwards`,
              animationDelay: ".15s",
            },

            "&:nth-child(2)": {
              animation: `${middleSpanOn} .25s forwards`,
              animationDelay: "1.25s",
            },

            "&:nth-child(3)": {
              animation: `${lastSpanOn} .5s forwards`,
            },
          },
        },
      },
      false: {
        animation: `${rotateBarsOff} .25s backwards`,
        animationDelay: "1s",

        span: {
          "&:nth-child(1)": {
            animation: `${firstSpanOff} .25s backwards`,
            animationDelay: "1.25s",
          },

          "&:nth-child(2)": {
            animation: `${middleSpanOff} .25s backwards`,
            animationDelay: "0.25s",
          },

          "&:nth-child(3)": {
            animation: `${lastSpanOff} .25s backwards`,
            animationDelay: "1.5s",
          },
        },
      },
    },
  },

  width: "40px",
  height: "40px",
  padding: "12px 10px",

  div: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    span: {
      width: "20px",
      height: "2px",
      backgroundColor: theme.colors.primary,
      borderRadius: "6px",

      "&:last-child": {
        width: "12px",
        marginLeft: "auto",
      },

      "& + span": {
        marginTop: "6px",
      },
    },
  },
});
