import Image from "next/image";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

Modal.setAppElement("#__next");

const ImageModal = (props) => {
  const { imageUrl, index, images } = props;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [imageIndex, setImageIndex] = useState(index);

  const openModal = () => {
    setModalIsOpen(true);
    document.body.classList.add("overflow-hidden");
  };

  const closeModal = () => {
    setModalIsOpen(false);
    document.body.classList.remove("overflow-hidden");
  };

  const handlePrevClick = () => {
    setImageIndex((prevIndex) =>
      prevIndex !== 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const handleNextClick = () => {
    setImageIndex((prevIndex) =>
      prevIndex !== images.length - 1 ? prevIndex + 1 : 0
    );
  };

  useEffect(() => {
    setImageIndex(index);
  }, [index]);

  useEffect(() => {
    if (imageIndex < 0) {
      setImageIndex(0);
    } else if (imageIndex >= images.length) {
      setImageIndex(images.length - 1);
    }
  }, [imageIndex, images]);

  const currentImage = images[imageIndex];
  return (
    <>
      <div
        onClick={openModal}
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-once="true"
      >
        <Image
          src={imageUrl}
          priority={true}
          width={2000}
          height={2000}
          className="w-full h-[240px] object-cover"
          alt="Image"
        />
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <span
          onClick={closeModal}
          className="fixed z-[1000] top-[30px] right-[30px] text-xl h-[30px] w-[30px] rounded-full bg-black text-white flex justify-center items-center cursor-pointer"
        >
          <FaXmark />
        </span>
        <span
          className="h-[30px] w-[30px] flex items-center justify-center bg-black text-white absolute left-2 top-[50%] rounded-[50%] cursor-pointer"
          onClick={handlePrevClick}
        >
          <FaAngleLeft />
        </span>
        <div className="flex justify-center items-center pt-3 h-full">
          <Image
            src={currentImage.imageUrl}
            priority={true}
            width={2000}
            height={2000}
            alt="Full Image"
            className="h-full lg:w-[50%] w-full object-cover"
          />
        </div>
        <span
          className="h-[30px] w-[30px] flex items-center justify-center bg-black text-white absolute right-2 top-[50%] rounded-[50%] cursor-pointer"
          onClick={handleNextClick}
        >
          <FaAngleRight />
        </span>
      </Modal>
    </>
  );
};

export default ImageModal;
