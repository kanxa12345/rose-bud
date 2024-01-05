import GalleryData from "@/data/GalleryData";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Index = () => {
  const groupedData = GalleryData.reduce((result, item) => {
    const { album } = item;
    if (!result[album]) {
      result[album] = [];
    }
    result[album].push(item);
    return result;
  }, {});

  // Convert the grouped data into an array of objects
  const groupedArray = Object.keys(groupedData).map((album) => ({
    album,
    images: groupedData[album],
  }));

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
          <div className="w-full grid grid-cols-5 gap-6">
            {groupedArray.map((dataItem, index) => (
              <div
                key={index}
                className="group p-2 rounded bg-white text-black shadow-[0_0_5px_2px_rgba(0,0,0,0.1)]"
              >
                <Link
                  href={`/gallery/imageGallery/${dataItem.album}`}
                  className="inline-block w-full overflow-hidden"
                >
                  <Image
                    src={dataItem.images[0].imageUrl}
                    priority={true}
                    height={2000}
                    width={2000}
                    alt={dataItem.album}
                    className="w-full h-[200px] object-cover group-hover:scale-110 transition-all duration-200 ease-linear"
                  />
                </Link>
                <h3 className="border-b font-medium">{dataItem.album}</h3>
                <p className="text-sm">{dataItem.images[0].date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
