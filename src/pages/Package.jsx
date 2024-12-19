import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Kerala from "../assets/images/destinationImages/mysticalkerala.jpg";
import tamilNadu from "../assets/images/destinationImages/tamilnadu.webp";
import Ooty from "../assets/images/destinationImages/OotyPackage.jpg";
import Kodaikanal from "../assets/images/destinationImages/kodaikanal.webp";
import Pondicherry from "../assets/images/destinationImages/pondicherry.jpg";
import Wildlife from "../assets/images/destinationImages/wildlife.webp";
import Cycle from "../assets/images/destinationImages/cycle.jpg";
import Trekking from "../assets/images/destinationImages/Trekking.jpg";
import Dubai from "../assets/images/destinationImages/Dubai.jpg";
import { useNavigate } from "react-router-dom";

const ParallaxCards = () => {
  const [selectedCard, setSelectedCard] = useState(null);
  const navigate = useNavigate();

  const cards = [
    {
      id: 1,
      title: "Dubai",
      description: "Explore the city of Gold with Marit Tours & Travels.",
      image: Dubai,
      days: "5 Days",
      itinerary: [
        "Day 1: Arrival in Dubai - Check-in to a 3* hotel and leisure time.",
        "Day 2: Sightseeing tour covering iconic landmarks.",
        "Day 3: Desert Safari adventure with dinner.",
        "Day 4: Dhow Cruise Dinner at Marina.",
        "Day 5: Shopping and leisure; departure.",
      ],
    },

    {
      id: 2,
      title: "Cochin - Munnar - Thekkady - Alleppey",
      description: "5 Days 4 Nights Package : God's Own Country",
      image: Kerala,
      days: "5 Days / 4 Nights",
      itinerary: [
        "Day 1: Cochin - Arrival and local sightseeing.",
        "Day 2: Cochin - Munnar - Morning drive to Munnar, enjoy tea plantations, and visit Rajamala (home to Nilgiri Thars).",
        "Day 3: Munnar - Visit Echo Point, Mattupetty Dam, and tea plantations.",
        "Day 4: Munnar - Thekkady - Travel to Thekkady, visit Periyar Lake and wildlife sanctuary.",
        "Day 5: Thekkady - Kumarakam/ Alleppey - Relax in the backwaters and enjoy houseboats.",
      ],
    },
    {
      id: 3,
      title: "Ooty - Kodaikanal - Rameswaram",
      description: "7 Days 6 Nights Package : Tamil Nadu",
      image: tamilNadu,
      days: "7 Days / 6 Nights",
      itinerary: [
        "Day 1: Arrival at Ooty - Explore Botanical Garden and Ooty Lake.",
        "Day 2: Ooty - Visit Doddabetta Peak and tea plantations.",
        "Day 3: Travel to Kodaikanal - Enjoy scenic drives.",
        "Day 4: Kodaikanal - Visit Coaker’s Walk, Pillar Rocks, and Green Valley View.",
        "Day 5: Travel to Rameswaram - Explore Ramanathaswamy Temple and beaches.",
        "Day 6: Rameswaram - Visit Dhanushkodi and Pamban Bridge.",
        "Day 7: Return journey.",
      ],
    },
    {
      id: 4,
      title: "Bangalore - Mysore - Ooty - Kodaikanal",
      description: "7 Days 6 Nights Package : Karnataka",
      image: Ooty,
      days: "7 Days / 6 Nights",
      itinerary: [
        "Day 1: Bangalore - Arrival and sightseeing.",
        "Day 2: Travel to Mysore - Visit Mysore Palace and Brindavan Gardens.",
        "Day 3: Travel to Ooty - Explore Ooty Lake and Rose Garden.",
        "Day 4: Ooty - Visit Doddabetta Peak and tea museum.",
        "Day 5: Travel to Kodaikanal - Scenic drive and leisure.",
        "Day 6: Kodaikanal - Visit Pillar Rocks, Bryant Park, and lakes.",
        "Day 7: Return journey to Bangalore.",
      ],
    },
    {
      id: 5,
      title: "Kodaikanal Getaway",
      description: "Misty hills, serene lakes, and lush greenery.",
      image: Kodaikanal,
      days: "4 Days / 3 Nights",
      itinerary: [
        "Day 1: Arrival at Kodaikanal - Check-in and leisure.",
        "Day 2: Kodaikanal - Visit Coaker’s Walk, Pillar Rocks, and Green Valley View.",
        "Day 3: Kodaikanal - Enjoy boating at Kodai Lake and visit Bryant Park.",
        "Day 4: Return journey.",
      ],
    },
    {
      id: 6,
      title: "Scenic Pondicherry",
      description: "French charm and seaside promenades.",
      image: Pondicherry,
      days: "3 Days / 2 Nights",
      itinerary: [
        "Day 1: Arrival at Pondicherry - Explore French Quarter and Promenade Beach.",
        "Day 2: Pondicherry - Visit Auroville, Paradise Beach, and local cafes.",
        "Day 3: Return journey.",
      ],
    },
    {
      id: 7,
      title: "Wildlife Sanctuaries",
      description: "Rich biodiversity and serene landscapes.",
      image: Wildlife,
      days: "4 Days / 3 Nights",
      itinerary: [
        "Day 1: Arrival at wildlife sanctuary - Check-in and jungle walk.",
        "Day 2: Safari Day - Enjoy guided safaris to spot wildlife and birds.",
        "Day 3: Nature Walk - Explore nature trails and relax in serene surroundings.",
        "Day 4: Return journey.",
      ],
    },
    {
      id: 8,
      title: "Cycle Tours",
      description: "Discover nature on two wheels.",
      image: Cycle,
      days: "1 Day",
      itinerary: [
        "Morning: Arrival and introduction to cycling routes.",
        "Midday: Begin guided cycling tour through scenic trails and nature reserves.",
        "Afternoon: Break for refreshments and continue exploring landscapes.",
        "Evening: Return to the starting point, wrap-up, and departure.",
      ],
    },
    {
      id: 9,
      title: "Trekking",
      description: "Discover nature on Hills.",
      image: Trekking,
      days: "1 Day",
      itinerary: [
        "Morning: Arrival at the trekking site and briefing session.",
        "Midday: Start trek with experienced guides, explore flora and fauna.",
        "Afternoon: Break for lunch at a scenic spot on the trail.",
        "Evening: Reach summit or endpoint and return to base camp.",
      ],
    },
  ];

  const handleOpenModal = (card) => setSelectedCard(card);
  const handleCloseModal = () => setSelectedCard(null);

  const handleEnquiryClick = () => {
    navigate("/contact");
  };

  return (
    <div className="py-12 flex flex-col items-center">
      <motion.h1
        className="text-4xl font-bold mb-10 text-[#077045] text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Dive Into Our Curated Packages
      </motion.h1>
      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg w-80 h-96 flex flex-col transition-transform transform hover:scale-105"
          >
            <div className="overflow-hidden h-3/5">
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
              <button
                onClick={() => handleOpenModal(card)}
                className="bg-red-500 text-white py-2 px-4 mt-2 rounded-lg hover:bg-red-600"
              >
                More Details
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCard && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 md:p-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg w-full max-w-lg md:max-w-2xl lg:max-w-3xl relative overflow-hidden"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              {/* Modal Header with Image */}
              <div className="relative">
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  className="w-full h-48 object-cover md:h-64"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-white text-center px-4">
                    {selectedCard.title}
                  </h2>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-4 md:p-6 space-y-4">
                <p className="text-gray-600 text-sm md:text-lg">
                  {selectedCard.description}
                </p>
                <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                  Itinerary:
                </h3>
                <ul className="list-disc list-inside space-y-2">
                  {selectedCard.itinerary.map((item, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-700 hover:text-red-500 transition duration-300"
                      whileHover={{ scale: 1.05 }}
                    >
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-100 px-4 md:px-6 py-4 gap-5 flex justify-end">
                <button
                  onClick={handleCloseModal}
                  className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Close
                </button>
                <button
                  onClick={handleEnquiryClick}
                  className="bg-blue-900 text-white py-2 px-4 rounded-lg hover:bg-red-600 transition duration-300"
                >
                  Enquiry
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ParallaxCards;
