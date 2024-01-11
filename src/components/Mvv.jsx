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
        <div className="container grid grid-cols-3 gap-8 relative">
          {MvvData.map((item, id) => (
            <div
              key={id}
              className="flex flex-col items-center gap-2 p-5 rounded text-white border border-gray-500 bg-brand2 bg-opacity-10"
              data-aos="zoom-out"
              data-aos-once="true"
              data-aos-duration="2000"
            >
              <Image
                src={item.icon}
                priority={true}
                width={2000}
                height={2000}
                className="w-16 h-16"
              />
              <h3 className="text-xl font-bold text-brand1">{item.title}</h3>
              <p className="text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mvv;
