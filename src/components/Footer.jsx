import { Link } from "react-router-dom";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { SiInstagram } from "react-icons/si";

const Footer = () => {
  return (
    <div className="bg-red-800 text-white py-10 flex flex-col space-y-10 px-5 md:px-10 lg:px-20 xl:px-40">
      <div className="flex flex-col lg:flex-row justify-center gap-10 py-10">
        <div className="flex-1 space-y-5 text-center lg:text-left">
          <h2 className="text-xl font-semibold Equila">About Us</h2>
          <p>
            At Marit Tours, we specialize in creating unforgettable travel experiences. From breathtaking destinations to personalized itineraries, we’re here to make your dream vacations a reality. Explore the world with us and create memories that last a lifetime!
          </p>
        </div>

        <div className="flex-1 space-y-1 text-center lg:text-left">
          <h2 className="text-xl font-semibold Achemost">Quick Links</h2>
          <div className="flex flex-col space-y-2">
            <Link to="/" className="hover:underline">HOME</Link>
            <Link to="/about" className="hover:underline">ABOUT US</Link>
            <Link to="/gallery" className="hover:underline">GALLERY</Link>
            <Link to="/workwithus" className="hover:underline">JOIN US</Link>
            <Link to="/contact" className="hover:underline">CONTACT US</Link>
          </div>
        </div>

        <div className="flex-1 space-y-5 text-center lg:text-left">
          <h2 className="text-xl font-semibold Equila">Contact Us</h2>
          <p>Contact No.: +91 9447302592</p>
          <div className="flex justify-center lg:justify-start space-x-3">
            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black">
              <SiInstagram />
            </a>
            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black">
              <BsTwitter />
            </a>
            <a href="#" className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white flex items-center justify-center text-black">
              <BsFacebook />
            </a>
          </div>
        </div>
      </div>
      
      <div className="text-center border-t border-gray-500 pt-5 space-y-2">
        <p>&copy; {new Date().getFullYear()} Marit Tours. All rights reserved.</p>
        <p>
          <a href="#" className="text-black hover:underline">Privacy Policy</a> | {" "}
          <a href="#" className="text-black hover:underline">Terms of Service</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;