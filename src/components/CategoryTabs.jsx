import { useState } from "react";

function CategoryTabs() {
  const [activeTab, setActiveTab] = useState("Software Solution");
  const [activeCard, setActiveCard] = useState(0);

  const tabs = ["Development Services", "Software Solution", "Digital Marketing"];

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
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 items-start md:items-center">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight bg-gradient-to-r from-[#ff7a00] to-[#ffd6bc] bg-clip-text text-transparent">
            Recommendations of <br />
            Top Software Companies
            <br />
            & their Services
          </h2>

          <p className="text-base sm:text-lg text-gray-500 leading-relaxed md:max-w-xl">
            TDI has helped more than{" "}
            <span className="font-semibold text-orange-500">50,000+</span>{" "}
            businesses find the right IT service and software providers,
            enabling them to make smarter technology decisions and accelerate
            business growth.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 lg:pb-20">
        <div className="border border-orange-200 rounded-2xl sm:rounded-full overflow-hidden flex flex-col sm:flex-row mb-6 sm:mb-10 bg-white">
          {tabs.map((tab) => (
            <button
              key={tab}
              type="button"
              onClick={() => {
                setActiveTab(tab);
                setActiveCard(0);
              }}
              className={`w-full sm:flex-1 px-4 py-3 sm:py-4 text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-orange-500 text-white"
                  : "bg-white text-orange-500 hover:bg-orange-50"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {categories[activeTab].map((item, index) => (
            <div
              key={item}
              onMouseEnter={() => setActiveCard(index)}
              onClick={() => setActiveCard(index)}
              className={`min-h-[130px] sm:min-h-[150px] lg:h-40 rounded-2xl lg:rounded-3xl p-5 sm:p-6 flex justify-between items-start cursor-pointer transition-all duration-300 ${
                activeCard === index
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-100"
                  : "bg-[#FFF7F1] text-black hover:bg-orange-500 hover:text-white"
              }`}
            >
              <h3 className="text-lg sm:text-xl font-medium leading-tight max-w-[180px]">
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

        <div className="text-center mt-8 sm:mt-10">
          <button
            type="button"
            className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 sm:py-4 rounded-full text-sm sm:text-base transition-all duration-300"
          >
            Browse all software category
          </button>
        </div>
      </section>
    </>
  );
}

export default CategoryTabs;