import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainBlog = () => {
  return (
    <div className='flex flex-col mb-10 md:flex-row'>
      <Link href='/blog/[slug]' as='/blog/hello-world'>
        <a className='flex relative h-72 md:h-96 flex-col w-full md:flex-row md:w-1/2 rounded-lg mr-5 md:mr-5 overflow-hidden'>
          <Image
            className='object-cover'
            src='/images/article1.jpg'
            alt='article image'
            layout='fill'
          />
        </a>
      </Link>

      <div className='flex flex-col  ml-0 md:ml-5 md:w-1/2'>
        <div className='text-left'>
          <span className='text-sm md:text-base font-bold text-texLight'>
            March 20, 2020
          </span>
        </div>
        <Link href='/blog/[slug]' as='/blog/hello-world'>
          <a className='flex flex-col  my-5 '>
            <h2 className='text-2xl md:text-5xl transition font-normal hover:text-secondary md:w-2/3'>
              The Let Me List Them Out For You Headlines Are Here.
            </h2>
          </a>
        </Link>
        <div className='flex flex-col'>
          <p className='text-base md:text-lg font-normal'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo nam impedit cum eligendi eaque animi sapiente aut...
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBlog;
