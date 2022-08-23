import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BlogList } from '../Components/Blog/BlogList';
import MainBlog from '../Components/Blog/MainBlog';
import Page from '../Components/Page/Page';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
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
