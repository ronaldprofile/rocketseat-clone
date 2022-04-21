import { styled } from "../../styles/stitches.config";

export const Content = styled("div", {
  h2: {
    textAlign: "center"
  },

  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

export const ButtonActionModal = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 8,

  button: {
    width: 140,
    height: 160,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 8,
    border: 0,
    borderRadius: "$sm",
    transition: ".2s",

    span: {
      fontSize: 16,
      fontWeight: "bold",
      color: "$white"
    },

    "&:nth-child(1)": {
      backgroundColor: "$purple",

      "&:hover": {
        background: "$purple80"
      }
    },

    "&:nth-child(2)": {
      background: "$black90",

      "&:hover": {
        background: "$gray100"
      }
    }
  }
});
