import { createStitches } from "@stitches/react";

export const { globalCss, getCssText, styled, theme, keyframes } =
  createStitches({
    theme: {
      colors: {
        black: "#000000",
        black50: "#0b0b0d",
        black60: "#202024",
        black70: "#222222",
        black80: "#121214",
        black90: "#131319",
        black100: "#141316",
        black200: "#27272b",

        white: "#ffffff",
        white50: "#dad4ef",
        white60: "#e1e1e6",
        white70: "#e6e6e6",
        white80: "#b7aae6",
        white90: "#cccccc",
        gray: "#737380",
        gray50: "#87868b",
        gray60: "#999999",
        gray70: "#a8a8b3",
        gray80: "#383842",
        gray90: "#3c3c42",
        gray100: "#29292e",
        gray200: "#332616",
        gray300: "#37363c",
        gray400: "#4B4952",
        gray500: "#28272e",
        gray600: "#323238",

        blue: "#0000ee",
        green: "#04d361",
        green100: "#22332C",
        orange: "#fd951f",
        purple: "#8257e5",
        purple50: "#8257e6",
        purple60: "#937fd5",
        purple70: "#41356B",
        red: "#d34242"
      },

      radii: {
        sm: ".312rem"
      }
    }
  });
