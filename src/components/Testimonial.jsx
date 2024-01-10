import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Scrollbar,
  A11y,
  Autoplay,
  Navigation,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import Image from "next/image";
import TestimonialData from "@/data/TestimonialData";

const Testimonial = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container flex flex-col items-center gap-6">
        <h2 className="text-2xl font-medium text-brand1">Testimonial</h2>
        <div className="w-2/3 text-gray-600">
          <Swiper
            modules={[ Scrollbar, A11y, Autoplay, Navigation ]}
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            navigation={{
              clickable: true,
            }}
            style={{
              "--swiper-theme-color": "red",
              "--swiper-pagination-bullet-inactive-opacity": "0.7",
              "--swiper-navigation-size": "25px",
              "--swiper-navigation-background": "#000",
            }}
            autoplay={{ delay: 5000 }}
          >
            {TestimonialData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-3/4 mx-auto text-center flex flex-col items-center">
                    <Image src={item.imageUrl} priority={true} width={2000} height={2000} alt={item.name} className="w-24 h-24 object-cover rounded-full"/>
                  <p className="leading-relaxed mt-4">{item.review}</p>
                  <span className="inline-block h-1 w-10 rounded bg-brand2 my-4"></span>
                  <h3 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                    {item.name}
                  </h3>
                  <p className="text-gray-500">{item.profession}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
