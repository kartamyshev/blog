import Head from "next/head";
import Link from "next/link";
import { GetStaticProps } from "next";

import Layout, { siteTitle } from "../components/layout";
import posts from "../lib/posts";
import { formatDate } from "../utils/formatDate";

import styles from './index.module.scss';

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

export default function Home({ posts }: { posts: Array<Post> }) {
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
}
