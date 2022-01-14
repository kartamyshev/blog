import Head from "next/head";
import { useRouter } from "next/router";
import styles from "./layout.module.css";
import Header from "./header";
import Footer from "./Footer";

export const siteTitle = "Next.js Sample Website";

export default function Layout({
  children,
  // home,
}: {
  children: React.ReactNode;
  // home?: boolean;
}) {
  const { back } = useRouter();

  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
      {/* {!home && (
        <div className={styles.backToHome}>
          <a onClick={back}>← Back</a>
        </div>
      )} */}
    </div>
  );
}
