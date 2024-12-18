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

function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<div><Hero/><TravelSection /><DestinationGrid /></div>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/package" element={<ParallaxCards/>}/>
        <Route path="/workwithus" element={<WorkWithUs/>}/>

      </Routes>
      <Footer/>
      </Router>

    
  );
}

export default App;
