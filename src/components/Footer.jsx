import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-200">
      <div className="container">
        <div className="grid grid-cols-3 gap-8 pt-8 pb-4 w-2/3 mx-auto">
          <div className="flex flex-col items-start gap-5">
            <Image
              src="/images/logo.png"
              priority={true}
              width={2000}
              height={2000}
              alt="logo"
              className="w-24"
            />
            <div className="flex items-center gap-3">
              <a href="#" className="flex justify-center items-center w-5 h-5 rounded-full border border-gray-600 text-xs"><FaFacebookF /></a>
              <a href="#" className="flex justify-center items-center w-5 h-5 rounded-full border border-gray-600 text-xs"><FaInstagram /></a>
              <a href="#" className="flex justify-center items-center w-5 h-5 rounded-full border border-gray-600 text-xs"><FaTwitter /></a>
              <a href="#" className="flex justify-center items-center w-5 h-5 rounded-full border border-gray-600 text-xs"><FaYoutube /></a>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">Quick Links</h3>
            <ul className="text-[14px] text-brand1 font-medium">
              <li className="flex items-center gap-1">
                <FaArrowAltCircleRight />
                <Link href="#" className="inline-block text-sm text-black">
                  About
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <FaArrowAltCircleRight />
                <Link href="#" className="inline-block text-sm text-black">
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <FaArrowAltCircleRight />
                <Link href="#" className="inline-block text-sm text-black">
                  Gallery
                </Link>
              </li>
              <li className="flex items-center gap-1">
                <FaArrowAltCircleRight />
                <Link
                  href="/contact"
                  className="inline-block text-sm text-black"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">Contact</h3>
          </div>
        </div>
        <div className="text-sm text-center text-gray-700 py-2 border-t border-gray-400">
          <p>
            Copyright &copy; {year} all rights reserved. Rosebud Human Resource
            Pvt. Ltd.
          </p>
          <p>
            Powered by{" "}
            <a
              href="https://radiantnepal.com/"
              target="_blank"
              rel="noreferrer"
              className="hover:underline text-brand1 font-medium"
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
