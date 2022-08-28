import type { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { BlogList } from '../Components/Blog/BlogList';
import MainBlog from '../Components/Blog/MainBlog';
import Page from '../Components/Page/Page';
import http from '../services/http';
import styles from '../styles/Home.module.css';
import { API_URL, BLOG_ID } from '../utils/constants';

const blogId = BLOG_ID;

const Home: NextPage = () => {
  const [fetching, setFetching] = useState(false);
  const [posts, setPosts] = useState([]);
  const getPosts = async () => {
    setFetching(true);
    try {
      const { data } = await http.get(`${API_URL}${blogId}/posts`);
      setPosts(data.items);
      setFetching(false);
    } catch (error) {
      console.log(error);
      setFetching(false);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  console.log(posts);
  return (
    <div className={`${styles.container}`}>
      <Page>
        <section
          className={`${styles.header}
        flex flex-col
      `}
        >
          <div className='flex mb-10'>
            <h1 className='text-left text-5xl md:text-8xl font-semibold'>
              The Blog
            </h1>
          </div>
          <MainBlog />
        </section>
        <section className={styles.main}>
          <BlogList />
        </section>
      </Page>
    </div>
  );
};

export default Home;
