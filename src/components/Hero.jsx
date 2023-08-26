import React from "react";
import { Link } from "react-router-dom";
import { BiChevronRight } from "react-icons/bi";
import { AiOutlineCheckCircle } from "react-icons/ai";
import VHicon from "../assets/verhuiswagenIcon.png";
import NPicon from "../assets/9persoonsBusjeHuren.jpg";
import VWicon from "../assets/volkwagenBusjeIcon.jpg";
import BBicon from "../assets/bestelBusjeIcon.jpg";
import PBicon from "../assets/persoonsBusjeIcon.jpg";
import VBicon from "../assets/verhuisBusjeHuren.png";

const Hero = () => {
  return (
    <div className="text-[#6e47cf] overflow-hidden">
      <div className="bg-image w-full h-screen mr-auto text-center flex flex-col justify-center">
        <h1
          className="lg:text-6xl max-[375px]:mt-16 md:text-4xl sm:text-3xl font-black sm:justify-start md:justify-start text-center ml-[7vw] sm:text-left xsm:text-3xl xsm:mt-8"
          style={{ whiteSpace: "nowrap" }}
        >
          Voordelig <span className="text-[#3e257c] inline">busjes huren</span>
          <br className="xsm:hidden" />
        </h1>

        <div class="bg-white w-[430px] mr-auto ml-[140px] max-[615px]:mx-auto max-[434px]:w-[300px] max-[300px]:w-[250px] mt-8 rounded-lg shadow-xl border-2 p-5">
          <div class="py-2 ">
            <Link
              to="/Persoons-busjes-huren"
              className="flex items-center justify-between text-[#3e257c] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
            >
              <img
                src={PBicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span className="mr-auto ml-2">Persoonsbusje Huren</span>
              <BiChevronRight size={25} className="ml-10 text-[#3e257c]" />
            </Link>
            <Link
              class="flex items-center justify-between text-[#3e257c] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              to="/negen-persoons-busje"
            >
              <img
                src={NPicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">9 Persoons Busje Huren</span>
              <BiChevronRight size={25} className="ml-10 text-[#3e257c]" />
            </Link>

            <Link
              class="flex items-center justify-between text-[#3e257c] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              to="/Volkswagen-busjes-huren"
            >
              <img
                src={VWicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">Volkswagen Busje Huren</span>
              <BiChevronRight size={25} className="ml-10 text-[#3e257c]" />
            </Link>
            <Link
              class="flex items-center justify-between text-[#3e257c] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              to="/Verhuis-busje-huren"
            >
              <img
                src={VBicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">Verhuiswagen Huren</span>
              <BiChevronRight size={25} className="ml-10 text-[#3e257c]" />
            </Link>
            <Link
              class="flex items-center justify-between text-[#3e257c] font-semibold text-lg mb-4 p-2 border-b border-gray-300 hover:hover:text-[#221839] hover:underline"
              to="/Bestel-busje-huren"
            >
              <img
                src={BBicon}
                alt="PersoonsBusjeHurenLogo"
                className="w-8 h-8"
              />
              <span class="mr-auto ml-2">Bestelbusje Huren</span>
              <BiChevronRight size={25} className="ml-10 text-[#3e257c]" />
            </Link>
          </div>
          <button class="mt-4 py-3 px-4 bg-[#6e47cf] hover:bg-[#5029b4] text-white border w-full rounded-md font-bold hover:underline">
            Meer producten
          </button>
        </div>
      </div>

      <div className="h-[50px] max-[638px]:h-[120px] mt-[6rem] text-center flex flex-col justify-evenly md:flex-row md:justify-center items-center mr-[2.7rem] max-[300px]:mt-[10rem]">
        <div className="w-full md:w-1/3 flex justify-center items-center space-x-2 px-2">
          <AiOutlineCheckCircle size={20} className="ml-8 text-[#13b426]" />
          <div className="flex flex-col">
            <p className="font-bold">Onze persoons busjes</p>
            <p className="mt-1 text-[#3e257c]">
              Voor al jouw vervoersbehoeften
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center space-x-2 px-2 mt-4 md:mt-0">
          <AiOutlineCheckCircle size={20} className="ml-8 text-[#13b426]" />
          <div className="flex flex-col">
            <p className="font-bold">Eenvoudig verhuren</p>
            <p className="mt-1 text-[#3e257c]">Geen verborgen kosten</p>
          </div>
        </div>
        <div className="w-full md:w-1/3 flex justify-center items-center space-x-2 px-2 mt-4 md:mt-0">
          <AiOutlineCheckCircle size={20} className="ml-8 text-[#13b426]" />
          <div className="flex flex-col">
            <p className="font-bold">Voordelige tarieven</p>
            <p className="mt-1 text-[#3e257c]">Altijd de beste prijs</p>
          </div>
        </div>
      </div>

      <div className="w-[58vw] mx-auto h-[90px] border-b border-gray-300 "></div>
    </div>
  );
};

export default Hero;
