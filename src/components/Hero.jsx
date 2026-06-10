import hero from "../assets/images/hero-1.png";

function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Content */}
        <div
          className="text-center lg:text-left order-2 lg:order-1"
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <p
            className="text-gray-700 uppercase tracking-[3px] text-xs sm:text-sm mb-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Find The Best
          </p>

          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight bg-gradient-to-r from-[#ff7a00] to-[#ffd6bc] bg-clip-text text-transparent pb-2"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            SOFTWARE &
            <br />
            IT COMPANY
          </h1>

          <p
            className="text-base sm:text-lg text-gray-600 mt-4 mb-8"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            For your business needs
          </p>

          <div
            className="max-w-xl mx-auto lg:mx-0"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="flex flex-col sm:flex-row border border-orange-300 rounded-3xl sm:rounded-full bg-white p-2 gap-2">
              <input
                type="text"
                placeholder="Search Softwares or Companies"
                className="flex-1 px-5 py-3 outline-none text-sm rounded-full"
              />

              <a
                href="#"
                className="bg-orange-500 text-white px-8 py-3 text-sm font-medium rounded-full border border-orange-500 hover:bg-transparent hover:text-orange-500 transition-all duration-300 text-center"
              >
                Search
              </a>
            </div>
          </div>
        </div>

        {/* Image */}
        <div
          className="flex justify-center order-1 lg:order-2"
          data-aos="fade-left"
          data-aos-duration="1200"
        >
          <img
            src={hero}
            alt="Hero"
            className="w-full max-w-sm sm:max-w-md lg:max-w-full hero-float"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;