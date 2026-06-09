import { useState } from "react";

function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("Software Solution");
  const [activeCard, setActiveCard] = useState(0);

  const tabs = [
    "Development Services",
    "Software Solution",
    "Digital Marketing",
  ];

  const categories = {
    "Development Services": [
      "Web Development",
      "Mobile App Development",
      "UI/UX Design",
      "E-commerce Development",
      "Software Development",
      "Testing Services",
    ],

    "Software Solution": [
      "CRM Software",
      "HRM Software",
      "Institute Management Software",
      "Visitor Management Software",
      "Paying Guest Software",
      "IVR Service",
    ],

    "Digital Marketing": [
      "SEO Services",
      "Social Media Marketing",
      "PPC Advertising",
      "Content Marketing",
      "Email Marketing",
      "Branding Services",
    ],
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-16">
      {/* Tabs */}
      <div className="border border-orange-200 rounded-full overflow-hidden flex mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setActiveCard(0);
            }}
            className={`flex-1 py-4 text-lg font-semibold transition-all duration-300 ${
              activeTab === tab
                ? "bg-orange-500 text-white"
                : "bg-white text-orange-500"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-6">
        {categories[activeTab].map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveCard(index)}
            className={`h-40 rounded-3xl p-6 flex justify-between items-start cursor-pointer transition-all duration-300 ${
              activeCard === index
                ? "bg-orange-500 text-white"
                : "bg-[#FFF7F1] text-black"
            }`}
          >
            <h3 className="text-xl font-medium leading-tight max-w-[180px]">
              {item}
            </h3>

            <div
              className={`text-5xl transition-all duration-300 ${
                activeCard === index
                  ? "text-white"
                  : "text-orange-400"
              }`}
            >
              ⚙
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-4 rounded-full transition-all duration-300">
          Browse all software category
        </button>
      </div>
    </section>
  );
}

export default CategoryTabs;