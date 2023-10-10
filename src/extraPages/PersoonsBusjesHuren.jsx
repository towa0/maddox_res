import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BiGasPump,
  BiUser,
  BiChevronRight,
  BiErrorCircle,
} from "react-icons/bi";
import { TbManualGearbox } from "react-icons/tb";
import { FaRegSnowflake, FaFilter } from "react-icons/fa";
import { AiFillCar } from "react-icons/ai";
import { BsCheck } from "react-icons/bs";
import { MdOutlineLocationOn } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

const BusjesHuren = () => {
  const [buses, setBuses] = useState([]);
  const [error, setError] = useState(null);
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [showFilters, setShowFilters] = useState(false);
  const [sortedProducts, setSortedProducts] = useState([]);
  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedPriceFilter, setSelectedPriceFilter] = useState("");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");

  const options = [
    { label: "Trekhaak", value: "trekhaak" },
    { label: "Schakel", value: "schakel" },
    { label: "Airco", value: "airco" },
    { label: "Navigatie", value: "navigatie" },
    { label: "Bluetooth", value: "bluetooth" },
    { label: "Standaard", value: "default" },
  ];

  const provinces = [
    "Drenthe",
    "Flevoland",
    "Friesland",
    "Gelderland",
    "Groningen",
    "Limburg",
    "Noord-Brabant",
    "Noord-Holland",
    "Overijssel",
    "Utrecht",
    "Zeeland",
    "Zuid-Holland",
  ];

  const zitplaatsen = [6, 7, 8, 9];

  const priceOptions = [
    { label: "Laagste naar hoogste", value: "lowest-to-highest" },
    { label: "Hoogste naar laagste", value: "highest-to-lowest" },
  ];

  const toggleDetails = (productId) => {
    setExpandedProduct((prevState) =>
      prevState === productId ? null : productId
    );
  };

  const handleProvinceChange = (e) => {
    setSelectedProvince(e.target.value);
  };


  const handleOptionChange = (option) => {
    setSelectedOptions((prevOptions) =>
      prevOptions.includes(option)
        ? prevOptions.filter((item) => item !== option)
        : [...prevOptions, option]
    );
  };

  const filteredProducts = buses.filter((product) => {
    const { location, extras } = product.specs;

    if (selectedProvince && location !== selectedProvince) {
      return false;
    }

    if (selectedOptions.length > 0) {
      const productOptions = extras.map((option) => option.toLowerCase());
      const hasAllOptions = selectedOptions.every((option) =>
        productOptions.includes(option)
      );
      return hasAllOptions;
    }

    return true;
  });

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/busjes")
      .then((response) => {
        setBuses(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
        console.error("Axios request error:", error);
      });
  }, []);

  if (error) {
    return (
      <div className="text-[#6e47cf] flex">
        <BiErrorCircle size={30} className="align-center" />
        <div>Something went wrong.</div>
      </div>
    );
  }

  const iconGrid = [
    {
      icon: <BiGasPump className="ml-[3px]" />,
      label: "Benzine",
      specKey: "engine",
    },
    { icon: <BiUser />, label: "zitplaatsen", specKey: "stoelen" },
    { icon: <MdOutlineLocationOn />, label: "Locatie", specKey: "location" },
    { icon: <TbManualGearbox />, label: "Automatisch", specKey: "gearType" },
    { icon: <FaRegSnowflake />, label: "Airco", specKey: "aircoBool" },
    { icon: <AiFillCar />, label: "deuren", specKey: "aantalDeuren" },
  ];

  return (
    <div className="w-full h-screen bg-white mt-10">
      <div className="car-page-title pb-4">
        <h1>
          Ideale auto's{" "}
          <span className="text-[#6e47cf] ">voor een weekendje weg</span>
        </h1>
      </div>
      <div className="filter-container max-w-[800px] bg-gray-100 p-3 rounded-md mx-auto mb-8 flex justify-center items-center flex-wrap">
        <div className="flex-1 flex flex-wrap ">
          <select
            className="flex-1 mr-2"
            value={selectedProvince}
            onChange={handleProvinceChange}
          >
            <option value="">Zitplaatsen</option>
            {zitplaatsen.map((zitplaatsen) => (
              <option key={zitplaatsen} value={zitplaatsen}>
                {zitplaatsen}
              </option>
            ))}
          </select>
          <select
            className="flex-1 mr-2"
            value={selectedProvince}
            onChange={handleProvinceChange}
          >
            <option value="">Provincie</option>
            {provinces.map((province) => (
              <option key={province} value={province}>
                {province}
              </option>
            ))}
          </select>
          <select className="flex-1 mr-2">
            <option value="">Extra's</option>
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleOptionChange(option.value)}
                className={`bg-gray-200 rounded-md p-1 m-1 ${
                  selectedOptions.includes(option.value)
                    ? "bg-[#6e47cf] text-white"
                    : ""
                }`}
              >
                {option.label}
              </button>
            ))}
          </select>

          <button
            className="px-4 py-3 bg-[#6e47cf] hover:bg-[#5029b4] text-white rounded-md font-bold max-[390px]:w-[93vw]"
            onClick={() => {
              setShowFilters(false);
              const filteredAndSorted = filteredProducts
                .slice()
                .sort((a, b) => {
                  if (selectedPriceFilter === "lowest-to-highest") {
                    return a.price - b.price;
                  } else if (selectedPriceFilter === "highest-to-lowest") {
                    return b.price - a.price;
                  }
                  return 0;
                });
              setSortedProducts(filteredAndSorted);
            }}
          >
            Toepassen
          </button>
        </div>
      </div>

      {loading ? (
        <div className="text-[#6e47cf] flex text-lg">
          <BiErrorCircle size={30} className="align-center" />
          <div>Loading...</div>
        </div>
      ) : error ? (
        <div className="text-[#6e47cf] flex">
          <BiErrorCircle size={30} className="align-center" />
          <div>Oops, something went wrong.</div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-3 w-[40vw] ml-[20vw]">
          {sortedProducts.map((bus) => (
            <div
              key={bus.id}
              className="p-3 mx-7 border-2 mb-[20px] shadow-xl flex w-[60vw] h-[280px]"
            >
              <div className="w-[16vw] mr-7">
                {bus.LinkjesFoto.split(",")[0] && ( // Display only the first image
                  <img
                    src={bus.LinkjesFoto.split(",")[0]} // Use only the first image URL
                    alt={bus.name}
                  />
                )}
              </div>
              {/* OVERFLOWING IMAGES */}

              {/* <div className="w-[17vw]">
                {bus.LinkjesFoto.split(",").map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={bus.name}
                    className="w-full h-100%"
                  />
                ))}

              </div> */}
              <div className="w-1/3">
                <div className="flex w-[12vw]">
                  <h2 className="text-3xl font-bold mb-2">{bus.name}</h2>
                </div>

                <p className="mb-2 text-gray-400 text-xs">
                  Minimale leeftijd bestuurder 21 jaar
                </p>
                <p className="mb-2 text-gray-400 text-xs">
                  Trekhaak en all-season banden op aanvraag
                </p>

                <div className="grid grid-cols-2 gap-1 text-md">
                  {iconGrid.map((item, index) => (
                    <div key={index} className="flex">
                      <div className="icon text-[#3e257c] my-auto left-0">
                        {item.icon}
                      </div>
                      <span className="text-gray-600 ml-1">
                        {item.label === "zitplaatsen"
                          ? `${bus.specs[item.specKey]} ${item.label}`
                          : item.label === "deuren"
                          ? `${bus.specs[item.specKey]} ${item.label}`
                          : item.label === "Locatie"
                          ? bus.specs["Adres"].split(" ")[4]
                          : item.label === "Automatisch"
                          ? bus.specs[item.specKey]
                          : item.label === "Airco"
                          ? bus.specs[item.specKey]
                          : item.label === "Benzine"
                          ? bus.specs[item.specKey]
                          : ""}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex justify-between">
                  <button
                    className="flex ml-0 mt-4  text-[#6e47cf] font-light hover:underline hover:text-[#3e257c] cursor-pointer text-xs "
                    onClick={() => toggleDetails(bus.id)}
                  >
                    Bekijk details
                    <BiChevronRight size={18} />
                  </button>
                </div>
                {expandedProduct === bus.id && (
                  <div
                    className="overlay active"
                    onClick={() => setExpandedProduct(null)}
                  >
                    {expandedProduct === bus.id && (
                      <div
                        className="overlay active"
                        onClick={() => setExpandedProduct(null)}
                      >
                        <div
                          className="overlay-content"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <button
                            className="close-button"
                            onClick={() => toggleDetails(bus.id)}
                          >
                            X
                          </button>
                          <div className="flex">
                            <div className="w-1/3">
                              <h2 className="flex text-xl font-semibold">
                                <MdOutlineLocationOn className="mr-2 mt-1 mb-3" />
                                {bus.specs.location}
                              </h2>
                              <img
                                src={bus.image}
                                alt={bus.name}
                                className="w-full h-auto object-contain mb-4"
                              />
                              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                                <p className="text-[#3e257c] text-2xl font-bold mb-2 flex justify-end">
                                  €{bus.price},00 totaal
                                </p>
                                <p className="text-gray-600 text-sm font-light flex justify-end">
                                  €{bus.price},00 per dag
                                </p>
                              </div>
                              <button className="py-3 px-4 mb-4 bg-[#6e47cf] hover:bg-[#5029b4] text-white border w-full rounded-lg font-bold hover:underline">
                                Verder
                              </button>
                              <div className="w-full bg-white border border-gray-300 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">
                                  Prijzen zijn inclusief:
                                </h3>
                                <p className="mb-2 flex">
                                  <BsCheck size={20} className="mt-1" />
                                  100 km per dag
                                </p>
                                <p className="mb-2 flex">
                                  <BsCheck size={20} className="mt-1" />
                                  Pechhulp
                                </p>
                                <p className="mb-2 flex">
                                  <BsCheck size={20} className="mt-1" />
                                  Verzekeringen
                                </p>
                                <p className="mb-2 flex">
                                  <BsCheck size={20} className="mt-1" />
                                  Kan geleverd worden buiten openingsuren
                                </p>
                              </div>
                            </div>
                            <div className="w-2/3">
                              <h2 className="flex items-center justify-center text-3xl font-bold text-[#6e47cf] mb-7">
                                {bus.name}
                              </h2>
                              <div className="flex flex-col mb-6 ml-4">
                                <h3 className="text-xl font-semibold mb-2">
                                  Informatie over de auto:
                                </h3>
                                <div className="flex items-center mb-2">
                                  {iconGrid.map((item, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center mr-4 text-[#3e257c] mb-4"
                                    >
                                      {item.icon}
                                      <span className="ml-1">
                                        {bus.specs[item.specKey]}
                                      </span>
                                    </div>
                                  ))}
                                </div>
                                <h3 className="text-xl font-semibold mb-2">
                                  Kenmerken:
                                </h3>
                                <div className="flex flex-wrap items-center">
                                  {bus.specs.extras.map((extra, index) => (
                                    <div
                                      key={index}
                                      className="flex items-center mb-2 mr-4 text-[#3e257c]"
                                    >
                                      <span>{extra}</span>
                                      {index !==
                                        bus.specs.extras.length - 1 && (
                                        <span>,</span>
                                      )}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
              <div className="w-[9vw] ml-auto">
                <div className="grid">
                  <div className="text-[#ff4f4f] text-md">
                    <p className="text-gray-400 text-md">van</p>
                    <span className="font-bold text-xl">€{bus.price},-</span>
                    <p className="text-gray-400 text-md">per dag</p>
                  </div>
                </div>
                <button className="flex mt-[2vw] mb-0 mx-auto py-2 px-3 bg-[#6e47cf] hover:bg-[#5029b4] text-white border rounded-md font-bold hover:underline">
                  Direct Reserveren
                </button>
                {bus.specs.partner === "oscar" && (
                  <img
                    src="maddox_res\src\assets\oscar.png"
                    alt="Oscar"
                    className="w-full mt-2"
                  />
                )}

                {bus.specs.partner === "snappcar" && (
                  <img
                    src="maddox_res\src\assets\snappcar.png"
                    alt="Snappcar"
                    className="w-full mt-2"
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BusjesHuren;
