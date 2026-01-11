import { createTheme } from "@mui/material/styles";

const BRAND = {
  primary: "#0064E0",
  primarySoft: "#1E7BF0",
  primaryDeep: "#004FC4",
};

const NEUTRAL = {
  textPrimary: "#0B1020",
  textSecondary: "#1F2937",
  muted: "#6B7280",
  border: "rgba(0,0,0,0.06)",
};

export const theme = createTheme({
  palette: {
    mode: "light",

    primary: {
      main: BRAND.primary,
      light: BRAND.primarySoft,
      dark: BRAND.primaryDeep,
      contrastText: "#ffffff",
    },

    text: {
      primary: NEUTRAL.textPrimary,
      secondary: NEUTRAL.textSecondary,
    },

    background: {
      default: "#f1f1f1",
      paper: "#ffffff",
    },

    divider: NEUTRAL.border,
  },

  typography: {
    /* 🔑 Use next/font variables */
    fontFamily: "var(--font-jakarta), system-ui, sans-serif",

    allVariants: {
      fontFeatureSettings: '"liga" 0',
    },

    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,

    /* Headings → Fraunces */
    h1: {
      fontFamily: "var(--font-fraunces)",
      fontWeight: 700,
      letterSpacing: "-0.04em",
    },
    h2: {
      fontFamily: "var(--font-fraunces)",
      fontWeight: 700,
      letterSpacing: "-0.035em",
    },
    h3: {
      fontFamily: "var(--font-fraunces)",
      fontWeight: 700,
      letterSpacing: "-0.03em",
    },
    h4: {
      fontFamily: "var(--font-fraunces)",
      fontWeight: 600,
      letterSpacing: "-0.025em",
    },
    h5: {
      fontFamily: "var(--font-fraunces)",
      fontWeight: 600,
      letterSpacing: "-0.02em",
    },

    body1: {
      fontSize: "1rem",
      lineHeight: 1.7,
      color: NEUTRAL.textSecondary,
    },

    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: NEUTRAL.muted,
    },

    button: {
      textTransform: "none",
      fontWeight: 600,
      letterSpacing: "0.02em",
    },
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: "rgb(251, 253, 254)",
          color: NEUTRAL.textPrimary,
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          boxShadow: "none",
          paddingInline: 16,
          paddingBlock: 8,
        },
      },
    },

    MuiLink: {
      styleOverrides: {
        root: {
          color: BRAND.primary,
          textDecorationColor: BRAND.primary,
          "&:hover": {
            opacity: 0.85,
          },
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: NEUTRAL.border,
        },
      },
    },
  },
});
