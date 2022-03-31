import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  paddingTop: "calc(72px + 48px)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
});

export const Wrapper = styled("div", {
  padding: 32,

  "> div": {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",

    span: {
      marginTop: 16,
      fontSize: 16,
      color: "$gray70"
    },

    a: {
      marginTop: 32,
      padding: 16,
      fontSize: 14,

      display: "flex",
      alignItems: "center",
      justifyContent: "center"
    }
  }
});
