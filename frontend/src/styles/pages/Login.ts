import { styled } from "../stitches.config";

export const Container = styled("div", {
  height: "100vh",
  maxWidth: 1000,
  width: "100%",
  margin: "0 auto",
  padding: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  a: {
    fontSize: 14,
    fontWeight: 600,
    color: "$purple50",
    opacity: 0.8,
    transition: ".2s",
    "&:hover": {
      opacity: 1
    }
  },

  ".register": {
    marginTop: 24,
    textAlign: "center",
    fontSize: 14,
    span: {
      color: "$white90"
    }
  },

  ".divider": {
    margin: "24px 0",
    position: "relative",

    "&::before, &::after": {
      content: "",
      position: "absolute",
      top: "50%",
      height: 1,
      width: "calc(50% - 25px)",
      background: "rgb(40,39,47)"
    },

    "&::before": {
      left: 0
    },

    "&::after": {
      right: 0
    }
  },

  ".login-github": {
    display: "flex",
    alignItems: "center",
    gap: 24,

    a: {
      width: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 10,

      background: "$gray100",
      color: "$white",
      transition: "all .2s",

      "&:hover": {
        background: "$purple",

        svg: {
          path: {
            fill: "$white"
          }
        }
      },

      svg: {
        width: 20,
        height: 20,

        path: {
          fill: "$purple"
        }
      }
    },

    span: {
      color: "$white90",
      whiteSpace: "nowrap"
    }
  }
});

export const Wrapper = styled("div", {
  width: "100%",
  padding: "28px 0px 50px",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center"
});

export const Content = styled("div", {
  maxWidth: 480,
  display: "flex",
  flexDirection: "column",
  alignSelf: "center",

  "#logo": {
    marginBottom: 66
  },

  h1: {
    fontSize: 54,
    color: "$white60"
  }
});

export const Form = styled("form", {
  maxWidth: 480,
  width: "100%",
  padding: 64,

  display: "flex",
  flexDirection: "column",

  background: "$black60",
  borderRadius: "$sm",

  section: {
    display: "grid",
    gridAutoFlow: "row",
    gap: 10,

    ".field": {
      "&:focus-within": {
        svg: { fill: "$purple" }
      },

      "> div": {
        position: "relative"
      },

      svg: {
        position: "absolute",
        left: 16,
        top: "50%",
        transform: "translateY(-50%)",
        fontSize: 14,
        fill: "$gray500",

        transition: "fill .2s ease"
      },

      span: {
        display: "inline-block",
        paddingTop: 8,
        color: "$red",
        fontSize: 14
      }
    }
  },

  ".forgot": {
    display: "block",
    margin: "8px 0 24px"
  }
});
