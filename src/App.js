import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Newsletter from "./components/Newsletter";
import Links from "./components/Links";
import BusjesHuren from "./extraPages/PersoonsBusjesHuren";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Persoons-busjes-huren" element={<BusjesHurenPage />} />
          
          
        </Routes>
      </div>
    </Router>
  );
}

function HomePage() {
  return (
    <div>
      <Hero />
      <Newsletter />
      <Links />
      <Testimonials />
      <Footer />
    </div>
  );
}

function BusjesHurenPage() {
  return (
    <div>
      <Navbar />
      <div className="pt-[100px]">
        <BusjesHuren />
      </div>
    </div>
  );
}


export default App;
