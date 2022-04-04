import { styled } from "../styles/stitches.config";

export const Input = styled("input", {
  height: 50,
  width: "100%",
  border: "2px solid $black80",
  outline: "none",
  transition: ".2s",
  borderRadius: "$sm",

  variants: {
    variant: {
      primary: {
        padding: "0 16px 0 42px",

        fontSize: 16,
        color: "$white",
        background: "$black80",

        "&:focus": {
          borderColor: "$purple"
        }
      }
    }
  },

  defaultVariants: {
    variant: "primary"
  }
});
