import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Amenities from "./components/Amenities";
import RoomList from "./components/RoomList";
import Ubication from "./components/Ubication";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
import CallToAction from "./components/CallToAction";

function App() {
  return (
    <div className="min-h-screen bg-colonial-crema font-sans">
      <Navbar />
      <Hero />
      <Amenities />
      <RoomList />
      <Ubication />
      <Gallery />
      <CallToAction />
      <Footer />
    </div>
  )
}

export default App
