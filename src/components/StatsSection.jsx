import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { 
  FaCalendarAlt, 
  FaUsers, 
  FaSchool, 
  FaMedal,
  FaStar,
  FaShieldAlt,
  FaTrophy,
  FaUserGraduate
} from "react-icons/fa";

const StatsSection = () => {
  const [ref, inView] = useInView({ 
    triggerOnce: true,
    threshold: 0.1
  });

  const stats = [
    {
      icon: <FaCalendarAlt className="text-3xl" />,
      value: 15,
      suffix: "+",
      label: "Years of Excellence",
      description: "Serving the nation since 2010",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaUsers className="text-3xl" />,
      value: 2000,
      suffix: "+",
      label: "Students Trained",
      description: "Young minds shaped for success",
      color: "from-green-500 to-green-600"
    },
    {
      icon: <FaSchool className="text-3xl" />,
      value: 500,
      suffix: "+",
      label: "Sainik School Selections",
      description: "Students in various Sainik Schools",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: <FaMedal className="text-3xl" />,
      value: 100,
      suffix: "+",
      label: "NDA & Defence Selections",
      description: "Serving in Armed Forces today",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B8860B' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-[#0B3B2C] text-white px-4 py-2 rounded-full mb-4">
            <FaTrophy className="text-[#B8860B]" />
            <span className="text-sm font-semibold">OUR ACHIEVEMENTS</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Shaping Future{" "}
            <span className="text-[#B8860B] relative">
              Defence Officers
              <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 200 8">
                <path d="M0,4 Q50,0 100,4 T200,4" stroke="#B8860B" fill="none" strokeWidth="2"/>
              </svg>
            </span>
          </h2>
          
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            At <span className="font-semibold text-[#B8860B]">Yaduvanshi Academy Bansur</span>, 
            we combine academic excellence with military discipline to prepare students for 
            <span className="font-semibold text-[#0B3B2C]"> Sainik School, Military School, RIMC, and NDA</span> entrance exams.
            Our proven track record speaks for itself.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card with hover effect */}
              <div className="relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                {/* Top Accent Border */}
                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color}`}></div>
                
                {/* Content */}
                <div className="p-8 text-center">
                  {/* Icon Circle */}
                  <div className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${stat.color} text-white flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg`}>
                    {stat.icon}
                  </div>

                  {/* Counter */}
                  <div className="mb-3">
                    <span className="text-5xl font-bold text-gray-800">
                      {inView && <CountUp end={stat.value} duration={2.5} />}
                      {stat.suffix}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-gray-500">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-gradient-to-tr from-gray-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-tr-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: <FaStar />, text: "Trusted by 2000+ Parents", color: "text-yellow-500" },
            { icon: <FaShieldAlt />, text: "Govt. Recognized", color: "text-blue-500" },
            { icon: <FaTrophy />, text: "15+ Years Excellence", color: "text-[#B8860B]" },
            { icon: <FaUserGraduate />, text: "100+ NDA Cadets", color: "text-green-500" },
          ].map((badge, index) => (
            <div key={index} className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-gray-100">
              <span className={`${badge.color}`}>{badge.icon}</span>
              <span className="text-xs font-medium text-gray-700">{badge.text}</span>
            </div>
          ))}
        </div>

        {/* Additional Trust Message */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 bg-[#0B3B2C] text-white px-6 py-3 rounded-full shadow-lg">
            <FaStar className="text-[#B8860B]" />
            <span className="text-sm font-medium">
              Trusted by parents & students across Rajasthan
            </span>
            <FaStar className="text-[#B8860B]" />
          </div>
        </div>

        {/* Decorative Lines */}
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="#B8860B" strokeWidth="2" strokeDasharray="4 4"/>
          </svg>
        </div>
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-24 opacity-10">
          <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="40" stroke="#B8860B" strokeWidth="2" strokeDasharray="4 4"/>
          </svg>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-[#B8860B] rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 bg-[#0B3B2C] rounded-full opacity-20 animate-pulse delay-1000"></div>
    </section>
  );
};

export default StatsSection;