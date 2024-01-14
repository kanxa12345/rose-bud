import React, { useEffect, useState } from "react";
import { FaXmark } from "react-icons/fa6";

const ApplyForm = ({ closeModal, jobTitle, country, jobType }) => {
  const initialFormData = {
    name: "",
    address: "",
    contact: "",
    email: "",
    country: "",
    jobType: "",
    photo: null,
    cv: null,
  };

  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    if (!formData.country && country) {
      setFormData((prevData) => ({ ...prevData, country: country }));
    }
    if (!formData.jobType && jobType) {
      setFormData((prevData) => ({ ...prevData, jobType: jobType }));
    }
  }, [formData, country, jobType]);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: name === "photo" || name === "cv" ? files[0] : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Send the formData to your backend for processing
    // You can use an HTTP POST request to your server's API
    console.log(formData);
    alert("Form submitted successfully!");
    // Reset the form to its initial state
    setFormData(initialFormData);
  };

  return (
    <div className="xl:w-2/5 lg:w-8/12 w-10/12 bg-gray-50 py-4 px-10 shadow-[0_0_10px_2px_rgba(0,0,0,0.2)] flex flex-col items-center">
      <button
        className="w-[35px] h-[35px] flex justify-center items-center bg-gray-200 rounded-full ms-auto mb-2"
        onClick={closeModal}
      >
        <FaXmark />
      </button>
      <h2 className="md:text-3xl text-xl font-medium text-brand1 mb-8 text-center">
        Application form for {jobTitle}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="flex w-full flex-col justify-between items-center sm:gap-4 gap-2 sm:text-base text-sm"
      >
        <div className="flex sm:flex-row flex-col gap-2 w-full">
          <div className="flex flex-col items-start p-1 gap-1 w-full">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="focus:outline-none w-full bg-white p-1 border border-black rounded"
            />
          </div>
          <div className="flex flex-col items-start p-1 gap-1 w-full">
            <label htmlFor="name">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              className="focus:outline-none w-full bg-white p-1 border border-black rounded"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 w-full">
          <div className="flex flex-col items-start p-1 gap-1 w-full">
            <label htmlFor="name">Contact No.</label>
            <input
              type="tel"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              required
              className="focus:outline-none w-full bg-white p-1 border border-black rounded"
            />
          </div>
          <div className="flex flex-col items-start p-1 gap-1 w-full">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              className="focus:outline-none w-full bg-white p-1 border border-black rounded"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 w-full">
          <div className="flex flex-col items-start p-1 gap-1 w-full">
            <label htmlFor="country">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleInputChange}
              required
              className="focus:outline-none w-full bg-white p-1 border border-black rounded"
            />
          </div>
          <div className="flex flex-col items-start p-1 gap-1 w-full">
            <label htmlFor="jobType">Job Type</label>
            <input
              type="text"
              id="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleInputChange}
              required
              className="focus:outline-none w-full bg-white p-1 border border-black rounded"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col gap-2 w-full">
          <div className="flex flex-col items-start p-1 gap-1 w-full">
            <label htmlFor="photo">PP Size Photo</label>
            <input
              type="file"
              id="photo"
              name="photo"
              onChange={handleInputChange}
              required
              className="focus:outline-none w-full p-1 rounded"
            />
          </div>
          <div className="flex flex-col items-start p-1 gap-1 w-full">
            <label htmlFor="cv">Upload Your CV</label>
            <input
              type="file"
              id="cv"
              name="cv"
              onChange={handleInputChange}
              required
              className="focus:outline-none w-full p-1 rounded"
            />
          </div>
        </div>
        <button
          type="submit"
          className="font-medium text-white border border-brand2 bg-brand2 hover:text-brand2 hover:bg-white px-2 py-1 rounded cursor-pointer transition-all duration-200 ease-linear mt-4"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default ApplyForm;
