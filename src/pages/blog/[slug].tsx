import Image from 'next/image';
import React from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import Head from 'next/head';

import Page from '../../Components/Page/Page';
import { API_URL, BLOG_ID } from '../../utils/constants';
import http from '../../services/http';

interface PostDetailsProps {
  post: any;
}

const PostDetails = (props: PostDetailsProps) => {
  const { post } = props;
  const { published, title, content, mainImageUrl } = post || {};
  const parsedContent = parse(content || '');

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Page className=''>
        {post && (
          <div className='flex flex-col w-full'>
            <div className='flex w-full'>
              <div className='relative h-72 md:h-[32rem] w-full rounded-md overflow-hidden'>
                <Image
                  src={mainImageUrl}
                  alt='article image'
                  layout='fill'
                  className='object-cover w-full'
                />
              </div>
            </div>
            <div className='flex-col mt-5 px-0 pb-32 md:px-32'>
              <div className=''>
                <span className='text-sm md:text-base font-medium text-texLight'>
                  {moment(published).format('MMMM Do YYYY')}
                </span>
              </div>
              <div>
                <h3 className='text-2xl md:text-5xl transition font-semibold hover:text-secondary md:w-2/3 my-10 cursor-pointer'>
                  {title}
                </h3>
              </div>
              <div className=' my-5 text-lg blog-content-wrapper'>
                {parsedContent}
              </div>
            </div>
          </div>
        )}
      </Page>
    </>
  );
};

export default PostDetails;

export async function getStaticPaths() {
  const { data } = await http.get(`${API_URL}articles/blog`);
  const posts = data;
  const paths = posts.map((post: any) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: false };
}

const loadPosts = async (slug: string) => {
  const { data } = await http.get(`${API_URL}articles/slug/${slug}`);
  return data;
};

export async function getStaticProps({ params }: any) {
  const post = await loadPosts(params.slug);
  return {
    props: {
      post,
    },
  };
}
