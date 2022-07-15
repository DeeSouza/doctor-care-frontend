import { keyframes, styled } from "@stitches/react";
import * as ToggleButton from "@radix-ui/react-toggle";

import { theme } from "styles/themes";

const divOn = keyframes({
  "0%": { transform: "rotate3d(0, 0, 1, 0deg)" },
  "100%": { transform: "rotate3d(0, 0, 1, 765deg)" },
});

const divOff = keyframes({
  "0%": { transform: "rotate3d(0, 0, 1, 765deg)" },
  "100%": { transform: "rotate3d(0, 0, 1, 0deg)" },
});

const spanOn = keyframes({
  "0%": { transform: "translate3d(0, 0, 0)" },
  "100%": { transform: "translate3d(0, 8px, 0)" },
});

const spanOff = keyframes({
  "0%": { transform: "translate3d(0, 8px, 0)" },
  "100%": { transform: "translate3d(0, 0px, 0)" },
});

const xSpanOn = keyframes({
  "0%": { transform: "rotate3d(0, 0, 1, 0deg)" },
  "100%": { transform: "rotate3d(0, 0, 1, 90deg)" },
});

const xSpanOff = keyframes({
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
    animation: {
      opened: {
        div: {
          animation: `${divOn} .25s forwards`,
          animationDelay: ".25s",

          span: {
            backgroundColor: "#FFFFFF",

            "&:first-child": {
              animation: `${spanOn} .25s forwards`,
              animationDelay: "0.35s",
            },

            "&:nth-child(2)": {
              animation: `${xSpanOn} .25s forwards`,
              animationDelay: "1.25s",
            },

            "&:last-child": {
              animation: `${lastSpanOn} .25s forwards`,
            },
          },
        },
      },
      closed: {
        animation: `${divOff} .25s backwards`,
        animationDelay: "1s",

        span: {
          "&:first-child": {
            animation: `${spanOff} .25s backwards`,
            animationDelay: "1.25s",
          },

          "&:nth-child(2)": {
            animation: `${xSpanOff} .25s backwards`,
            animationDelay: "0.25s",
          },

          "&:last-child": {
            animation: `${lastSpanOff} .25s backwards`,
            animationDelay: "1.5s",
          },
        },
      },
    },
  },
  defaultVariants: {
    animation: "",
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
