import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import { color } from "@mui/system";

const theme = createTheme({
  palette: {
    primary: {
      main: "#673ab7",
    },
    typography: {
      fontFamily: ["Roboto"],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
