import MvvData from '@/data/MvvData';
import React from 'react';

const Mvv = () => {
  return (
    <section className='py-28 bg-gray-900'>
      <div className="container grid grid-cols-3 gap-8">
        {MvvData.map((item, id)=>(
            <div key={id} className='flex flex-col items-center gap-2 p-5 rounded bg-gray-50'>
                <h3 className='text-xl font-semibold text-brand1'>{item.title}</h3>
                <p className='text-center text-sm'>{item.description}</p>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Mvv;
