import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";

const Client = () => {
  const clientImages = [
    "/images/clients-images/alwish.png",
    "/images/clients-images/blcc.jpg",
    "/images/clients-images/high-vision.png",
    "/images/clients-images/j4.png",
    "/images/clients-images/paragon.png",
    "/images/clients-images/pcs.jpg",
    "/images/clients-images/rs.png",
  ];
  return (
    <section className="py-20 bg-gradient-to-r from-brand1 to-blue-950 text-white">
      <div className="container flex flex-col items-center gap-6">
        <h2 className="text-2xl font-medium">Our Clients</h2>
        <div className="w-full">
          <Swiper
            centeredSlidesBounds={true}
            modules={[Pagination, A11y, Autoplay]}
            spaceBetween={50}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 3000 }}
            slidesPerView={3}
            pagination={{ clickable: true }}
            style={{
              "--swiper-pagination-bullet-size": "7px",
              "--swiper-pagination-bullet-inactive-color": "#fff",
              "--swiper-theme-color": "red",
              "--swiper-pagination-bullet-inactive-opacity": "0.7",
                "--swiper-pagination-bottom": "-5px"
            }}
            breakpoints={{
              768: {
                slidesPerView: 4,
                spaceBetween: 70,
              },
              1024: {
                slidesPerView: 5,
                spaceBetween: 80,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 80,
              },
            }}
          >
            {clientImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  height={2000}
                  width={2000}
                  priority={true}
                  className="md:h-[90px] h-[40px] w-full bg-white p-1 object-contain"
                  alt="client-image"
                />
              </SwiperSlide>
            ))}
            <div className="w-full h-4"></div>
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Client;
