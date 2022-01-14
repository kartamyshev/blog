import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import posts from "../../lib/posts";
import { formatDate } from "../../utils/formatDate";
import styles from './post.module.scss';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = posts.getPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const post = await posts.getSinglePostById(params.id);

  return {
    props: {
      post,
    },
  };
};

export default function Post({ post }) {
  const { date, title, contentHTML } = post;
  const formattedDate = formatDate(date);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <header className={styles.postHeader}>
        <h1 className={styles.postTitle}>{title}</h1>
        <p className="post-meta">{formattedDate}</p>
      </header>
      <article className={styles.postContent} dangerouslySetInnerHTML={{__html: contentHTML}} />
    </Layout>
  );
}
