

const FooterComponent = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-10">
      <div className="container mx-auto px-4 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* About Section */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-teal-400 pl-2">
            ABOUT TRAVEL
          </h4>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
            tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
          <div className="flex items-center space-x-4 mt-4">
            <img
              src="https://via.placeholder.com/50"
              alt="Award"
              className="w-10 h-10"
            />
            <img
              src="https://via.placeholder.com/50"
              alt="Magazine"
              className="w-10 h-10"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-teal-400 pl-2">
            CONTACT INFORMATION
          </h4>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <span className="font-bold">Phone:</span> +01 (977) 2599 12
            </li>
            <li>
              <span className="font-bold">Email:</span> company@domain.com
            </li>
            <li>
              <span className="font-bold">Address:</span> 3146 Koontz,
              California
            </li>
          </ul>
        </div>

        {/* Latest Posts */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-teal-400 pl-2">
            LATEST POST
          </h4>
          <ul className="space-y-4 text-sm">
            <li>
              <a href="#" className="text-teal-400 hover:underline">
                Life is a beautiful journey not a destination
              </a>
              <p className="text-gray-400 text-xs">August 17, 2021 | No Comments</p>
            </li>
            <li>
              <a href="#" className="text-teal-400 hover:underline">
                Take only memories, leave only footprints
              </a>
              <p className="text-gray-400 text-xs">August 17, 2021 | No Comments</p>
            </li>
          </ul>
        </div>

        {/* Subscribe Section */}
        <div>
          <h4 className="text-xl font-bold text-white mb-4 border-l-4 border-teal-400 pl-2">
            SUBSCRIBE US
          </h4>
          <p className="text-sm leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <form className="mt-4">
            <input
              type="email"
              placeholder="Your Email.."
              className="w-full px-4 py-2 text-gray-900 bg-white rounded focus:outline-none"
            />
            <button
              type="submit"
              className="mt-2 w-full bg-teal-500 text-white py-2 rounded hover:bg-teal-600"
            >
              SUBSCRIBE NOW
            </button>
          </form>
        </div>
      </div>

      <div className="mt-8 border-t border-gray-700 pt-6 text-center text-sm">
        <p className="mb-4">
          <a href="#" className="text-teal-400 hover:underline">
            Privacy Policy
          </a>{" "}
          |{" "}
          <a href="#" className="text-teal-400 hover:underline">
            Terms & Conditions
          </a>{" "}
          |{" "}
          <a href="#" className="text-teal-400 hover:underline">
            FAQ
          </a>
        </p>
        <p className="text-gray-500">© 2024 Travel Co. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterComponent;
