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
          
          <div>
            <h3 className="font-semibold text-lg mb-5">About Us</h3>
            <ul className="space-y-4 text-sm">
              <li>Why Get Listed?</li>
              <li>Awards and badges</li>
              <li>Media Coverage</li>
              <li>Register your Software or Company</li>
              <li>Write for us</li>
              <li>Upgrade & Promotion</li>
              <li>Blog</li>
              <li>Terms of use</li>
              <li>Privacy Policy</li>
              <li>Contact Us</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Services</h3>
            <ul className="space-y-4 text-sm">
              <li>Mobile App Development</li>
              <li>Web Development</li>
              <li>E-commerce Development</li>
              <li>Software Development</li>
              <li>Digital Marketing</li>
              <li>SEO Services</li>
              <li>App Designing (UI/UX)</li>
              <li>Block Chain Technology</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Software</h3>
            <ul className="space-y-4 text-sm">
              <li>Accounting Software</li>
              <li>CRM Software</li>
              <li>HR Software</li>
              <li>School Management Software</li>
              <li>Point Of Sale Software</li>
              <li>Applicant Tracking System</li>
              <li>Cheque Printing Software</li>
              <li>Field Service Management Software</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-5">Social</h3>

            <div className="flex gap-5 text-lg mb-10">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
              <FaYoutube />
              <FaWordpress />
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