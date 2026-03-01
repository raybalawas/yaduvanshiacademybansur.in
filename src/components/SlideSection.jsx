import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaChevronLeft, 
  FaChevronRight, 
  FaPlay, 
  FaPause,
  FaCircle,
  FaExpand
} from 'react-icons/fa';

// Import your images (add these to your assets folder)
import slide1 from '../assets/slides/campus1.jpg';
import slide2 from '../assets/slides/training1.jpg';
import slide3 from '../assets/slides/classroom1.jpg';
import slide4 from '../assets/slides/event1.jpg';
import slide5 from '../assets/slides/library.jpg';
import slide6 from '../assets/slides/graduation.jpg';

const SlideSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const slides = [
    {
      id: 1,
      image: slide1,
      title: "Yaduvanshi Academy Campus",
      description: "State-of-the-art infrastructure spread across 5 acres",
      date: "2025",
      category: "Campus"
    },
    {
      id: 2,
      image: slide2,
      title: "Morning Physical Training",
      description: "Cadets during daily PT session at 6 AM",
      date: "2025",
      category: "Training"
    },
    {
      id: 3,
      image: slide3,
      title: "Smart Classroom",
      description: "Interactive learning with modern technology",
      date: "2025",
      category: "Facilities"
    },
    {
      id: 4,
      image: slide4,
      title: "Annual Sports Day 2025",
      description: "Students competing in various sports events",
      date: "2025",
      category: "Events"
    },
    {
      id: 5,
      image: slide5,
      title: "Well-Stocked Library",
      description: "Extensive collection of defence exam preparation books",
      date: "2024",
      category: "Facilities"
    },
    {
      id: 6,
      image: slide6,
      title: "Selection Celebration",
      description: "Celebrating students who cleared Sainik School exam",
      date: "2024",
      category: "Events"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      handleNext();
    }
    if (isRightSwipe) {
      handlePrev();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
    setIsAutoPlaying(false);
  };

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
        setIsFullscreen(false);
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold text-gray-900 mb-4"
          >
            Campus <span className="text-[#B8860B]">Gallery</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            A glimpse into the life at Yaduvanshi Academy - where future defence officers are shaped
          </motion.p>
        </div>

        {/* Main Slider Container */}
        <div className="relative group">
          {/* Main Slider */}
          <div 
            className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Image */}
                <img
                  src={slides[currentIndex].image}
                  alt={slides[currentIndex].title}
                  className="w-full h-full object-cover"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {/* Category Badge */}
                    <span className="inline-block bg-[#B8860B] text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
                      {slides[currentIndex].category}
                    </span>

                    {/* Title */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-2">
                      {slides[currentIndex].title}
                    </h3>

                    {/* Description */}
                    <p className="text-lg text-gray-200 mb-4 max-w-2xl">
                      {slides[currentIndex].description}
                    </p>

                    {/* Date */}
                    <p className="text-sm text-gray-300">
                      📅 {slides[currentIndex].date}
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons - Desktop */}
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            >
              <FaChevronRight size={20} />
            </button>

            {/* Top Controls */}
            <div className="absolute top-4 right-4 flex gap-2">
              {/* Play/Pause Button */}
              <button
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                {isAutoPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
              </button>

              {/* Fullscreen Button */}
              <button
                onClick={toggleFullscreen}
                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full"
              >
                <FaExpand size={16} />
              </button>
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
              {currentIndex + 1} / {slides.length}
            </div>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-6 flex justify-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                onClick={() => handleDotClick(index)}
                className={`relative w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentIndex 
                    ? 'ring-2 ring-[#B8860B] scale-110' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center mt-6 gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className="group"
              >
                <FaCircle
                  size={12}
                  className={`transition-all duration-300 ${
                    index === currentIndex
                      ? 'text-[#B8860B] scale-125'
                      : 'text-gray-300 group-hover:text-gray-400'
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Quick Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { number: "36+", label: "Photos", icon: "📸" },
            { number: "12", label: "Facilities", icon: "🏛️" },
            { number: "8", label: "Events", icon: "🎉" },
            { number: "6", label: "Categories", icon: "📑" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-4 rounded-xl shadow-md text-center"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-[#B8860B]">{stat.number}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SlideSection;