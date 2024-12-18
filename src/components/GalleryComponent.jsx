import React, { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const GalleryComponent = () => {
  // Static images and video
  const items = [
    { type: "image", src: "/1.jpg" },
    { type: "image", src: "/2.jpg" },
    { type: "image", src: "/3.jpg" },
    { type: "video", src: "/vid.mp4" }, 
    { type: "image", src: "/4.jpg" },
    { type: "image", src: "/6.jpg" },
    { type: "image", src: "/7.jpg" },
    { type: "image", src: "/8.jpg" },
    { type: "image", src: "/9.jpg" },
    { type: "image", src: "/10.jpg" },
    { type: "image", src: "/11.jpg" },
    { type: "image", src: "/12.jpg" },
    { type: "image", src: "/13.jpg" },
    { type: "image", src: "/14.jpg" },
    { type: "image", src: "/15.jpg" },
    { type: "image", src: "/16.jpg" },
    { type: "video", src: "/vid3.mp4" }, 
    { type: "video", src: "/vid2.mp4" }, 
    { type: "image", src: "/18.jpg" },
    { type: "image", src: "/19.jpg" },
    { type: "image", src: "/20.jpg" },
    { type: "image", src: "/21.jpg" },
    { type: "image", src: "/22.jpg" },
    { type: "image", src: "/23.jpg" },
    { type: "image", src: "/24.jpg" },
    { type: "image", src: "/25.jpg" },
    { type: "image", src: "/26.jpg" },
    { type: "image", src: "/27.jpg" },
    { type: "image", src: "/28.jpg" },
    { type: "image", src: "/29.jpg" },
    { type: "image", src: "/30.jpg" },
    { type: "image", src: "/31.jpg" },
  ];
  
  // Parallax Effect
  const parallaxEffect = useMotionValue(0);
  const yTransform = useTransform(parallaxEffect, [0, 1], [0, -50]);

  // State for modal
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openModal = (index) => {
    setCurrentIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + items.length) % items.length);
  };

  return (
    <div
      className="relative overflow-hidden text-white py-10"
      onMouseMove={(e) => parallaxEffect.set(e.clientY / window.innerHeight)}
    >
      <h2 className="text-center text-2xl font-bold mb-20 text-[#077045] Equila">
        Through the Eyes of Our Travelers: <br />{" "}
        <span className="text-[#d01822] text-4xl">Your Story in Photos</span>
      </h2>

      <div className="flex flex-wrap justify-center gap-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            className="w-80 h-60 relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
            onClick={() => openModal(index)}
            style={{ y: yTransform }}
          >
            {item.type === "image" ? (
              <img
                src={item.src}
                alt={`Gallery Item ${index + 1}`}
                className="w-full h-full object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-full object-cover"
                muted
                loop
                autoPlay
              />
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 justify-center items-center z-50 hidden sm:flex"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-5 sm:p-10 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-1 right-1 text-4xl text-red-600 rounded-full h-10 w-10 flex items-center justify-center"
              onClick={closeModal}
            >
              ×
            </button>

            <motion.div className="relative">
              {items[currentIndex].type === "image" ? (
                <img
                  src={items[currentIndex].src}
                  alt={`Modal Item ${currentIndex + 1}`}
                  className="w-96 h-72 object-cover rounded-lg"
                />
              ) : (
                <video
                  src={items[currentIndex].src}
                  className="w-96 h-72 object-cover rounded-lg"
                  controls
                  autoPlay
                />
              )}
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-white"
                onClick={prevItem}
              >
                ‹
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-white"
                onClick={nextItem}
              >
                ›
              </button>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryComponent;
