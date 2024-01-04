import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
import BannerData from "@/data/BannerData";

const Banner = () => {
  return (
    <section className="w-full h-auto text-white">
      <Swiper
        modules={[Pagination, Scrollbar, A11y, Autoplay, EffectFade]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        navigation={{
          clickable: true,
        }}
        style={{
          "--swiper-pagination-bullet-size": "8px",
          "--swiper-pagination-bullet-inactive-color": "#fff",
          "--swiper-theme-color": "red",
          "--swiper-pagination-bullet-inactive-opacity": "0.7",
          "--swiper-navigation-size": "30px",
          "--swiper-navigation-background": "#000",
        }}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 5000 }}
        effect="fade"
        fadeEffect={{
          crossFade: true,
        }}
        speed={3000}
      >
        {BannerData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-auto">
              <Image
                src={item.imageUrl}
                priority={true}
                height={6000}
                width={6000}
                className="w-full lg:h-[750px] md:h-[400px] sm:h-[300px] h-[200px] object-cover"
                alt="banner-image"
              />
              <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black to-gray-400 opacity-50"></div>
            </div>
            <div className="container h-full w-full absolute flex items-center inset-0">
              <div className="w-1/2">
                <h1 className="text-5xl font-semibold">
                    <span className="mr-1 text-brand1">{item.slogan.split(" ")[0]}</span>
                    {item.slogan.split(" ").slice(1).join(" ")}
                    </h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Banner;
