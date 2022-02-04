import { FC } from "react";
import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import Layout from "../components/layout";
import posts from "../lib/posts";
import { formatDate } from "../utils/formatDate";
import styles from './index.module.scss';

export const siteTitle = "Vanilla DOM";

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

const Home: FC<{posts: Array<Post>}> = ({posts}) => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul className={styles.postList}>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <span className="post-meta">
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
};

export default Home;
