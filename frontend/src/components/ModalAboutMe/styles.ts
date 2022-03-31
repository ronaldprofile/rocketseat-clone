import { styled } from "../../styles/stitches.config";

export const Form = styled("form", {
  section: {
    display: "grid",
    gridAutoFlow: "row",
    gap: 10,

    "#linkedin, #github": {
      "> div": {
        display: "flex",
        alignItems: "center",

        ".brand": {
          minWidth: 140,
          padding: "0 24px",
          display: "flex",
          alignItems: "center",
          alignSelf: "stretch",
          gap: 12,
          background: "$black60",
          color: "$white",
          border: "2px solid $black80",
          borderRadius: "5px 0 0 5px"
        },

        ".field": {
          flex: 1,

          input: {
            height: 50,
            width: "100%",
            padding: "0 16px",
            background: "$black80",
            color: "$white",
            border: "2px solid $black80",

            fontSize: 16,
            outline: 0,
            borderRadius: "0 5px 5px 0",
            transition: ".2s",
            "&:focus": {
              borderColor: "$purple"
            }
          }
        }
      }
    }
  }
});

export const AreaText = styled("div", {
  textarea: {
    padding: "15px 20px",
    width: "100%",
    height: 220,
    resize: "none",

    fontSize: 14,
    color: "$white",
    background: "$black80",
    outline: 0,
    border: "2px solid $black80",
    borderRadius: "0 0 5px 5px",
    transition: ".2s",

    "&:focus": {
      "&:focus": {
        borderColor: "$purple"
      }
    }
  },

  "> span": {
    display: "block",
    paddingTop: 7,
    fontSize: 14,
    color: "$red"
  }
});

export const OptionsButtons = styled("div", {
  padding: 14,
  display: "flex",
  alignItems: "center",
  background: "$gray500",
  borderRadius: "5px 5px 0 0 ",
  button: {
    padding: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 20,
    background: "Rgba(255, 255, 255, 0.043);",
    color: "$purple50",
    border: 0,
    borderRadius: 5,
    transition: ".2s",

    "&:hover": {
      filter: "brightness(0.9)"
    },

    "& + button": {
      marginLeft: 8
    },

    "&:last-child": {
      marginLeft: "auto"
    },

    svg: {
      width: 20,
      height: 20
    }
  }
});
