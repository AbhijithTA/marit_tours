import React, { useRef } from "react";
import img1 from "../assets/images/destinationImages/contact.jpg";
import { motion } from "framer-motion";
import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import emailjs from "emailjs-com";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e72prm2",
        "template_posy71i",
        form.current,
        "Db5Hb2m4Eqq-NsdVg"
      )
      .then(
        () => {
          alert("Message sent successfully");
        },
        (error) => {
          alert("Failed to send message");
        }
      );
  };

  return (
    <section className="relative w-full bg-white">
      {/* Hero Section */}
      <div
        className="relative w-full h-72 bg-cover bg-center"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 flex justify-center items-center">
          <h1 className="text-4xl md:text-5xl text-white font-bold">Contact Us</h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="container mx-auto px-4 py-12 flex flex-col md:flex-row md:space-x-8">
        {/* Left Section - Form */}
        <div className="flex flex-col md:w-1/2">
          <div className="flex flex-col items-center justify-center "
            // style={{
            //   height: "60vh",
            //   // backgroundImage: `url(${img1})`,
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            //   position: "relative",

            // }}
          >
            {/* <motion.div
              className="absolute left-1/2 h-[80vh] w-[90%] sm:w-[65vw] flex flex-col items-center transform -translate-x-1/2 justify-center z-1 mt-4 bg-[#f1cca8]/90 p-4"
            > */}
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 1 }}
                className="font-redemption text-3xl sm:text3xl"
                style={{ color: "#d40000" }}
              >
                Keep in Touch ...
              </motion.h1>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="sm:space-y-6 mt-10 w-full sm:w-96"
              >
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
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone Number
                  </label>
                  <input
                    type="phone"
                    id="phone"
                    name="phone"
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
            {/* </motion.div> */}
          </div>
        </div>

        {/* Right Section */}
        <div className="md:w-1/2 mt-8 md:mt-0">
          <h3 className="text-xl font-bold mb-6">
            Need help? Feel free to contact us!
          </h3>
          <p className="text-gray-600 mb-8">
            Planning your next adventure? Our travel experts are here to guide
            you every step of the way. Whether you need help choosing a
            destination, booking your dream vacation, or answering any
            questions, we’ve got you covered!
          </p>
          <p className="text-gray-600 mb-8">
            Reach out to us for personalized travel advice, exclusive deals, and
            expert tips to make your journey unforgettable. Let us turn your
            travel dreams into reality!
          </p>

          <div className="space-y-4">
            {/* Email */}
            <div className="flex items-center space-x-4">
              <FaEnvelope className="text-red-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Email Address</h4>
                <p className="text-gray-600">marittoursandtravels@gmail.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center space-x-4">
              <FaPhoneAlt className="text-red-500 text-2xl" />
              <div>
                <h4 className="font-semibold text-gray-800">Phone Number</h4>
                <p className="text-gray-600">
                  Mobile: +(91) 7510502592 / Mobile: +(91) 9447302592
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="mt-8">
            <h4 className="font-semibold text-gray-800 mb-4">
              Follow us on social media..
            </h4>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-red-500 hover:text-red-600 transition"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="text-red-500 hover:text-red-600 transition"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="text-red-500 hover:text-red-600 transition"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="text-red-500 hover:text-red-600 transition"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Google Map Section */}
      <div className="w-full h-96 mt-12">
        <iframe
          title="Google Map"
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7858.874651889655!2d76.3239961!3d9.980687!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080cd6aa823f61%3A0xd84f3bb91b289182!2sChalikkavattom%2C%20Vennala%2C%20Ernakulam%2C%20Kochi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1734512429663!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactUs;
