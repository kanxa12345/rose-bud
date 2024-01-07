import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import JobData from "@/data/JobData";


const Index = () => {
  const router = useRouter();
  const { jobTitle, country } = router.query;
  const data = JobData.find(item => item.jobTitle === jobTitle && item.country === country)
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
            /
            <li>
              <Link href="/jobSector" className="text-brand1">
                Job Sector
              </Link>
            </li>/
            <li>
              <Link href={`/jobSector/${jobTitle}`}className="text-brand1">
                Jobs
              </Link>
            </li>
            /<li>Job Details</li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container flex flex-col items-center gap-6">
            <h2 className="text-2xl font-medium">{jobTitle}</h2>
            <div>
                {country}
            </div>
        </div>
      </section>
    </>
  );
};

export default Index;
