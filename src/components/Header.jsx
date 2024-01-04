import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {

  const [scrolled, setScrolled] = useState(false)

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
    <header className={` py-2 fixed w-full z-50 transition-all duration-500 ease-linear ${scrolled ? 'bg-white text-black shadow-sm' : 'bg-transparent text-white'}`}>
      <div className="container flex justify-between items-center">
        <Link href="/">
          <Image src="/images/logo.png" priority={true} width={2000} height={2000} alt="logo" className="w-[70px]" />
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
            <li>
              <a href="#">Gallery</a>
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
