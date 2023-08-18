import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-[#3e257c] py-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-gray-400">
        <div>
          <h6 className="font-medium text-white text-lg mb-4">Persoons Busje</h6>
          <ul>
            <li className="py-2 text-sm hover:text-[#d6c6fe] hover:underline cursor-pointer">
              <Link to="/busje-huren">9 Persoons busje huren</Link>
            </li>
            <li className="py-2 text-sm hover:text-[#d6c6fe] hover:underline cursor-pointer">
              <Link to="/Persoons-busjes-huren">Persoons busje huren</Link>
            </li>
          </ul>
        </div>

        <div>
          <h6 className="font-medium text-white text-lg mb-4">Belangrijke Pagina's</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              <Link to="/bestel-busje-huren">Bestel Busje Huren</Link>
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              <Link to="/provincies-busjes">Provincies Busjes</Link>
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              <Link to="/aanbieders-busjes">Aanbieders Busjes</Link>
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              <Link to="/auto-huren">Auto huren</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white text-lg mb-4">Extra Producten</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              <Link to="/volkswagen-busje-huren">Volkswagen Busje Huren</Link>
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              <Link to="/vakantie-busje-huren">Vakantie Busje Huren</Link>
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              <Link to="/verhuiswagen-huren">Verhuiswagen Huren</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-white text-lg mb-4">Nieuws & Contact</h6>
          <ul>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              <Link to="/nieuws">Nieuws</Link>
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              Over{" "}
              <a
                href="https://www.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline cursor-pointer"
              >
                Google.com
              </a>
            </li>
            <li className="py-2 text-sm hover:underline cursor-pointer">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
