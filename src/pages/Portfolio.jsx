// Portfolio.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import portfolio1 from "../assets/portfolio1.png";
import portfolio2 from "../assets/portfolio2.png";
import portfolio3 from "../assets/portfolio3.png";
import portfolio4 from "../assets/portfolio4.png";
import portfolio5 from "../assets/portfolio5.png";
import portfolio6 from "../assets/portfolio6.png";
import portfolio7 from "../assets/portfolio7.jpg";
import portfolio8 from "../assets/portfolio8.png";
import portfolio9 from "../assets/portfolio9.png";
import portfolio10 from "../assets/portfolio10.jpg";
import portfolio11 from "../assets/portfolio11.png";
const projects = [
  {
    id: 1,
    title: "KingJoinery – Interior Design Site",
    description:
      "A custom-built website for an Australian interior design company to showcase services and past projects. The platform includes a dynamic portfolio, contact integration, and SEO optimization.",
    image: portfolio1,
    technologies: [
      "PHP",
      "LARAVEL",
      "MYSQL",
      "bootstrap",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    whyBetter:
      "Highly scalable and user-friendly interface that enhances the user experience.",
    howBuilt:
      "Developed using PHP, Laravel, and MySQL with a responsive UI designed in Bootstrap, HTML5, CSS3, and enhanced with JavaScript.",
  },

  {
    id: 2,
    title: "SuperKings Cricket Academy App",
    description:
      "A role-based web application with 4 user panels (SuperAdmin, Admin, Coach, Student). Features include class scheduling, attendance, progress tracking, and secure login with role-based permissions.",
    image: portfolio2,
    technologies: [
      "PHP",
      "LARAVEL",
      "MYSQL",
      "bootstrap",
      "JavaScript",
      "HTML5",
      "CSS3",
      "Stripe API",
    ],
    whyBetter:
      "Delivers a secure, seamless experience with fast online payments via Stripe API and advanced role-based authentication for all users.",

    howBuilt:
      "Engineered with PHP, Laravel, and MySQL for robust backend functionality, integrated with Stripe API for secure transactions, and styled using Bootstrap, HTML5, CSS3, and JavaScript for a responsive and user-friendly UI.",
  },

  {
    id: 3,
    title: "Navy Ship Machinery Management",
    description:
      "A hybrid system built with PHP Desktop and Laravel for managing machinery onboard Navy ships. It allows real-time status tracking, maintenance logging, service history reports, and role-based access — even in offline environments. The Laravel backend ensures data centralization, while the PHP desktop app provides local operability.",
    image: portfolio3,
    technologies: [
      "PHP",
      "PHP Desktop",
      "LARAVEL",
      "MYSQL",
      "bootstrap",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],
    whyBetter:
      "Delivers high reliability in both offline and online environments with secure, role-based access. Optimized for real-time machinery tracking, maintenance scheduling, and minimizing downtime on naval operations.",

    howBuilt:
      "Developed using Laravel for centralized backend management and PHP Desktop for local operability. Real-time synchronization ensures seamless data consistency across ship and shore systems, with MySQL powering efficient data handling and reporting.",
  },

  {
    id: 4,
    title: "JoyTap Gaming Admin + API",
    description:
      "Created admin panel and RESTful API backend for a gaming app. Supports user management, game logic, leaderboard management, wallet features, and integrated payment gateway.",
    image: portfolio4,
    technologies: [
      "PHP",
      "LARAVEL",
      "MYSQL",
      "bootstrap",
      "JavaScript",
      "HTML5",
      "CSS3",
    ],

    whyBetter:
      "Optimized for scalability, secure transactions, seamless gameplay experience, and real-time leaderboard synchronization.",
    howBuilt:
      "Built with Laravel-powered APIs, WebSockets for instant updates, React for interactive UI, and MySQL for structured, reliable data handling.",
  },

  {
    id: 5,
    title: "Addex Advertiser Platform",
    description:
      "A 3-panel advertising platform with modules for advertisers, admins, and API consumers (mobile apps). Features include ad campaign creation, budget tracking, analytics, and secure APIs.",
    image: portfolio5,
    technologies: [
      "PHP",
      "LARAVEL",
      "MYSQL",
      "bootstrap",
      "JavaScript",
      "HTML5",
      "CSS3",
      "API Development",
    ],

    whyBetter:
      "Delivers high scalability for handling large ad campaigns, ensures secure financial transactions, and provides real-time analytics for smarter marketing decisions. Its modular 3-panel design makes it easy to manage advertisers, admins, and API integrations seamlessly.",

    howBuilt:
      "Developed with Laravel to handle authentication, role-based access, and secure APIs. Real-time updates and campaign analytics are powered by WebSockets. MySQL ensures structured and reliable data storage, while Bootstrap and JavaScript enhance UI responsiveness. APIs are optimized for seamless integration with mobile apps and external platforms.",
  },

  {
    id: 6,
    title: "PixelGenix – IT Company Portfolio",
    description:
      "A 3-panel advertising platform with modules for advertisers, admins, and API consumers (mobile apps). Features include ad campaign creation, budget tracking, analytics, and secure APIs.",
    image: portfolio6,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "Bootstrap",
      "JavaScript",
      "EJS",
      "Cloudinary",
      "Rest API",
    ],

    whyBetter:
      "PixelGenix stands out with its modular 2-panel ecosystem tailored for admins, and Clients.",

    howBuilt:
      "The platform is built with MERN for strong authentication, role-based access, and secure API handling. Campaign creation, budget management, and analytics are managed through a MongoDB database for reliability and structured data flow. WhatsApp Integration updates for real-time metrics. The front-end leverages Bootstrap, EJS templating, and JavaScript to deliver a responsive, user-friendly interface, while Cloudinary optimizes media storage and delivery for ad creatives.",
  },

  {
    id: 7,
    title: "EduTech Platform – Coaching Center Management",
    description:
      "A full-featured educational web platform built with React and Node. Features include course listing, user enrollment, payment integration, and student dashboards.",
    image: portfolio7,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "EJS",
      "Cloudinary",
      "Rest API",
      "Bootstrap",
      "JavaScript",
    ],

    whyBetter:
      "EduTech redefines digital learning management with its dual-panel design, offering a dedicated space for administrators to manage courses, finances, and analytics, while students enjoy a personalized dashboard for enrollment, progress tracking, and payments. Its real-time WhatsApp integration, seamless media handling, and intuitive UI ensure both scalability and superior user experience compared to conventional platforms.",

    howBuilt:
      "Developed on the MERN stack for reliable performance and scalability, the platform features JWT-based authentication and role-specific access control for security. MongoDB powers structured data flow across course listings, campaigns, budgets, and analytics. Real-time updates are achieved through WhatsApp API integration, while Cloudinary ensures optimized media delivery for high-quality learning content. The responsive front-end is crafted with React, Bootstrap, and EJS templating, delivering a smooth and engaging user experience.",
  },

  {
    id: 8,
    title: "CRM System – Laravel & React",
    description:
      "A Laravel-based Customer Relationship Management (CRM) system with task tracking, user roles, project status monitoring, and email notifications.",
    image: portfolio8,
    technologies: [
      "Laravel",
      "MySQL",
      "AJAX",
      "jQuery",
      "Blade",
      "React.js",
      "Bootstrap",
      "JavaScript",
    ],

    whyBetter:
      "This Laravel-based CRM system goes beyond conventional platforms by offering seamless task tracking, intuitive role-based user management, and real-time project status monitoring. With integrated email notifications, AJAX-powered interactivity, and a hybrid Blade–React.js architecture, it delivers both speed and scalability. Its responsive design ensures smooth accessibility across devices, making collaboration and productivity effortless for teams of any size.",

    howBuilt:
      "Engineered with Laravel and MySQL at its core, the CRM leverages Blade templates for server-side rendering alongside React.js components for dynamic, interactive dashboards. AJAX and jQuery enable real-time task updates and project progress tracking without page reloads. Bootstrap and custom CSS3 ensure a modern, responsive UI, while Laravel’s authentication and role-based access control provide enterprise-grade security. Email notification services are tightly integrated, keeping users informed of deadlines and updates, making the system robust, scalable, and user-focused.",
  },

  {
    id: 9,
    title: "Dynamic Blog Platform – MERN Stack",
    description:
      "A fully dynamic blog site built on the MERN stack with complete JWT-based authentication, secure user management, and modern UI/UX design.",
    image: portfolio9,
    technologies: [
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "JWT Authentication",
      "Bootstrap",
      "REST API",
      "JavaScript",
    ],

    whyBetter:
      "Unlike traditional blogging platforms, this MERN-powered application offers real-time interactivity, secure token-based authentication, and a seamless user experience across devices. It provides a highly responsive, single-page application (SPA) architecture where users can register, log in, create, edit, and manage blogs instantly without reloads. Its RESTful APIs ensure scalability, while JWT authentication guarantees strong security. With a sleek Bootstrap-based UI and a fully dynamic backend, the platform is optimized for performance, accessibility, and ease of use.",

    howBuilt:
      "Developed using the MERN stack, the platform integrates MongoDB for efficient data storage, Express.js and Node.js for a powerful backend, and React.js for a responsive, interactive frontend. JWT authentication secures user sessions, enabling role-based access and protected routes. The backend exposes REST APIs for blog management, while the frontend consumes these APIs dynamically with Axios for smooth CRUD operations. Bootstrap and custom CSS ensure a clean and modern UI, while React Router provides seamless navigation across pages. The result is a robust, scalable, and secure blogging system designed for real-world use.",
  },

  {
    id: 10,
    title: "WhatsApp Bulk Messaging & OTP Automation API",
    description:
      "A fully dynamic WhatsApp messaging automation system designed to handle bulk campaigns, OTP delivery, customer engagement, and real-time notifications. It provides a scalable backend with secure APIs, seamless integration, and a modern dashboard for managing messages, templates, and user analytics.",

    image: portfolio10,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "EJS",
      "Cloudinary",
      "REST API",
      "Bootstrap",
      "JavaScript",
      "Puppeteer",
      "Socket.io",
    ],

    whyBetter:
      "Unlike conventional messaging platforms, this automation system ensures reliability, speed, and flexibility. It supports bulk WhatsApp campaigns with delivery reports, real-time OTP generation, and personalized messaging. Its interactive dashboard makes campaign tracking effortless, while automation scripts guarantee consistency at scale. With multi-device support, role-based access, and a robust backend, it provides businesses with a cost-effective yet enterprise-grade solution for customer communication.",

    howBuilt:
      "The platform is powered by Node.js and Express.js for high-performance API handling, with MongoDB ensuring fast and scalable data storage. Puppeteer is integrated for automated WhatsApp session handling, while Socket.io powers real-time delivery tracking and notifications. The React.js dashboard provides a clean, responsive interface for managing bulk campaigns, OTP services, and analytics. Security features like JWT authentication, role-based user access, and encrypted session handling make it reliable and enterprise-ready. With its modular design and API-first approach, businesses can easily integrate messaging and OTP services into any existing system.",
  },

  {
    id: 11,
    title: "Zerfinis – Dynamic Enterprise Website & Communication Platform",

    description:
      "A fully dynamic and enterprise-grade company website built for Zerfinix Pvt Ltd. The platform goes beyond a static portfolio by combining a modern business showcase with an intelligent communication system. It features real-time notifications, scalable APIs, dynamic content management, and a powerful dashboard for handling messages, OTPs, campaigns, and user analytics. Designed with security, automation, and multi-device support in mind, it empowers Zerfinis to manage customer engagement seamlessly and at scale.",

    image: portfolio11,
    technologies: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "React.js",
      "EJS",
      "Cloudinary",
      "REST API",
      "Bootstrap",
      "JavaScript",
      "Puppeteer",
      "JWT Authentication",
    ],

    whyBetter:
      "Unlike traditional business websites, Zerfinix’s platform is fully dynamic, blending a professional company profile with enterprise messaging solutions. It not only showcases the brand but also powers bulk WhatsApp campaigns, real-time OTP generation, and automated customer communication. Businesses gain complete control through an intuitive dashboard with analytics, delivery reports, and campaign tracking. Its role-based access, modular APIs, and secure backend provide the flexibility to integrate with CRMs, ERPs, or any third-party systems—making it a cost-effective, future-proof solution for modern enterprises.",

    howBuilt:
      "The platform is engineered with Node.js and Express.js at its core for high-performance server-side operations, while MongoDB ensures fast, scalable data management. Puppeteer handles automated WhatsApp sessions with stability, and Socket.io enables real-time updates for message delivery and notifications. The frontend is powered by React.js and Bootstrap for a responsive, user-friendly experience, complemented by EJS for server-side rendering where needed. Cloudinary manages media assets, while JWT-based authentication and role-based access ensure enterprise-grade security. Designed with a modular, API-first architecture, it seamlessly integrates bulk messaging, OTP services, and dynamic content management—making it both robust and adaptable for Zerfinix’s business growth.",
  },
];

