import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaXmark } from "react-icons/fa6";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [aboutMenu, setAboutMenu] = useState(false);
  const [serviceMenu, setServiceMenu] = useState(false);
  const [galleryMenu, setGalleryMenu] = useState(false);
  const [activeBlock, setActiveBlock] = useState(0);
  const [nav, setNav] = useState(false);

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

  // for active block
  const router = useRouter();

  useEffect(() => {
    const determineActiveBlock = () => {
      const path = router.asPath; // Using asPath to get the full URL path

      if (path === "/" || path === "/whyUs") {
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

  // for navigation and dropdown menu
  const handleNav = () => {
    setNav(!nav);
    setAboutMenu(false);
    setServiceMenu(false);
    setGalleryMenu(false);
  };
  const handleAbout = () => {
    setAboutMenu(!aboutMenu);
    setServiceMenu(false);
    setGalleryMenu(false);
  };
  const handleService = () => {
    setServiceMenu(!serviceMenu);
    setAboutMenu(false);
    setGalleryMenu(false);
  };
  const handleGallery = () => {
    setGalleryMenu(!galleryMenu);
    setAboutMenu(false);
    setServiceMenu(false);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-linear lg:py-0 py-1 ${
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
            className="lg:w-[100px] w-[70px]"
          />
        </Link>
        <span onClick={handleNav} className="lg:hidden inline-block text-xl">
          <GiHamburgerMenu />
        </span>
        <nav
          className={`lg:block flex flex-col gap-10 items-end lg:opacity-100 lg:relative absolute top-0 lg:right-0 lg:h-auto h-screen lg:w-auto w-72 lg:bg-transparent bg-blue-950 lg:p-0 p-8  text-white lg:transition-none transition-all duration-300 ease-linear ${
            nav ? "right-0 opacity-100" : "-right-72 opacity-0"
          } ${scrolled ? "lg:text-black" : "lg:text-white"}`}
        >
          <span onClick={handleNav} className="lg:hidden inline-block text-xl ms-auto w-auto">
            <FaXmark />
          </span>
          <ul className="flex lg:flex-row flex-col lg:items-center items-start gap-8 font-medium w-full">
            <li
              onClick={() => {
                handleButtonClick(0), setNav(false);
              }}
              className={`${
                activeBlock === 0 ? "lg:text-brand1" : ""
              } lg:hover:text-brand1 lg:w-auto w-full`}
            >
              <Link href="/" className="block w-full">
                Home
              </Link>
            </li>
            <li
              onClick={() => handleButtonClick(1)}
              onMouseLeave={() => {
                if (window.innerWidth > 1024) {
                  setAboutMenu(false);
                }
              }}
              className={`relative h-auto lg:py-8 lg:hover:text-brand1 lg:w-auto w-full  ${
                aboutMenu ? "overflow-visible" : "overflow-hidden"
              } `}
            >
              <button
                onMouseEnter={() => {
                  if (window.innerWidth > 1024) {
                    setAboutMenu(true);
                  }
                }}
                onClick={handleAbout}
                className={`flex justify-start w-full ${
                  activeBlock === 1 ? "lg:text-brand1" : ""
                }`}
              >
                About Company
              </button>
              <div
                className={`lg:flex flex-col gap-1 lg:absolute lg:w-60 w-full left-0 lg:bg-brand2 bg-white lg:text-white text-black lg:bg-opacity-90 bg-opacity-100 transition-all duration-100 ease-linear lg:mt-0 mt-2 ${
                  aboutMenu
                    ? "top-[89px] opacity-100 flex"
                    : "top-24 opacity-0 hidden"
                }`}
              >
                <Link
                  onClick={() => {
                    setNav(false), setAboutMenu(false);
                  }}
                  href="/about/aboutUs"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  About Us
                </Link>
                <Link
                  onClick={() => {
                    setNav(false), setAboutMenu(false);
                  }}
                  href="/about/chairmanMessage"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  Message From Chairman
                </Link>
                <Link
                  onClick={() => {
                    setNav(false), setAboutMenu(false);
                  }}
                  href="/about/mdMessage"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  Message From MD
                </Link>
                <Link
                  onClick={() => {
                    setNav(false), setAboutMenu(false);
                  }}
                  href="/about/ourTeam"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  Our Team
                </Link>
                <Link
                  onClick={() => {
                    setNav(false), setAboutMenu(false);
                  }}
                  href="/about/legalDocument"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  Legal Documents
                </Link>
                <Link
                  onClick={() => {
                    setNav(false), setAboutMenu(false);
                  }}
                  href="/about/aboutNepal"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  About Nepal
                </Link>
              </div>
            </li>
            <li
              onClick={() => handleButtonClick(2)}
              onMouseLeave={() => {
                if (window.innerWidth > 1024) {
                  setServiceMenu(false);
                }
              }}
              className={`relative lg:py-8 lg:hover:text-brand1 lg:w-auto w-full ${
                serviceMenu ? "overflow-visible" : "overflow-hidden"
              }`}
            >
              <button
                onMouseEnter={() => {
                  if (window.innerWidth > 1024) {
                    setServiceMenu(true);
                  }
                }}
                onClick={handleService}
                className={`flex justify-start w-full ${
                  activeBlock === 2 ? "lg:text-brand1" : ""
                }`}
              >
                Services
              </button>
              <div
                className={`lg:flex flex-col gap-1 lg:absolute lg:w-60 w-full left-0 lg:bg-brand2 bg-white lg:text-white text-black lg:bg-opacity-90 bg-opacity-100 transition-all duration-100 ease-linear lg:mt-0 mt-2 ${
                  serviceMenu
                    ? "top-[89px] opacity-100 flex"
                    : "top-24 opacity-0 hidden"
                }`}
              >
                <Link
                  onClick={() => {
                    setNav(false), setServiceMenu(false);
                  }}
                  href="/service/requiredDocument"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  Required Documents
                </Link>
                <Link
                  onClick={() => {
                    setNav(false), setServiceMenu(false);
                  }}
                  href="/service/recruitmentProcess"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  Recruitment Process
                </Link>
              </div>
            </li>
            <li
              onClick={() => {
                handleButtonClick(3), setNav(false);
              }}
              className={`${
                activeBlock === 3 ? "lg:text-brand1" : ""
              } lg:hover:text-brand1 lg:w-auto w-full`}
            >
              <Link href="/jobSector" className="block w-full">
                Job Sectors
              </Link>
            </li>
            <li
              onClick={() => {
                handleButtonClick(4), setNav(false);
              }}
              className={`${
                activeBlock === 4 ? "lg:text-brand1" : ""
              } lg:hover:text-brand1 lg:w-auto w-full`}
            >
              <Link href="/demand" className="block w-full">
                Current Demand
              </Link>
            </li>
            <li
              onClick={() => handleButtonClick(5)}
              onMouseLeave={() => {
                if (window.innerWidth > 1024) {
                  setGalleryMenu(false);
                }
              }}
              className={`relative lg:py-8 lg:hover:text-brand1 lg:w-auto w-full ${
                galleryMenu ? "overflow-visible" : "overflow-hidden"
              } `}
            >
              <button
                onMouseEnter={() => {
                  if (window.innerWidth > 1024) {
                    setGalleryMenu(true);
                  }
                }}
                onClick={handleGallery}
                className={`${
                  activeBlock === 5 ? "lg:text-brand1" : ""
                } flex justify-start w-full`}
              >
                Gallery
              </button>
              <div
                className={`lg:flex flex-col gap-1 lg:absolute lg:w-40 w-full left-0 lg:bg-brand2 bg-white lg:text-white text-black lg:bg-opacity-90 bg-opacity-100 transition-all duration-100 ease-linear lg:mt-0 mt-2 ${
                  galleryMenu
                    ? "top-[89px] opacity-100 flex"
                    : "top-24 opacity-0 hidden"
                }`}
              >
                <Link
                  onClick={() => {
                    setNav(false), setGalleryMenu(false);
                  }}
                  href="/gallery/imageGallery"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  Image Gallery
                </Link>
                <Link
                  onClick={() => {
                    setNav(false), setGalleryMenu(false);
                  }}
                  href="/gallery/videoGallery"
                  className="py-1 px-2 lg:hover:bg-brand1 block w-full"
                >
                  Video Gallery
                </Link>
              </div>
            </li>
            <li
              onClick={() => {
                handleButtonClick(6), setNav(false);
              }}
              className={`${
                activeBlock === 6 ? "lg:text-brand1" : ""
              } lg:hover:text-brand1 lg:w-auto w-full`}
            >
              <Link href="/contact" className="block w-full">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
