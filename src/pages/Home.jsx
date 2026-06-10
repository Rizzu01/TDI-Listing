import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import PartnerCarousel from "../components/PartnerCarousel"
import CategoryTabs from "../components/CategoryTabs";
import TrustSection from "../components/TrustSection";
import Testimonials from "../components/Testimonials";
import HappyClients from "../components/HappyClients";
import HowItHelps from "../components/HowItHelps";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";



function Home() {
  return (
    <>
      <Navbar />

   <Hero/>

 <PartnerCarousel />

 

<CategoryTabs />   

<TrustSection />

<Testimonials />

<HappyClients />

<HowItHelps/>

<Newsletter />

<Footer />
</>
    
  );
}

export default Home;