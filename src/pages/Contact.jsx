import React from "react";
import img1 from "../assets/images/destinationImages/contact.jpg";
import { motion } from "framer-motion";
import { form } from "framer-motion/client";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContactUs = () => {
  return (
    <section className="relative w-full bg-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-72 bg-cover bg-center"
        style={{ backgroundImage:` url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">Contact us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row md:space-x-8">
        {/* Left Section - Centered */}
        <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ height: "85vh", display: "flex", flexDirection: "column" }}>
        <div
          style={{
            height: "60vh",
            // backgroundImage: `url(${bg.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-white/100 via-white/60 to-transparent opacity-100"></div>
          <motion.div
           
          className="absolute left-1/2 h-[80vh] w-[90vw] sm:w-[65vw] flex flex-wrap flex-col items-center transform -translate-x-1/2 space-x-0 sm:space-x-6 justify-center z-1 mt-4  bg-[#f1cca8]/90">
            <motion.h1
               initial={{
                opacity: 0,
                y: 50,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true, amount: 0.5 }} // Animates once, when 50% of the element is in view
              transition={{
                duration: 1,
              }}
              className="font-redemption text-4xl sm:text-6xl sm:-mt-8"
              style={{ color: "#d40000" }}
            >
              Contact Us
            </motion.h1>
            <form ref={form} onSubmit={sendEmail} className="sm:space-y-6 mt-10 w-50 sm:w-96 ">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  required
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 mt-4 sm:mt-0 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#d40000] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-xl font-bold mb-6">Need help ?? Feel free to contact us !</h3>
          <p className="text-gray-600 mb-8">
            Penatibus numquam? Non? Aliqua tempore est deserunt sequi itaque, nascetur, consequuntur conubianpg,
            explicabo? Primis convallis ullam. Egestas deserunt eius molestias app incididunut.
          </p>
          <p className="text-gray-600 mb-8">
            Nostra doloribus blandit et semper ultrices, quibusdam dignissimos! Netus recusandae, rerum cupidatat.
            Perferendis aptent wisi.
          </p>

          <div className="space-y-4">
            {/* Location */}
            <div className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Location Address</h4>
                <p className="text-gray-600">411 D Avenue, San Francisco, CS 91950</p>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Email Address</h4>
                <p className="text-gray-600">domain@company.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-red-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone Number</h4>
                <p className="text-gray-600">Telephone: 619-270-8578 / Mobile: +(911) 1987 123 88</p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-800 mb-4">Follow us on social media..</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-red-500 hover:text-red-600 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="text-red-500 hover:text-red-600 transition">
                <FaTwitter />
              </a>
              <a href="#" className="text-red-500 hover:text-red-600 transition">
                <FaInstagram />
              </a>
              <a href="#" className="text-red-500 hover:text-red-600 transition">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Iframe Section */}
      <div className="w-full h-96 mt-12">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345094744!2d144.9537353156832!3d-37.81627944202139!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5775bde2027c235!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1633513276551!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;