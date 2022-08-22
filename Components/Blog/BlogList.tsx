import React from 'react';
import BlogItem from './BlogItem';

export const BlogList = () => {
  return (
    <div
      // should display grid
      className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'
    >
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
      <BlogItem />
    </div>
  );
};
