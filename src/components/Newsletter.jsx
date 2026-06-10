import newsletterImg from "../assets/images/newsletter.png";

function Newsletter() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Side */}
        <div
          className="text-center lg:text-left order-2 lg:order-1"
          data-aos="fade-right"
        >
          <h2
            data-aos="fade-up"
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight bg-gradient-to-r from-[#ff7a00] to-[#ffd6bc] bg-clip-text text-transparent"
          >
            Stay Connected with
            <br />
            our latest updates!
          </h2>

          <img
            src={newsletterImg}
            alt="Newsletter"
            data-aos="zoom-in"
            data-aos-delay="300"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 mt-6 newsletter-float"
          />
        </div>

        {/* Right Side */}
        <div
          className="order-1 lg:order-2 text-center lg:text-left"
          data-aos="fade-left"
        >
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8 max-w-lg mx-auto lg:mx-0"
          >
            Subscribe to our newsletter for the latest industry insights,
            expert tips, and exclusive updates delivered directly to your inbox.
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="400"
            className="bg-white border border-orange-300 rounded-3xl sm:rounded-full p-2 flex flex-col sm:flex-row gap-2"
          >
            <input
              type="email"
              placeholder="example@gmail.com"
              className="flex-1 px-5 sm:px-6 py-3 outline-none text-gray-600 rounded-full text-sm sm:text-base"
            />

            <button className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-10 py-3 rounded-full transition-all duration-300 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Newsletter;