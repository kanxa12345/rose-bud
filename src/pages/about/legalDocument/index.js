import Link from "next/link";
import React from "react";
import ModalImage from "react-modal-image";

const index = () => {
  const images = [
    "/images/legal-documents/img1.jpg",
    "/images/legal-documents/img2.jpg",
    "/images/legal-documents/img3.jpg",
    "/images/legal-documents/img4.jpg",
    "/images/legal-documents/img5.jpg",
    "/images/legal-documents/img6.jpg",
    "/images/legal-documents/img7.jpg",
    "/images/legal-documents/img8.jpg",
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
      <section className="py-20 bg-gray-100">
        <div className="container grid grid-cols-4 gap-6">
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
