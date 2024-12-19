import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-red-800 text-white py-10 px-4 sm:px-6 md:px-10 lg:px-20 xl:px-40">
      
      {/* Grid Layout for Footer */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pb-10">
        
        {/* About Us Section */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-xl font-semibold Equila">About Us</h2>
          <p className="text-sm leading-relaxed">
            Welcome to Marit Tours! Established in 2003, we are a premier tour
            operator based in Chakkaraparambu, Vyttila, dedicated to offering
            exceptional travel experiences across South India. Over the years,
            we have grown rapidly, building a loyal base of over 500+ happy
            customers who trust us for our commitment to quality service and
            memorable journeys. With over two decades of expertise, we
            specialize in curating customized tours across the beautiful
            landscapes of South India.
          </p>
        </div>

        {/* Quick Links Section */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-xl font-semibold Achemost">Quick Links</h2>
          <ul className="flex flex-col space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/package" className="hover:underline">
                Packages
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                GALLERY
              </Link>
            </li>
            <li>
              <Link to="/workwithus" className="hover:underline">
                JOIN US
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-5 text-center md:text-left">
          <h2 className="text-xl font-semibold Equila">Contact Us</h2>
          <p>Contact No.: +91 9447302592</p>
          <div className="flex justify-center md:justify-start space-x-4">
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-red-800 hover:bg-red-700 hover:text-white transition-all duration-300"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-red-800 hover:bg-red-700 hover:text-white transition-all duration-300"
            >
              <BsTwitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-red-800 hover:bg-red-700 hover:text-white transition-all duration-300"
            >
              <BsFacebook className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>

      {/* Bottom Section */}
      <div className="text-center border-t border-gray-500 pt-5 space-y-2">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Marit Tours. All rights reserved.
        </p>
        <p className="text-sm">
          <a href="#" className="text-white hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-white hover:underline">
            Terms of Service
          </a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
