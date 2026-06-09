import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import keka from "../assets/images/keka.png";
import greythr from "../assets/images/greythr.png";
import spine from "../assets/images/spine.png";

function HappyClients() {
  const clients = [keka, greythr, spine, keka, greythr, spine];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16 overflow-hidden">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-14 bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
        Happy Clients
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            centeredSlides: true,
          },
          768: {
            slidesPerView: 3,
            centeredSlides: true,
          },
        }}
        className="happy-client-slider"
      >
        {clients.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="client-card h-40 border border-orange-400 rounded-2xl bg-white flex items-center justify-center px-8">
              <img
                src={logo}
                alt="Client Logo"
                className="max-h-24 max-w-full object-contain"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HappyClients;