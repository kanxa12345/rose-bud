import React from "react";
import CountryData from "@/data/CountryData";
import Image from "next/image";
import Link from "next/link";

const Country = () => {
  return (
    <section className="md:py-20 py-16">
      <div className="container flex flex-col items-center gap-12">
        <h2 className="sm:text-2xl text-xl font-medium">
          Country <span className="text-brand1">We</span> Serve
        </h2>
        <div className="grid md:grid-cols-3 grid-cols-2 sm:gap-10 gap-6 lg:w-[70%] w-full mx-auto">
          {CountryData.slice(0, 6).map((item, id) => (
            <div key={id} className="w-full h-full rounded-full relative group overflow-hidden">
              <Image
                src={item.image}
                priority={true}
                height={2000}
                width={2000}
                alt={item.country}
                className="w-full h-full aspect-square object-cover rounded-full group-hover:scale-110 transition-all duration-200 ease-linear"
              />
              <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black to-transparent rounded-full opacity-70"></div>
              <h3 className="sm:text-xl text-base font-medium w-full text-center left-0 bottom-4 z-10 text-white absolute">
                {item.country}
              </h3>
            </div>
          ))}
        </div>
        <Link
            href="/country"
            className="text-white font-medium sm:text-base text-sm border border-blue-950 bg-blue-950 hover:text-blue-950 hover:bg-white px-2 py-1 cursor-pointer transition-all duration-200 ease-linear"
          >
            View All
          </Link>
      </div>
    </section>
  );
};

export default Country;
