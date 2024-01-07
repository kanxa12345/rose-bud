import Link from "next/link";
import React from "react";
import JobData from "@/data/JobData";
import Image from "next/image";

const Index = () => {
  const jobFolder = {};
  JobData.forEach((dataItem) => {
    if (!jobFolder[dataItem.jobTitle]) {
      jobFolder[dataItem.jobTitle] = {
        jobTitle: dataItem.jobTitle,
        thumbnailImage: dataItem.imageUrl,
        allData: [dataItem],
      };
    } else {
      jobFolder[dataItem.jobTitle].allData.push(dataItem);
    }
  });

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
            /<li>Job Sectors</li>
          </ul>
        </div>
      </section>
      <section className="py-20">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="text-2xl font-medium">
            <span className="text-brand1">Job</span> Sectors
          </h2>
          <div className="w-full grid grid-cols-4 gap-8">
            {Object.values(jobFolder).map((jobItem, id) => (
              <div key={id} className="flex flex-col items-center group">
                <Link href={`/jobSector/${jobItem.jobTitle}`} className="w-full h-auto overflow-hidden">
                  <Image
                    src={jobItem.thumbnailImage}
                    priority={true}
                    width={2000}
                    height={2000}
                    alt={jobItem.jobTitle}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-all duration-150 ease-linear"
                  />
                </Link>
                <span className="w-full flex justify-center bg-blue-950 text-white py-2">
                  <h3 className="text-xl font-medium">{jobItem.jobTitle}</h3>
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
