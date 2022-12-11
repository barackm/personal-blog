import BlogList from '../Components/blog/BlogPosts';
import MainBlog from '../Components/blog/MainBlog';
import Page from '../Components/Page/Page';
import http from '../services/http';
import styles from '../styles/Home.module.css';
import { API_URL } from '../utils/constants';

type HomeProps = {
  posts: any;
};

const Home = (props: HomeProps) => {
  const { posts } = props;

  return (
    <>
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
            {posts.length > 0 && <MainBlog post={posts[0]} />}
          </section>
          <section className={styles.main}>
            <BlogList posts={posts} />
          </section>
        </Page>
      </div>
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  const { data } = await http.get(`${API_URL}articles/blog`);
  const posts = data;
  return {
    props: {
      posts,
    },
  };
}
