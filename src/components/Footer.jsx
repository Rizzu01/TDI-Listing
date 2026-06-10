import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaWordpress,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-orange-500 text-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Us */}
          <div>
            <h3 className="font-semibold text-lg mb-5">About Us</h3>

            <ul className="space-y-4 text-sm">
              {[
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
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-orange-200 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Services</h3>

            <ul className="space-y-4 text-sm">
              {[
                "Mobile App Development",
                "Web Development",
                "E-commerce Development",
                "Software Development",
                "Digital Marketing",
                "SEO Services",
                "App Designing (UI/UX)",
                "Block Chain Technology",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-orange-200 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Software */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Software</h3>

            <ul className="space-y-4 text-sm">
              {[
                "Accounting Software",
                "CRM Software",
                "HR Software",
                "School Management Software",
                "Point Of Sale Software",
                "Applicant Tracking System",
                "Cheque Printing Software",
                "Field Service Management Software",
              ].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-orange-200 transition-all duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-lg mb-5">Social</h3>

            <div className="flex gap-5 text-lg mb-10">
              <a href="#" className="hover:scale-110 transition-all duration-300">
                <FaFacebookF />
              </a>

              <a href="#" className="hover:scale-110 transition-all duration-300">
                <FaInstagram />
              </a>

              <a href="#" className="hover:scale-110 transition-all duration-300">
                <FaTwitter />
              </a>

              <a href="#" className="hover:scale-110 transition-all duration-300">
                <FaYoutube />
              </a>

              <a href="#" className="hover:scale-110 transition-all duration-300">
                <FaWordpress />
              </a>
            </div>

            <h2 className="text-4xl font-bold">TDI</h2>
            <p className="text-xs mt-1">ONLINE SERVICES PVT. LTD.</p>
          </div>
        </div>

        <div className="border-t border-orange-300 mt-16 pt-8 text-center text-sm">
          © 2026 Creative Rizz | All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

export default Footer;