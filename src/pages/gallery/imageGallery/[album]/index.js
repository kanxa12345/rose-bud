import ImageModal from "@/components/ImageModal";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import GalleryData from "@/data/GalleryData";

const Album = () => {
  const router = useRouter();
  const { album } = router.query;
  const data = GalleryData.filter((item) => item.album === album);

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
            /
            <li>
              <Link href="/gallery/imageGallery" className="text-brand1">
                Image Gallery
              </Link>
            </li>
            /<li>Images</li>
          </ul>
        </div>
      </section>
      <section className="py-20">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="text-2xl font-medium">
            <span className="text-brand1">{album.split(" ")[0]}</span>{" "}
            {album.split(" ").slice(1).join("")}
          </h2>
          <div className="grid xl:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5 w-full">
            {data.map((dataItem, index) => (
              <ImageModal
                key={dataItem.id}
                index={index}
                imageUrl={dataItem.imageUrl}
                images={data}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Album;
