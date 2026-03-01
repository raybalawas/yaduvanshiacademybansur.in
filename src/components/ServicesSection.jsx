import React from "react";
import {
  Briefcase,
  Code,
  Smartphone,
  Globe,
  Monitor,
  ShieldCheck,
  Users,
  Cpu,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: <Code size={36} />, title: "Bulk WhatsApp Add Campaign" },
  { icon: <Code size={36} />, title: "Bulk WhatsApp OTP" },
  { icon: <Code size={36} />, title: "Software Development" },
  { icon: <Smartphone size={36} />, title: "App Development" },
  { icon: <Globe size={36} />, title: "Web Development" },
  { icon: <Monitor size={36} />, title: "Design Solutions" },
  { icon: <ShieldCheck size={36} />, title: "Ecommerce Solutions" },
  { icon: <Cpu size={36} />, title: "QA Solutions" },
  { icon: <Briefcase size={36} />, title: "Managed IT Services" },
  { icon: <Users size={36} />, title: "Remote Team" },
];

const ServicesSection = () => {
  return (
    <section className="relative bg-[#f9fafc] py-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-100 to-gray-200 opacity-50 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-extrabold text-gray-800 mb-4 tracking-tight">
            <span className="text-indigo-600">Services</span> We Offer
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Your one-stop solution to meet your business vision and mission —
            only at <strong>Zerfinis</strong>.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-white rounded-2xl p-6 shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-xl transition duration-300 hover:scale-105 hover:-translate-y-1 border-t-4 border-indigo-100 hover:border-indigo-500"
            >
              <div className="text-indigo-600 mb-4 group-hover:animate-pulse">
                {service.icon}
              </div>
              <h4 className="text-lg font-semibold text-gray-800">
                {service.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
