import Link from "next/link";
import React from "react";
import WhyUsData from "@/data/WhyUsData";
import Image from "next/image";

const Index = () => {
  return (
    <>
      <section className="h-[200px] bg-gray-900 text-white">
        <div className="container flex justify-center items-center h-full pt-[78px]">
          <ul className="flex items-center gap-1">
            <li>
              <Link href="/" className="text-brand1">
                Home
              </Link>
            </li>
            /<li>Why Choose Us</li>
          </ul>
        </div>
      </section>
      <section className="md:py-20 py-16 bg-gray-50">
        <div className="container flex flex-col items-center sm:gap-14 gap-10">
          <div className="w-full flex flex-col items-center gap-1">
            <h2 className="sm:text-2xl text-xl font-medium text-black text-center">
              Why Choose Us
            </h2>
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="h-1 sm:w-1/5 w-1/4 bg-gradient-to-r from-gray-300 to-red-400"></span>
              <span className="inline-block w-2 h-2 bg-brand1 rotate-45"></span>
              <span className="h-1 sm:w-1/5 w-1/4 bg-gradient-to-r from-red-400 to-gray-300"></span>
            </div>
          </div>
          <div className="w-full grid sm:grid-cols-2 sm:gap-10 gap-8">
            {WhyUsData.map((item, id) => (
              <div key={id} className="flex flex-col items-center gap-4 p-5 rounded bg-brand1 text-white bg-opacity-90"  data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="2000">
                <Image src={item.iconImage} priority={true} width={2000} height={2000} alt={item.title} className="sm:w-24 w-20 sm:h-24 h-20"/>
                <h3 className="sm:text-xl text-lg font-medium">{item.title.toUpperCase()}</h3>
                <p className="text-gray-100 sm:text-base text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
