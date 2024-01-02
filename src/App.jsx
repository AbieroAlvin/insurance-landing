import Footer from "./components/Footer";
import IntroSection from "./components/IntroSection";
import Navbar from "./components/Navbar";
import OfferSection from "./components/OfferSection";
import Work from "./components/Work";

function App() {
  return (
    <>
      <div className="mx-auto w-full h-screen">
        <Navbar />
        <IntroSection />
        <OfferSection />
        <Work />
        <Footer />
      </div>
    </>
  );
}

export default App;
