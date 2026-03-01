import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const blogData = [
  {
    id: 1,
    title: "How to Crack the Sainik School Entrance Exam 2025",
    description: "Complete preparation guide for AISSEE exam with tips and strategies.",
    content: `
      The All India Sainik Schools Entrance Examination (AISSEE) is conducted annually for admission to Class 6 and Class 9.
      
      Key subjects include Mathematics, Intelligence, Language, and General Knowledge. With proper guidance and daily practice, students can excel in this competitive exam.
      
      At National Defence Academy, we provide specialized coaching with mock tests, study materials, and personalized attention to ensure your child's success.
    `,
    image: "/sainik-exam.jpg",
    author: "Captain Rajesh Kumar",
    date: "February 15, 2025",
    slug: "crack-sainik-school-entrance-exam",
  },
  {
    id: 2,
    title: "Physical Fitness Requirements for Military Schools",
    description: "Essential fitness tips and exercises for students aspiring to join defence academies.",
    content: `
      Physical fitness is crucial for admission into military schools like Sainik Schools and Rashtriya Military Schools.
      
      Students must excel in running, long jump, high jump, and other physical activities. Regular exercise, proper nutrition, and discipline are key to meeting these standards.
      
      Our academy includes daily PT sessions, yoga, and sports training to build endurance and strength.
    `,
    image: "/fitness.jpg",
    author: "Havaldar Singh",
    date: "February 10, 2025",
    slug: "physical-fitness-military-schools",
  },
  {
    id: 3,
    title: "NDA Foundation Course: Early Preparation Benefits",
    description: "Why starting NDA preparation from Class 6-9 gives your child an edge.",
    content: `
      The National Defence Academy (NDA) is the dream of many young Indians. Starting early preparation through foundation courses can significantly improve success rates.
      
      Our foundation program focuses on building strong fundamentals in Maths, English, and General Awareness while developing leadership qualities and discipline.
      
      Early exposure to the NDA pattern helps students build confidence and perform better in the actual exam.
    `,
    image: "/nda-foundation.jpg",
    author: "Lt. Col. Sharma",
    date: "February 5, 2025",
    slug: "nda-foundation-course-early-preparation",
  },
];

const BlogDetail = () => {
  const { slug } = useParams();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const found = blogData.find((b) => b.slug === slug);
    setBlog(found);
  }, [slug]);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-500">
        <h2 className="text-xl">Blog not found</h2>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <img
        src={blog.image}
        alt={blog.title}
        className="w-full h-72 object-cover rounded-xl mb-8"
      />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">{blog.title}</h1>
      <div className="text-sm text-gray-500 mb-6">
        <span>By {blog.author}</span> · <span>{blog.date}</span>
      </div>
      <div className="text-lg text-gray-700 leading-8 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
};

export default BlogDetail;