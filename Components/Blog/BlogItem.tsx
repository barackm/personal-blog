import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogItem = () => {
  return (
    <Link href='/blog/[slug]' as='/blog/hello-world'>
      <a className='flex  flex-col'>
        <div className='flex w-full'>
          <div className='flex w-full relative h-60  rounded-lg overflow-hidden'>
            <Image
              src='/images/blog1.jpg'
              alt='article image'
              layout='fill'
              className='object-cover'
            />
          </div>
        </div>
        <div className='flex flex-col mt-5'>
          <div className=''>
            <span className='text-sm md:text-base font-bold text-texLight'>
              March 20, 2020
            </span>
          </div>
          {/* blog title */}
          <Link href='/blog/[slug]' as='/blog/hello-world'>
            <a className='flex flex-col  my-2 '>
              <h3 className='text-2xl md:text-xl transition font-bold hover:text-secondary md:w-2/3'>
                The Let Me List Them Out For You Headlines Are Here.
              </h3>
            </a>
          </Link>
          {/* blog description */}
          <div className='flex flex-col'>
            <p className='text-base md:text-lg font-normal'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quidem. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogItem;
