import { globalCss } from "./stitches.config";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Roboto, sans-serif"
  },

  "html, body, #__next": {
    height: "100vh"
  },

  body: {
    background: "$black80"
  },

  ".sr-only": {
    position: "absolute",
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: 0
  },

  button: {
    cursor: "pointer"
  },

  a: {
    textDecoration: "none"
  },

  ul: {
    listStyle: "none"
  }
});
