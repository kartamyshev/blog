import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../../components/layout";
import utilStyles from "../../styles/utils.module.css";
import posts from "../../lib/posts";

import { formatDate } from "../../utils/formatDate";

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      posts: posts.getAll(),
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
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
        <ul className={utilStyles.list}>
          {posts.map((post) => {
            return (
              <li className={utilStyles.listItem} key={post.id}>
                <Link href={`/posts/${post.id}`}>
                  <a>{post.title}</a>
                </Link>
                <br />
                <small className={utilStyles.lightText}>
                  {formatDate(post.date)}
                </small>
              </li>
            );
          })}
        </ul>
      </section>
    </Layout>
  );
}
