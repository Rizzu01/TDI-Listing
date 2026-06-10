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
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16 lg:py-20 overflow-hidden">
      
      <div
        data-aos="fade-up"
        className="text-center mb-8 md:mb-12"
      >
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-orange-500 to-orange-200 bg-clip-text text-transparent">
          What Our Clients Says
        </h2>
      </div>

      <div
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <Swiper
          modules={[Pagination, Autoplay]}
          loop={true}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
          }}
          className="testimonial-slider"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index} className="h-auto">
              <div className="bg-[#FFF8F3] rounded-2xl lg:rounded-3xl px-5 sm:px-8 py-8 sm:py-10 text-center h-full min-h-[380px] sm:min-h-[420px] flex flex-col items-center border border-orange-100">
                
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 rounded-full object-cover border-4 border-orange-500 mb-5"
                />

                <h3 className="text-xl sm:text-2xl font-bold mb-4">
                  {item.name}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto mb-8">
                  {item.text}
                </p>

                <div className="mt-auto text-orange-500 text-xl sm:text-2xl tracking-wide">
                  ★★★★★
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </section>
  );
}

export default Testimonials;