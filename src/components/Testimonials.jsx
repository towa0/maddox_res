import React from "react";
import { RiStarSFill } from "react-icons/ri";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Annelies Jansen",
      rating: 3,
      comment:
        "De service was prima en het busje voldeed aan mijn verwachtingen. Ik zou het zeker aanraden!",
      image: "https://i0.wp.com/nlroei.nl/wp-content/uploads/2017/03/Olivier-Siegelaar.jpg?fit=2237%2C2237&ssl=1",
    },
    {
      id: 2,
      name: "Pieter van der Berg",
      rating: 4,
      comment:
        "Ik ben erg tevreden met de huurauto. Goede prijs-kwaliteitverhouding en vriendelijke medewerkers.",
      image: "https://i0.wp.com/nlroei.nl/wp-content/uploads/2017/03/Olivier-Siegelaar.jpg?fit=2237%2C2237&ssl=1",
    },
    {
      id: 3,
      name: "Linda de Vries",
      rating: 5,
      comment:
        "Geweldige ervaring met het huren van een verhuiswagen. Het was gemakkelijk en snel geregeld.",
      image: "https://i0.wp.com/nlroei.nl/wp-content/uploads/2017/03/Olivier-Siegelaar.jpg?fit=2237%2C2237&ssl=1",
    },
    {
      id: 4,
      name: "Jan Bakker",
      rating: 4,
      comment:
        "Prima service en goed onderhouden busjes. Zeker een aanrader voor het huren van een personenbusje.",
      image: "https://i0.wp.com/nlroei.nl/wp-content/uploads/2017/03/Olivier-Siegelaar.jpg?fit=2237%2C2237&ssl=1",
    },
  ];

  return (
    <div className="container mx-auto mb-[5vw]">
      <div className="w-full border-b border-gray-300"></div>
      <h2 className="text-3xl font-bold text-center my-8 text-[#6e47cf]">Klantenbeoordelingen</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="p-4 h-[180px] rounded-lg shadow-xl border-2 transform hover:scale-105 transition-transform">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full mr-4"
                />
                <h3 className="text-lg font-semibold text-[#3e257c]">{testimonial.name}</h3>
              </div>
              <div className="flex items-center">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <RiStarSFill key={index} className="w-4 h-4 text-yellow-400" />
                ))}
              </div>
            </div>
            <p className="text-gray-600">{testimonial.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
