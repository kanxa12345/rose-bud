import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhyUsData from "@/data/WhyUsData";

const WhyUs = () => {
  return (
    <section
      className="py-10 relative text-white"
      style={{
        backgroundImage: `url("/images/bg.jpg")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute w-full h-full inset-0 bg-gradient-to-r from-black to-blue-950 opacity-70"></div>
      <div className="container flex flex-col items-center gap-8 relative">
        <h2 className="sm:text-2xl text-xl font-medium">
          Why <span className="text-brand1">From</span> RoseBud
        </h2>
        <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
            {WhyUsData.map((item, id)=>(
                <div key={id} className="flex flex-col items-center gap-2 bg-brand1 bg-opacity-90 px-4 xl:py-14 py-10 text-black rounded" data-aos="zoom-in" data-aos-once="true" data-aos-duration="2000">
                    <Image src={item.iconImage} priority={true} height={2000} width={2000} alt={item.title} className="h-16 w-auto" />
                    <h3 className="sm:text-xl text-lg font-bold text-white">{item.title.toUpperCase()}</h3>
                    <p className="text-center text-gray-200 sm:text-base text-sm">{item.description.substring(0,100)}</p>
                </div>
            ))}
        </div>
        <Link href="/whyUs" className="text-white border font-medium sm:text-base text-sm border-blue-950 hover:border-white bg-blue-950 hover:bg-opacity-10 hover:bg-white px-2 py-1 cursor-pointer transition-all duration-200 ease-linear">View Details</Link>
      </div>
    </section>
  );
};

export default WhyUs;
