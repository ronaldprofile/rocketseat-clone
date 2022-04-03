import { styled } from "../../styles/stitches.config";

export const Container = styled("div", {
  position: "relative",
  width: "100%",
  padding: 32,
  textAlign: "center",
  background: "$black60",
  borderRadius: "$sm",

  "& ~ div": {
    marginTop: 24
  },

  ".member": {
    position: "relative",
    marginTop: 32,
    paddingTop: 22,
    marginBottom: -10,
    textTransform: "uppercase",
    fontSize: 12,
    fontWeight: "bold",
    color: "$gray50",

    "&::before": {
      content: "",
      position: "absolute",
      left: -32,
      top: 0,
      width: "calc(100% + 64px)",
      height: 1,
      background: "$black80"
    }
  }
});

export const Label = styled("label", {
  display: "block",
  position: "relative",
  width: 180,
  height: 180,
  margin: "0 auto 24px",
  padding: 12,
  borderRadius: "50%",
  cursor: "pointer",

  variants: {
    userIsWorking: {
      true: {
        "&::before": {
          borderColor: "$green"
        }
      }
    }
  },

  "&::before": {
    content: "",
    position: "absolute",
    inset: 0,
    border: "4px solid $white60",
    borderRadius: "50%"
  },

  "&:hover": {
    "& .hover-text": {
      span: {
        transform: "translateY(0)"
      }
    }
  },

  ".hover-text": {
    position: "absolute",
    width: "calc(100% - 24px)",
    height: "calc(100% - 24px)",
    top: 12,
    left: 12,
    borderRadius: "50%",
    overflow: "hidden",

    span: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      paddingTop: 14,
      width: "100%",
      height: 45,
      left: 0,
      bottom: 0,
      fontSize: 11,

      background: "rgba(0,0,0,0.5)",
      color: "$white",
      transform: "translateY(45px)",
      transition: "all .2s ease"
    }
  },

  button: {
    background: "transparent",
    border: 0,
    width: "100%",
    height: "100%",

    img: {
      display: "block",
      width: "100%",
      height: "100%",
      objectFit: "cover",
      borderRadius: "50%"
    }
  },

  ".company": {
    width: "100%",
    position: "absolute",
    bottom: 0,
    left: 0,
    textAlign: "center",

    strong: {
      padding: "7px 16px",
      fontSize: 12,
      textTransform: "uppercase",

      background: "$green100",
      color: "$green",
      borderRadius: 20
    }
  }
});

export const Section = styled("section", {
  margin: "24px 0",
  fontSize: 16,
  lineHeight: 1.5,
  color: "rgb(230, 230, 230)",
  textAlign: "center",

  span: {
    fontSize: 16,
    color: "$white70"
  },

  ".address": {
    marginTop: 8,

    span: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",

      svg: {
        marginRight: 8,
        fill: "$gray50"
      }
    }
  }
});

export const ButtonEdit = styled("button", {
  width: 40,
  height: 40,
  background: "transparent",
  color: "$gray50",
  borderRadius: "$sm",
  border: 0,
  transition: "all .2s",

  position: "absolute",
  top: 10,
  right: 10,
  zIndex: 2,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  "&:hover": {
    background: "$gray500",
    color: "$white"
  }
});

export const Title = styled("h1", {
  marginBottom: 30,
  fontSize: 24,
  fontWeight: "bold",
  color: "$white"
});
