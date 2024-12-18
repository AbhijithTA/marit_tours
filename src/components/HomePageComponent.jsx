import img1 from "../assets/images/destinationImages/about.jpg";
import { motion } from "framer-motion";
import { GoHeartFill } from "react-icons/go";
import { GiSchoolBag } from "react-icons/gi";
import { MdTravelExplore } from "react-icons/md";
import { MdReviews } from "react-icons/md";

const TravelSection = () => {
  return (
    <section className="bg-white py-10 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8 flex flex-col lg:flex-row items-center gap-8">
        {/* Left Section: Image with Play Button */}
        <motion.div
          className="relative lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <img
            src={img1}
            alt="Travel"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.1 }}
          >
            
          </motion.div>
        </motion.div>

        {/* Right Section: Text and Stats */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-[#d01822] text-sm uppercase tracking-wide mb-2">
            Callback for More
          </h4>
          <h2 className="text-xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
          GO TRAVEL. DISCOVER. <br />
            AND MAKE MEMORIES WITH US!
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-lg">
          Embark on unforgettable journeys to the world’s most stunning destinations. Whether it’s pristine beaches, ancient landmarks, vibrant cities, or serene mountain escapes—we’ve got you covered!
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-[#d01822] text-4xl mb-2"
              >
                <GoHeartFill />
              </motion.div>
              <p className="text-gray-800 font-bold text-xl">500K+</p>
              <p className="text-gray-600 text-sm">Satisfied Travelers</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-[#d01822] text-4xl mb-2"
              >
               <GiSchoolBag/>

               </motion.div>
              <p className="text-gray-800 font-bold text-xl">250K+</p>
              <p className="text-gray-600 text-sm"> Journeys Taken</p>
            </div>
        
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-[#d01822] text-4xl mb-2"
              >
                <MdReviews/>
              </motion.div>
              <p className="text-gray-800 font-bold text-xl">10K+</p>
              <p className="text-gray-600 text-sm">Reviews</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-6 bg-blue-100 text-[#d01822] p-4 rounded-md shadow-md">
            <p className="text-sm">Call Us Anytime</p>
            <p className="text-2xl font-bold">Call: +91 9447302592, +91 7510502592
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelSection;