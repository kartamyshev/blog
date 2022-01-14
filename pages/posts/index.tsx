import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import posts from "../../lib/posts";
import styles from './posts.module.scss';

import { formatDate } from "../../utils/formatDate";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      posts: posts.getAllPublished(),
    },
  };
};

interface Post {
  date: string;
  title: string;
  id: string;
}

export default function Posts({ posts }: { posts: Array<Post> }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul className={styles.postList}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <span className={styles.postMeta}>
                {formatDate(post.date)}
              </span>
              <h2 className={styles.postLink}>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
              </h2>
            </li>
          );
        })}
      </ul>
  </Layout>
  );
}
