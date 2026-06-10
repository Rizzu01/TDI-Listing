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
    <>
<section className="max-w-6xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Side */}
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-[#1B1B1B] bg-gradient-to-r from-[#ff7a00]  to-white bg-clip-text text-transparent">
        Recommendations of <br />
        <span >
          Top Software Companies
        </span>
        <br />
        & their Services
      </h2>
    </div>

    {/* Right Side */}
    <div>
      <p className="text-lg text-gray-500 leading-relaxed">
        TDI has helped more than{" "}
        <span className="font-semibold text-orange-500">
          50,000+
        </span>{" "}
        businesses find the right IT service and software providers,
        enabling them to make smarter technology decisions and
        accelerate business growth.
      </p>
    </div>

  </div>
</section>
    
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Tabs */}
      <div className="border border-orange-200 rounded-3xl sm:rounded-full overflow-hidden flex flex-col sm:flex-row mb-8 sm:mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => {
              setActiveTab(tab);
              setActiveCard(0);
            }}
            className={`w-full sm:flex-1 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold transition-all duration-300 ${
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {categories[activeTab].map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setActiveCard(index)}
            onClick={() => setActiveCard(index)}
            className={`min-h-32 sm:h-40 rounded-2xl sm:rounded-3xl p-5 sm:p-6 flex justify-between items-start cursor-pointer transition-all duration-300 ${
              activeCard === index
                ? "bg-orange-500 text-white"
                : "bg-[#FFF7F1] text-black"
            }`}
          >
            <h3 className="text-lg sm:text-xl font-medium leading-tight max-w-[170px]">
              {item}
            </h3>

            <div
              className={`text-4xl sm:text-5xl transition-all duration-300 ${
                activeCard === index ? "text-white" : "text-orange-400"
              }`}
            >
              ⚙
            </div>
          </div>
        ))}
      </div>

      {/* Button */}
      <div className="text-center mt-8 sm:mt-10">
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300">
          Browse all software category
        </button>
      </div>
    </section>
    </>
  );
}

export default CategoryTabs;