import trustImg from "../assets/images/trust.png";

function TrustSection() {
  const trustPoints = [
    "We are nation's one of the leading Technology and software recommendation platform.",
    "With unmatched capabilities and an account of building strategic, customizable, and insight-driven solutions, we maximize efficiency and results.",
    "Creating great solutions is an enterprise-wide team sport at TDI.",
    "We recognise the power of different prospects.",
    "We share information and endeavor to create an environment that welcomes and values everyone’s criteria.",
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        
        {/* Left Side */}
        <div className="text-center lg:text-left">
          <h2
            data-aos="fade-right"
            className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight bg-gradient-to-r from-[#ff7a00] to-[#ffd6bc] bg-clip-text text-transparent"
          >
            Why Businesses
            <br />
            Trust Us
          </h2>

          <div
            data-aos="zoom-in"
            data-aos-delay="200"
            className="mt-6"
          >
            <img
              src={trustImg}
              alt="Why Businesses Trust Us"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto lg:mx-0 trust-float"
            />
          </div>
        </div>

        {/* Right Side */}
        <div data-aos="fade-left">
          <p className="text-base sm:text-lg text-gray-500 leading-relaxed mb-8 lg:mb-10">
            We are growing more and more every day with listing categories
            and inspections on the latest business drifts. TDI has more
            than{" "}
            <span className="text-orange-500 font-bold">
              10K+ services
            </span>{" "}
            and software enterprises listed with their respective detailed
            information.
          </p>

          <ul className="space-y-5 sm:space-y-6 text-base sm:text-lg text-black font-medium pl-5">
            {trustPoints.map((point, index) => (
              <li
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="list-disc"
              >
                {point}
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}

export default TrustSection;