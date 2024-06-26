import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaAngleRight,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-indigo-950 text-white">
      <div className="container">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-8 pt-8 pb-6 2xl:w-[80%] mx-auto">
          <div className="flex flex-col items-start gap-3">
            <Image
              src="/images/logo.png"
              priority={true}
              width={2000}
              height={2000}
              alt="logo"
              className="sm:w-36 w-32"
            />
            <p className="sm:text-base text-sm">Govt. Lic. No.: 1665/080/081</p>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="sm:text-xl text-lg font-medium border-b-2 border-red-600">
              Quick Links
            </h3>
            <div className="text-[14px] font-medium">
              <Link
                href="/about/aboutUs"
                className="flex items-center gap-1 hover:gap-2 transition-all duration-150 ease-linear group"
              >
                <span className="w-[15px] h-[15px] rounded-full bg-brand1 flex justify-center items-center text-xs">
                  <FaAngleRight />
                </span>
                <p className="inline-block sm:text-base text-sm group-hover:text-red-500">
                  About
                </p>
              </Link>
              <Link
                href="/service/recruitmentProcess"
                className="flex items-center gap-1 hover:gap-2 transition-all duration-150 ease-linear group"
              >
                <span className="w-[15px] h-[15px] rounded-full bg-brand1 flex justify-center items-center text-xs">
                  <FaAngleRight />
                </span>
                <p className="inline-block sm:text-base text-sm group-hover:text-red-500">
                  Services
                </p>
              </Link>
              <Link
                href="/jobSector"
                className="flex items-center gap-1 hover:gap-2 transition-all duration-150 ease-linear group"
              >
                <span className="w-[15px] h-[15px] rounded-full bg-brand1 flex justify-center items-center text-xs">
                  <FaAngleRight />
                </span>
                <p className="inline-block sm:text-base text-sm group-hover:text-red-500">
                  Job Sectors
                </p>
              </Link>
              <Link
                href="/demand"
                className="flex items-center gap-1 hover:gap-2 transition-all duration-150 ease-linear group"
              >
                <span className="w-[15px] h-[15px] rounded-full bg-brand1 flex justify-center items-center text-xs">
                  <FaAngleRight />
                </span>
                <p className="inline-block sm:text-base text-sm group-hover:text-red-500">
                  Current Demand
                </p>
              </Link>
              <Link
                href="/gallery/imageGallery"
                className="flex items-center gap-1 hover:gap-2 transition-all duration-150 ease-linear group"
              >
                <span className="w-[15px] h-[15px] rounded-full bg-brand1 flex justify-center items-center text-xs">
                  <FaAngleRight />
                </span>
                <p className="inline-block sm:text-base text-sm group-hover:text-red-500">
                  Gallery
                </p>
              </Link>
              <Link
                href="/contact"
                className="flex items-center gap-1 hover:gap-2 transition-all duration-150 ease-linear group"
              >
                <span className="w-[15px] h-[15px] rounded-full bg-brand1 flex justify-center items-center text-xs">
                  <FaAngleRight />
                </span>
                <p className="inline-block sm:text-base text-sm group-hover:text-red-500">
                  Contact
                </p>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="sm:text-xl text-lg font-medium border-b-2 border-red-600">
              Contact
            </h3>
            <div className="flex flex-col items-start gap-1">
              <a
                href="https://maps.app.goo.gl/Cb65riBr8rpf7LRcA"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-1 text-xs text-brand1"
              >
                <FaMapMarkerAlt />
                <p className="sm:text-base text-sm text-gray-100 hover:underline">
                  Sinamangal-9, Kathmandu, Nepal
                </p>
              </a>
              <a
                href="tel:+977-1-4597366"
                className="flex items-center gap-1 text-xs text-brand1"
              >
                <IoIosCall />
                <p className="sm:text-base text-sm text-gray-100 hover:underline">
                  +977-1-4597366
                </p>
              </a>
              <a
                href="mailto:rosebudhumanresource@gmail.com, info@rosebudhr.com"
                className="flex items-center gap-1 text-xs text-brand1"
              >
                <span>
                  <MdEmail />
                </span>
                <p className="xl:text-base text-sm text-gray-100 hover:underline">
                  rosebudhumanresource@gmail.com, info@rosebudhr.com
                </p>
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-3 items-start">
            <h3 className="sm:text-xl text-lg font-medium border-b-2 border-red-600">
              Keep In Touch
            </h3>
            <p className="sm:text-base text-sm">
              Don&apos;t hestiate to ask us something, Our customer support team
              always ready to help you,they will support you 24/7.
            </p>
            <div className="flex items-center gap-3">
              <a
                href="#"
                className="flex justify-center items-center w-5 h-5 rounded-full border border-white text-xs hover:bg-brand1 hover:border-brand1 transition-all duration-150 ease-linear"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="flex justify-center items-center w-5 h-5 rounded-full border border-white text-xs  hover:bg-brand1 hover:border-brand1 transition-all duration-150 ease-linear"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="flex justify-center items-center w-5 h-5 rounded-full border border-white text-xs  hover:bg-brand1 hover:border-brand1 transition-all duration-150 ease-linear"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="flex justify-center items-center w-5 h-5 rounded-full border border-white text-xs  hover:bg-brand1 hover:border-brand1 transition-all duration-150 ease-linear"
              >
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
        <div className="sm:text-sm text-xs text-center text-gray-200 pt-3 pb-6 border-t border-gray-400">
          <p>
            Copyright &copy; {year} all rights reserved. Rosebud Human Resource
            Pvt. Ltd.
          </p>
          <p>
            Powered by
            <a
              href="https://radiantnepal.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-brand1 font-medium ms-[2px]"
            >
              Radiant Infotech Pvt. Ltd.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
