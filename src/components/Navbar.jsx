import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import useDropdownMenu from "./useDropDownMenu";
import useDropdownMenu2 from "./useDropDownMenu2";
import PersoonsBusje from "../assets/PersoonsBusjeHurenLogo.jpeg";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const { isOpen, toggleMenu } = useDropdownMenu(false);
  const { isOpen2, toggleMenu2 } = useDropdownMenu2(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-[100px] w-full m-auto px-4 text-[#6e47cf] absolute z-20 bg-transparent">
      <div className="flex items-center justify-between">
       <Link to="/">
          <img
            src={PersoonsBusje}
            alt="PersoonsBusjeHurenLogo"
            className="h-12 cursor-pointer"
            
          />
        </Link>
      </div>

      <ul className="hidden md:flex justify-evenly w-full items-end relative">
        <li className="p-3 hover:hover:text-[#221839] hover:underline cursor-pointer mr-7 hidden xl:block">
          <div className="flex items-center">
            <span onClick={toggleMenu}>Producten</span>
            <BiChevronDown onClick={toggleMenu} size={20} />
          </div>
        </li>

        {/* NAVBAR BUTTON "PRODUCTEN" OPEN */}
        {isOpen && (
          <ul className="absolute z-10 p-10 bg-white rounded-md shadow-lg top-14 transform left-40 translate-x-[-170px] w-[700px] h-[400px]">
            <li className="px-6 py-5 w-1/2 text-lg text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md">
              <div className="flex items-center">
                <Link to="/Persoons-busjes-huren">Persoonsbusje huren</Link>
                <BiChevronRight size={20} className="ml-auto" />
              </div>
            </li>
            <li className="px-6 py-5 my-2 w-1/2 text-lg text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md">
              <div className="flex items-center">
                <span>Volkswagen busje</span>
                <BiChevronRight size={20} className="ml-auto" />
              </div>
            </li>
            <li className="px-6 py-5 w-1/2 text-lg text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md">
              <div className="flex items-center">
                <span>Bestel busje</span>
                <BiChevronRight size={20} className="ml-auto" />
              </div>
            </li>
            <li className="px-6 py-5 w-1/2 text-lg my-2 text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md">
              <div className="flex items-center">
                <span>Verhuis wagen</span>
                <BiChevronRight size={20} className="ml-auto" />
              </div>
            </li>
          </ul>
        )}

        <li className="p-3 hover:text-[#221839] hover:underline cursor-pointer mr-10 hidden xl:block">
          <div className="flex items-center">
            <span onClick={toggleMenu2}>Over ons</span>
            <BiChevronDown onClick={toggleMenu2} size={20} />
          </div>
        </li>

        {/* NAVBAR BUTTON "over ons" OPEN */}
        {isOpen2 && (
          <ul className="absolute z-10 p-10 bg-white rounded-md shadow-xl top-14 transform left-40  w-[400px] h-[500px] ">
            <li className="px-5 py-4 w-50 text-[16px] text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md font-light">
              <div className="flex items-center">
                <span>Over PersoonsBusjeHuren</span>
              </div>
            </li>
            <li className="px-6 py-5 my-2 w-50 text-[16px] text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md font-light">
              <div className="flex items-center">
                <span>Onze partners</span>
              </div>
            </li>
            <li className="px-6 py-5 w-50 text-[16px] text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md font-light">
              <div className="flex items-center">
                <span>Hertz</span>
              </div>
            </li>
            <li className="px-6 py-5 w-50 text-[16px] my-2 text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md font-light">
              <div className="flex items-center">
                <span>Oscar</span>
              </div>
            </li>
            <li className="px-6 py-5 w-50 text-[16px] my-2 text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md font-light">
              <div className="flex items-center">
                <span>Sixt</span>
              </div>
            </li>
            <li className="px-6 py-5 w-50 text-[16px] my-2 text-[#1f232e] hover:bg-purple-200 cursor-pointer rounded-md font-light">
              <div className="flex items-center">
                <span>Laatste nieuws</span>
              </div>
            </li>
          </ul>
        )}

        <li className="p-3 hover:text-[#221839] hover:underline cursor-pointer ml-auto xl:ml-0 xl:mr-8">
          <div className="flex items-center">
            <span className="hidden xl:inline mr-1">Laatste </span>
            Nieuws
          </div>
        </li>

        <li className="p-3 hover:text-[#221839] hover:underline cursor-pointer xl:ml-0 xl:mr-8">
          Klantenservice
        </li>
        <li className="p-3 hover:text-[#221839] hover:underline cursor-pointer  xl:ml-0 xl:mr-8">
          <div className="flex items-center">
            <span className="hidden xl:inline mr-1">Contact</span>
          </div>
        </li>
      </ul>

      <div className="relative z-[20]">
        <div onClick={handleNav} className="block xl:hidden">
          {!nav ? (
            <AiOutlineMenu size={20} />
          ) : (
            <AiOutlineClose size={20} className="z-20" />
          )}
        </div>
        <div
          className={
            nav
              ? "fixed top-20 mt-2 left-0 w-full h-full border-r-gray-900 bg-[#ffffff] ease-in-out duration-600 overflow-hidden"
              : "fixed left-[-100%]"
          }
        >
          <ul className=" p-4 bg-white ">
            <li className="p-4 flex justify-between items-center text-[#221839]">
              Persoonsbusje huren
              <BiChevronRight size={20} />
            </li>
            <li className="p-4 flex justify-between items-center text-[#221839]">
              Volkswagen busje
              <BiChevronRight size={20} />
            </li>
            <li className="p-4 flex justify-between items-center text-[#221839]">
              Bestel busje
              <BiChevronRight size={20} />
            </li>
            <li className="p-4 flex justify-between items-center text-[#221839]">
              Verhuis busje
              <BiChevronRight size={20} />
            </li>
            <li className="p-4 flex justify-between items-center text-[#221839]">
              Contact
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
