import React from "react";

const products = [
  {
    id: 1,
    title: "WhatsApp Bulk Messaging App",
    description:
      "A dynamic web application that allows businesses to send bulk WhatsApp messages efficiently. Supports campaigns, personalized messages, and delivery tracking.",
    features: [
      "Send bulk WhatsApp messages",
      "Campaign scheduling & management",
      "Real-time delivery tracking",
      "Personalized messages",
      "Admin dashboard with analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1581092580494-25f53e7dc01f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "WhatsApp OTP API",
    description:
      "A secure OTP (One-Time Password) API integrated with WhatsApp for authentication and verification, suitable for login, registration, and transactions.",
    features: [
      "Send OTP via WhatsApp",
      "JWT-secured API",
      "High reliability and low latency",
      "Integration-ready for web & mobile apps",
      "Detailed delivery logs & analytics",
    ],
    image:
      "https://images.unsplash.com/photo-1605902711622-cfb43c4435f5?auto=format&fit=crop&w=800&q=80",
  },
];

function NewProducts() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          Our Latest Products
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-indigo-700 mb-2">
                  {product.title}
                </h2>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <h4 className="font-semibold mb-2">Features:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default NewProducts;
