import MvvData from '@/data/MvvData';
import React from 'react';

const Mvv = () => {
  return (
    <section className='py-24'>
      <div className="container grid grid-cols-3 gap-8">
        {MvvData.map((item, id)=>(
            <div key={id} className='flex flex-col items-center gap-2 p-5 bg-blue-950 bg-opacity-15 rounded'>
                <h3 className='text-xl font-semibold text-brand1'>{item.title}</h3>
                <p className='text-center'>{item.description}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Mvv;
