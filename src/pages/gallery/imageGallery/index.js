import Link from "next/link";
import React from "react";

const index = () => {
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
            /<li>Image Gallery</li>
          </ul>
        </div>
      </section>
      <section className="py-20">
        <div className="container flex flex-col items-center gap-6">
            <h2 className="text-2xl font-medium">Image Gallery</h2>
            <div className="w-full grid grid-cols-5 gap-6"></div>
        </div>
      </section>
    </>
  );
};

export default index;
