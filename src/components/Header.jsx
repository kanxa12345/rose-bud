import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [galleryMenu, setGalleryMenu] = useState(false);

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

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-500 ease-linear ${
        scrolled ? "bg-white text-black shadow-sm" : "bg-transparent text-white"
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
            className="w-[70px]"
          />
        </Link>
        <nav>
          <ul className="flex items-center gap-5 font-medium">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li
              onMouseLeave={() => setGalleryMenu(false)}
              className={`relative py-8 ${
                galleryMenu ? "overflow-visible" : "overflow-hidden"
              } `}
            >
              <button onMouseEnter={() => setGalleryMenu(true)}>
                Gallery
              </button>
              <div
                className={`flex flex-col gap-2 absolute w-36 left-0 bg-white text-black p-2 border transition-all duration-100 ease-linear ${
                  galleryMenu ? "top-[88px] opacity-100" : "top-28 opacity-0"
                }`}
              >
                <a href="/gallery/imageGallery">Image Gallery</a>
                <a href="/gallery/videoGallery">Video Gallery</a>
              </div>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
