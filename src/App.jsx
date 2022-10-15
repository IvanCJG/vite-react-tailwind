import react from "react";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Nosotros from "./components/pages/Nosotros";
import Servicios from "./components/pages/Servicios";
import TrabajaConNosotros from "./components/pages/TrabajaConNosotros";
import Blog from "./components/pages/Blog";
import Directorio from "./components/pages/Directorio";
import Contactenos from "./components/pages/Contactenos";
import Navbar from "./components/organisms/Navbar";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route
            path="/trabaja-con-nosotros"
            element={<TrabajaConNosotros />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="/directorio" element={<Directorio />} />
          <Route path="/contactenos" element={<Contactenos />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
