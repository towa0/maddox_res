import React from "react";
import BGnews from "../assets/zorg-vrouw-baby-featured.png";

const Newsletter = () => {
  return (
    <div className="py-16 px-4 overflow-x">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="text-5xl font-bold text-center text-[#6e47cf] mb-12">
          Laatste nieuws
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative rounded-lg overflow-hidden">
            <img
              src={BGnews}
              alt="background-news"
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-black opacity-20"></div>
            <p className="absolute bottom-8 left-8 right-8 text-white text-2xl font-bold">
              Handige tips voor aanstaande moeders: ontdek wat vergoed wordt bij
              zwangerschap en bevalling
            </p>
            <p className="absolute bottom-0 left-8 text-white text-sm">
              10 mei 2023
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8">
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={BGnews}
                alt="background-news"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <p className="absolute bottom-8 left-8 right-8 text-white text-lg font-bold">
                Hoe lang duurt het afsluiten van een hypotheek?
              </p>
              <p className="absolute bottom-0 left-8 text-white text-sm">
                11 mei 2023
              </p>
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <img
                src={BGnews}
                alt="background-news"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <p className="absolute bottom-8 left-8 right-8 text-white text-lg font-bold">
                Hoe lang duurt het afsluiten van een hypotheek?
              </p>
              <p className="absolute bottom-0 left-8 text-white text-sm">
                11 mei 2023
              </p>
            </div>
          </div>
        </div>
        <div className="mt-12 text-center">
          <button className="text-[#6e47cf] border border-[#6e47cf] py-3 px-6 rounded-lg hover:underline hover:bg-[#e9d5ff]">
            leer meer op ons blog
          </button>
        </div>
      </div>
      <div className="w-[1135px] mx-auto h-[100px] border-b border-gray-300 "></div>
    </div>
  );
};

export default Newsletter;
