import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const softwareItems = [
    "HR Software",
    "Payroll Software",
    "CRM Software",
    "ERP Software",
    "Accounting Software",
    "Hospital Management Software",
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
    "Digital Marketing",
    "Web Designing UI/UX",
    "SEO Services",
    "Big Data and BI",
    "Artificial Intelligence",
    "IoT Development",
    "AR & VR Development",
    "Testing Services",
  ];

  const Dropdown = ({ title, items, buttonText }) => {
    const [open, setOpen] = useState(false);

    return (
      <div className="relative group">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-1 font-medium hover:text-orange-500 transition-all duration-300"
        >
          {title}

          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              open ? "rotate-180" : "group-hover:rotate-180"
            }`}
          />
        </button>

        <div
          className={`
            lg:absolute lg:left-0 lg:top-full lg:mt-5
            lg:w-[850px]
            bg-white
            lg:rounded-3xl
            lg:shadow-xl
            lg:border
            lg:border-orange-100
            lg:p-6
            lg:opacity-0
            lg:invisible
            lg:group-hover:opacity-100
            lg:group-hover:visible
            transition-all
            duration-300
            ${
              open
                ? "block mt-4"
                : "hidden lg:block"
            }
          `}
        >
          <div className="max-h-[350px] overflow-y-auto lg:max-h-none">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {items.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-orange-50 transition-all duration-300"
                >
                  <span className="w-9 h-9 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 flex-shrink-0">
                    ⚙
                  </span>

                  <span className="text-gray-700 text-sm">
                    {item}
                  </span>
                </a>
              ))}
            </div>
          </div>

          <a
            href="#"
            className="block mt-5 text-center bg-orange-500 text-white py-3 rounded-full hover:bg-orange-600 transition-all duration-300"
          >
            {buttonText}
          </a>
        </div>
      </div>
    );
  };

  return (
    <header className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 lg:py-5 flex items-center justify-between">
      <a href="/" className="flex items-center">
  <img
    src={logo}
    alt="TDI Logo"
    className="h-14 md:h-16 lg:h-20 w-auto"
  />
</a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-10 text-sm">
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

        {/* Desktop Buttons */}
        <div className="hidden lg:flex gap-3">
          <a
            href="#"
            className="border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-5 py-2 rounded-full transition-all duration-300"
          >
            Login
          </a>

          <a
            href="#"
            className="bg-orange-500 text-white px-5 py-2 rounded-full border border-orange-500 hover:text-orange-500 hover:bg-transparent transition-all duration-300"
          >
            Get Listed
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-orange-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-orange-100 px-4 sm:px-6 py-6 space-y-6">
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

          <div className="flex flex-col gap-3 pt-2">
            <a
              href="#"
              className="text-center border border-orange-500 text-orange-500 px-5 py-3 rounded-full hover:bg-orange-500 hover:text-white transition-all duration-300"
            >
              Login
            </a>

            <a
              href="#"
              className="text-center bg-orange-500 text-white px-5 py-3 rounded-full border border-orange-500 hover:bg-transparent hover:text-orange-500 transition-all duration-300"
            >
              Get Listed
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;