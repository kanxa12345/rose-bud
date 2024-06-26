import Link from "next/link";
import React from "react";
import HeritageData from "@/data/HeritageData";
import Image from "next/image";

const Index = () => {
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
            /<li>About Nepal</li>
          </ul>
        </div>
      </section>
      <section className="md:py-20 py-16">
        <div className="container flex flex-col items-center gap-14">
          <div className="w-full flex flex-col items-center gap-1">
            <h2 className="sm:text-2xl text-xl font-medium text-black text-center">
              About Nepal
            </h2>
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="h-1 sm:w-1/5 w-1/4 bg-gradient-to-r from-gray-300 to-red-400"></span>
              <span className="inline-block w-2 h-2 bg-brand1 rotate-45"></span>
              <span className="h-1 sm:w-1/5 w-1/4 bg-gradient-to-r from-red-400 to-gray-300"></span>
            </div>
          </div>
          <div className="w-full flex lg:flex-row flex-col lg:gap-6 gap-10">
            <div
              className="lg:w-2/3 w-full flex flex-col items-start gap-2 lg:order-none order-1"
              data-aos="fade-right"
              data-aos-once="true"
              data-aos-duration="2000"
            >
              <h2 className="sm:text-2xl text-xl font-medium">Nepal</h2>
              <div className="flex flex-col gap-3 text-gray-600 sm:text-base text-sm">
                <p>
                  Nestled in South Asia between the Himalayas and the Gangetic
                  plains, is a captivating land of diverse geography and rich
                  cultural heritage. Its breathtaking landscapes range from the
                  soaring peaks of the Himalayas, including Mount Everest, to
                  the fertile Terai plains in the south.
                </p>
                <p>
                  The capital city, Kathmandu, is a vibrant hub of ancient
                  temples, palaces, and traditional architecture. UNESCO World
                  Heritage Sites like Durbar Square, Pashupatinath Temple,
                  Swayambhunath Stupa, and Boudhanath Stupa showcase the
                  country&apos;s historical and religious significance.
                </p>

                <p>
                  Nepal is renowned as a trekker&apos;s paradise, with famous
                  routes like the Annapurna Circuit and Everest Base Camp
                  attracting adventurers from around the world. The
                  country&apos;s national parks, such as Chitwan and Sagarmatha,
                  offer opportunities to witness diverse wildlife, including
                  tigers, rhinoceros, elephants, and rare bird species.
                </p>

                <p>
                  Despite its natural and cultural riches, Nepal faces
                  challenges such as political transitions, earthquakes, and
                  economic development. However, the resilience and
                  determination of the Nepalese people shine through, making
                  Nepal an enchanting destination that offers not only stunning
                  landscapes and historical wonders but also a deep sense of
                  spirituality and warm hospitality to all who visit.
                </p>
              </div>
            </div>
            <div
              className="flex justify-center lg:w-1/3 w-full"
              data-aos="zoom-in"
              data-aos-once="true"
              data-aos-duration="2000"
            >
              <Image
                src="/images/nisan-chhap.webp"
                priority={true}
                width={2000}
                height={2000}
                alt="nisan chhap"
                className="w-full sm:h-72 h-60 object-contain"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="md:py-20 py-16 bg-gray-100">
        <div className="container flex flex-col items-center gap-6">
          <h2 className="sm:text-2xl text-xl font-medium">
            Nepal <span className="text-brand1">Heritage</span> Site
          </h2>
          <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-6">
            {HeritageData.map((dataItem, id) => (
              <div
                key={id}
                className={`flex flex-col items-center gap-1 ${
                  id === 0 || id === HeritageData.length - 1 ? "sm:col-span-2" : ""
                }`}
              >
                <Image
                  src={dataItem.imageUrl}
                  priority={true}
                  width={2000}
                  height={2000}
                  alt={dataItem.placeName}
                  className="w-full sm:h-[300px] h-[200px] object-cover object-center"
                />
                <h3 className="sm:text-xl text-lg font-medium">{dataItem.placeName}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
