import progressIcon from "../../assets/progress.svg";
import { styled } from "../stitches.config";

export const Container = styled("div", {
  width: "100%",
  maxWidth: 1152,
  margin: "0 auto",
  paddingTop: "calc(72px + 64px)",
  paddingBottom: 64
});

export const Main = styled("main", {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center"
});

export const Wrapper = styled("div", {
  width: "100%",
  maxWidth: 1120,

  "> div": {
    marginBottom: 64,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    ".welcome": {
      display: "flex",
      alignItems: "center",

      h2: {
        fontSize: 32,
        color: "$white60"
      },

      p: {
        margin: "12px 0 0 48px",
        fontSize: 16,
        color: "#c4c4cc"
      }
    },

    span: {
      color: "#8d8d99"
    }
  },

  ".grid": {
    marginTop: 12,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: 12,

    ".first-card": {
      background: "$black60",
      borderRadius: "$sm",

      header: {
        padding: 32,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "stretch",

        "> span": {
          width: 112,
          height: 112,
          padding: 7,
          border: "4px solid $white60",
          borderRadius: "50%",

          img: {
            width: "100%",
            borderRadius: "50%"
          }
        },

        "> div": {
          width: "70%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "flex-start",

          h3: {
            fontSize: 24,
            fontWeight: 700,
            color: "$white60"
          },

          span: {
            display: "block",
            marginTop: 8,
            color: "#8d8d99"
          },

          a: {
            padding: "12px 24px",
            height: 40,
            fontSize: 14
          }
        }
      },

      footer: {
        padding: 32,
        display: "flex",
        flexDirection: "column",

        borderTopWidth: "1.5px",
        borderTopStyle: "solid",
        borderColor: "$black80",

        span: {
          color: "#c4c4cc"
        },

        ".progress-bar-container": {
          position: "relative",
          marginTop: 18,
          height: 24,

          ".bar-empty": {
            position: "absolute",
            top: "calc(50% - 3px)",
            left: 0,
            width: "100%",
            height: "6px",
            background: "rgb(60,60,66)",

            ".fire": {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              top: "calc(50% - 0.75rem)",
              right: 0,
              width: "1.5rem",
              height: "1.5rem",
              background: "$gray90",
              borderRadius: "50%"
            },

            ".bar-progress": {
              position: "absolute",
              top: "calc(50% - 3px)",
              left: 0,
              width: "11%",
              height: "6px",
              background: "$green",

              "&::after": {
                content: "",
                position: "absolute",
                top: "calc(50% - 12px)",
                right: -24,
                height: "1.125rem",
                width: "1.125rem",
                // background: `url(${progressIcon}) center no-repeat `,
                backgroundImage: `url(${progressIcon})`,
                border: "3px solid $green",
                borderRadius: "100%"
              }
            }
          }
        }
      }
    },

    section: {
      height: "100%",

      display: "flex",
      alignItems: "flex-start",
      gap: 12
    }
  }
});

export const CardEvent = styled("div", {
  position: "relative",
  width: "100%",
  height: "100%",
  padding: 32,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  borderRadius: "$sm",
  backgroundColor: "$gray100",
  overflow: "hidden",
  userSelect: "none",

  ".content": {
    height: "100%",

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    zIndex: 2,

    footer: {
      width: "100%",
      gap: 16,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      p: {
        fontSize: 16,

        color: "$white60"
      },

      button: {
        width: "100%",
        height: 40,
        padding: "12px 24px",
        fontSize: 14
      }
    }
  }
});
