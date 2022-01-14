import { FC } from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import Header from "./header";
import Footer from "./footer";

const Layout: FC = ({children}) => {
  return (
    <div className={styles.container}>
      <div className="cover-bg" />
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Kartamyshev Konstantin blog"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} /> */}
      </Head>
      <Header />
      <main className="wrapper">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
