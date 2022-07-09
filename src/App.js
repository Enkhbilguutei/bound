import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
<<<<<<< HEAD
import Contact from "./pages/Contact";
=======
import { colors, createTheme, ThemeProvider } from "@mui/material";
import { color } from "@mui/system";
>>>>>>> 3b0d10faaa4f002986096d177a06e1b089c5d11b

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
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
