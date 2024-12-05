import "./App.css";
import FooterComponent from "./components/Footer";
import GalleryComponent from "./components/GalleryComponent";
import TravelSection from "./components/HomePageComponent";
import Navbar from "./components/NavbarComponent";
import DestinationGrid from "./components/TrendingDestination";

function App() {
  return (
    <>
      <Navbar />
      <DestinationGrid />
      <TravelSection />
      <GalleryComponent />
      <FooterComponent />
    </>
  );
}

export default App;
