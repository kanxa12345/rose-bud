import Image from "next/image";
import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <section className="pt-20 pb-[220px]">
      <div className="container flex gap-10 items-center">
        <div className="w-1/3 relative">
          <Image
            src="/images/about1.jpg"
            priority={true}
            width={2000}
            height={2000}
            alt="image"
            className="w-2/3 h-80 object-cover relative z-[1] hover:z-10 border-2 border-white"
          />
          <Image
            src="/images/about2.jpg"
            priority={true}
            width={2000}
            height={2000}
            alt="image"
            className="w-2/3 h-80 object-cover absolute right-0 top-[120px] border-2 border-white z-[2]"
          />
          <Image
            src="/images/transparent-bg-.png"
            priority={true}
            width={2000}
            height={2000}
            alt="transparent"
            className="absolute w-full h-full left-0 top-16"
          />
        </div>
        <div className="w-2/3 flex flex-col items-start gap-4">
          <h2 className="text-4xl font-semibold">
            <span className="text-brand1">RoseBud</span> Human Resource Pvt.
            Ltd.
          </h2>
          <p>
            To begin with,we would like to introduce Equator International
            Pvt.Ltd asone of the prominent and well-known Manpower Recruiting
            Agency in Nepal. With honesty and reliablity as the key objectives,
            this organization,being a service based agency has constantly
            emphasized on quality services to ensure utmost satisfaction to both
            its clients as well as to the aspirants seeking overseas employment.
            That is not all,This organization has left no stone unturned to
            functionas a bridge between the employer and the employee to ensure
            smooth relationship between them thus avoiding any sort of
            misunderstandings.
          </p>
          <p>
            Maintain a smooth relationship with our clients and job seekers is
            what we belive in.Since we also beloive in understanding, sincerity
            and reliability we commit hasslein.Since we also belive in
            understanding,sincerity and reliability we commit hassle free
            service to our business partners and clients to puhold charming
            relationship.
          </p>
          <Link
            href="/about/aboutUs"
            className="text-white text-sm border border-blue-950 bg-blue-950 hover:text-blue-950 hover:bg-white px-2 py-1 cursor-pointer transition-all duration-200 ease-linear"
          >
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
