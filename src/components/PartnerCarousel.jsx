import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
// import css from "../index.css"
import partner from "../assets/images/partner-1.png";
import partnerLogo from "../assets/images/partner-logo.png";
import arrow from "../assets/images/arrow-1.svg";

function PartnerCarousel() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={24}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {cards.map((item) => (
          <SwiperSlide key={item}>
            <div className="bg-[#FFF9F4] p-6 rounded-3xl border border-orange-200">
              <div>
                <img src={partner} alt="Partner" className="w-full" />
              </div>

              <div className="flex items-center justify-between pt-6">
                <div>
                  <img
                    src={partnerLogo}
                    alt="Partner Logo"
                    className="h-12 w-auto"
                  />
                </div>

                <a
                  href="#"
                  className="w-14 h-14 bg-orange-500 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300"
                >
                  <img src={arrow} alt="Arrow" className="w-5 h-5" />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default PartnerCarousel;