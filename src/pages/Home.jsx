import React from "react";
import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import BulkMessagingSection from "../components/BulkMessagingSection";
import SlideSection from "../components/SlideSection";
// import PopupModal from '../components/PopupModal';

const Home = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <HeroSection />
      <SlideSection />
      <StatsSection />
      <BulkMessagingSection />
    </div>
  );
};

export default Home;
