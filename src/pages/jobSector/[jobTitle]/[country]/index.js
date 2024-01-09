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

  console.log(data);

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
      <section className="py-20">
        {data && (
          <div className="container flex gap-8">
            <div className="w-2/3 flex flex-col items-start gap-2">
              <small className="text-base font-medium text-gray-500">
                {country}
              </small>
              <h2 className="text-2xl font-semibold">{jobTitle}</h2>
              <div className="flex flex-col items-start gap-2">
                <p className="text-gray-700">{data.description}</p>
                <p className="text-brand1 text-lg font-medium">
                  <span className="text-black me-[2px]">Company Name:</span>
                  {data.companyName}
                </p>
                <p className="text-brand1 text-lg font-medium">
                  <span className="text-black me-[2px]">Job Type:</span>
                  {data.jobType}
                </p>
                <p className="text-brand1 text-lg font-medium">
                  <span className="text-black me-[2px]">Min. Qualification:</span>
                  {data.minQualification}
                </p>
                <p className="text-brand1 text-lg font-medium">
                  <span className="text-black me-[2px]">Required No.:</span>
                  {data.requiredNo}
                </p>
              </div>
              <button
                onClick={openModal}
                className="font-medium text-white border border-blue-950 bg-blue-950 hover:text-blue-950 hover:bg-white px-2 py-1 cursor-pointer transition-all duration-200 ease-linear"
              >
                Apply Now
              </button>
            </div>
            <div className="w-1/3">
              <Image
                src={data.imageUrl}
                priority={true}
                width={2000}
                height={2000}
                alt={jobTitle}
                className="w-full h-80 object-cover rounded-se-[30px] rounded-es-[30px] border-2 border-brand1 p-[2px]"
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
