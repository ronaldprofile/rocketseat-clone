import * as DialogPrimitive from "@radix-ui/react-dialog";
import { styled, keyframes } from "../../styles/stitches.config";

const overlayShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 }
});

const overlayHide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 }
});

const contentShow = keyframes({
  "0%": {
    opacity: 0,
    transform: "translate3d(-50%, calc(-50% + 20px), 0) scale(.96))"
  },

  "100%": {
    opacity: 1,
    transform: "translate3d(-50%, -50%, 0) scale(1))"
  }
});

const contentHide = keyframes({
  "0%": {
    opacity: 1,
    transform: "translate3d(-50%, -50% , 0) scale(1))"
  },

  "100%": {
    opacity: 0,
    transform: "translate3d(-50%, calc(-50% + 20px), 0) scale(.96))"
  }
});

export const StyledModalOverlay = styled(DialogPrimitive.Overlay, {
  position: "fixed",
  inset: 0,
  zIndex: 9999,
  background: "rgba(0, 0, 0, 0.565)",
  color: "$white",

  "&[data-state=open]": {
    animation: `${overlayShow} .2s ease-in`
  },

  "&[data-state=closed]": {
    animation: `${overlayHide} .3s ease-in`
  }
});

export const StyledModalWrapper = styled(DialogPrimitive.Content, {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate3d(-50%, -50%, 0)",
  zIndex: 9999,
  backfaceVisibility: "hidden",
  maxWidth: 768,

  width: "100%",
  maxHeight: "90vh",
  boxShadow: "rgb(0 0 0 / 56%) 0px 5px 30px",
  background: "$black60",
  borderRadius: 5,
  overflowY: "auto",
  opacity: 0,
  cursor: "default",

  "&:focus": {
    outline: "none"
  },

  "&[data-state=open]": {
    animation: `${contentShow} .3s ease-out forwards`
  },

  "&[data-state=closed]": {
    animation: `${contentHide} .2s ease-out`
  },

  "&::-webkit-scrollbar": {
    width: 4
  },

  "&::-webkit-scrollbar-thumb": {
    background: "$gray80"
  }
});

export const StyledModalContent = styled("div", {
  padding: 32
});

export const StyledFooterActions = styled("footer", {
  marginTop: 32,
  paddingTop: 32,
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  gap: 8,
  borderTop: "1px solid $gray500",

  button: {
    padding: "16px 32px",
    fontSize: 12
  }
});

export const StyledButtonCloseModal = styled(DialogPrimitive.Close, {
  position: "absolute",
  width: 40,
  height: 40,
  top: 10,
  right: 10,

  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  color: "$gray60",
  background: "transparent",
  borderRadius: 5,
  border: 0,
  transition: "all .2s ease",

  "&:hover": {
    background: "$gray500",
    svg: {
      fill: "$white"
    }
  }
});

export const StyleModalTitle = styled(DialogPrimitive.Title, {
  marginBottom: 30,
  textAlign: "left",
  fontSize: 24,
  fontWeight: "bold"
});
