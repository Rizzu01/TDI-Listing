import { ChevronDown } from "lucide-react";

function Navbar() {
  const softwareItems = [
    "HR Software",
    "Payroll Software",
    "CRM Software",
    "ERP Software",
    "Accounting Software",
    "Hospital Management Software",
    "Hotel Management Software",
    "Restaurant Management Software",
    "Point Of Sale Software",
    "Project Management Software",
    "E-commerce Platforms",
    "AI Software",
  ];

  const serviceItems = [
    "Mobile App Development",
    "Web Development",
    "Software Development",
    "E-commerce Development",
    "Block Chain Technology",
    "Digital Marketing",
    "Web Designing UI/UX",
    "App Designing UI/UX",
    "SEO Services",
    "Big Data and BI",
    "Artificial Intelligence",
    "IoT Development",
    "AR & VR Development",
    "Testing Services",
  ];

  const onButtonClick = () => {
    alert("hi");
  };

  const Dropdown = ({ title, items, buttonText }) => {
    return (
      <div className="relative group">
        <a
          href="#"
          className="flex items-center gap-1 font-medium hover:text-orange-500 transition-all"
        >
          {title}
          <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
        </a>

        <div className="absolute left-0 top-full mt-5 w-[850px] bg-white rounded-3xl shadow-xl border border-orange-100 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible translate-y-3 group-hover:translate-y-0 transition-all duration-300">
          <div className="grid grid-cols-3 gap-4">
            {items.map((item, index) => (
              <a
                key={index}
                href="#"
                className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-all duration-300"
              >
                <span className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500">
                  ⚙
                </span>

                <span className="text-gray-700 text-sm">{item}</span>
              </a>
            ))}
          </div>

          <a
            href="#"
            className="block mt-5 text-center bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition-all"
          >
            {buttonText}
          </a>
        </div>
      </div>
    );
  };

  return (
    <header className="bg-white relative z-50">
      <div className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
        <h2 className="text-2xl font-bold text-orange-500">TechMarket</h2>

        <nav className="flex gap-10 text-sm">
          <Dropdown
            title="Find Softwares"
            items={softwareItems}
            buttonText="Browse All Software Category"
          />

          <Dropdown
            title="Find Services"
            items={serviceItems}
            buttonText="Browse All Services"
          />
        </nav>

        <div className="flex gap-3">
          <a
            href="#"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full bg-white transition-all duration-300"
          >
            Login
          </a>

          <a
            href="#"
            onClick={onButtonClick}
            className="bg-orange-500 text-white px-5 py-2 rounded-full border border-orange-500 hover:text-orange-500 hover:border hover:border-orange-500 hover:bg-transparent transition-all duration-300"
          >
            Get Listed
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;