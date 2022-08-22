import type { NextPage } from 'next';
import { BlogList } from '../Components/Blog/BlogList';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <section
        className={`${styles.header}
        
      `}
      >
        Here gos the main blog
      </section>
      <section className={styles.main}>
        <BlogList />
      </section>
    </div>
  );
};

export default Home;
