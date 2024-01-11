import Link from "next/link";
import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Index = () => {
  const initialForm = {
    name: "",
    mobile: "",
    email: "",
    subject: "",
    message: "",
  };
  const [form, setForm] = useState(initialForm);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
    console.log(form);
    setForm(initialForm);
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
            /<li>Contact</li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="text-2xl font-medium">
            <span className="text-brand1">Contact</span> us
          </h2>
          <div
            className="w-1/2 flex flex-col gap-12"
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="2000"
          >
            <div className="grid grid-cols-3 w-full gap-6">
              <div className="flex items-center gap-2">
                <span className="text-white p-[6px] bg-black text-sm">
                  <FaMapMarkerAlt />
                </span>
                <span>
                  <p className="md:text-lg text-base font-medium">Location</p>
                  <p className="text-gray-700 text-sm">Bansbari, kathmandu</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white p-[6px] bg-black text-sm">
                  <IoIosCall />
                </span>
                <span>
                  <p className="md:text-lg text-base font-medium">Contact</p>
                  <p className="text-gray-700 text-sm">+977-1-4373508</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-white p-[6px] bg-black text-sm">
                  <MdEmail />
                </span>
                <span>
                  <p className="md:text-lg text-base font-medium">Email</p>
                  <p className="text-gray-700 text-sm">
                    info@caldrongraphics.com.np
                  </p>
                </span>
              </div>
            </div>
            <div className="flex flex-col items-start gap-4 px-5 py-6 shadow-[0_0_5px_1px_rgba(0,0,0,0.1)] rounded-md bg-white w-full">
              <h3 className="md:text-xl text-lg font-medium">Send Feedback</h3>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col items-center gap-2 w-full sm:text-base text-sm"
              >
                <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 w-full">
                  <div className="flex flex-col items-start sm:w-1/2 w-full">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleInputChange}
                      className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none bg-gray-50"
                    />
                  </div>
                  <div className="flex flex-col items-start sm:w-1/2 w-full">
                    <label htmlFor="mobile">Phone</label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      required
                      value={form.mobile}
                      onChange={handleInputChange}
                      className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none bg-gray-50"
                    />
                  </div>
                </div>
                <div className="flex sm:flex-row flex-col sm:gap-5 gap-2 w-full">
                  <div className="flex flex-col items-start sm:w-1/2 w-full">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleInputChange}
                      className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none bg-gray-50"
                    />
                  </div>
                  <div className="flex flex-col items-start sm:w-1/2 w-full">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={form.subject}
                      onChange={handleInputChange}
                      className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none bg-gray-50"
                    />
                  </div>
                </div>
                <div className="flex flex-col items-start w-full">
                  <label htmlFor="message">Message</label>
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="5"
                    value={form.message}
                    onChange={handleInputChange}
                    className="border border-gray-500 p-1 rounded w-full text-gray-600 focus:outline-none bg-gray-50"
                  />
                </div>
                <input
                  type="submit"
                  value="SUBMIT"
                  className="font-medium text-white border border-brand2 bg-brand2 hover:text-brand2 hover:bg-white px-2 py-1 rounded cursor-pointer transition-all duration-200 ease-linear"
                />
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full md:h-[350px] h-[250px] my-4">
        <iframe
          className="w-full h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.0127797679606!2d85.3418824760729!3d27.74775182370712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194df9aa4eff%3A0xaf4b9c99b44bebb5!2sCaldron%20Graphics%20Nepal%2C%20Apex%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1701583407834!5m2!1sen!2snp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </>
  );
};

export default Index;
