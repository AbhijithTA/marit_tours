import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa"; // Social icons
import Homebg1 from "../assets/img1.jpg";
import Homebg2 from "../assets/img2.jpg";
import Homebg3 from "../assets/img3.jpg";
import { Link } from "react-router-dom";

const textAnimation = {
  hidden: { y: "100%", opacity: 0 },
  visible: { y: "0%", opacity: 1 },
};

const backgrounds = [
  {
    image: Homebg2,
    heading: "Weaving Your Dreams into Unforgettable Adventures",
  },
  {
    image: Homebg1,
    heading: "Crafting Memories That Last a Lifetime",
  },
  { image: Homebg3, heading: "Turning Your Dreams into Timeless Journeys" },
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <AnimatePresence mode="wait">
        <motion.div className="h-[86vh] w-full relative overflow-hidden">
          {/* Background Image */}
          <motion.img
            key={currentIndex}
            src={backgrounds[currentIndex].image}
            alt="Background"
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
          />

          {/* Heading and Content */}
          <div className="flex flex-col items-start space-y-4 relative top-[15vh] sm:top-[30vh] lg:top-[33vh] px-4 sm:px-8">
            <motion.h1
              className="text-lg sm:text-3xl md:text-5xl text-white drop-shadow-md w-full sm:w-3/4 lg:w-2/3 CrocoRegular"
              key={currentIndex}
              initial="hidden"
              animate="visible"
              transition={{ duration: 1, delay: 0.5 }}
              variants={textAnimation}
            >
              {backgrounds[currentIndex].heading}
            </motion.h1>
          </div>

          {/* Social Media Icons */}
          <div className="absolute right-2 top-[40vh] sm:right-4 sm:top-1/3 flex flex-col space-y-3 sm:space-y-4 items-center">
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white text-red-600 flex items-center justify-center rounded-full shadow-lg hover:bg-red-600 hover:text-white cursor-pointer transition">
              <FaInstagram size={16} sm={24} />
            </div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white text-green-600 flex items-center justify-center rounded-full shadow-lg hover:bg-green-600 hover:text-white cursor-pointer transition">
              <FaWhatsapp size={16} sm={24} />
            </div>
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-white text-blue-500 flex items-center justify-center rounded-full shadow-lg hover:bg-blue-500 hover:text-white cursor-pointer transition">
              <FaTwitter size={16} sm={24} />
            </div>
          </div>

          {/* Full-Width Section at Bottom */}
          <div className="absolute bottom-0 w-full py-6 px-4 sm:py-8 sm:px-12 lg:px-24 text-center z-10 shadow-lg flex flex-col sm:flex-row sm:gap-16 gap-6 items-center bg-opacity-90">
            <div className="flex items-center justify-center">
              <button
                className="flex items-center justify-between rounded-full bg-white text-black 
                   shadow-md px-4 sm:px-6 py-2 sm:py-3 gap-4 hover:shadow-lg transition duration-300"
              >
                <Link
                  to="/contact"
                  className="text-2xl  sm:text-sm font-medium text-blue-500 "
                >
                  {" "}
                  Booking Now
                </Link>
                <div className="flex items-center justify-center w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="white"
                    className="w-3 h-3 sm:w-4 sm:h-4 transform rotate-[-30deg]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 12h14M12 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </button>
            </div>

            <p className="text-white text-sm sm:text-lg text-center sm:text-start px-2">
              Explore how we can help you turn your dreams into unforgettable
              adventures. With a team of experts, we make every step easy and
              seamless.
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default HeroSection;
