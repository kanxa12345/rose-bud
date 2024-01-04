import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="py-4 fixed w-full z-50 text-white">
      <div className="container flex justify-between items-center">
        <a href="#">
            <p>Rose bird</p>
          {/* <Image src="/#" priority={true} width={2000} height={2000} alt="logo" className="w-20" /> */}
        </a>
        <nav>
          <ul className="flex items-center gap-5 font-medium">
            <li>
              <a href="#">Home</a>
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
              <a href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
