import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import { FaFileSignature, FaCodeBranch, FaAward } from "react-icons/fa";

function HowItHelps() {
  const cards = [
    {
      icon: <FaFileSignature />,
      title: "Mention your Requirements",
      desc: "Write your inquiry in our Inquiry Section and expect for us to call you back regarding it.",
    },
    {
      icon: <FaCodeBranch />,
      title: "Examine the Alternatives",
      desc: "Search through all the service or software providers from more than 2500+ providers listed.",
    },
    {
      icon: <FaAward />,
      title: "Choose the Best",
      desc: "Search through all the service or software providers from more than 2500+ providers listed.",
    },
    {
      icon: <FaFileSignature />,
      title: "Submit Inquiry",
      desc: "Share your business need and our team will help you find the best provider.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        <h2 className="text-3xl lg:text-4xl font-bold leading-tight bg-gradient-to-r from-[#ff7a00] to-white bg-clip-text text-transparent">
          How does TDI
          <br />
          help exactly?
        </h2>

        <p className="text-gray-500 text-base sm:text-lg max-w-md">
          Searching for an appropriate and reliable Software and IT company is
          essential for the success of your next dream project. And we help you
          right there.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        navigation={{
          nextEl: ".how-next",
          prevEl: ".how-prev",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {cards.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-orange-50 rounded-3xl p-8 text-center relative h-full">
              <div className="w-32 h-28 mx-auto -mt-8 mb-8 rounded-b-3xl border border-orange-500 flex items-center justify-center bg-white">
                <div className="text-6xl text-orange-500">{item.icon}</div>
              </div>

              <h3 className="text-lg font-bold text-black mb-5 leading-tight">
                {item.title}
              </h3>

              <p className="text-sm text-black leading-relaxed">{item.desc}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-6 mt-8">
        <button className="how-prev w-12 h-12 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all">
          ←
        </button>

        <button className="how-next w-12 h-12 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all">
          →
        </button>
      </div>
    </section>
  );
}

export default HowItHelps;