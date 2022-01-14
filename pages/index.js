import Head from "next/head";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <ul className={utilStyles.list}>
        <li className={utilStyles.listItem}>
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        </li>
      </ul>
    </Layout>
  );
}
