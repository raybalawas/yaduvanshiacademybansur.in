import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaTimes,
  FaChevronLeft,
  FaChevronRight,
  FaDownload,
  FaShare,
  FaHeart,
  FaRegHeart,
  FaImages,
  FaCalendarAlt,
  FaCamera
} from "react-icons/fa";

// Import gallery images (add these to your assets folder)
import gallery1 from "../assets/gallery/classroom1.jpeg";
import gallery2 from "../assets/gallery/classroom2.jpeg";
import gallery3 from "../assets/gallery/classroom3.jpeg";
import gallery4 from "../assets/gallery/classroom4.jpeg";
import gallery5 from "../assets/gallery/classroom5.jpeg";
import gallery6 from "../assets/gallery/classroom6.jpeg";
import gallery7 from "../assets/gallery/classroom7.jpeg";
import gallery8 from "../assets/gallery/classroom8.jpeg";
import gallery9 from "../assets/gallery/classroom9.jpeg";
import gallery10 from "../assets/gallery/classroom10.jpeg";
import gallery11 from "../assets/gallery/classroom11.jpeg";
import gallery12 from "../assets/gallery/classroom12.jpeg";
import gallery13 from "../assets/gallery/classroom13.jpeg";
import gallery14 from "../assets/gallery/classroom14.jpeg";
import gallery15 from "../assets/gallery/classroom15.jpeg";
import gallery16 from "../assets/gallery/classroom16.jpeg";

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [likedImages, setLikedImages] = useState([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [visibleCount, setVisibleCount] = useState(8);

  const galleryImages = [
    {
      id: 1,
      src: gallery1,
      title: "Smart Classroom - Mathematics Session",
      date: "Jan 2025",
      description: "Interactive mathematics class with smart board technology",
      likes: 45
    },
    {
      id: 2,
      src: gallery2,
      title: "English Literature Class",
      date: "Jan 2025",
      description: "Students engaged in English comprehension practice",
      likes: 32
    },
    {
      id: 3,
      src: gallery3,
      title: "Well-Stocked Library",
      date: "Dec 2024",
      description: "Extensive collection of defence exam preparation books",
      likes: 67
    },
    {
      id: 4,
      src: gallery4,
      title: "Computer Lab",
      date: "Dec 2024",
      description: "Online mock test practice session",
      likes: 28
    },
    {
      id: 5,
      src: gallery5,
      title: "Morning Physical Training",
      date: "Feb 2025",
      description: "Cadets during daily PT session at 6 AM",
      likes: 89
    },
    {
      id: 6,
      src: gallery6,
      title: "Obstacle Course Training",
      date: "Feb 2025",
      description: "Students practicing for physical fitness tests",
      likes: 56
    },
    {
      id: 7,
      src: gallery7,
      title: "Annual Sports Day 2025",
      date: "Feb 2025",
      description: "Students competing in 100m sprint",
      likes: 112
    },
    {
      id: 8,
      src: gallery8,
      title: "Sainik School Mock Test",
      date: "Jan 2025",
      description: "Weekly mock test in exam-like environment",
      likes: 43
    },
    {
      id: 9,
      src: gallery9,
      title: "Selection Celebration",
      date: "Dec 2024",
      description: "Celebrating students who cleared Sainik School exam",
      likes: 156
    },
    {
      id: 10,
      src: gallery10,
      title: "Parent-Teacher Meeting",
      date: "Jan 2025",
      description: "Discussing student progress with parents",
      likes: 34
    },
    {
      id: 11,
      src: gallery11,
      title: "SSB Interview Practice",
      date: "Feb 2025",
      description: "Group discussion practice for SSB aspirants",
      likes: 78
    },
    {
      id: 12,
      src: gallery12,
      title: "Medal Ceremony 2024",
      date: "Dec 2024",
      description: "Awarding top performers of the year",
      likes: 95
    },
    {
      id: 13,
      src: gallery13,
      title: "Hostel Facility",
      date: "Nov 2024",
      description: "Comfortable accommodation for outstation students",
      likes: 47
    },
    {
      id: 14,
      src: gallery14,
      title: "Mess Facility",
      date: "Nov 2024",
      description: "Nutritious meals for cadets",
      likes: 39
    },
    {
      id: 15,
      src: gallery15,
      title: "Medical Room",
      date: "Nov 2024",
      description: "First-aid and medical facilities",
      likes: 22
    },
    {
      id: 16,
      src: gallery16,
      title: "Alumni Meet 2024",
      date: "Dec 2024",
      description: "Successful defence officers visiting their alma mater",
      likes: 134
    }
  ];

  // Simulate loading
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleImageClick = (index) => {
    setLightboxIndex(index);
    setSelectedImage(galleryImages[index]);
  };

  const handleLike = (imageId, e) => {
    e.stopPropagation();
    if (likedImages.includes(imageId)) {
      setLikedImages(likedImages.filter(id => id !== imageId));
    } else {
      setLikedImages([...likedImages, imageId]);
    }
  };

  const handlePrev = () => {
    const newIndex = lightboxIndex === 0 ? galleryImages.length - 1 : lightboxIndex - 1;
    setLightboxIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleNext = () => {
    const newIndex = lightboxIndex === galleryImages.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(newIndex);
    setSelectedImage(galleryImages[newIndex]);
  };

  const handleLoadMore = () => {
    setVisibleCount(prev => Math.min(prev + 4, galleryImages.length));
  };

  const visibleImages = galleryImages.slice(0, visibleCount);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Simple Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] py-16">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#B8860B]">Gallery</span>
            </h1>
            <p className="text-lg text-gray-200 max-w-2xl mx-auto">
              Capturing moments of discipline, learning, and success at Yaduvanshi Academy
            </p>
          </motion.div>
        </div>
      </div>

      {/* Simple Stats */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <FaImages className="text-[#B8860B]" />
              <span className="text-gray-600">{galleryImages.length} Photos</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCamera className="text-[#B8860B]" />
              <span className="text-gray-600">2024-2025</span>
            </div>
            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#B8860B]" />
              <span className="text-gray-600">Latest Updates</span>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Grid */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {isLoading ? (
          // Loading Skeleton
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {[...Array(8)].map((_, index) => (
              <div key={index} className="animate-pulse">
                <div className="bg-gray-200 h-64 rounded-lg"></div>
                <div className="mt-2 h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="mt-1 h-3 bg-gray-200 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        ) : (
          <>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
            >
              {visibleImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  className="group relative cursor-pointer"
                  onClick={() => handleImageClick(index)}
                >
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg bg-gray-100">
                    <img 
                      src={image.src} 
                      alt={image.title}
                      className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    
                    {/* Overlay - Simple on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-sm line-clamp-2">{image.title}</h3>
                        <p className="text-xs text-gray-300 mt-1">{image.date}</p>
                      </div>
                    </div>

                    {/* Like Button */}
                    <button 
                      onClick={(e) => handleLike(image.id, e)}
                      className="absolute top-3 right-3 bg-white/90 hover:bg-white p-2 rounded-full shadow-md transition transform hover:scale-110"
                    >
                      {likedImages.includes(image.id) ? (
                        <FaHeart className="text-red-500" size={16} />
                      ) : (
                        <FaRegHeart className="text-gray-600" size={16} />
                      )}
                    </button>

                    {/* Like Count */}
                    <div className="absolute bottom-3 left-3 bg-black/50 text-white px-2 py-1 rounded-full text-xs opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1">
                      <FaHeart className="text-red-500" size={10} />
                      {image.likes + (likedImages.includes(image.id) ? 1 : 0)}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Load More Button */}
            {visibleCount < galleryImages.length && (
              <div className="text-center mt-8">
                <button
                  onClick={handleLoadMore}
                  className="px-6 py-3 bg-[#0B3B2C] hover:bg-[#B8860B] text-white rounded-lg font-semibold transition transform hover:scale-105"
                >
                  Load More Photos
                </button>
              </div>
            )}
          </>
        )}
      </div>

      {/* Simple Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-[#B8860B] transition z-50 p-2 bg-black/50 rounded-full"
            >
              <FaTimes size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="absolute left-4 text-white hover:text-[#B8860B] transition z-50 p-2 bg-black/50 rounded-full"
            >
              <FaChevronLeft size={24} />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-4 text-white hover:text-[#B8860B] transition z-50 p-2 bg-black/50 rounded-full"
            >
              <FaChevronRight size={24} />
            </button>

            {/* Image Container */}
            <div 
              className="max-w-5xl w-full h-full flex items-center justify-center p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.src} 
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg"
              />
            </div>

            {/* Image Info - Minimal */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black p-6">
              <div className="max-w-3xl mx-auto">
                <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 text-sm mb-3">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <span className="text-gray-400 text-sm">📅 {selectedImage.date}</span>
                    <span className="flex items-center gap-1 text-gray-400 text-sm">
                      <FaHeart className="text-red-500" size={14} />
                      {selectedImage.likes + (likedImages.includes(selectedImage.id) ? 1 : 0)}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg text-sm transition flex items-center gap-1">
                      <FaDownload size={12} />
                      Download
                    </button>
                    <button className="bg-white/10 hover:bg-white/20 text-white px-3 py-1 rounded-lg text-sm transition flex items-center gap-1">
                      <FaShare size={12} />
                      Share
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Image Counter */}
            <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded-full text-sm">
              {lightboxIndex + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Simple CTA */}
      <div className="bg-white border-t border-gray-200 py-12">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-3">
            Visit Our Campus
          </h2>
          <p className="text-gray-600 mb-4">
            See our facilities and training in person
          </p>
          <a
            href="https://wa.me/918949540232"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-[#B8860B] hover:bg-[#9E7008] text-white rounded-lg font-semibold transition"
          >
            Contact for Visit
          </a>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;