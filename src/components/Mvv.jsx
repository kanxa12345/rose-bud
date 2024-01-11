import MvvData from "@/data/MvvData";
import Image from "next/image";
import React from "react";

const Mvv = () => {
  return (
    <section className="h-full bg-gray-100">
      <div
        className="element h-full bg-indigo-950 py-48 relative"
        style={{
          backgroundImage: `url("/images/bg1.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute w-full h-full inset-0 bg-gray-950 opacity-85"></div>
        <div className="container flex sm:flex-row flex-col lg:flex-nowrap sm:flex-wrap justify-center relative">
          {MvvData.map((item, id) => (
            <div
              key={id}
              className="lg:w-1/3 sm:w-1/2 w-full p-4"
              
            >
              <div className=" flex flex-col items-center gap-2 sm:p-5 p-3 rounded text-white border border-gray-500 bg-brand2 bg-opacity-10" data-aos="zoom-out"
              data-aos-once="true"
              data-aos-duration="2000">
                <Image
                  src={item.icon}
                  priority={true}
                  width={2000}
                  height={2000}
                  className="sm:w-16 w-12 sm:h-16 h-12"
                />
                <h3 className="sm:text-xl text-lg font-bold text-brand1">
                  {item.title}
                </h3>
                <p className="text-center 2xl:text-base text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mvv;
