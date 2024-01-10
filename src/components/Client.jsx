import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Image from "next/image";
import ClientData from "@/data/ClientData";

const Client = () => {
  const [activeCountry, setActiveCountry] = useState(0);

  const handleCountry = (index) => {
    setActiveCountry(index);
  };

  const clientFolder = {};
  ClientData.forEach((dataItem) => {
    if (!clientFolder[dataItem.country]) {
      clientFolder[dataItem.country] = {
        country: dataItem.country,
        clients: [dataItem],
      };
    } else {
      clientFolder[dataItem.country].clients.push(dataItem);
    }
  });

  return (
    <section className="py-20 bg-gradient-to-r from-brand1 to-blue-950 text-white">
      <div className="container flex flex-col items-center gap-8">
        <h2 className="text-2xl font-medium">Our Clients</h2>
        <div className="w-full flex flex-col gap-2 items-center">
          <div className="w-full flex justify-center gap-2 border-b pb-2">
            {Object.values(clientFolder).map((item, id) => (
              <button
                key={id}
                onClick={() => handleCountry(id)}
                className={`px-2 py-[2px] text-sm rounded-sm ${activeCountry === id ? 'bg-blue-950 text-white': ''}`}
              >
                {item.country}
              </button>
            ))}
          </div>
          <div className="w-full mt-4">
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
                "--swiper-pagination-bottom": "-5px",
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
              {Object.values(clientFolder).map((item, countryIndex) => (
                <div key={countryIndex}>
                  {activeCountry === countryIndex && (
                    <div>
                      {item.clients.map((image, index) => (
                        <SwiperSlide key={index}>
                          <Image
                            src={image.imageUrl}
                            height={2000}
                            width={2000}
                            priority={true}
                            className="md:h-[90px] h-[40px] w-full bg-white p-1 object-contain"
                            alt="client-image"
                          />
                        </SwiperSlide>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="w-full h-4"></div>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Client;
