import { FaPaperPlane } from "react-icons/fa";
import newsletterImg from "../assets/images/newsletter.png";

function Newsletter() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
       <div className="relative">
  <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-[#1B1B1B] bg-gradient-to-r from-[#ff7a00]  to-white bg-clip-text text-transparent">
    <span className="">
      Stay Connected with
      <br />
      our latest updates!
    </span>
  </h2>

 <img
  src={newsletterImg}
  alt="Newsletter"
  className="w-full max-w-md mt-4 newsletter-float"
/>
</div>

        {/* Right Side */}
        <div>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
            Subscribe to our newsletter for the latest industry insights,
            expert tips, and exclusive updates in your inbox.
          </p>

          <div className="border border-orange-300 rounded-full p-2 flex items-center bg-white">
            <input
              type="email"
              placeholder="example@gmail.com"
              className="flex-1 px-6 py-3 outline-none text-gray-600"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-10 py-3 rounded-full transition-all duration-300">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;