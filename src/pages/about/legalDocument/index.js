import Link from "next/link";
import React from "react";
import ModalImage from "react-modal-image";

const index = () => {
  const images = [
    "/images/legal-documents/img1.jpeg",
    "/images/legal-documents/img2.jpeg",
    "/images/legal-documents/img3.jpeg",
    "/images/legal-documents/img4.jpeg",
    "/images/legal-documents/img5.jpeg",
  ];
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
            /<li>Legal Documents</li>
          </ul>
        </div>
      </section>
      <section className="md:py-20 py-16 bg-gray-100">
        <div className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6 w-full">
          {images.map((image, id) => (
            <ModalImage
              key={id}
              small={image}
              large={image}
              alt="legal-document"
              className="w-full h-80 object-contain"
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default index;
