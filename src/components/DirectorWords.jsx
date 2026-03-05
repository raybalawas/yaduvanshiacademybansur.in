import React from "react";
import {
  Quote,
  Award,
  Heart,
  Target,
  BookOpen,
  Users,
  Mail,
  Phone,
} from "lucide-react";
import directorImage from "../assets/director.png"; // Import the image

function DirectorWords() {
  const directorData = {
    name: "Mr. Sanjay Kumar",
    designation: "Director",
    qualification: "Ph.D. in Education, M.Ed.",
    experience: "25+ Years",
    photo: directorImage, // Use imported image
    message:
      "Education is not just about acquiring knowledge; it's about nurturing souls and building character. At Yaduvanshi Academy, we believe in holistic development that prepares students not just for exams, but for life.",
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-3 gap-0">
            <div className="md:col-span-1 bg-gradient-to-b from-[#0B3B2C] to-[#1a5a3a] p-8 flex flex-col items-center justify-center">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-white shadow-xl mb-4">
                <img
                  src={directorData.photo}
                  alt={directorData.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    console.error("Image failed to load. Check path:", directorData.photo);
                    e.target.src = "https://via.placeholder.com/200x200?text=Director";
                  }}
                />
              </div>
              <h2 className="text-2xl font-bold text-white text-center">
                {directorData.name}
              </h2>
              <p className="text-green-200 text-center">
                {directorData.designation}
              </p>
              <div className="flex flex-wrap gap-2 mt-4 justify-center">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  {directorData.qualification}
                </span>
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm">
                  {directorData.experience}
                </span>
              </div>
            </div>

            {/* Message Section */}
            <div className="md:col-span-2 p-8">
              <div className="relative">
                <Quote className="absolute -top-4 -left-2 w-12 h-12 text-[#0B3B2C] opacity-20" />
                <p className="text-xl text-gray-700 italic leading-relaxed relative z-10 pl-8">
                  "{directorData.message}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DirectorWords;