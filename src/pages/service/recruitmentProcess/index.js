import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaAngleRight } from "react-icons/fa";

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
            /<li>Recruitment Process</li>
          </ul>
        </div>
      </section>
      <section className="py-20">
        <div className="container flex flex-col items-center gap-14">
          <div className="w-full flex flex-col items-center gap-1">
            <h2 className="text-2xl font-medium text-black text-center">
              Recruitment Process
            </h2>
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="h-1 w-1/5 bg-gradient-to-r from-gray-300 to-red-400"></span>
              <span className="inline-block w-2 h-2 bg-brand1 rotate-45"></span>
              <span className="h-1 w-1/5 bg-gradient-to-r from-red-400 to-gray-300"></span>
            </div>
          </div>
          <div className="w-full">
            <Image
              src="/images/recruitment-process.jpg"
              priority={true}
              width={2000}
              height={2000}
              alt="recruitment process"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container flex flex-col items-start gap-4">
          <h2 className="text-2xl font-semibold">
            Developing Foolproof Recruitment Process
          </h2>
          <div className="w-full flex flex-col flex-start gap-3 text-gray-700">
            <p>
              The recruitment process may vary from company to company based on
              the organizational structure, selection process, nature of
              operations, etc. But any well-planned recruitment process should
              help the hiring company and agency team recruit the right
              candidate.
            </p>
            <div className="w-full flex flex-col items-start gap-2">
              <p>
                Here at The RoseBud Human Resource Pvt. Ltd., we follow a 7-step
                recruitment process that helps us find, attract and retain the
                right kind of candidates. The steps are;
              </p>
              <ul className="flex flex-col gap-1">
                <li className="flex items-center gap-1 text-sm">
                  <FaAngleRight />
                  <p className="text-base">
                    Identify the hiring needs (Employer Requirements)
                  </p>
                </li>
                <li className="flex items-center gap-1 text-sm">
                  <FaAngleRight />
                  <p className="text-base">
                    Prepare job descriptions (By Employer or Agency)
                  </p>
                </li>
                <li className="flex items-center gap-1 text-sm">
                  <FaAngleRight />
                  <p className="text-base">Devise recruitment strategy</p>
                </li>
                <li className="flex items-center gap-1 text-sm">
                  <FaAngleRight />
                  <p className="text-base">Screen and shortlist candidates</p>
                </li>
                <li className="flex items-center gap-1 text-sm">
                  <FaAngleRight />
                  <p className="text-base">Conduct interviews</p>
                </li>
                <li className="flex items-center gap-1 text-sm">
                  <FaAngleRight />
                  <p className="text-base">Evaluate and make the offer</p>
                </li>
                <li className="flex items-center gap-1 text-sm">
                  <FaAngleRight />
                  <p className="text-base">Onboard the new employee</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
