import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import About from "./components/About";
import Careers from "./components/Careers";

function App() {
  return (
    <div className="App w-full">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>
        <CTA />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
