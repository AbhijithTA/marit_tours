import img1 from "../../src/assets/images/HomePageComponent/lady1.jpg"
import { motion } from "framer-motion";

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
            <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-8 h-8 text-blue-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.752 11.168l-6.586-4.29A1 1 0 007 7.634v8.633a1 1 0 001.166.986l6.586-1.466A1 1 0 0015 14.9v-3.8a1 1 0 00-.248-.732z"
                />
              </svg>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Section: Text and Stats */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h4 className="text-blue-500 text-sm uppercase tracking-wide mb-2">
            Callback for More
          </h4>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            GO TRAVEL. DISCOVER. <br />
            REMEMBER US!!
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Eaque
            adipiscing, luctus eleifend.
          </p>

          {/* Stats Section */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-blue-500 text-4xl mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6H6m6 0h6"
                  />
                </svg>
              </motion.div>
              <p className="text-gray-800 font-bold text-xl">500K+</p>
              <p className="text-gray-600 text-sm">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-blue-500 text-4xl mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 12h6m0 0l-6 6m6-6l-6-6"
                  />
                </svg>
              </motion.div>
              <p className="text-gray-800 font-bold text-xl">250K+</p>
              <p className="text-gray-600 text-sm">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-blue-500 text-4xl mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10l4.553 2.276A2 2 0 0120 14.102v3.794a2 2 0 01-1.447 1.926L15 20m-6 0l-4.553-2.178A2 2 0 013 14.102v-3.794a2 2 0 011.447-1.926L9 10m6 0L9 20m6-10L9 4m0 16V4m0 16l6-10m0 0V4"
                  />
                </svg>
              </motion.div>
              <p className="text-gray-800 font-bold text-xl">15K+</p>
              <p className="text-gray-600 text-sm">Satisfied Clients</p>
            </div>
            <div className="text-center">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center text-blue-500 text-4xl mb-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 10h18m-2 4h2m-4-4h4m-4 4H7m0 0H3m4 0v6m0-6V4"
                  />
                </svg>
              </motion.div>
              <p className="text-gray-800 font-bold text-xl">10K+</p>
              <p className="text-gray-600 text-sm">Satisfied Clients</p>
            </div>
          </div>

          {/* Emergency Contact */}
          <div className="mt-6 bg-blue-100 text-blue-600 p-4 rounded-md shadow-md">
            <p className="text-sm">Our 24/7 Emergency Phone Services</p>
            <p className="text-2xl font-bold">Call: 123-456-7890</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TravelSection;
