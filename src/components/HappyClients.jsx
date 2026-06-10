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
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-hidden">
      
      <div
        data-aos="fade-up"
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
          Happy Clients
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          centeredSlides={true}
          loop={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 15,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="happy-client-slider"
        >
          {clients.map((logo, index) => (
            <SwiperSlide key={index}>
              <div  className="client-card h-32 sm:h-36 md:h-40 border border-orange-300 rounded-2xl bg-white flex items-center justify-center px-6 sm:px-8"  data-aos="fade-up"
        data-aos-delay="200">
                <img
                  src={logo}
                  alt="Client Logo"
                  className="max-h-16 sm:max-h-20 md:max-h-24 max-w-full object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}

export default HappyClients;