import { useParams } from "react-router-dom";
import {
  FaUserTie,
  FaHistory,
  FaBriefcase,
  FaSchool,
  FaCommentAlt,
  FaUserFriends,
  FaNewspaper,
  FaTrophy,
  FaMedal,
  FaRunning,
  FaChalkboardTeacher,
} from "react-icons/fa";

const companyData = {
  about: {
    title: "About Our Academy",
    description: "Excellence in Defence Education Since 2010",
    icon: <FaUserTie className="text-[#B8860B] text-4xl mb-4" />,
    content: (
      <>
        <p className="mb-4">
          At <strong>National Defence Academy</strong>, we are committed to shaping young minds into future leaders of the Indian Armed Forces. Our institution provides specialized coaching for Sainik School, Military School, RIMC, and NDA entrance examinations.
        </p>
        <p className="mb-4">
          With a team of experienced retired defence officers and dedicated academicians, we combine academic excellence with physical training and personality development to create well-rounded cadets.
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
          <li>12+ years of excellence in defence education</li>
          <li>500+ successful selections in Sainik Schools</li>
          <li>100+ cadets in NDA and other defence academies</li>
          <li>State-of-the-art infrastructure with sports facilities</li>
        </ul>
      </>
    ),
  },
  history: {
    title: "Our History",
    description: "A Legacy of Producing Defence Officers",
    icon: <FaHistory className="text-[#B8860B] text-4xl mb-4" />,
    content: (
      <>
        <p className="mb-4">
          Founded in 2010 by retired Army officers, our academy started with just 25 students in a small classroom. Today, we have trained over 2000 students and have a success rate of 85% in various defence entrance examinations.
        </p>
        <h3 className="text-lg font-semibold mt-4 mb-2">Our Journey</h3>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
          <li>2010: Academy established with Sainik School coaching</li>
          <li>2012: Expanded to NDA foundation courses</li>
          <li>2015: Introduced RIMC coaching program</li>
          <li>2018: Launched residential coaching facility</li>
          <li>2023: Recognized as Top Defence Coaching Institute in Rajasthan</li>
        </ul>
      </>
    ),
  },
  career: {
    title: "Career at Our Academy",
    description: "Join Us in Building the Nation's Future Defenders",
    icon: <FaBriefcase className="text-[#B8860B] text-4xl mb-4" />,
    content: (
      <div className="grid md:grid-cols-2 gap-10 items-start">
        <div>
          <p className="mb-4">
            Be a part of our mission to create future officers for the Indian Armed Forces. We offer rewarding career opportunities for passionate educators and trainers.
          </p>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-1 mb-6">
            <li>Work with experienced defence personnel</li>
            <li>Opportunity to mentor young aspirants</li>
            <li>Competitive salary and benefits</li>
            <li>Professional development programs</li>
          </ul>
          <h3 className="text-lg font-semibold mb-2">Open Positions:</h3>
          <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
            <li>Mathematics Teacher (TGT/PGT)</li>
            <li>Physical Training Instructor</li>
            <li>English & GK Faculty</li>
            <li>SSB Interview Trainer</li>
            <li>Administrative Staff</li>
          </ul>
        </div>
        <div className="bg-white border rounded-xl shadow-lg p-6">
          <h4 className="text-xl font-semibold mb-4 text-[#B8860B]">
            Submit Your Application
          </h4>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded-md"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full p-2 border rounded-md"
            />
            <select className="w-full p-2 border rounded-md">
              <option>Select Position</option>
              <option>Mathematics Teacher</option>
              <option>Physical Training Instructor</option>
              <option>English & GK Faculty</option>
              <option>SSB Interview Trainer</option>
              <option>Administrative Staff</option>
            </select>
            <input type="file" className="w-full" />
            <textarea
              placeholder="Why do you want to join us?"
              rows="4"
              className="w-full p-2 border rounded-md"
            ></textarea>
            <button
              type="submit"
              className="bg-[#0B3B2C] text-white px-4 py-2 rounded-md hover:bg-[#B8860B] transition"
            >
              Submit Application
            </button>
          </form>
        </div>
      </div>
    ),
  },
  infrastructure: {
    title: "Our Infrastructure",
    description: "Modern Facilities for Holistic Development",
    icon: <FaSchool className="text-[#B8860B] text-4xl mb-4" />,
    content: (
      <>
        <p className="mb-4">
          Our academy boasts state-of-the-art infrastructure designed to provide the best learning environment for defence aspirants.
        </p>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-1">
          <li>Spacious classrooms with smart boards</li>
          <li>Well-equipped library with defence literature</li>
          <li>Sports ground for athletics and games</li>
          <li>Indoor physical training hall</li>
          <li>Hostel facility for outstation students</li>
          <li>Computer lab for online mock tests</li>
        </ul>
      </>
    ),
  },
  testimonials: {
    title: "Success Stories",
    description: "What Our Students and Parents Say",
    icon: <FaCommentAlt className="text-[#B8860B] text-4xl mb-4" />,
    content: (
      <div className="space-y-6">
        <div className="bg-white border rounded-xl shadow-md p-6">
          <p className="text-gray-700 italic">
            “My son got selected in Sainik School Chittorgarh because of the dedicated coaching at National Defence Academy. The teachers are experienced and really care about each student.”
          </p>
          <div className="mt-4 font-semibold text-[#B8860B]">
            — Mr. Sharma, Parent
          </div>
        </div>
        <div className="bg-white border rounded-xl shadow-md p-6">
          <p className="text-gray-700 italic">
            “The physical training sessions prepared me well for the SSB. I cleared my NDA exam and now I'm at the National Defence Academy, Khadakwasla.”
          </p>
          <div className="mt-4 font-semibold text-[#B8860B]">
            — Cadet Rajput, NDA 148th Course
          </div>
        </div>
        <div className="bg-white border rounded-xl shadow-md p-6">
          <p className="text-gray-700 italic">
            “Best coaching for RIMC in Rajasthan. The faculty's guidance and mock tests helped my daughter secure admission in Rashtriya Military School.”
          </p>
          <div className="mt-4 font-semibold text-[#B8860B]">
            — Col. Mehta (Retd.)
          </div>
        </div>
      </div>
    ),
  },
  achievements: {
    title: "Our Achievements",
    description: "Recognition and Milestones",
    icon: <FaTrophy className="text-[#B8860B] text-4xl mb-4" />,
    content: (
      <>
        <ul className="list-disc list-inside text-left text-gray-700 space-y-2">
          <li>🏆 Best Defence Coaching Institute Award 2023</li>
          <li>🎖️ 150+ selections in Sainik Schools (2022-24)</li>
          <li>⭐ 45 cadets currently in NDA</li>
          <li>📚 100% success rate in RIMC interviews (2023)</li>
          <li>🏅 Recognized by Rajasthan Education Board</li>
        </ul>
      </>
    ),
  },
  medalists: {
    title: "Our Medal Winners",
    description: "Students Who Made Us Proud",
    icon: <FaMedal className="text-[#B8860B] text-4xl mb-4" />,
    content: (
      <div className="grid md:grid-cols-2 gap-6">
        <div className="border rounded-lg shadow-lg p-4 bg-white">
          <h4 className="text-lg font-semibold text-[#0B3B2C] mb-1">
            Lt. Abhishek Yadav
          </h4>
          <p className="text-sm text-gray-600 mb-2">
            NDA 146th Course | Commissioned in Infantry
          </p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 bg-white">
          <h4 className="text-lg font-semibold text-[#0B3B2C] mb-1">
            Cadet Priya Singh
          </h4>
          <p className="text-sm text-gray-600 mb-2">
            Sainik School Chittorgarh | Class 9 Topper
          </p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 bg-white">
          <h4 className="text-lg font-semibold text-[#0B3B2C] mb-1">
            Ravi Kumar
          </h4>
          <p className="text-sm text-gray-600 mb-2">
            RIMC Dehradun | All India Rank 12
          </p>
        </div>
        <div className="border rounded-lg shadow-lg p-4 bg-white">
          <h4 className="text-lg font-semibold text-[#0B3B2C] mb-1">
            Squadron Leader Meena (Ex-student)
          </h4>
          <p className="text-sm text-gray-600 mb-2">
            Flying Branch, Indian Air Force
          </p>
        </div>
      </div>
    ),
  },
};

const Company = () => {
  const { section } = useParams();
  const content = companyData[section];

  if (!content) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-xl">Page Not Found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <div className="text-center mb-6">
        {content.icon}
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          {content.title}
        </h1>
        <p className="text-gray-600 text-lg">{content.description}</p>
      </div>
      <div className="text-gray-700 text-base leading-7">{content.content}</div>
    </div>
  );
};

export default Company;