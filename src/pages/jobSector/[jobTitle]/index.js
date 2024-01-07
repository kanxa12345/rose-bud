import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import JobData from "@/data/JobData";
import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";
import ApplyForm from "@/components/ApplyForm";
import Modal from "react-modal";

Modal.setAppElement("#__next");

const Index = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const { jobTitle } = router.query;
  const data = JobData.filter((item) => item.jobTitle === jobTitle);

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
            /<li>Jobs</li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="text-2xl font-medium">{jobTitle}</h2>
          <div className="w-full grid grid-cols-2 gap-10">
            {data.map((jobItem, jobId) => (
              <div key={jobId}>
                <div className="shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white px-4 py-6 rounded-lg">
                  <div className="flex sm:flex-row flex-col gap-8">
                    <div className="sm:w-1/2 w-full">
                      <Image
                        src={jobItem.imageUrl}
                        priority={true}
                        height={2000}
                        width={2000}
                        alt={jobItem.jobTitle}
                        className="w-full lg:h-52 md:h-44 lg-28 object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        <span className="text-xl font-medium">
                          {jobItem.country}
                        </span>
                      </h3>
                      <div className="font-medium sm:text-base text-sm">
                        <p>
                          Company Name:
                          <b className=" text-brand1">{jobItem.companyName}</b>
                        </p>
                        <p className=" mt-1">
                          Required No.:
                          <b className="text-brand1">{jobItem.requiredNo}</b>
                        </p>
                        <p className="my-1">
                          Minimum Qualification:
                          <b className="text-brand1">
                            {jobItem.minQualification}
                          </b>
                        </p>
                        <p>
                          Salary:{" "}
                          <b className="text-brand1">{jobItem.salary}</b>
                        </p>
                      </div>
                      <div className="flex items-center gap-4 mt-3">
                        <button
                          onClick={openModal}
                          className="font-medium text-sm text-white border border-brand2 bg-brand2 hover:text-brand2 hover:bg-white px-2 py-1 rounded cursor-pointer transition-all duration-200 ease-linear"
                        >
                          Apply Now
                        </button>
                        <Link
                          href={`/jobSector/${jobTitle}/${jobItem.country}`}
                          className="font-medium text-sm flex text-white py-1 px-2 rounded bg-brand1 border border-brand1 transition-all duration-200 ease-linear hover:bg-white hover:text-brand1"
                        >
                          View Details
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="border-t mt-5">
                    <h3 className="text-xl font-medium my-1">Description</h3>
                    <p className="text-gray-700 sm:text-base text-sm">
                      {jobItem.description.substring(0, 150)}...
                    </p>
                  </div>
                </div>
                {modalIsOpen && (
                  <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    className="h-full w-full flex justify-center items-center bg-black bg-opacity-80"
                  >
                    <ApplyForm
                      closeModal={closeModal}
                      jobTitle={jobTitle}
                      country={jobItem.country}
                    />
                  </Modal>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
