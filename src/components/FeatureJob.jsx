import React from "react";
import JobData from "@/data/JobData";
import Image from "next/image";
import Link from "next/link";

const FeatureJob = () => {
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
    <section className="py-20 bg-gray-50">
      <div className="container flex flex-col items-center gap-6">
        <h2 className="text-2xl font-medium">
          <span className="text-brand1">Featured</span> Jobs
        </h2>
        <div className="w-full grid grid-cols-4 gap-6">
          {Object.values(jobFolder)
            .slice(0, 4)
            .map((jobItem, id) => (
              <Link href={`/jobSector/${jobItem.jobTitle}`} key={id} className="relative shadow-lg flex after:absolute after:w-0 after:h-0 after:flex after:justify-center after:items-center after:top-1/2 after:left-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:content-['Click_Here'] after:text-lg after:font-semibold after:z-20 after:text-brand1 after:opacity-0 after:bg-gray-100 hover:after:opacity-100 hover:after:bg-opacity-80 hover:after:w-[95%] hover:after:h-[95%] after:transition-all after:duration-300 after:ease-linear">
                <Image
                  src={jobItem.thumbnailImage}
                  priority={true}
                  height={2000}
                  width={2000}
                  alt={jobItem.jobTitle}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute w-full h-full inset-0 bg-gradient-to-t from-black to-transparent opacity-80"></div>
                <h3 className="text-xl font-medium absolute w-full text-center left-0 bottom-4 z-10 text-white">{jobItem.jobTitle}</h3>
              </Link>
            ))}
        </div>
        <Link href="/jobSector" className="font-medium text-white border border-blue-950 bg-blue-950 hover:text-blue-950 hover:bg-white px-2 py-1 cursor-pointer transition-all duration-200 ease-linear">View All Jobs</Link>
      </div>
    </section>
  );
};

export default FeatureJob;
