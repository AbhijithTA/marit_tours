import React from 'react';
import { motion } from 'framer-motion';
import Kodaikanal from "../assets/images/destinationImages/kodaikanal.webp";
import Ooty from "../assets/images/destinationImages/OotyPackage.jpg";
import Pondicherry from "../assets/images/destinationImages/pondicherry.jpg";
import tamilNadu from "../assets/images/destinationImages/tamilnadu.webp";
import Kerala from "../assets/images/destinationImages/mysticalkerala.jpg";
import Wildlife from "../assets/images/destinationImages/wildlife.webp";

const ParallaxCards = () => {
  const cards = [
    {
      id: 1,
      title: 'Mystical Kerala',
      description: 'Lush backwaters, serene beaches, and Ayurveda.',
      image: Kerala,
      days: '7 Days / 6 Nights',
    },
    {
      id: 2,
      title: 'Cultural Tamil Nadu',
      description: 'Ancient temples and vibrant traditions.',
      image: tamilNadu,
      days: '6 Days / 5 Nights',
    },
    {
      id: 3,
      title: 'Ooty',
      description: 'Heritage sites and coffee plantations.',
      image: Ooty,
      days: '5 Days / 4 Nights',
    },
    {
      id: 7,
      title: 'Kodaikanal Getaway',
      description: 'Misty hills, serene lakes, and lush greenery.',
      image: Kodaikanal,
      days: '4 Days / 3 Nights',
    },
    {
      id: 5,
      title: 'Scenic Pondicherry',
      description: 'French charm and seaside promenades.',
      image: Pondicherry,
      days: '3 Days / 2 Nights',
    },
    {
      id: 6,
      title: 'Wildlife Sanctuaries',
      description: 'Rich biodiversity and serene landscapes.',
      image: Wildlife,
      days: '4 Days / 3 Nights',
    },
  ];

  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <div className="py-12  flex flex-col items-center">
 <motion.h1
        className="text-4xl font-bold mb-10 text-[#077045] text-center Equila"
        initial="hidden"
        animate="visible"
        variants={headingVariants}
      >
        Dive Into Our Curated Packages
      </motion.h1>      <div className="flex flex-wrap justify-center gap-8 max-w-6xl">
        {cards.map((card) => (
          <motion.div
            key={card.id}
            className="bg-white rounded-lg overflow-hidden shadow-lg w-80 h-96 flex flex-col transition-transform transform hover:scale-105"
          >
            <motion.div
              className="overflow-hidden h-3/5"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            </motion.div>
            <div className="p-6 text-center">
              <h2 className="text-2xl font-semibold mb-4">{card.title}</h2>
              <p className="text-gray-600">{card.description}</p>
              <h1 className="bg-red-100 py-2 m-2 rounded-lg">{card.days}</h1>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxCards;
