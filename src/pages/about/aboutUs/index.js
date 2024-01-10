import Image from "next/image";
import Link from "next/link";
import React from "react";

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
            /<li>About Us</li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-gray-100">
        <div className="container flex flex-col items-center gap-12">
          <div className="w-full flex flex-col items-center gap-1">
            <h2 className="text-2xl font-medium text-black text-center">
              About Us
            </h2>
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="h-1 w-1/5 bg-gradient-to-r from-gray-400 to-red-400"></span>
              <span className="inline-block w-2 h-2 bg-brand1 rotate-45"></span>
              <span className="h-1 w-1/5 bg-gradient-to-r from-red-400 to-gray-400"></span>
            </div>
          </div>
          <div className="w-full flex flex-col gap-3 text-gray-600">
            <h3 className="text-4xl font-semibold text-black">
              <span className="text-brand1">RoseBud</span> Human Resource Pvt.
              Ltd.
            </h3>
            <p>
              To begin with,we would like to introduce Equator International
              Pvt.Ltd asone of the prominent and well-known Manpower Recruiting
              Agency in Nepal. With honesty and reliablity as the key
              objectives, this organization,being a service based agency has
              constantly emphasized on quality services to ensure utmost
              satisfaction to both its clients as well as to the aspirants
              seeking overseas employment. That is not all,This organization has
              left no stone unturned to functionas a bridge between the employer
              and the employee to ensure smooth relationship between them thus
              avoiding any sort of misunderstandings.
            </p>
            <p>
              Maintain a smooth relationship with our clients and job seekers is
              what we belive in.Since we also beloive in understanding,
              sincerity and reliability we commit hasslein.Since we also belive
              in understanding,sincerity and reliability we commit hassle free
              service to our business partners and clients to puhold charming
              relationship. In this regard,we,the entire team of Equator
              International Pvt Ltd urge all concerned parties and clients to
              provide us an opportunity to establish a smooth business
              relationship to prove our commitment.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-blue-950 bg-opacity-15 flex gap-8 items-center">
        <Image
          src="/images/img.avif"
          priority={true}
          width={2000}
          height={2000}
          alt="image"
          className="h-[500px] w-1/2 object-cover"
        />
        <div className="flex flex-col items-start gap-4 w-[37%]">
          <h2 className="text-2xl font-medium text-brand1">Objective</h2>
          <div className="w-full">
            <p>
              A manpower company, or staffing agency, sets out with multifaceted
              objectives aimed at creating a symbiotic relationship between
              clients and candidates. Central to its mission is ensuring client
              satisfaction by understanding and fulfilling their unique staffing
              needs. This involves not only the recruitment and placement of
              qualified candidates but also the cultivation of enduring client
              partnerships. Concurrently, the company is dedicated to building a
              robust talent pool through proactive sourcing, recruitment, and
              networking efforts, staying attuned to industry trends and
              evolving skill requirements. Upholding legal and ethical standards
              in recruitment practices is paramount, ensuring fair treatment of
              both clients and candidates. Continuous improvement forms the
              bedrock, encompassing internal processes, technology adoption, and
              employee development to stay abreast of market dynamics. Financial
              sustainability, brand building, and community engagement round out
              the objectives, creating a comprehensive approach for success in
              the dynamic staffing landscape.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
