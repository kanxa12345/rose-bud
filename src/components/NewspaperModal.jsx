import Image from "next/image";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";

Modal.setAppElement("#__next");

const NewspaperModal = (props) => {
  const { imageUrl, index, images, publishedDate, interviewDate } = props;
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
    setImageIndex(index);
  }, [modalIsOpen]);

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
        className="shadow mb-20"
        onClick={openModal}
      >
        <Image
          src={imageUrl}
          priority={true}
          width={2000}
          height={2000}
          alt="Image"
          className="w-full h-full"
        />
        <div className="bg-blue-950 text-white p-2 flex flex-col gap-1 text-sm">
          <span className="flex items-center gap-2">
            <p>Published Date:</p>
            <p>{publishedDate}</p>
          </span>
          <span className="flex items-center gap-2 border-t pt-1">
            <p>Interview Date:</p>
            <p>{interviewDate}</p>
          </span>
        </div>
      </div>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        <span
          onClick={closeModal}
          className="fixed z-[1000] top-[30px] right-[30px] text-xl h-[30px] w-[30px] rounded-full bg-black text-white flex justify-center items-center cursor-pointer"
        >
          <FaXmark />
        </span>
        <span
          className="h-[25px] w-[25px] flex items-center justify-center bg-black text-white absolute left-2 top-[50%] rounded-[50%]"
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
            className="h-full w-full object-contain"
          />
        </div>
        <span
          className="h-[25px] w-[25px] flex items-center justify-center bg-black text-white absolute right-2 top-[50%] rounded-[50%]"
          onClick={handleNextClick}
        >
          <FaAngleRight />
        </span>
      </Modal>
    </>
  );
};

export default NewspaperModal;
