import Link from "next/link";
import React from "react";

const index = () => {
  const VideoData = [
    "/images/video-gallery/video1.mp4",
    "/images/video-gallery/video2.mp4",
    "/images/video-gallery/video3.mp4",
    "/images/video-gallery/video4.mp4",
    "/images/video-gallery/video5.mp4",
    "/images/video-gallery/video6.mp4",
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
            /<li>Video Gallery</li>
          </ul>
        </div>
      </section>
      <section className="py-20">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="text-2xl font-medium"><span className="text-brand1">Video</span> Gallery</h2>
          <div className="w-full grid grid-cols-4 gap-6">
            {VideoData.map((videoItem, id) => (
              <div key={id} className="w-full">
                <video
                  controls
                  className="w-full h-[200px]"
                >
                  <source
                    className="inline-block w-full h-full"
                    src={videoItem}
                    type="video/mp4"
                  />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default index;
