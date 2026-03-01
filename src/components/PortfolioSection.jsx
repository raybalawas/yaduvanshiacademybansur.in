import ourPortfolio1 from "../assets/ourPortfolio1.avif";
import ourPortfolio2 from "../assets/ourPortfolio2.avif";
import ourPortfolio3 from "../assets/ourPortfolio3.avif";
import ourPortfolio4 from "../assets/ourPortfolio4.avif";
// Replace with your actual image import
const projects = [
  {
    title: "Bulk WhatsApp Messaging API (with OTP & SMS)",
    image: ourPortfolio1,
    description:
      "A scalable messaging platform for high-volume WhatsApp campaigns: template-based bulk sends, OTP delivery, webhooks, delivery/read receipts, rate limiting, number verification, and detailed analytics—built for marketing, alerts, and transactional flows.",
    // link: "/portfolio/bulk-whatsapp-api",
  },
  {
    title: "E-Commerce Mobile App",
    image: ourPortfolio1,
    description:
      "A scalable and feature-rich e-commerce mobile application for Android and iOS.",
    // link: "/portfolio/ecommerce-app",
  },
  {
    title: "SaaS Web Platform",
    image: ourPortfolio2,
    description:
      "Cloud-based SaaS platform with multi-tenant architecture and advanced analytics.",
    // link: "/portfolio/saas-platform",
  },
  {
    title: "Healthcare Portal",
    image: ourPortfolio3,
    description:
      "Secure and HIPAA-compliant healthcare management portal for patients and doctors.",
    // link: "/portfolio/healthcare-portal",
  },
  {
    title: "Travel Booking Website",
    image: ourPortfolio4,
    description:
      "User-friendly travel booking website with integrated payment gateways.",
    // link: "/portfolio/travel-booking",
  },
];

const PortfolioSection = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
          Our <span className="text-indigo-600">Portfolio</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map(({ title, image, description, link }) => (
            <a
              key={title}
              href={link}
              className="block bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-cover"
                loading="lazy"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">{description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
