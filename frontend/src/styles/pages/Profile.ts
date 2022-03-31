import { styled } from "../stitches.config";

export const Banner = styled("div", {
  position: "absolute",
  width: "100%",
  height: "160px",
  background:
    "linear-gradient(0deg, rgb(90, 62, 185) 0%, rgb(130, 87, 229) 100%) center center / cover no-repeat rgb(130, 87, 229)",

  p: {
    position: "absolute",
    width: 250,
    height: 40,
    borderRadius: 5,
    background: "rgba(0, 0, 0, 0.376)",
    padding: 10,
    bottom: 24,
    right: 24,
    zIndex: 2,
    fontSize: 16,
    color: " rgb(168, 168, 179)",
    textAlign: "center"
  },

  button: {
    top: 24,
    right: 24,
    background: "rgba(0, 0, 0, 0.376)",
    color: "$white70",

    "&:hover": {
      background: "$gray500",
      color: "$white"
    }
  }
});

export const Wrapper = styled("div", {
  minHeight: "100vh",
  paddingTop: 72,
  color: "$white",
  background: "$black80"
});

export const Container = styled("div", {
  position: "relative",
  width: "100%",
  maxWidth: 1180,
  margin: "200px auto 60px",
  padding: "0 30px",

  display: "flex",
  alignItems: "flex-start",
  justifyContent: "space-between"
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

export const Aside = styled("aside", {
  width: "31.425%",
  marginTop: -104,

  "#card-user": {
    position: "relative",
    width: "100%",
    padding: 32,
    textAlign: "center",
    background: "$black60",
    borderRadius: "$sm",

    "& ~ div": {
      marginTop: 24
    },

    label: {
      display: "block",
      position: "relative",
      width: 180,
      height: 180,
      margin: "0 auto 24px",
      padding: 12,
      borderRadius: "50%",
      cursor: "pointer",

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
      }
    },

    section: {
      fontSize: 16,
      lineHeight: 1.5,
      color: "rgb(230, 230, 230)",
      margin: "15px 0"
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
  },

  "#interests, #network, #insignia": {
    position: "relative",
    padding: 32,
    background: "$black60",
    borderRadius: "$sm",

    header: {
      marginBottom: 20,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    },

    small: {
      color: "$gray",
      fontSize: 14
    }
  },

  "#insignia": {
    ".list": {
      ul: {
        display: "flex",

        li: {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 66,
          height: 66,

          padding: 8,
          marginRight: 8,

          background: "$black80",
          borderRadius: "$sm"
        }
      }
    }
  }
});

export const Main = styled("main", {
  width: "63%",

  "#about": {
    position: "relative",
    padding: 32,
    background: "$black60",
    borderRadius: "$sm",

    "& ~ section": {
      marginTop: 24
    },

    h2: {
      marginBottom: 30
    },

    ".area-about-me": {
      padding: "36px 40px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 12,

      fontSize: 16,
      color: "$gray50",
      border: "2px dashed $gray300",
      borderRadius: "$sm",
      cursor: "pointer",
      transition: "all .2s",

      "&:hover": {
        borderColor: "$gray50"
      }
    }
  },

  "#techs": {
    position: "relative",
    padding: 32,
    background: "$black60",
    borderRadius: "$sm",

    h2: {
      marginBottom: 30
    },

    ".grid": {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
      gap: "24px",

      div: {
        position: "relative",

        span: {
          fontSize: 16,
          color: "$white"
        },

        ".add-tech": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

          width: 50,
          height: 50,
          padding: 0,
          marginTop: 16,
          cursor: "pointer",
          border: "2px dashed $gray300",
          borderRadius: "$sm",
          transition: "all .2s",

          "&:hover": {
            borderColor: "$gray50"
          }
        }
      },

      ".studying, .interested": {
        paddingLeft: 24,
        "&::after": {
          content: "",
          position: "absolute",
          width: 1,
          height: "80%",
          left: 0,
          top: 0,

          background: "$gray90"
        }
      }
    }
  },

  "#more-infos": {
    display: "grid",
    gridTemplateColumns: " repeat(2, 1fr)",
    gap: 8,

    div: {
      position: "relative",
      width: "100%",
      maxHeight: 80,
      padding: 32,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      background: "$black60",
      borderRadius: "$sm",

      span: {
        fontSize: 36,
        color: "$white60"
      },
      p: {
        fontSize: 14,
        color: "$gray70"
      }
    }
  },

  "#activity": {
    position: "relative",
    padding: 32,
    background: "$black60",
    borderRadius: "$sm",

    h2: {
      marginBottom: 30
    },

    p: {
      color: "$gray"
    }
  }
});

export const AboutMePreview = styled("div", {
  p: {
    fontSize: 16,
    color: "$white60"
  },

  footer: {
    marginTop: 40,

    display: "grid",
    gridTemplateColumns: "repeat(2, max-content)",
    gap: 8,

    a: {
      padding: 14,
      display: "inline-flex",
      background: "$gray100",
      color: "$white",
      fontSize: 14,
      borderRadius: "$sm",
      transition: "background .2s",

      "&:hover": {
        background: "$gray600"
      },

      span: {
        marginLeft: 12
      }
    }
  }
});

export const Title = styled("h1", {
  fontSize: 24,
  fontWeight: "bold",
  color: "$white"
});
