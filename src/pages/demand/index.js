import NewspaperModal from "@/components/NewspaperModal";
import VacancyData from "@/data/VacancyData";
import Link from "next/link";
import React from "react";

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
            /<li>Current Demand</li>
          </ul>
        </div>
      </section>
      <section className="md:py-20 py-16 bg-gray-100">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="sm:text-2xl text-xl font-medium">
            <span className="text-brand1">Newspaper</span> Vacancy
          </h2>
          <div className="w-full grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 sm:gap-6 gap-4">
            {VacancyData.map((item, index) => (
              <NewspaperModal key={index} imageUrl={item.imageUrl} publishedDate={item.publishedDate} interviewDate={item.interviewDate} images={VacancyData} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
