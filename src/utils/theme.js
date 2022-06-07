import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, red } from "@mui/material/colors";

const base = createTheme({
  palette: {
    primary: {
      main: "#00000",
    },
    secondary: {
      main: "#FFFFFF",
    },
    tritary: {
      main: deepPurple[900],
    },
  },
});

const theme = responsiveFontSizes(base);

export default theme;
