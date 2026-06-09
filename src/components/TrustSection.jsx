import trustImg from "../assets/images/trust.png";

function TrustSection() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        
        {/* Left Side */}
        <div>
          <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-[#1B1B1B] bg-gradient-to-r from-[#ff7a00]  to-white bg-clip-text text-transparent">
            Why Businesses
            <br />
            Trust Us
          </h2>

          <img
            src={trustImg}
            alt="Why Businesses Trust Us"
            className="w-full max-w-md"
          />
        </div>

        {/* Right Side */}
        <div>
          <p className="text-lg text-gray-500 leading-relaxed mb-10">
            We are growing more and more every day with listing
            categories, and inspections on the latest business drifts.
            TDI has more than{" "}
            <span className="text-orange-500 font-bold">
              10K+ services
            </span>{" "}
            and software enterprises listed with their respective
            detailed information.
          </p>

          <ul className="space-y-8 text-lg text-black font-medium list-disc pl-6">
            <li>
              We are nation's one of the leading Technology and software
              recommendation platform.
            </li>

            <li>
              With unmatched capabilities and an account of building
              strategic, customizable, and insight-driven solutions, we
              maximize efficiency and results.
            </li>

            <li>
              Creating great solutions is an enterprise-wide team sport
              at TDI.
            </li>

            <li>
              We recognise the power of different prospects.
            </li>

            <li>
              We share information and endeavor to create an environment
              that welcomes and values everyone’s criteria.
            </li>
          </ul>
        </div>

      </div>
    </section>
  );
}

export default TrustSection;