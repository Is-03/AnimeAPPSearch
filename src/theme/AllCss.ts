import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6d94c4", // Blue
    },
    secondary: {
      main: "#FFFFFF", // White
    },
    background: {
      default: "#abc0df", // Soft blue
    },
  },
  typography: {
    fontFamily: '"Montserrat", "Arial", sans-serif',
    h4: {
      fontWeight: 700,
    },
  },
});

export default theme;
