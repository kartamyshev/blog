import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Layout from "../../components/layout";
import posts from "../../lib/posts";
import utilStyles from "../../styles/utils.module.css";
import { formatDate } from "../../utils/formatDate";

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
  const formsttedDate = formatDate(date);

  return (
    <Layout>
      <Head>
        <title>{title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{title}</h1>
        <div className={utilStyles.lightText}>{formsttedDate}</div>
        <div dangerouslySetInnerHTML={{ __html: contentHTML }} />
      </article>
    </Layout>
  );
}
