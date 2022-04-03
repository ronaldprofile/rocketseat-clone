import { styled } from "../../styles/stitches.config";

export const Form = styled("form", {
  "> div": {
    section: {
      display: "grid",
      gridAutoFlow: "column",
      gridAutoColumns: "1fr",
      gap: 16,

      "& + section": {
        marginTop: 24
      },

      "> div": {
        "> label": {
          display: "block",
          marginBottom: 8,
          fontSize: 14,
          color: "$gray50",
          textAlign: "left"
        },

        "input, select": {
          height: 50,
          padding: "0 16px",
          width: "100%",
          fontSize: 16,

          color: "$white",
          background: "$black80",
          border: "2px solid $black80",
          borderRadius: "$sm",
          outline: "none",
          transition: ".2s",

          "&:focus": {
            borderColor: "$purple"
          }
        }
      },

      ".error": {
        textAlign: "left",
        span: {
          display: "inline-block",
          paddingTop: 7,
          fontSize: 14,
          color: "$red"
        }
      },

      select: {
        appearance: "none"
      }
    },

    "#status-company": {
      "> div": {
        div: {
          position: "relative"
        },

        svg: {
          position: "absolute",
          top: "50%",
          right: 16,

          color: "$gray50",
          transform: "translateY(-50%)"
        }
      }
    },

    "#message": {
      marginTop: 32,
      paddingTop: 24,

      span: {
        display: "block",
        marginBottom: 16,
        fontSize: 14,
        color: "$gray50",

        textAlign: "left"
      },

      div: {
        padding: 16,
        textAlign: "center",
        border: "2px dashed $gray300",
        borderRadius: "$sm",

        p: {
          color: "$gray50",

          fontSize: 14
        }
      }
    }
  }
});
