import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MobileNav from "./components/MobileNav";
import Home from "./components/Home";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import About from "./components/About";
import Careers from "./components/Careers";
import Locations from "./components/Locations";

function App() {
  const [size, setSize] = useState({
    x: window.innerWidth,
    y: window.innerHeight,
  });

  const updateSize = () =>
    setSize({
      x: window.innerWidth,
      y: window.innerHeight,
    });

  useEffect(() => (window.onresize = updateSize), []);

  return (
    <div className="App relative w-full">
      {size.x < 768 && <MobileNav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/locations" element={<Locations />} />
      </Routes>
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
