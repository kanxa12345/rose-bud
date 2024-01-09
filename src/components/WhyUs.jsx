import WhyUsData from "@/data/WhyUsData";
import Image from "next/image";
import React from "react";

const WhyUs = () => {
  return (
    <section
      className="py-28 relative text-white"
      style={{
        backgroundImage: `url("/images/bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-black to-blue-950 opacity-70"></div>
      <div className="container flex flex-col items-center gap-6 relative">
        <h2 className="text-2xl font-medium">
          Why <span className="text-brand1">From</span> RoseBud
        </h2>
        <div className="w-full grid grid-cols-4 gap-6">
            {WhyUsData.map((item, id)=>(
                <div key={id} className="flex flex-col items-center gap-1 bg-white bg-opacity-80 p-4 text-black rounded">
                    <Image src={item.iconImage} priority={true} height={2000} width={2000} alt={item.title} className="h-16 w-auto" />
                    <h3 className="text-xl font-bold text-brand1">{item.title.toUpperCase()}</h3>
                    <p className="text-sm text-center text-gray-950">{item.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
