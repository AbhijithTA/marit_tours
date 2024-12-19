import "./App.css";
import Navbar from "./components/NavbarComponent";
import DestinationGrid from "./components/TrendingDestination";
import Hero from "./pages/Hero";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TravelSection from "./components/HomePageComponent";
import Gallery from "./components/GalleryComponent";
import ContactUs from "./pages/Contact";
import ParallaxCards from "./pages/Package";
import WorkWithUs from "./pages/Workwithus";
import Loader from "./components/Loader";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    window.addEventListener("load", handleLoad);
    return () => window.removeEventListener("load", handleLoad);
  }, []);

  return (
    <>
      {isLoading && <Loader />}
      <Router>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Hero />
                <TravelSection />
                <DestinationGrid />
              </div>
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/package" element={<ParallaxCards />} />
          <Route path="/workwithus" element={<WorkWithUs />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
