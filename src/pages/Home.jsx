import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import partner from "../assets/images/patner-1.png"
import partnerLogo from "../assets/images/partner-logo.png"
import arrow from "../assets/images/Arrow.svg"
import PartnerCarousel from "../components/PartnerCarousel"
import CategoryTabs from "../components/CategoryTabs";



function Home() {
  return (
    <>
      <Navbar />

   <Hero/>

 <PartnerCarousel />

 <section className="max-w-6xl mx-auto px-6 py-20">
  <div className="grid md:grid-cols-2 gap-10 items-center">
    
    {/* Left Side */}
    <div>
      <h2 className="text-3xl lg:text-4xl font-bold leading-tight text-[#1B1B1B] bg-gradient-to-r from-[#ff7a00]  to-white bg-clip-text text-transparent">
        Recommendations of <br />
        <span >
          Top Software Companies
        </span>
        <br />
        & their Services
      </h2>
    </div>

    {/* Right Side */}
    <div>
      <p className="text-lg text-gray-500 leading-relaxed">
        TDI has helped more than{" "}
        <span className="font-semibold text-orange-500">
          50,000+
        </span>{" "}
        businesses find the right IT service and software providers,
        enabling them to make smarter technology decisions and
        accelerate business growth.
      </p>
    </div>

  </div>
</section>

<CategoryTabs />
    </>
  );
}

export default Home;