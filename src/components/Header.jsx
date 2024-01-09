import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);
  const [serviceMenu, setServiceMenu] = useState(false);
  const [galleryMenu, setGalleryMenu] = useState(false);
  const [activeBlock, setActiveBlock] = useState(0);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setScrolled(scrollTop > 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const router = useRouter();

  useEffect(() => {
    const determineActiveBlock = () => {
      const path = router.asPath; // Using asPath to get the full URL path

      if (path === "/") {
        return 0;
      } else if (path.startsWith("/about")) {
        return 1;
      } else if (path.startsWith("/service")) {
        return 2;
      } else if (path.startsWith("/jobSector")) {
        return 3;
      } else if (path === "/demand") {
        return 4;
      } else if (path.startsWith("/gallery")) {
        return 5;
      } else if (path === "/contact") {
        return 6;
      }
    };

    setActiveBlock(determineActiveBlock());
  }, [router.asPath]);

  const handleButtonClick = (index) => {
    setActiveBlock(index);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-linear ${
        scrolled ? "bg-white text-black shadow-md" : "bg-transparent text-white"
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image
            src="/images/logo.png"
            priority={true}
            width={2000}
            height={2000}
            alt="logo"
            className="w-[60px]"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-8 font-medium">
            <li
              onClick={() => handleButtonClick(0)}
              className={`${activeBlock === 0 ? "text-brand1" : ""} hover:text-brand1`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              onClick={() => handleButtonClick(1)}
              onMouseLeave={() => setAboutMenu(false)}
              className={`relative py-6 hover:text-brand1 ${
                aboutMenu ? "overflow-visible" : "overflow-hidden"
              } `}
            >
              <button
                onMouseEnter={() => setAboutMenu(true)}
                className={`${activeBlock === 1 ? "text-brand1" : ""}`}
              >
                About
              </button>
              <div
                className={`flex flex-col gap-1 absolute w-60 left-0 bg-brand2 bg-opacity-90 text-white transition-all duration-100 ease-linear ${
                  aboutMenu ? "top-[72px] opacity-100" : "top-24 opacity-0"
                }`}
              >
                <Link href="/about/aboutUs" className="py-1 px-2 hover:bg-brand1">About Us</Link>
                <Link href="/about/chairmanMessage" className="py-1 px-2 hover:bg-brand1">Message From Chairman</Link>
                <Link href="/about/ourTeam" className="py-1 px-2 hover:bg-brand1">Our Team</Link>
                <Link href="/about/legalDocument" className="py-1 px-2 hover:bg-brand1">Legal Documents</Link>
                <Link href="/about/aboutNepal" className="py-1 px-2 hover:bg-brand1">About Nepal</Link>
              </div>
            </li>
            <li
              onClick={() => handleButtonClick(2)}
              onMouseLeave={() => setServiceMenu(false)}
              className={`relative py-6 hover:text-brand1 ${
                serviceMenu ? "overflow-visible" : "overflow-hidden"
              } `}
            >
              <button
                onMouseEnter={() => setServiceMenu(true)}
                className={`${activeBlock === 2 ? "text-brand1" : ""}`}
              >
                Services
              </button>
              <div
                className={`flex flex-col gap-1 absolute w-60 left-0 bg-brand2 bg-opacity-90 text-white transition-all duration-100 ease-linear ${
                  serviceMenu ? "top-[72px] opacity-100" : "top-24 opacity-0"
                }`}
              >
                <Link href="/service/requiredDocument" className="py-1 px-2 hover:bg-brand1">Required Documents</Link>
                <Link href="/service/recruitmentProcess" className="py-1 px-2 hover:bg-brand1">
                  Recruitment Process
                </Link>
              </div>
            </li>
            <li
              onClick={() => handleButtonClick(3)}
              className={`${activeBlock === 3 ? "text-brand1" : ""} hover:text-brand1`}
            >
              <Link href="/jobSector">Job Sectors</Link>
            </li>
            <li
              onClick={() => handleButtonClick(4)}
              className={`${activeBlock === 4 ? "text-brand1" : ""} hover:text-brand1`}
            >
              <Link href="/demand">Current Demand</Link>
            </li>
            <li
              onClick={() => handleButtonClick(5)}
              onMouseLeave={() => setGalleryMenu(false)}
              className={`relative py-6 hover:text-brand1 ${
                galleryMenu ? "overflow-visible" : "overflow-hidden"
              } `}
            >
              <button
                onMouseEnter={() => setGalleryMenu(true)}
                className={`${activeBlock === 5 ? "text-brand1" : ""}`}
              >
                Gallery
              </button>
              <div
                className={`flex flex-col gap-1 absolute w-40 left-0 bg-brand2 bg-opacity-90 text-white transition-all duration-100 ease-linear ${
                  galleryMenu ? "top-[72px] opacity-100" : "top-24 opacity-0"
                }`}
              >
                <Link href="/gallery/imageGallery" className="py-1 px-2 hover:bg-brand1">Image Gallery</Link>
                <Link href="/gallery/videoGallery" className="py-1 px-2 hover:bg-brand1">Video Gallery</Link>
              </div>
            </li>
            <li
              onClick={() => handleButtonClick(6)}
              className={`${activeBlock === 6 ? "text-brand1" : ""} hover:text-brand1`}
            >
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
