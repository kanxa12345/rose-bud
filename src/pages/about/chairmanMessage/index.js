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
            /<li>Chairman Message</li>
          </ul>
        </div>
      </section>
      <section className="py-20 bg-gray-50">
        <div className="container flex flex-col items-center gap-14">
          <div className="w-full flex flex-col items-center gap-1">
            <h2 className="text-2xl font-medium text-black text-center">
              Message From Chairman
            </h2>
            <div className="flex items-center gap-4 w-full justify-center">
              <span className="h-1 w-1/5 bg-gradient-to-r from-gray-300 to-red-400"></span>
              <span className="inline-block w-2 h-2 bg-brand1 rotate-45"></span>
              <span className="h-1 w-1/5 bg-gradient-to-r from-red-400 to-gray-300"></span>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="flex flex-col gap-3 items-start  w-1/3">
              <Image
                src="/images/chairman.jpg"
                priority={true}
                width={2000}
                height={2000}
                alt="chairman"
                className="w-full h-96 object-cover"
              />
              <span>
                <h3 className="text-2xl font-semibold">Name Surname</h3>
                <p className="text-lg font-medium text-brand1">Chairman</p>
              </span>
            </div>
            <div className="flex flex-col items-start gap-4 w-2/3">
              <small className="text-lg font-medium text-gray-500">
                Namaste everyone,
              </small>
              <p>
                ROSEBUD was founded in 2002 AD with the principle of honesty and
                self- realization. Since its inception, it has been operating
                with dedication and commitment. This philosophy has become an
                integral part of our business activities. We are committed to
                operating the business in compliance with the prevailing
                national and international labor laws, rules and regulations.
              </p>
              <p>
                This organization has been ISO accredited since 2007 and is
                committed to continuous improvement in its business activities.
                Over more than two decades, we have continuously strived to
                improve our business processes and systems.
              </p>
              <p>
                With the aim to make foreign employment more effective and
                responsible, we are continuously coordinating with other
                national and international organizations related to this
                business. In addition to this, we are actively participating in
                trainings, seminars, workshops and other programs organized by
                various organizations like ILO – International Labour
                Organization, RBA, IOM – International Organization for
                Migration etc. From this, we are learning to make foreign
                employment business more systematic and responsible.
              </p>
              <p>
                In fact, since the feelings and future of the whole family are
                linked to this business, and not just one person, we therefore
                understand that it is not just a business but a human service.
              </p>
              <small className="text-lg font-medium text-gray-500">
                Thank you.
              </small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
