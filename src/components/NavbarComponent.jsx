import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <div className="flex  items-center ">
            <a
              href="/"
              className="flex  items-center text-[#077045] text-2xl font-bold"
            >
              <img src="/MarittoursLogo.jpg" className="h-20 sm:px-6"/>
              <h1 className="Equila text-xl sm:text-2xl">Marit Tours</h1>
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="/package"
              className="text-gray-700 hover:text-teal-500 font-medium"
            >
              Packages
            </a>
            <a
              href="/gallery"
              className="text-gray-700 hover:text-teal-500 font-medium"
            >
              Gallery
            </a>
            <a
              href="/workwithus"
              className="text-gray-700 hover:text-teal-500 font-medium"
            >
              Join Us
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-teal-500 font-medium"
            >
              Contact Us
            </a>
          </div>
          <div className="flex items-center md:hidden">
            <button
              className="text-gray-500 hover:text-teal-500 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
            <a
              href="/package"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Packages
            </a>
            <a
              href="/gallery"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </a>
            <a
              href="/workwithus"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Join Us
            </a>
            <a
              href="/contact"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
