import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import partner from "../assets/images/partner-1.png";
import partnerLogo from "../assets/images/partner-logo.png";
import arrow from "../assets/images/arrow-1.svg";

function PartnerCarousel() {
  const cards = [1, 2, 3, 4, 5, 6];

  return (
    <section
      className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-hidden"
      data-aos="fade-up"
    >
      <Swiper
        modules={[Autoplay, Pagination]}
        loop={true}
        spaceBetween={20}
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
            spaceBetween: 16,
          },
          640: {
            slidesPerView: 1.5,
            spaceBetween: 18,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="partner-slider"
      >
        {cards.map((item, index) => (
          <SwiperSlide key={item} className="h-auto">
            <div
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="bg-[#FFF9F4] p-4 sm:p-5 lg:p-6 rounded-2xl lg:rounded-3xl border border-orange-200 h-full"
            >
              <div className="overflow-hidden rounded-xl lg:rounded-2xl">
                <img
                  src={partner}
                  alt="Partner"
                  className="w-full h-auto object-cover"
                />
              </div>

              <div className="flex items-center justify-between pt-5 sm:pt-6 gap-4">
                <div>
                  <img
                    src={partnerLogo}
                    alt="Partner Logo"
                    className="h-8 sm:h-10 lg:h-12 w-auto"
                  />
                </div>

                <a
                  href="#"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex-shrink-0 bg-orange-500 rounded-full flex items-center justify-center hover:bg-black transition-all duration-300"
                >
                  <img
                    src={arrow}
                    alt="Arrow"
                    className="w-3 sm:w-4 lg:w-5"
                  />
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