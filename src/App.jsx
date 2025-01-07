import "./App.css";
import Navbar from "./components/NavbarComponent";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";

// Lazy load components
const Hero = lazy(() => import("./pages/Hero"));
const TravelSection = lazy(() => import("./components/HomePageComponent"));
const DestinationGrid = lazy(() => import("./components/TrendingDestination"));
const Gallery = lazy(() => import("./components/GalleryComponent"));
const ContactUs = lazy(() => import("./pages/Contact"));
const ParallaxCards = lazy(() => import("./pages/Package"));
const WorkWithUs = lazy(() => import("./pages/Workwithus"));

function App() {
  return (
    // <Router>
    //   <Navbar />
    //   <Suspense
    //     fallback={
    //       <div className="flex justify-center items-center h-screen text-xl">
    //         <Loader />
    //       </div>
    //     }
    //   >
    //     <Routes>
    //       <Route
    //         path="/"
    //         element={
    //           <div>
    //             <Hero />
    //             <TravelSection />
    //             <DestinationGrid />
    //           </div>
    //         }
    //       />
    //       <Route path="/gallery" element={<Gallery />} />
    //       <Route path="/contact" element={<ContactUs />} />
    //       <Route path="/package" element={<ParallaxCards />} />
    //       <Route path="/workwithus" element={<WorkWithUs />} />
    //     </Routes>
    //   </Suspense>
    //   <Footer />
    // </Router>
  );
}

export default App;
