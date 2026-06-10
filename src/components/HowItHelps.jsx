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
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mb-10 md:mb-14 lg:mb-16 items-start md:items-center">
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold leading-tight bg-gradient-to-r from-[#ff7a00] to-[#ffd6bc] bg-clip-text text-transparent">
          How does TDI
          <br />
          help exactly?
        </h2>

        <p className="text-gray-500 text-base sm:text-lg leading-relaxed max-w-xl md:ml-auto">
          Searching for an appropriate and reliable Software and IT company is
          essential for the success of your next dream project. And we help you
          right there.
        </p>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={20}
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
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.4,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 22,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        className="pb-2"
      >
        {cards.map((item, index) => (
          <SwiperSlide key={index} className="h-auto">
            <div className="bg-orange-50 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center relative h-full min-h-[280px] sm:min-h-[310px] flex flex-col items-center">
              <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-28 mx-auto -mt-6 sm:-mt-8 mb-6 sm:mb-8 rounded-b-3xl border border-orange-500 flex items-center justify-center bg-white">
                <div className="text-4xl sm:text-5xl md:text-6xl text-orange-500">
                  {item.icon}
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-black mb-4 sm:mb-5 leading-tight">
                {item.title}
              </h3>

              <p className="text-sm text-black/80 leading-relaxed max-w-xs mx-auto">
                {item.desc}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center gap-4 sm:gap-6 mt-8">
        <button
          type="button"
          className="how-prev w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          ←
        </button>

        <button
          type="button"
          className="how-next w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white transition-all duration-300"
        >
          →
        </button>
      </div>
    </section>
  );
}

export default HowItHelps;