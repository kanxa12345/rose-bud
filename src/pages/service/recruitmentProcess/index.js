import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

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
            /<li>Recruitment Process</li>
          </ul>
        </div>
      </section> 
      <section className='py-20 bg-gray-100'>
        <div className="container flex flex-col items-center gap-10">
            <h2 className='text-2xl font-medium'><span className='text-brand1'>Recruitment</span> Process</h2>
            <div className='w-full'>
                <Image src="/images/recruitment-process.webp" priority={true} width={2000} height={2000} alt='recruitment process' className='w-full h-full object-contain'/>
            </div>
        </div>
      </section>
    </>
  )
}

export default Index
