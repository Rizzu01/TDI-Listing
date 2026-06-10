import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";

import logo from "../assets/images/logo.png";

function Footer() {
  const aboutLinks = [
    "Why Get Listed?",
    "Awards and badges",
    "Media Coverage",
    "Register your Software or Company",
    "Write for us",
    "Upgrade & Promotion",
    "Blog",
    "Terms of use",
    "Privacy Policy",
    "Contact Us",
  ];

  const serviceLinks = [
    "Mobile App Development",
    "Web Development",
    "E-commerce Development",
    "Software Development",
    "Digital Marketing",
    "SEO Services",
    "App Designing (UI/UX)",
    "Block Chain Technology",
  ];

  const softwareLinks = [
    "Accounting Software",
    "CRM Software",
    "HR Software",
    "School Management Software",
    "Point Of Sale Software",
    "Applicant Tracking System",
    "Cheque Printing Software",
    "Field Service Management Software",
  ];

  return (
    <footer className="bg-orange-500 text-white mt-12 md:mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4 md:mb-5">About Us</h3>

            <ul className="space-y-3 md:space-y-4 text-sm">
              {aboutLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-200 transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4 md:mb-5">Services</h3>

            <ul className="space-y-3 md:space-y-4 text-sm">
              {serviceLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-200 transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4 md:mb-5">Software</h3>

            <ul className="space-y-3 md:space-y-4 text-sm">
              {softwareLinks.map((item) => (
                <li key={item}>
                  <a href="#" className="hover:text-orange-200 transition-all duration-300">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center sm:text-left">
            <h3 className="font-semibold text-lg mb-4 md:mb-5">Social</h3>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 text-lg mb-6 md:mb-10">
              <a href="#" aria-label="Facebook" className="hover:scale-110 transition-all duration-300">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram" className="hover:scale-110 transition-all duration-300">
                <FaInstagram />
              </a>
              <a href="#" aria-label="Twitter" className="hover:scale-110 transition-all duration-300">
                <FaTwitter />
              </a>
              <a href="#" aria-label="YouTube" className="hover:scale-110 transition-all duration-300">
                <FaYoutube />
              </a>
              <a href="#" aria-label="WordPress" className="hover:scale-110 transition-all duration-300">
                <FaWordpress />
              </a>
            </div>

            <div className="logo">
              <a href="/" className="flex items-center">
  <img
    src={logo}
    alt="TDI Logo"
    className="h-14 md:h-16 lg:h-20 w-auto"
  />
</a>
            </div>
          </div>
        </div>

        <div className="border-t border-orange-300 mt-10 md:mt-16 pt-6 md:pt-8 text-center text-xs sm:text-sm">
          © 2026 Creative Rizz | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;