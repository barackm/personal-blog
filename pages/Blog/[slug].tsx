import Image from 'next/image';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import moment from 'moment';
import parse from 'html-react-parser';
import Page from '../../Components/Page/Page';
import { API_URL, BLOG_ID } from '../../utils/constants';
import http from '../../services/http';

const PostDetails = () => {
  const router = useRouter();
  // get the slug param from the url
  const { slug } = router.query;
  console.log(slug);
  const [fetching, setFetching] = React.useState(false);
  const [post, setPost] = React.useState<any>({});
  const { published, title, updated, content, id } = post;
  const parsedContent = parse(content);
  const getPost = async () => {
    setFetching(true);
    try {
      const { data } = await http.get(`${API_URL}${BLOG_ID}/posts/${slug}`);
      setPost(data);
      setFetching(false);
    } catch (error) {
      console.log(error);
      setFetching(false);
    }
  };

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(post);

  return (
    <Page className=''>
      <div className='flex flex-col w-full'>
        <div className='flex w-full'>
          <div className='relative h-[32rem] bg-secondary w-full rounded-md overflow-hidden'>
            <Image
              src='/images/blog1.jpg'
              alt='article image'
              layout='fill'
              className='object-cover w-full'
            />
          </div>
        </div>
        <div className='flex-col mt-5 px-32'>
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
    </Page>
  );
};

export default PostDetails;
