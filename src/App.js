import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
