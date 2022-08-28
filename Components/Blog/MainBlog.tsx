import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import moment from 'moment';

type MainBlogProps = {
  post: any;
};

const MainBlog = (props: MainBlogProps) => {
  const { post } = props;
  const { published, title, updated, content, id } = post;
  const parsedContent = content.replace(/<(?:.|\n)*?>/gm, '');
  const first20Words = parsedContent.split(' ').slice(0, 40).join(' ');
  const first20WordsWithDots = first20Words + '...';

  return (
    <div className='flex flex-col mb-10 md:flex-row'>
      <Link href='/blog/[slug]' as={`/blog/${id}`}>
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
            {moment(published).format('MMMM Do YYYY')}
          </span>
        </div>
        <Link href='/blog/[slug]' as={`/blog/${id}`}>
          <h2 className='text-2xl md:text-5xl transition font-normal hover:text-secondary md:w-3/4 cursor-pointer'>
            {title}
          </h2>
        </Link>
        <div className='flex flex-col'>
          <p className='text-base md:text-lg font-normal'>
            {first20WordsWithDots}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainBlog;
