import { styled } from "@stitches/react";
import { theme } from "styles/themes";

export const List = styled("ul", {
  paddingTop: "60px",
  textAlign: "center",
});

export const ListItem = styled("li", {
  "& + li": {
    marginTop: "48px",
  },

  a: {
    fontSize: "1.7rem",
    fontWeight: 700,
    color: "#FFF",
    display: "block",
  },
});
