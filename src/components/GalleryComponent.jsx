import  { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

const GalleryComponent = () => {
  // Sample images
  const [images, setImages] = useState([
    "https://source.unsplash.com/random/800x600?1",
    "https://source.unsplash.com/random/800x600?2",
    "https://source.unsplash.com/random/800x600?3",
    "https://source.unsplash.com/random/800x600?4",
    "https://source.unsplash.com/random/800x600?5",
  ]);

  // Infinite scrolling logic
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => [...prevImages, ...prevImages]);
    }, 10000); // Add new images every 10 seconds
    return () => clearInterval(interval);
  }, []);

  // Parallax Effect
  const parallaxEffect = useMotionValue(0);
  const yTransform = useTransform(parallaxEffect, [0, 1], [0, -50]);

  return (
    <div
      className="relative overflow-hidden bg-gray-900 text-white py-10"
      onMouseMove={(e) =>
        parallaxEffect.set(e.clientY / window.innerHeight)
      }
    >
      <h2 className="text-center text-3xl font-bold mb-8">
        Stunning Image Gallery
      </h2>
      <div className="flex flex-wrap justify-center gap-4">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="w-80 h-60 relative overflow-hidden rounded-lg shadow-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            whileHover={{ scale: 1.1 }}
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
    </div>
  );
};

export default GalleryComponent;
