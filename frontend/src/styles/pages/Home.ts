import { styled } from "../stitches.config";

export const Container = styled("div", {
  height: "100vh",
  background: "$black80",

  display: "flex",
  justifyContent: "center",
  alignItems: "center"
});

export const Wrapper = styled("div", {
  display: "flex"
});

export const Form = styled("form", {
  width: "100%",
  maxWidth: 480,

  padding: 64,

  background: "$black60",
  borderRadius: "$sm",

  h1: {
    marginBottom: 39,

    fontSize: 25,
    color: "$white"
  },

  section: {
    display: "grid",
    gridAutoFlow: "row",
    gap: 10,

    ".input-group": {
      ".field": {
        "&:focus-within": {
          svg: { fill: "$purple" }
        },

        "> div": {
          position: "relative",

          "> svg": {
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: 14,
            fill: "$gray500",

            transition: "fill .2s ease"
          }
        },

        span: {
          display: "inline-block",
          paddingTop: 8,
          color: "$red",
          fontSize: 14
        },

        a: {
          display: "block",
          position: "absolute",
          top: "50%",
          right: 16,
          transform: "translateY(-50%)",
          cursor: "pointer",

          svg: {
            fill: "$purple",
            fontSize: 18
          }
        }
      }
    }
  },

  ".text": {
    marginTop: 14,
    textAlign: "center",

    span: {
      fontSize: 14,
      color: "rgb(204, 204, 204)",

      a: {
        color: "$purple50",
        fontWeight: 600,
        opacity: 0.8,
        transition: "opacity .2s",
        "&:hover": {
          opacity: 1
        }
      }
    }
  },

  "> button": {
    width: "100%",
    marginTop: 20
  }
});

export const Input = styled("input", {
  width: "100%",
  height: 50,
  padding: "0 16px 0 42px",

  fontSize: 16,
  color: "$white",
  background: "$black80",
  borderRadius: "$sm",
  border: "2px solid $black80",
  transition: "border .2s",
  outline: "none",
  "&:focus": {
    borderColor: "$purple"
  }
});

export const Content = styled("div", {
  maxWidth: 480,
  paddingLeft: 100,
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",

  "> div": {
    marginBottom: 66
  },

  h1: {
    marginBottom: 39,

    fontSize: 36,
    color: "$white60"
  },

  p: {
    fontSize: 16,
    color: "$gray70"
  }
});
