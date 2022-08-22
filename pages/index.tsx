import type { NextPage } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BlogList } from '../Components/Blog/BlogList';
import MainBlog from '../Components/Blog/MainBlog';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={`${styles.container}`}>
      <main className='p-5 sm:p-[2rem] lg:p-[8rem] lg:pt-20'>
        <section
          className={`${styles.header}
        flex flex-col
      `}
        >
          <div className='flex mb-10'>
            <h1 className='text-left text-5xl md:text-7xl font-bold'>
              The Blog
            </h1>
          </div>
          <MainBlog />
        </section>
        <section className={styles.main}>
          <BlogList />
        </section>
      </main>
    </div>
  );
};

export default Home;
