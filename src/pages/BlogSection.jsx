import React, { useState } from "react";
import { motion } from "framer-motion";
import blog1 from "../assets/portfolio1.png";
import blog2 from "../assets/portfolio2.png";
import blog3 from "../assets/portfolio1.png";
import blog4 from "../assets/portfolio2.png";
import blog5 from "../assets/portfolio1.png";
import blog6 from "../assets/portfolio2.png";

const categories = [
  "Latest",
  "Sainik School",
  "Military School",
  "NDA Foundation",
  "RIMC",
  "Physical Training",
];

const postsByCat = {
  Latest: [
    {
      id: 1,
      title: "Sainik School Entrance Exam 2025: Complete Guide",
      category: "Sainik School",
      author: "Col. Mehta",
      date: "1 March, 2025",
      img: blog1,
      content: "Comprehensive guide for AISSEE 2025 including syllabus, exam pattern, and preparation tips for Class 6 and 9 admissions.",
    },
    {
      id: 2,
      title: "10 Essential Exercises for Military School Aspirants",
      category: "Physical Training",
      author: "Physical Instructor Yadav",
      date: "25 Feb, 2025",
      img: blog4,
      content: "Daily workout routine to build stamina, strength, and agility required for physical tests in military schools.",
    },
    {
      id: 3,
      title: "Why NDA Foundation Course from Class 8 is Important",
      category: "NDA Foundation",
      author: "Lt. Col. Verma",
      date: "15 Feb, 2025",
      img: blog3,
      content: "Early preparation for NDA exam gives students a significant advantage. Learn about our structured foundation program.",
    },
  ],
  "Sainik School": [
    {
      id: 4,
      title: "Sainik School vs Military School: Key Differences",
      category: "Sainik School",
      author: "Captain Rawat",
      date: "10 Feb, 2025",
      img: blog5,
      content: "Understanding the differences between Sainik Schools, Rashtriya Military Schools, and other defence institutions.",
    },
    {
      id: 5,
      title: "How to Apply for Sainik School Admission 2025",
      category: "Sainik School",
      author: "Admission Officer",
      date: "5 Feb, 2025",
      img: blog2,
      content: "Step-by-step application process, important dates, and documents required for Sainik School admission.",
    },
  ],
  "Military School": [
    {
      id: 6,
      title: "Life at Rashtriya Military School",
      category: "Military School",
      author: "Cadet Sharma",
      date: "20 Jan, 2025",
      img: blog6,
      content: "A day in the life of a cadet at Rashtriya Military School - academics, sports, and character building.",
    },
  ],
  "NDA Foundation": [
    {
      id: 7,
      title: "NDA Written Exam Preparation Strategy",
      category: "NDA Foundation",
      author: "Major Singh",
      date: "10 Jan, 2025",
      img: blog1,
      content: "Subject-wise preparation plan for Mathematics, English, and General Knowledge for NDA entrance exam.",
    },
  ],
  "RIMC": [
    {
      id: 8,
      title: "RIMC Entrance Exam: Everything You Need to Know",
      category: "RIMC",
      author: "Brig. Kulkarni",
      date: "1 Jan, 2025",
      img: blog2,
      content: "Complete information about Rashtriya Indian Military College (RIMC) admission process, eligibility, and preparation.",
    },
  ],
  "Physical Training": [
    {
      id: 9,
      title: "Physical Standards Required for Defence Exams",
      category: "Physical Training",
      author: "Physical Instructor Tomar",
      date: "20 Dec, 2024",
      img: blog4,
      content: "Height, weight, chest measurements, and physical fitness standards for various defence academy entries.",
    },
  ],
};

const PER_PAGE = 6;

const BlogPage = () => {
  const [activeCat, setActiveCat] = useState("Latest");
  const [page, setPage] = useState(1);
  const posts = postsByCat[activeCat] || [];
  const totalPages = Math.ceil(posts.length / PER_PAGE);
  const displayPosts = posts.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  const [selectedPost, setSelectedPost] = useState(null);

  return (
    <div className="min-h-screen bg-white">
      <div className="py-16 bg-[#0B3B2C]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto px-6 text-center text-white"
        >
          <h1 className="text-4xl font-bold mb-4">
            National Defence Academy Blog
          </h1>
          <p className="text-gray-200 text-lg mb-6">
            Expert guidance on Sainik School, Military School, NDA, and defence exam preparation
          </p>
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full md:w-2/3 p-3 rounded-md border border-gray-300 focus:ring-[#B8860B] focus:outline-none text-gray-900"
          />
        </motion.div>
      </div>

      <div className="mt-8 max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCat(cat);
                setPage(1);
                setSelectedPost(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                activeCat === cat
                  ? "bg-[#B8860B] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {selectedPost ? (
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              <img
                src={selectedPost.img}
                alt={selectedPost.title}
                className="w-full h-96 object-cover rounded"
              />
              <h2 className="text-3xl font-bold mt-6 mb-2 text-gray-800">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-gray-500 mb-4">
                By {selectedPost.author} | {selectedPost.date}
              </p>
              <p className="text-lg text-gray-700 whitespace-pre-wrap">
                {selectedPost.content}
              </p>
            </div>
            <div className="bg-gray-50 rounded p-4 shadow-md">
              <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
              {posts
                .filter((p) => p.id !== selectedPost.id)
                .slice(0, 3)
                .map((post) => (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post)}
                    className="cursor-pointer mb-4 p-2 hover:bg-gray-100 rounded"
                  >
                    <p className="text-sm text-[#B8860B] font-medium">
                      {post.category}
                    </p>
                    <p className="text-md font-semibold text-gray-800">
                      {post.title}
                    </p>
                  </div>
                ))}
            </div>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post) => (
                <div
                  key={post.id}
                  onClick={() => setSelectedPost(post)}
                  className="cursor-pointer bg-white rounded-lg shadow-md overflow-hidden transition hover:shadow-lg border-t-4 border-[#B8860B]"
                >
                  <img
                    src={post.img}
                    alt={post.title}
                    className="w-full h-60 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-sm text-[#B8860B] font-semibold mb-1">
                      {post.category}
                    </p>
                    <h2 className="text-xl font-bold text-gray-800 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-sm text-gray-600">
                      By {post.author} | {post.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {totalPages > 1 && (
              <div className="mt-10 flex justify-center gap-4">
                <button
                  onClick={() => setPage((p) => Math.max(p - 1, 1))}
                  disabled={page === 1}
                  className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-[#B8860B] hover:text-white transition"
                >
                  Previous
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                  disabled={page === totalPages}
                  className="px-4 py-2 border rounded disabled:opacity-50 hover:bg-[#B8860B] hover:text-white transition"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BlogPage;