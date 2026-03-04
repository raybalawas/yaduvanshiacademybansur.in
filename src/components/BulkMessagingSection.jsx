import React from "react";
import sainikImage from "../assets/sainikSchool.png";
import militaryImage from "../assets/militrySchool.png";

const courses = [
  {
    name: "Sainik School Coaching Program",
    description:
      "Comprehensive coaching for Class 6 and Class 9 entrance exams (AISSEE). Our proven methodology ensures success in Mathematics, Intelligence, Language, and General Knowledge.",
    features: [
      "Subject-wise expert faculty",
      "Weekly mock tests & practice papers",
      "Doubt clearing sessions",
      "Previous years' question papers",
    ],
    image: militaryImage,
    duration: "1 Year Foundation Course",
  },
  {
    name: "Military School & RIMC Coaching",
    description:
      "Specialized training for Rashtriya Military Schools (RMS) and Rashtriya Indian Military College (RIMC) entrance exams with focus on written tests and interviews.",
    features: [
      "RMS CET preparation",
      "RIMC written exam coaching",
      "Interview & personality development",
      "Physical fitness training",
    ],
    image: militaryImage,
    duration: "6 Months Intensive Program",
  },
  // {
  //   name: "NDA Foundation Course",
  //   description:
  //     "Early preparation for NDA entrance exam for students from Class 8-10. Build strong fundamentals in Mathematics, English, and General Knowledge.",
  //   features: [
  //     "Mathematics foundation",
  //     "English grammar & comprehension",
  //     "Current affairs & GK",
  //     "SSB interview basics",
  //   ],
  //   image: sainikImage,
  //   duration: "2-3 Year Foundation Program",
  // },
  {
    name: "Physical Training & SSB Prep",
    description:
      "Comprehensive physical training and Services Selection Board (SSB) interview preparation including psychology tests and group tasks.",
    features: [
      "Daily PT & drills",
      "Running & endurance training",
      "Psychology tests practice",
      "GTO task training",
    ],
    image: militaryImage,
    duration: "3 Months Intensive",
  },
];


const CoursesSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">
          Our <span className="text-[#B8860B]">Defence Coaching Programs</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          Explore our comprehensive coaching programs designed to prepare students for 
          <span className="font-semibold"> Sainik School, Military School and RIMC</span> entrance examinations.
          Join 200+ successful cadets who have achieved their dreams.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {courses.map(({ name, description, features, image, duration }) => (
            <div
              key={name}
              className="bg-white rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 p-6 text-left border-l-4 border-[#B8860B]"
            >
              <img
                src={image}
                alt={name}
                className="h-48 w-full object-cover rounded-lg mb-4"
                loading="lazy"
              />
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-[#0B3B2C]">{name}</h3>
                <span className="bg-[#B8860B] text-white text-xs px-2 py-1 rounded-full">
                  {duration}
                </span>
              </div>
              <p className="text-gray-600 mb-4">{description}</p>
              <h4 className="font-semibold text-[#B8860B] mb-2">Program Features:</h4>
              <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <button className="mt-2 px-4 py-2 bg-[#0B3B2C] text-white rounded-lg hover:bg-[#B8860B] transition-colors duration-300">
                Enroll Now
              </button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 bg-[#0B3B2C] text-white p-6 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">Why Choose Us?</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <p className="text-2xl font-bold text-[#B8860B]">10+</p>
              <p className="text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-[#B8860B]">50+</p>
              <p className="text-sm">Sainik Selections</p>
            </div>
            {/* <div className="text-center">
              <p className="text-2xl font-bold text-[#B8860B]">10+</p>
              <p className="text-sm">NDA Cadets</p>
            </div> */}
            <div className="text-center">
              <p className="text-2xl font-bold text-[#B8860B]">20+</p>
              <p className="text-sm">Expert Faculty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;