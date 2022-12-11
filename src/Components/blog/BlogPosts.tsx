import React from 'react';
import { IArticle } from '../../types/article';
import BlogItem from './BlogPost';

type BlogPostList = {
  posts: any;
};

const BlogPosts = (props: BlogPostList) => {
  const { posts } = props;
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10'>
      {posts.map((post: IArticle) => (
        <BlogItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default BlogPosts;
