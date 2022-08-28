import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import parse from 'html-react-parser';
import moment from 'moment';

type BlogPostProps = {
  post: any;
};

const BlogItem = (props: BlogPostProps) => {
  const { post } = props;
  const { published, title, updated, content } = post;
  const parsedContent = content.replace(/<(?:.|\n)*?>/gm, '');
  const first20Words = parsedContent.split(' ').slice(0, 20).join(' ');
  const first20WordsWithDots = first20Words + '...';

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
              {moment(published).format('MMMM Do YYYY')}
            </span>
          </div>
          <Link href='/blog/[slug]' as='/blog/hello-world'>
            <h3 className='text-2xl md:text-xl transition font-bold hover:text-secondary md:w-2/3 my-2 '>
              {title}
            </h3>
          </Link>
          <div className='flex flex-col'>
            <p className='text-base md:text-lg font-normal'>
              {first20WordsWithDots}
            </p>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogItem;
