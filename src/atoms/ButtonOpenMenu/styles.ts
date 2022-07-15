import { keyframes, styled } from "@stitches/react";
import * as ToggleButton from "@radix-ui/react-toggle";

import { theme } from "../../styles/themes";

const divOn = keyframes({
  "0%": { transform: "rotate3d(0, 0, 1, 0deg)" },
  "100%": { transform: "rotate3d(0, 0, 1, 1665deg)" },
});

const spanOn = keyframes({
  "0%": { marginTop: "0px" },
  "100%": { marginTop: "-2px" },
});

const lastSpanOff = keyframes({
  "0%": { display: "none", opacity: 1, transform: "translate3d(0, 0, 0)" },
  "99%": { opacity: 0, transform: "translate3d(20px, 0, 0)" },
  "100%": { display: "none" },
});

export const Button = styled(ToggleButton.Root, {
  variants: {
    display: {
      true: {
        div: {
          animation: `${divOn} 1000ms forwards`,
          animationDelay: "1000ms",

          span: {
            backgroundColor: "#FFFFFF",

            "&:last-child": {
              animation: `${lastSpanOff} 250ms forwards`,
            },
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
