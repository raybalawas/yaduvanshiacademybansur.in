import React from "react";
import HeroSection from "../components/HeroSection.jsx";
import StatsSection from "../components/StatsSection.jsx";
import BulkMessagingSection from "../components/BulkMessagingSection.jsx";
import SlideSection from "../components/SlideSection.jsx";
// import PopupModal from '../components/PopupModal';
import DirectorWords from "../components/DirectorWords.jsx";
import WhatsAppButton from "../components/WhatsAppButton.jsx";
const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <SlideSection />
      <StatsSection />
      <BulkMessagingSection />
      <DirectorWords />
      <WhatsAppButton />
    </div>
  );
};

export default Home;
