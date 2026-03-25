import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp, FaPhone, FaGraduationCap, FaMedal } from "react-icons/fa";

import heroVideo from "../assets/hero_video.mp4"; // You'll need to update this with a defence academy video

const HeroSection = () => {
  return (
    <section className="relative h-[100vh] flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Gradient Overlay - Updated with academy colors */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0B3B2C] via-[#0B3B2C]/90 to-[#1a5a3a] opacity-85 z-10" />

      {/* Main Content */}
      <div className="relative z-20 text-white text-center px-6 max-w-5xl">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-[#B8860B] px-4 py-2 rounded-full mb-6 animate-pulse">
          <FaMedal className="text-white" />
          <span className="text-sm font-semibold">ESTABLISHED 2014</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg">
          Shape Your Future,{" "}
          <span className="text-[#B8860B]">Serve the Nation</span>
        </h1>

        {/* Subheading */}
        <p className="mt-6 text-lg md:text-xl text-gray-100 max-w-3xl mx-auto leading-relaxed">
          At <strong className="text-[#B8860B]">Yaduvanshi Academy Bansur</strong>, 
          we transform young minds into future officers through disciplined coaching, 
          academic excellence, and physical training for{" "}
          <span className="font-semibold">Sainik School, Military School, RIMC & NDA</span> entrance exams.
        </p>

        {/* Stats Strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 md:gap-12">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#B8860B]">12+</div>
            <div className="text-xs md:text-sm text-gray-200">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#B8860B]">200+</div>
            <div className="text-xs md:text-sm text-gray-200">Students Trained</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#B8860B]">50+</div>
            <div className="text-xs md:text-sm text-gray-200">Sainik Selections</div>
          </div>
          {/* <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-[#B8860B]">100+</div>
            <div className="text-xs md:text-sm text-gray-200">NDA Cadets</div>
          </div> */}
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/contact"
            className="px-8 py-4 bg-[#B8860B] hover:bg-[#9E7008] text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group"
          >
            <FaGraduationCap className="group-hover:rotate-12 transition" />
            Enroll Now
          </Link>
          
          <a
            href="https://wa.me/917725945908?text=Hello%20👋%2C%20I'm%20interested%20in%20your%20defence%20coaching%20programs"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
          >
            <FaWhatsapp size={20} />
            Chat on WhatsApp
          </a>
        </div>

        {/* Quick Contact */}
        <div className="mt-8 flex items-center justify-center gap-4 text-sm text-gray-200">
          <a href="tel:+917725945908" className="flex items-center gap-2 hover:text-[#B8860B] transition">
            <FaPhone size={14} />
            +91 7725945908
          </a>
          <span className="text-[#B8860B]">|</span>
          <a href="tel:+918503998922" className="flex items-center gap-2 hover:text-[#B8860B] transition">
            <FaPhone size={14} />
            +91 8503998922
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-2 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;