import { styled } from "@stitches/react";
import { motion } from "framer-motion";

export const Container = styled(motion.div, {
  padding: "24px",
  width: "100%",
  maxWidth: "347px",
  background: "#FFFFFF",
  border: "1px solid #DCE9E2",
  borderRadius: "6px",
  transition: "all 0.25s ease-in",
  transform: "translateY(0)",
  boxShadow: "3px 2px 5px 0px transparent",
  margin: "auto",

  "&:hover": {
    boxShadow: "3px 2px 5px 0px #cecece",
  },

  "&:last-child": {
    margin: "0 auto 0",
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
