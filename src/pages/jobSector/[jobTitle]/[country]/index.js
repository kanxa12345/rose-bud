import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import JobData from "@/data/JobData";
import Image from "next/image";
import Modal from "react-modal";
import ApplyForm from "@/components/ApplyForm";

Modal.setAppElement("#__next");
const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const router = useRouter();
  const { jobTitle, country } = router.query;
  const data = JobData.find(
    (item) => item.jobTitle === jobTitle && item.country === country
  );

  const openModal = () => {
    setModalIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  return (
    <>
      <section className="h-[200px] bg-gray-900 text-white">
        <div className="container flex justify-center items-center h-full pt-[78px]">
          <ul className="flex items-center sm:text-base text-sm gap-1">
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
            </li>
            /
            <li>
              <Link href={`/jobSector/${jobTitle}`} className="text-brand1">
                Jobs
              </Link>
            </li>
            /<li>Job Details</li>
          </ul>
        </div>
      </section>
      <section className="md:py-20 py-16 bg-gray-50">
        {data && (
          <div className="container flex lg:flex-row flex-col gap-6">
            <div
              className="lg:w-2/3 w-full flex flex-col items-start gap-2 lg:order-none order-1"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="2000"
            >
              <small className="sm:text-base text-sm font-medium text-gray-500">
                {country}
              </small>
              <h2 className="sm:text-2xl text-xl font-semibold">{jobTitle}</h2>
              <div className="flex flex-col items-start gap-2">
                <p className="text-gray-700 sm:text-base text-sm">{data.description}</p>
                <p className="text-brand1 sm:text-lg text-base font-medium">
                  <span className="text-black me-[2px]">Company Name:</span>
                  {data.companyName}
                </p>
                <p className="text-brand1 sm:text-lg text-base font-medium">
                  <span className="text-black me-[2px]">Job Type:</span>
                  {data.jobType}
                </p>
                <p className="text-brand1 sm:text-lg text-base font-medium">
                  <span className="text-black me-[2px]">
                    Min. Qualification:
                  </span>
                  {data.minQualification}
                </p>
                <p className="text-brand1 text-lg font-medium">
                  <span className="text-black me-[2px]">Required No.:</span>
                  {data.requiredNo}
                </p>
              </div>
              <button
                onClick={openModal}
                className="font-medium sm:text-base text-sm text-white border border-blue-950 bg-blue-950 hover:text-blue-950 hover:bg-white px-2 py-1 cursor-pointer transition-all duration-200 ease-linear"
              >
                Apply Now
              </button>
            </div>
            <div
              className="lg:w-1/3 w-full"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="2000"
            >
              <Image
                src={data.imageUrl}
                priority={true}
                width={2000}
                height={2000}
                alt={jobTitle}
                className="w-full sm:h-80 h-60 object-cover lg:rounded-se-[30px] lg:rounded-es-[30px]"
              />
            </div>
          </div>
        )}
      </section>
      {modalIsOpen && (
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          className="h-full w-full flex justify-center items-center bg-black bg-opacity-80"
        >
          <ApplyForm
            closeModal={closeModal}
            jobTitle={jobTitle}
            country={country}
            jobType={data?.jobType}
          />
        </Modal>
      )}
    </>
  );
};

export default Index;
