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
  const [modalCountry, setModalCountry] = useState("");
  const [modalJobType, setModalJobType] = useState("");
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const router = useRouter();
  const { jobTitle } = router.query;
  const data = JobData.filter((item) => item.jobTitle === jobTitle);

  const openModal = (country, jobType) => {
    setModalIsOpen(true);
    document.body.classList.add("overflow-hidden");
    setModalCountry(country);
    setModalJobType(jobType);
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
              <Link href="/" className="text-brand1 ms-[2px]">
                Home
              </Link>
            </li>
            /
            <li>
              <Link href="/jobSector" className="text-brand1 ms-[2px]">
                Job Sector
              </Link>
            </li>
            /<li>Jobs</li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container flex flex-col items-center gap-8">
          <h2 className="text-2xl font-medium">{jobTitle}</h2>
          <div className="w-full grid grid-cols-3 gap-8">
            {data.map((jobItem, jobId) => (
              <div key={jobId}>
                <div className="shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] bg-white p-4 rounded">
                  <div className="flex flex-col gap-2">
                    <div className="w-full">
                      <Image
                        src={jobItem.imageUrl}
                        priority={true}
                        height={2000}
                        width={2000}
                        alt={jobItem.jobTitle}
                        className="w-full lg:h-56 md:h-44 lg-28 object-cover object-top"
                      />
                    </div>
                    <div className="flex flex-col items-start gap-1">
                      <h3 className="flex items-center gap-1">
                        <FaMapMarkerAlt />
                        <span className="text-xl font-semibold">
                          {jobItem.country}
                        </span>
                      </h3>
                      <div className="font-medium sm:text-lg text-sm">
                        <p>
                          Company Name:
                          <b className=" text-brand1 ms-[2px]">
                            {jobItem.companyName}
                          </b>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2">
                    <p className="text-gray-700">
                      {jobItem.description.substring(0, 100)}...
                    </p>
                    <div className="flex items-center gap-4 mt-3">
                      <button
                        onClick={() =>
                          openModal(jobItem.country, jobItem.jobType)
                        }
                        className="text-sm text-white border border-blue-950 bg-blue-950 hover:text-blue-950 hover:bg-white px-2 py-1 cursor-pointer transition-all duration-200 ease-linear"
                      >
                        Apply Now
                      </button>
                      <Link
                        href={`/jobSector/${jobTitle}/${jobItem.country}`}
                        className="text-sm flex text-white py-1 px-2 bg-brand1 border border-brand1 transition-all duration-200 ease-linear hover:bg-white hover:text-brand1"
                      >
                        View Details
                      </Link>
                    </div>
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
                      country={modalCountry}
                      jobType={modalJobType}
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
