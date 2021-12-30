import { grey, indigo, red } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: indigo[500],
    },
    secondary: {
      main: red[500],
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiAppBar: {
      defaultProps: {
        position: "static",
        color: "default",
        elevation: 0,
      },
    },
    MuiButton: {
      defaultProps: {
        variant: "outlined",
      },
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiSelect: {
      defaultProps: {
        variant: "outlined",
        size: "small",
      },
    },
    MuiIconButton: {
      defaultProps: {
        size: "small",
      },
    },
    MuiTextField: {
      defaultProps: {
        size: "small",
        variant: "outlined",
        autoComplete: "off",
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          padding: "16px",
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: "block",
          width: "160px",
        },
      },
    },
    MuiPaper: {
      defaultProps: {},
      styleOverrides: {
        root: {
          border: `1px solid ${grey["200"]}`,
        },
      },
    },
  },
});

export default theme;
