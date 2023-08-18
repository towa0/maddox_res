import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Links = () => {
  return (
    <div className="max-w-[1300px] h-[700px] flex justify-center mx-[16vw] overflow-x text-[#6e47cf]">
      {/* Column 1 */}
      <div className="w-1/3">
        <h2 className="text-2xl font-bold pb-3">Provincies</h2>
        <ul className="listItems">
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Noord-Holland
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Zuid-Holland
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Noord-Brabant
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Gelderland
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Utrecht
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Overijssel
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Limburg
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Groningen
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Friesland
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Drenthe
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Zeeland
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Flevoland
          </li>
        </ul>

        <h2 className="text-2xl font-bold pb-3">Verhuiswagen Huren</h2>
        <ul className="listItems">
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Verhuis Wagen Huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Verhuis Busje Huren
          </li>
        </ul>
      </div>

      {/* Column 2 */}
      <div className="w-1/3 mr-4">
        <h2 className="text-2xl font-bold pb-3">Persoons Busje Huren</h2>
        <ul className="listItems">
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />6
            Persoons Busje Huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />7
            Persoons Busje Huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />8
            Persoons Busje Huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />9
            Persoons Busje Huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            10 Persoons Busje Huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            12 Persoons Busje Huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            15 Persoons Busje Huren
          </li>
        </ul>
        <h2 className="text-2xl font-bold pb-3">Bestel Busje Huren</h2>
        <ul className="listItems">
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Bestel Busje Huren
          </li>
        </ul>
      </div>

      {/* Column 3 */}
      <div className="w-1/3 mr-4">
        <h2 className="text-2xl font-bold pb-3">Algemeen</h2>
        <ul className="listItems">
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Vakantie Busje Huren
          </li>
        </ul>
        <h2 className="text-2xl font-bold pb-3">Volkswagen Busje Huren</h2>
        <ul className="listItems">
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Volkswagen Busje Huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            VW busje huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Volkswagen T1 huren
          </li>
        </ul>
        <h2 className="text-2xl font-bold pb-3">Aanbieders</h2>
        <ul className="listItems">
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            BO-Rent busje huren
          </li>
          <li className="flex items-center ml-5">
            <BiChevronRight size={20} className="text-[#6e47cf] mr-2" />
            Sixt Busjes huren
          </li>
        </ul>
      </div>
    </div>
    
  );
};

export default Links;
