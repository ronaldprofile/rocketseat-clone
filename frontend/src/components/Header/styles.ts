import { styled } from "../../styles/stitches.config";

export const Container = styled("header", {
  width: "100%",
  height: 72,
  padding: "0 30px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "fixed",
  top: 0,
  zIndex: 9999,
  background: "$black60",
  boxShadow: "rgb(18 18 20) 0px 0.2rem 2rem;"
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: 1366,

  padding: "12px 0",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  nav: {
    ul: {
      display: "flex",
      alignItems: "center",
      gap: 12,

      li: {
        a: {
          position: "relative",
          height: "100%",
          padding: "0 8px",
          fontSize: "16px",
          color: "$gray",

          borderBottom: "1px solid transparent",
          transition: "all .2s",

          "&:hover": {
            color: "$white60"
          },

          "&::after": {
            content: "",
            position: "absolute",
            bottom: -25,
            left: 0,
            height: 2,
            width: 0,
            background: "$purple",
            transition: "all .2s"
          },

          "&.active": {
            fontWeight: "700",
            color: "#e1e1e6",

            "&::after": {
              width: "100%"
            }
          }
        }
      }
    }
  }
});

export const MoreActions = styled("div", {
  display: "flex",
  alignItems: "center",
  gap: 6,

  "#avatar": {
    paddingLeft: "12px",
    display: "flex",
    alignItems: "center",

    "> div": {
      width: 52,
      height: 52,

      cursor: "pointer"
    },

    img: {
      width: "100%",
      height: "100%",
      maxHeight: "100%",
      maxWidth: "100%",
      padding: 2,
      border: "2px solid $white60",
      borderRadius: "100%",
      backgroundSize: "cover",
      backgroundClip: "content-box"
    }
  }
});

export const ButtonIcon = styled("button", {
  width: 46,
  height: 46,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  background: "transparent",
  border: 0,
  borderRadius: "$sm",
  transition: "all .2s",
  "&:hover": {
    background: "$black100"
  }
});
