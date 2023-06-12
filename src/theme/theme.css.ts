import { createGlobalTheme } from "@vanilla-extract/css";

export const theme = createGlobalTheme(":root", {
  colors: {
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#ffffff",
    },
    success: {
      main: "#2e7d32",
      light: "#4caf50",
      dark: "#1b5e20",
      contrastText: "#ffffff",
    },
    warning: {
      main: "#ed6c02",
      light: "#ff9800",
      dark: "#e65100",
      contrastText: "#ffffff",
    },
    error: {
      main: "#d52020",
      light: "#ef5350",
      dark: "#c62828",
      contrastText: "white",
    },
    textGrey: {
      base: "#616161",
      light: "#9e9e9e",
      dark: "#424242",
    },
    grey: {
      50: "#fafafa",
      100: "#f5f5f5",
      200: "#eeeeee",
      300: "#e0e0e0",
      400: "#bdbdbd",
      500: "#9e9e9e",
      600: "#757575",
      700: "#616161",
      800: "#424242",
      900: "#212121",
    },
    white: "#FFFFFF",
    black: "000000",
  },

  borderRadius: {
    small: "4px",
    medium: "8px",
    big: "12px",
    full: "999px",
  },

  spacing: {
    small: "4px",
    medium: "8px",
    big: "12px",
  },
});
