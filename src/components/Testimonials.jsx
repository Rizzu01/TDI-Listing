import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import client1 from "../assets/images/client1.jpg";
import client2 from "../assets/images/client2.jpg";

function Testimonials() {
  const testimonials = [
    {
      name: "Spine HR",
      image: client1,
      text: "Techimply played a crucial role in enhancing our market reputation. Their comprehensive analysis made it simple for customers to find and choose our solutions. We leveraged their branding services, which significantly boosted our visibility and differentiated us from the competition.",
    },
    {
      name: "Spine HR",
      image: client2,
      text: "Techimply played a crucial role in enhancing our market reputation. Their comprehensive analysis made it simple for customers to find and choose our solutions. We leveraged their branding services, which significantly boosted our visibility and differentiated us from the competition.",
    },
    {
      name: "Spine HR",
      image: client1,
      text: "Techimply played a crucial role in enhancing our market reputation. Their comprehensive analysis made it simple for customers to find and choose our solutions.",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
        What Our Clients Says
      </h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={2}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#FFF8F3] rounded-2xl px-8 py-10 text-center min-h-[420px] flex flex-col items-center">
              <img
                src={item.image}
                alt={item.name}
                className="w-28 h-28 rounded-full object-cover border-4 border-orange-500 mb-5"
              />

              <h3 className="text-2xl font-bold mb-5">
                {item.name}
              </h3>

              <p className="text-gray-600 text-base leading-relaxed max-w-md mx-auto mb-8">
                {item.text}
              </p>

              <div className="mt-auto text-orange-500 text-2xl tracking-wide">
                ★★★★★
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Testimonials;