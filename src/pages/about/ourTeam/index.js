import Link from "next/link";
import React from "react";
import TeamData from "@/data/TeamData";
import Image from "next/image";

const index = () => {
  const ShowTeam = ({ data }) => {
    return (
      <div className="p-4">
        <div className="h-full flex flex-col items-center text-center">
          <Image
            priority={true}
            width={2000}
            height={2000}
            alt={data.name}
            className="sm:h-44 h-36 sm:w-44 w-36 rounded-full object-cover object-top mb-4"
            src={data.image}
          />
          <div className="w-full">
            <h3 className="title-font font-medium sm:text-xl text-lg text-gray-900">
              {data.name}
            </h3>
            <p className="text-brand1 sm:text-lg text-base font-medium">{data.post}</p>
          </div>
        </div>
      </div>
    );
  };
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
            /<li>Our Team</li>
          </ul>
        </div>
      </section>
      <section className="md:py-20 py-16">
        <div className="container flex flex-col items-center gap-14">
          <div className="w-full flex flex-col items-center gap-1">
            <h2 className="sm:text-2xl text-xl font-medium text-black text-center">
              Our Team
            </h2>
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="h-1 w-1/5 bg-gradient-to-r from-gray-300 to-red-400"></span>
              <span className="inline-block w-2 h-2 bg-brand1 rotate-45"></span>
              <span className="h-1 w-1/5 bg-gradient-to-r from-red-400 to-gray-300"></span>
            </div>
          </div>
          <div className="lg:w-3/4 w-full flex flex-col items-center gap-6 bg-gray-100 p-2 rounded">
            <div className="mx-auto">
              <ShowTeam data={TeamData[0]} />
            </div>
            <div className="w-full grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
              {TeamData.slice(1).map((dataItem, id) => (
                <ShowTeam key={id} data={dataItem} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
