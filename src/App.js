import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/About" element={<About />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
