import React from 'react';
import BlogItem from './BlogItem';

type BlogPostList = {
  posts: any;
};

export const BlogList = (props: BlogPostList) => {
  const { posts } = props;
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
      {posts.map((post: any) => (
        <BlogItem key={post.id} post={post} />
      ))}
    </div>
  );
};
