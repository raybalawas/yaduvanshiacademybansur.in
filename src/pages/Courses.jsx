import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  FaSchool, 
  FaMedal, 
  FaRunning, 
  FaChalkboardTeacher,
  FaClipboardList,
  FaClock,
  FaRupeeSign,
  FaUserGraduate,
  FaBook,
  FaCheckCircle,
  FaWhatsapp,
  FaPhone,
  FaCalendarAlt,
  FaTrophy
} from "react-icons/fa";

// Import course images (add these to your assets folder)
// import sainikImage from "../assets/SainikSchool.png";
import militaryImage from "../assets/militrySchool.png";
// import rimcImage from "../assets/SainikSchool.png";\

import ndaImage from "../assets/militrySchool.png";
// import ssbImage from "../assets/SainikSchool.png";
import physicalImage from "../assets/militrySchool.png";

const CoursesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [expandedCourse, setExpandedCourse] = useState(null);

  const courses = [
    // {
    //   id: 1,
    //   title: "Sainik School Coaching (Class 6)",
    //   category: "sainik",
    //   image: sainikImage,
    //   duration: "1 Year (Full Time)",
    //   fee: "45,000",
    //   batchSize: "25-30 students",
    //   ageGroup: "10-12 years",
    //   exam: "AISSEE - Class 6",
    //   description: "Comprehensive coaching for All India Sainik Schools Entrance Examination for Class 6 admission. Focus on building strong fundamentals in all subjects.",
    //   features: [
    //     "Complete syllabus coverage - Maths, Intelligence, Language, GK",
    //     "Weekly mock tests with performance analysis",
    //     "Doubt clearing sessions",
    //     "Study materials & practice papers",
    //     "Previous years' question papers",
    //     "Regular parent-teacher meetings"
    //   ],
    //   curriculum: [
    //     "Mathematics - Number system, Algebra, Geometry, Mensuration",
    //     "Intelligence - Verbal & Non-verbal reasoning",
    //     "English - Grammar, Comprehension, Vocabulary",
    //     "General Knowledge - Current affairs, Science, Social Studies"
    //   ],
    //   schedule: "Mon-Sat: 8:00 AM - 2:00 PM",
    //   faculty: "Experienced teachers with defence background",
    //   successRate: "85% selection rate",
    //   icon: <FaSchool className="text-3xl" />
    // },
    // {
    //   id: 2,
    //   title: "Sainik School Coaching (Class 9)",
    //   category: "sainik",
    //   image: sainikImage,
    //   duration: "1 Year (Full Time)",
    //   fee: "48,000",
    //   batchSize: "25-30 students",
    //   ageGroup: "13-15 years",
    //   exam: "AISSEE - Class 9",
    //   description: "Specialized coaching for Class 9 Sainik School entrance exam with advanced curriculum and intensive practice.",
    //   features: [
    //     "Advanced Mathematics & Science",
    //     "English & Reasoning preparation",
    //     "General Knowledge & Current Affairs",
    //     "Mock tests & previous papers",
    //     "Personalized attention",
    //     "Weekly progress reports"
    //   ],
    //   curriculum: [
    //     "Mathematics - Advanced algebra, Trigonometry, Statistics",
    //     "Science - Physics, Chemistry, Biology basics",
    //     "English - Advanced grammar, Writing skills",
    //     "Social Studies - History, Geography, Civics",
    //     "Intelligence Test - Complex reasoning"
    //   ],
    //   schedule: "Mon-Sat: 8:00 AM - 2:00 PM",
    //   faculty: "Subject matter experts with defence academy experience",
    //   successRate: "80% selection rate",
    //   icon: <FaSchool className="text-3xl" />
    // },
    {
      id: 3,
      title: "Military School (RMS) Coaching",
      category: "military",
      image: militaryImage,
      duration: "9 Months",
      fee: "40,000",
      batchSize: "20-25 students",
      ageGroup: "10-12 years (Class 6) & 13-15 years (Class 9)",
      exam: "RMS CET",
      description: "Complete preparation for Rashtriya Military Schools Common Entrance Test (RMS CET) for Class 6 and Class 9 admissions.",
      features: [
        "Subject-wise expert faculty",
        "Intelligence & reasoning practice",
        "English language enhancement",
        "General awareness classes",
        "Interview preparation",
        "Physical fitness assessment"
      ],
      curriculum: [
        "Mathematics - Complete syllabus coverage",
        "Intelligence Test - Verbal & Non-verbal",
        "English - Grammar, Vocabulary, Comprehension",
        "General Knowledge - Current affairs, Basic science"
      ],
      schedule: "Mon-Sat: 9:00 AM - 3:00 PM",
      faculty: "Experienced RMS trainers",
      successRate: "75% selection rate",
      icon: <FaMedal className="text-3xl" />
    },
    // {
    //   id: 4,
    //   title: "RIMC Coaching Program",
    //   category: "rimc",
    //   image: rimcImage,
    //   duration: "6 Months (Residential)",
    //   fee: "85,000",
    //   batchSize: "15-20 students",
    //   ageGroup: "11-13 years (Boys only)",
    //   exam: "RIMC Entrance Exam",
    //   description: "Intensive residential coaching for Rashtriya Indian Military College (RIMC) Dehradun. Limited seats with focused preparation.",
    //   features: [
    //     "Residential facility with military discipline",
    //     "English essay & comprehension focus",
    //     "Advanced Mathematics coaching",
    //     "General Knowledge & current affairs",
    //     "Interview & personality assessment",
    //     "Medical examination guidance",
    //     "Physical training & sports"
    //   ],
    //   curriculum: [
    //     "English - Essay writing, Comprehension, Grammar",
    //     "Mathematics - Advanced topics",
    //     "General Knowledge - History, Geography, Current events",
    //     "Interview preparation - SSB style"
    //   ],
    //   schedule: "Full time residential",
    //   faculty: "Retired defence officers & experienced educators",
    //   successRate: "90% selection rate (limited seats)",
    //   icon: <FaTrophy className="text-3xl" />
    // },
    // {
    //   id: 5,
    //   title: "NDA Foundation Course",
    //   category: "nda",
    //   image: ndaImage,
    //   duration: "2-3 Years",
    //   fee: "65,000 per year",
    //   batchSize: "25-30 students",
    //   ageGroup: "Class 8-10 students",
    //   exam: "NDA Entrance Exam",
    //   description: "Early foundation program for students from Class 8-10 aiming for National Defence Academy (NDA) after Class 12.",
    //   features: [
    //     "Mathematics foundation (Algebra, Calculus, Trigonometry)",
    //     "English - Grammar, Vocabulary, Comprehension",
    //     "General Studies - History, Geography, Polity, Economics",
    //     "Current affairs & defence news",
    //     "Physical training & sports",
    //     "SSB interview orientation",
    //     "Weekly tests & assessments"
    //   ],
    //   curriculum: [
    //     "Mathematics - Complete foundation",
    //     "English - Advanced language skills",
    //     "General Studies - Comprehensive coverage",
    //     "Current Affairs - Monthly updates",
    //     "Physics & Chemistry basics"
    //   ],
    //   schedule: "Mon-Sat: 7:00 AM - 1:00 PM + Physical training",
    //   faculty: "Subject experts with NDA coaching experience",
    //   successRate: "70% progress to NDA coaching",
    //   icon: <FaUserGraduate className="text-3xl" />
    // },
    // {
    //   id: 6,
    //   title: "SSB Interview Preparation",
    //   category: "ssb",
    //   image: ssbImage,
    //   duration: "3 Months",
    //   fee: "35,000",
    //   batchSize: "15-20 students",
    //   ageGroup: "17-22 years",
    //   exam: "SSB Interview",
    //   description: "Comprehensive preparation for Services Selection Board (SSB) interview including psychology tests, GTO tasks, and personal interview.",
    //   features: [
    //     "Psychology tests - TAT, WAT, SRT, PI",
    //     "GTO tasks - Group discussions, GD, GPE",
    //     "Personal interview preparation",
    //     "Lecturette practice",
    //     "Physical fitness training",
    //     "Mock SSB boards",
    //     "Individual feedback sessions"
    //   ],
    //   curriculum: [
    //     "Stage 1 - Screening (OIR, PPDT)",
    //     "Stage 2 - Psychology tests",
    //     "Stage 2 - GTO tasks",
    //     "Stage 2 - Personal interview",
    //     "Conference preparation"
    //   ],
    //   schedule: "Mon-Sat: 8:00 AM - 4:00 PM",
    //   faculty: "Retired officers & psychologists",
    //   successRate: "85% recommendation rate",
    //   icon: <FaClipboardList className="text-3xl" />
    // },
    {
      id: 7,
      title: "Physical Training Program",
      category: "physical",
      image: physicalImage,
      duration: "6 Months",
      fee: "25,000",
      batchSize: "20-25 students",
      ageGroup: "All age groups",
      exam: "Physical Fitness Tests",
      description: "Specialized physical training to meet defence fitness standards. Includes running, endurance, strength training, and sports.",
      features: [
        "Daily PT & drills",
        "Running - 1.6km, 5km training",
        "Endurance building",
        "Strength training",
        "Long jump & high jump practice",
        "Obstacle course training",
        "Sports - Football, Basketball, Volleyball",
        "Yoga & meditation"
      ],
      curriculum: [
        "Morning PT - 6:00 AM - 7:30 AM",
        "Evening sports - 4:00 PM - 6:00 PM",
        "Weekly fitness assessments",
        "Diet & nutrition guidance"
      ],
      schedule: "Daily morning & evening",
      faculty: "Physical instructors & ex-servicemen",
      successRate: "100% fitness improvement",
      icon: <FaRunning className="text-3xl" />
    }
  ];

  const categories = [
    { id: "all", label: "All Courses", icon: "📚" },
    { id: "sainik", label: "Sainik School", icon: "🎯" },
    { id: "military", label: "Military School", icon: "🏛️" },
    { id: "rimc", label: "RIMC", icon: "⭐" },
    // { id: "nda", label: "NDA Foundation", icon: "📘" },
    // { id: "ssb", label: "SSB Interview", icon: "🗣️" },
    { id: "physical", label: "Physical Training", icon: "💪" }
  ];

  const filteredCourses = selectedCategory === "all" 
    ? courses 
    : courses.filter(course => course.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#0B3B2C] to-[#1a5a3a] py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our <span className="text-[#B8860B]">Defence Coaching</span> Programs
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-200 max-w-3xl mx-auto"
          >
            Choose from our specialized coaching programs designed to crack 
            Sainik School, Military School and RIMC  entrance examinations
          </motion.p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-20 z-40 bg-white shadow-md py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  selectedCategory === category.id
                    ? "bg-[#B8860B] text-white shadow-lg transform scale-105"
                    : "bg-gray-100 text-gray-700 hover:bg-[#B8860B] hover:text-white"
                }`}
              >
                <span>{category.icon}</span>
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 border-l-4 border-[#B8860B]"
            >
              {/* Course Header with Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B3B2C] to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                  <h3 className="text-2xl font-bold text-white">{course.title}</h3>
                  <span className="bg-[#B8860B] text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.duration}
                  </span>
                </div>
              </div>

              {/* Course Details */}
              <div className="p-6">
                {/* Quick Info Strip */}
                <div className="flex flex-wrap gap-3 mb-4">
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <FaRupeeSign /> {course.fee}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    👥 {course.batchSize}
                  </span>
                  <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">
                    🎯 {course.exam}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-4">{course.description}</p>

                {/* Expandable Details */}
                <div className="space-y-4">
                  {/* Key Features Preview */}
                  <div>
                    <h4 className="font-semibold text-[#0B3B2C] mb-2 flex items-center gap-2">
                      <FaCheckCircle className="text-[#B8860B]" />
                      Key Features:
                    </h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {course.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="text-[#B8860B] mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Show More Button */}
                  <button
                    onClick={() => setExpandedCourse(expandedCourse === course.id ? null : course.id)}
                    className="text-[#B8860B] hover:text-[#0B3B2C] font-semibold text-sm flex items-center gap-1"
                  >
                    {expandedCourse === course.id ? "Show Less ▲" : "Show More ▼"}
                  </button>

                  {/* Expanded Content */}
                  {expandedCourse === course.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="space-y-4 pt-4 border-t border-gray-200"
                    >
                      {/* Curriculum */}
                      <div>
                        <h4 className="font-semibold text-[#0B3B2C] mb-2 flex items-center gap-2">
                          <FaBook className="text-[#B8860B]" />
                          Curriculum:
                        </h4>
                        <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                          {course.curriculum.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>

                      {/* Schedule & Faculty */}
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-[#0B3B2C] flex items-center gap-2">
                            <FaClock className="text-[#B8860B]" />
                            Schedule:
                          </p>
                          <p className="text-sm text-gray-600">{course.schedule}</p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-[#0B3B2C] flex items-center gap-2">
                            <FaChalkboardTeacher className="text-[#B8860B]" />
                            Faculty:
                          </p>
                          <p className="text-sm text-gray-600">{course.faculty}</p>
                        </div>
                      </div>

                      {/* Success Rate */}
                      <div className="bg-green-50 p-3 rounded-lg">
                        <p className="text-sm font-semibold text-green-700">
                          📈 Success Rate: {course.successRate}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex gap-3">
                  <button className="flex-1 bg-[#0B3B2C] hover:bg-[#B8860B] text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <FaCalendarAlt />
                    Enroll Now
                  </button>
                  <a
                    href="https://wa.me/917725945908"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp />
                    Query
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* No Results */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">No courses found in this category.</p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-[#0B3B2C] py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Need Help Choosing the Right Course?
          </h2>
          <p className="text-gray-300 mb-8">
            Our academic counselors will guide you based on your child's class, age, and career goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+917725945908"
              className="px-8 py-3 bg-[#B8860B] hover:bg-[#9E7008] text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <FaPhone />
              Call Now: +91 7725945908
            </a>
            <a
              href="https://wa.me/917725945908"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition flex items-center justify-center gap-2"
            >
              <FaWhatsapp />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;