import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowAltCircleRight, FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-4 gap-8 pt-8 pb-4">
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
          <div className="flex flex-col gap-2">
            <h3 className="text-xl font-medium">Map</h3>
            <div className="w-full h-32">
              <iframe
                className="w-4/5 h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3531.0127797679606!2d85.3418824760729!3d27.74775182370712!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194df9aa4eff%3A0xaf4b9c99b44bebb5!2sCaldron%20Graphics%20Nepal%2C%20Apex%20Nepal%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1701583407834!5m2!1sen!2snp"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
