import { createTheme } from "@mui/material/styles";

const getTheme = (theme) => {
  const themeOptions = {
    google: {
      transitions: {
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        },
      },
      palette: {
        primary: {
          main: "#4285F4",
        },
        secondary: {
          main: "#FFC107",
        },
      },

      typography: {
        fontFamily: [
          'Roboto',
          'Arial',
          'sans-serif',
        ].join(','),
        h1: {
          fontSize: '3rem',
          fontWeight: 700,
        },
        h2: {
          fontSize: '2.25rem',
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.875rem',
          fontWeight: 500,
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 400,
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 400,
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body2: {
          fontSize: '0.875rem',
          fontWeight: 400,
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        subtitle2: {
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
      background: {
        default: "#F1F3F4",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    },
    facebook: {
      transitions: {
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        },
      },
      palette: {
        primary: {
          main: "#3b5998",
        },
        secondary: {
          main: "#1877f2",
        },
      },

      typography: {
        fontFamily: [
          'Roboto',
          'Arial',
          'sans-serif',
        ].join(','),
        h1: {
          fontSize: '3rem',
          fontWeight: 700,
        },
        h2: {
          fontSize: '2.25rem',
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.875rem',
          fontWeight: 500,
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 400,
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 400,
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body2: {
          fontSize: '0.875rem',
          fontWeight: 400,
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        subtitle2: {
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
      background: {
        default: "#F6F7F9",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
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

      typography: {
        fontFamily: [
          'Roboto',
          'Arial',
          'sans-serif',
        ].join(','),
        h1: {
          fontSize: '3rem',
          fontWeight: 700,
        },
        h2: {
          fontSize: '2.25rem',
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.875rem',
          fontWeight: 500,
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 400,
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 400,
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body2: {
          fontSize: '0.875rem',
          fontWeight: 400,
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        subtitle2: {
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
      transitions: {
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        },
      },
      background: {
        default: "#2D2F31",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    },
    instagram: {
      transitions: {
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        },
      },
      palette: {
        primary: {
          main: "#E1306C",
        },
        secondary: {
          main: "#8a3ab9",
        },
      },

      typography: {
        fontFamily: [
          'Roboto',
          'Arial',
          'sans-serif',
        ].join(','),
        h1: {
          fontSize: '3rem',
          fontWeight: 700,
        },
        h2: {
          fontSize: '2.25rem',
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.875rem',
          fontWeight: 500,
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 400,
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 400,
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body2: {
          fontSize: '0.875rem',
          fontWeight: 400,
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        subtitle2: {
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
      background: {
        default: "#fff",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    },
    whatsapp: {
      transitions: {
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        },
      },
      palette: {
        primary: {
          main: "#25D366",
        },
        secondary: {
          main: "#128C7E",
        },
      },

      typography: {
        fontFamily: [
          'Roboto',
          'Arial',
          'sans-serif',
        ].join(','),
        h1: {
          fontSize: '3rem',
          fontWeight: 700,
        },
        h2: {
          fontSize: '2.25rem',
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.875rem',
          fontWeight: 500,
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 400,
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 400,
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body2: {
          fontSize: '0.875rem',
          fontWeight: 400,
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        subtitle2: {
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
      background: {
        default: "#fff",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    },
    microsoft: {
      transitions: {
        easing: {
          easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
          easeOut: 'cubic-bezier(0.0, 0, 0.2, 1)',
          easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
          sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
        },
        duration: {
          shortest: 150,
          shorter: 200,
          short: 250,
          standard: 300,
          complex: 375,
          enteringScreen: 225,
          leavingScreen: 195,
        },
      },
      palette: {
        primary: {
          main: "#F25022",
        },
        secondary: {
          main: "#7FBA00",
        },
      },

      typography: {
        fontFamily: [
          'Roboto',
          'Arial',
          'sans-serif',
        ].join(','),
        h1: {
          fontSize: '3rem',
          fontWeight: 700,
        },
        h2: {
          fontSize: '2.25rem',
          fontWeight: 600,
        },
        h3: {
          fontSize: '1.875rem',
          fontWeight: 500,
        },
        h4: {
          fontSize: '1.5rem',
          fontWeight: 400,
        },
        h5: {
          fontSize: '1.25rem',
          fontWeight: 400,
        },
        h6: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body1: {
          fontSize: '1rem',
          fontWeight: 400,
        },
        body2: {
          fontSize: '0.875rem',
          fontWeight: 400,
        },
        caption: {
          fontSize: '0.75rem',
          fontWeight: 400,
        },
        subtitle1: {
          fontSize: '1rem',
          fontWeight: 500,
        },
        subtitle2: {
          fontSize: '0.875rem',
          fontWeight: 500,
        },
      },
      background: {
        default: "#F8F8F8",
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    },
    light: {
      palette: {
        mode: "light",
        background: {
          default: "#F1F3F4",
        },
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 600,
          md: 960,
          lg: 1280,
          xl: 1920,
        },
      },
    },
    dark: {
      palette: {
        background: {
          default : "#000000"
        },
      }
    }
  };

  return createTheme(themeOptions[theme] || {});
};

export default getTheme;