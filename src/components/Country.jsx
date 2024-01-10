import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import CountryData from "@/data/CountryData";
import Image from "next/image";

const Country = () => {
  return (
    <section className="py-20">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-2xl font-medium">
          Country <span className="text-brand1">We</span> Serve
        </h2>
        <div className="w-full">
          <Swiper
            centeredSlidesBounds={true}
            modules={[Pagination, A11y, Autoplay, Navigation]}
            spaceBetween={20}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 5000 }}
            navigation={{
              clickable: true,
            }}
            slidesPerView={4}
            style={{
              "--swiper-pagination-bullet-size": "7px",
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-theme-color": "red",
              "--swiper-pagination-bullet-inactive-opacity": "0.7",
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 20
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 20
              },
            }}
          >
            {CountryData.map((item, id) => (
              <SwiperSlide key={id}>
                <div className="w-full">
                  <Image
                    src={item.image}
                    priority={true}
                    height={2000}
                    width={2000}
                    alt={item.country}
                    className="w-full h-64 object-cover"
                  />
                  <div className="w-full bg-blue-950 py-2">
                    <h3 className="text-xl font-medium w-full text-center left-0 bottom-4 z-10 text-white">
                      {item.country}
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Country;