const Portfolio = () => {
  const [selectedId, setSelectedId] = useState(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[100vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1581091012184-5c7aca3893d4?auto=format&fit=crop&q=80&w=1600')",
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-60" />
        <motion.div
          className="relative z-10 text-white text-center px-6 max-w-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Crafting Digital Success Stories with{" "}
            <span className="text-indigo-400">Zerfinis</span>
          </h2>
          <p className="text-md md:text-lg">
            Explore our diverse portfolio of 14+ projects where we empowered
            businesses to lead with smart, scalable, and future-ready digital
            products. Your transformation story starts here.
          </p>
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-center mb-12">
          Our <span className="text-indigo-600">Portfolio</span>
        </h1>

        {selectedId === null ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map(({ id, title, description, image }) => (
              <motion.div
                key={id}
                whileHover={{ scale: 1.03 }}
                className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer"
                onClick={() => setSelectedId(id)}
              >
                <img
                  src={image}
                  alt={title}
                  className="w-full h-52 object-cover"
                  loading="lazy"
                />
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-semibold mb-2">{title}</h3>
                  <p className="text-gray-600 text-sm">{description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white p-6 rounded-lg shadow-lg max-w-4xl mx-auto"
          >
            <button
              onClick={() => setSelectedId(null)}
              className="mb-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
            >
              ← Back to Portfolio
            </button>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="w-full h-64 object-cover rounded mb-4"
            />
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <h4 className="text-lg font-semibold mb-1">Technologies Used:</h4>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              {selectedProject.technologies.map((tech, index) => (
                <li key={index}>{tech}</li>
              ))}
            </ul>
            <h4 className="text-lg font-semibold mb-1">How We Built It:</h4>
            <p className="text-gray-700 mb-4">{selectedProject.howBuilt}</p>
            <h4 className="text-lg font-semibold mb-1">
              Why This is Better for You:
            </h4>
            <p className="text-gray-700">{selectedProject.whyBetter}</p>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
