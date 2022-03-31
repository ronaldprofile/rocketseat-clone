import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import { styled, keyframes } from "../../styles/stitches.config";

const animationContent = keyframes({
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});

export const Content = styled(DropdownMenuPrimitive.Content, {
  width: 256,
  position: "absolute",
  top: "calc(100% + 20px)",
  zIndex: 10,
  background: "$black60",
  boxShadow: "rgb(0 0 0 / 60%) 0px 5px 20px",
  borderRadius: 5,

  animation: `${animationContent} .2s ease-in-out `
});

export const Item = styled(DropdownMenuPrimitive.Item, {
  outline: 0,

  a: {
    width: "100%",
    padding: "12px 24px",
    fontSize: 16,
    color: "$white60",

    display: "flex",
    alignItems: "center",
    transition: "background .2s",

    "&:hover": {
      background: "rgba(0, 0, 0, 0.125)"
    },

    "&:first-child": {
      paddingTop: 16
    },

    span: {
      display: "inline-block",
      marginLeft: 24
    }
  },

  button: {
    width: "calc(100% - 48px)",
    height: 40,
    margin: "16px 24px 24px",
    fontSize: 14,
    fontWeight: 600
  }
});

export const Arrow = styled(DropdownMenuPrimitive.Arrow, {
  width: 16,
  height: 8,
  marginLeft: 21,
  fill: "$black60"
});
