import { useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const GalleryComponent = () => {
  // Static images
  const images = [
    "/1.jpg", "/2.jpg", "/3.jpg", "/4.jpg", "/6.jpg", "/7.jpg", "/8.jpg",
    "/9.jpg", "/10.jpg", "/11.jpg", "/12.jpg", "/13.jpg", "/14.jpg", "/15.jpg",
    "/16.jpg", "/18.jpg", "/19.jpg", "/20.jpg", "/21.jpg", "/22.jpg", "/23.jpg", "/24.jpg",
    "/25.jpg", "/26.jpg", "/27.jpg"
  ];

  // Parallax Effect
  const parallaxEffect = useMotionValue(0);
  const yTransform = useTransform(parallaxEffect, [0, 1], [0, -50]);

  // State for modal
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div
      className="relative overflow-hidden text-white py-10"
      onMouseMove={(e) => parallaxEffect.set(e.clientY / window.innerHeight)}
    >
      <h2 className="text-center text-2xl font-bold mb-20 text-[#077045] Equila">
      Through the Eyes of Our Travelers: <br /> <span className="text-[#d01822] text-4xl">  Your Story in Photos</span> 
      </h2>
      <div className="flex flex-wrap justify-center gap-8">
        {images.map((image, index) => (
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
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="w-full h-full object-cover"
            />
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
              <img
                src={images[currentImageIndex]}
                alt={`Modal Image ${currentImageIndex + 1}`}
                className="w-96 h-72 object-cover rounded-lg"
              />
              <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 text-3xl text-white"
                onClick={prevImage}
              >
                ‹
              </button>
              <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 text-3xl text-white"
                onClick={nextImage}
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
