import img1 from "../assets/images/destinationImages/1.jpg";
import img2 from "../assets/images/destinationImages/2.jpg";
import img3 from "../assets/images/destinationImages/Hampiii.jpg";
import img4 from "../assets/images/destinationImages/ooty.webp";
import img5 from "../assets/images/destinationImages/5.jpg";
import img6 from "../assets/images/destinationImages/6.jpg";

const destinations = [
  {
    id: 1,
    name: "Munnar",
    tours: "15 Tours",
    image: img1, 
    size: "row-span-2 col-span-2", 
  },
  {
    id: 2,
    name: "Wayanad",
    tours: "10 Tours",
    image: img2, 
    size: "col-span-1", 
  },
  {
    id: 3,
    name: "Hampi",
    tours: "12 Tours",
    image: img3, 
    size: "col-span-1", 
  },
  {
    id: 4,
    name: "Ooty",
    tours: "8 Tours",
    image: img4, 
    size: "col-span-1", 
  },
  {
    id: 5,
    name: "Koorg",
    tours: "8 Tours",
    image: img5, 
    size: "col-span-1", 
  },
  {
    id: 6,
    name: "Kodaikanal",
    tours: "8 Tours",
    image: img6, 
    size: "col-span-1", 
  },
];

const DestinationGrid = () => {
    return (
      <div className="py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8 Achemost">
          <span className="text-gray-900">Trending </span>
          <span className="text-[#d01822]">Destinations</span>
        </h2>
        <div className="grid grid-cols-3 grid-rows-2 gap-4 max-w-7xl mx-auto">
          {destinations.map((destination) => (
            <div
              key={destination.id}
              className={`relative overflow-hidden rounded-lg shadow-lg ${destination.size} group`}
            >
              {/* Image */}
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Overlay */}
              <div
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              ></div>
              
              {/* Title (Initially Hidden) */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <h3 className="text-white font-semibold text-lg">
                  {destination.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default DestinationGrid;
  
  
