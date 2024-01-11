import Link from "next/link";
import React from "react";
import CountryData from "@/data/CountryData";
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
            /<li>Country</li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container flex flex-col items-center gap-10">
            <h2 className="text-2xl font-medium">Country <span className="text-brand1">We</span> Serve</h2>
            <div className="w-full grid grid-cols-4 gap-8">
                {CountryData.map((item, id)=>(
                    <div key={id} className="flex flex-col items-center shadow-[0_0_5px_1px_rgba(0,0,0,0.2)]">
                        <Image src={item.image} priority={true} width={2000} height={2000} alt={item.country} className="w-full h-64 object-cover" />
                        <span className="flex w-full justify-center py-1 bg-blue-950 text-white">
                            <h3 className="text-xl font-semibold">{item.country}</h3>
                        </span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  );
};

export default Index;
