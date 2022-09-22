import { styled } from "../styles/stitches.config";

export const Button = styled("button", {
  height: 50,
  fontWeight: "bold",
  textTransform: "uppercase",
  border: 0,
  borderRadius: 5,
  transition: "all .2s ease",

  variants: {
    variant: {
      primary: {
        background: "$purple",
        color: "$white",
        fontSize: 16,

        "&:hover": {
          background: "#a883FF",
        },
      },

      outlined: {
        padding: "16px 32px",
        background: "transparent",
        color: "$white",
        border: "2px solid #7959c1",

        fontSize: 12,

        "&:hover": {
          background: "#a883FF",
          borderColor: "#a883FF",
        },
      },

      disabled: {
        background: "$purple70",
        fontSize: 16,
        color: "$gray50",
        cursor: "not-allowed",
      },
    },
  },

  defaultVariants: {
    variant: "primary",
  },
});
