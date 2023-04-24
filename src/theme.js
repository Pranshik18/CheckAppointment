import { createTheme } from "@mui/material/styles";

const getTheme = (theme) => {
  const themeOptions = {
    google: {
      palette: {
        primary: {
          main: "#4285F4",
        },
        secondary: {
          main: "#FFC107",
        },
      },
      background: {
        default: "#F1F3F4"
      }
    },
    facebook: {
      palette: {
        primary: {
          main: "#3b5998",
        },
        secondary: {
          main: "#1877f2",
        },
      },
      background: {
        default: "#F6F7F9"
      }
    },
    slack: {
      palette: {
        primary: {
          main: "#4a154b",
        },
        secondary: {
          main: "#36c5f0",
        },
      },
      background: {
        default: "#2D2F31"
      }
    },
    instagram: {
        palette: {
          primary: {
            main: "#E1306C",
          },
          secondary: {
            main: "#8a3ab9",
          },
        },
        background: {
          default: "#fff",
        },
      },
      whatsapp: {
        palette: {
          primary: {
            main: "#25D366",
          },
          secondary: {
            main: "#128C7E",
          },
        },
        background: {
          default: "#fff",
        },
      },
    microsoft: {
      palette: {
        primary: {
          main: "#F25022",
        },
        secondary: {
          main: "#7FBA00",
        },
      },
      background: {
        default: "#F8F8F8"
      }
    },
    light: {
      palette: {
        mode: 'light',
        background: {
          default: "#F1F3F4"
        }
      }
    },
    dark: {
      palette: {
        background: {
          default: "#222"
        }
      }
    }
  };

  return createTheme(themeOptions[theme] || {});
};

export default getTheme;
