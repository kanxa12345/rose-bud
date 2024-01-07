import Link from "next/link";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

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
            /<li>Required Documents</li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="text-2xl font-medium">
            <span className="text-brand1">Required</span> Documents
          </h2>
          <div className="w-full grid grid-cols-3 gap-6">
            <div className="flex flex-col items-start gap-3 bg-brand2 bg-opacity-10 p-4 rounded">
              <h3 className="text-xl font-medium">
                For Qatar, Kuwait, Bahrain, Oman & UAE
              </h3>
              <ul className="flex flex-col items-start gap-1 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Demand Letter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Power of Attorney
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Employment Contract
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Guarantee Letter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Agency Agreement
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3 bg-brand2 bg-opacity-10 p-4 rounded">
              <h3 className="text-xl font-medium">For Malaysia</h3>
              <ul className="flex flex-col items-start gap-1 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  KDN approval (from Labour Ministry)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Translation letter (from Labour Ministry or Home Ministry)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Demand Letter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Power of Attonery
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Agency Agreement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Employment Contract
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  His Excellency ( Letter written by employer company to
                  Malaysian Consulate in Nepal)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Letter from Royal Nepal Embassy to Labour Department Nepal
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Notary Public ( Notari awam)
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  ID copy of authorized person of Employer Company
                </li>
              </ul>
            </div>
            <div className="flex flex-col items-start gap-3 bg-brand2 bg-opacity-10 p-4 rounded">
              <h3 className="text-xl font-medium">For Saudi Arabia</h3>
              <ul className="flex flex-col items-start gap-1 text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Demand Letter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Visa Slip
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Power of Attorney
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Employment Contract
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Guarantee Letter
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Agency Agreement
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Commercial Registration
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-xs">
                    <FaArrowRightLong />
                  </span>
                  Consulate Authorization
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
