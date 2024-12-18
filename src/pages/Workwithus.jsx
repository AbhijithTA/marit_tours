import { useNavigate } from "react-router-dom";


const WorkWithUs = () => {

  const navigate = useNavigate(); 

    return (
      <div className="text-[#d01822] py-8 ">
        <h2 className="text-center text-3xl font-bold mb-8 Equila">Work With Us</h2>
        <div className="flex flex-col md:flex-row justify-center items-start max-w-6xl mx-auto px-4 md:px-0">
          {/* Agents Section */}
          <div className="flex-1 p-6 bg-white text-black rounded-lg shadow-md m-2">
            <h3 className="text-[#d01822] text-xl font-bold mb-4">AGENTS</h3>
            <h4 className="font-bold mb-4">Why Become an Agent?</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-[#d01822] mr-3 text-2xl">⏰</span>
                Instant Confirmation with Best Prices
              </li>
              <li className="flex items-center">
                <span className="text-[#d01822] mr-3 text-2xl">🏨</span>
                Dynamic Seamless Connectivity with Hotels Worldwide
              </li>
              <li className="flex items-center">
                <span className="text-[#d01822] mr-3 text-2xl">🎧</span>
                Extensive After-Sales Support
              </li>
            </ul>
            <button className="mt-6 bg-[#d01822] hover:bg-red-900 text-white py-2 px-4 rounded-lg w-full" onClick={()=>navigate("/contact")}>
              REGISTER ONLINE
            </button>
          </div>
  
          {/* Supplier Section */}
          <div className="flex-1 p-6 bg-white text-black rounded-lg shadow-md m-2">
            <h3 className="text-[#d01822] text-xl font-bold mb-4">SUPPLIER</h3>
            <h4 className="font-bold mb-4">Why Become a Supplier?</h4>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-[#d01822] mr-3 text-2xl">🌐</span>
                Over 20,000 B2B Partners Worldwide
              </li>
              <li className="flex items-center">
                <span className="text-[#d01822] mr-3 text-2xl">📄</span>
                Capability of Activating Promotions and Last-Minute Inventory
              </li>
              <li className="flex items-center">
                <span className="text-[#d01822] mr-3 text-2xl">🔗</span>
                XML Integration with Major Operators/Agents
              </li>
            </ul>
            <button className="mt-6 bg-[#d01822] hover:bg-red-900 text-white py-2 px-4 rounded-lg w-full" onClick={()=>navigate("/contact")}>
              CONTACT US FOR REGISTER
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default WorkWithUs;