import React from "react";

const careers = [
  {
    id: 1,
    title: "Business Analyst (Commission Based)",
    description:
      "We are looking for a motivated and result-driven Business Analyst who can bring IT projects from the market. This role is performance-based with attractive commission opportunities.",
    features: [
      "Identify and acquire new IT projects from the market",
      "Build and maintain client relationships",
      "Understand client requirements and coordinate with the technical team",
      "Earn commission (percentage-based) on each project closed",
      "Flexible working environment – work from anywhere",
    ],
    perks: [
      "High earning potential (commission-based)",
      "No fixed salary – unlimited growth based on performance",
      "Opportunity to work with a fast-growing IT company",
      "Support from technical & management team for project execution",
    ],
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  },
];

function Career() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-center text-indigo-600 mb-12">
          Latest Job Opening
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {careers.map((career) => (
            <div
              key={career.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition duration-300"
            >
              <img
                src={career.image}
                alt={career.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-indigo-700 mb-2">
                  {career.title}
                </h2>
                <p className="text-gray-700 mb-4">{career.description}</p>

                <h4 className="font-semibold mb-2">Responsibilities:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  {career.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-2">Perks & Benefits:</h4>
                <ul className="list-disc list-inside text-gray-600 space-y-1 mb-4">
                  {career.perks.map((perk, index) => (
                    <li key={index}>{perk}</li>
                  ))}
                </ul>

                <button
                  type="submit"
                  className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                >
                  contact on WhatsApp
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Career;
