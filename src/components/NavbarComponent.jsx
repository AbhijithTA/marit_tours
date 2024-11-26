import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <a
              href="/"
              className="flex items-center text-teal-500 text-2xl font-bold"
            >
              <span className="mr-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12l2-2m0 0l7-7 7 7M13 5v10a1 1 0 001 1h3m10-12l-2 2m-7 7-7 7-7-7"
                  />
                </svg>
              </span>
              Marit Tours
            </a>
          </div>
          <div className="hidden md:flex space-x-8">
            <a
              href="#aboutus"
              className="text-gray-700 hover:text-teal-500 font-medium"
            >
              About Us
            </a>
            <a
              href="#aboutus"
              className="text-gray-700 hover:text-teal-500 font-medium"
            >
              Gallery
            </a>
            <a
              href="#aboutus"
              className="text-gray-700 hover:text-teal-500 font-medium"
            >
              Join Us
            </a>
            <a
              href="#aboutus"
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
              href="#about-us"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              About Us
            </a>
            <a
              href="#gallery"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Gallery
            </a>
            <a
              href="#join-us"
              className="block text-gray-700 hover:text-teal-500 px-3 py-2 rounded-md text-base font-medium"
            >
              Join Us
            </a>
            <a
              href="#contact"
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
