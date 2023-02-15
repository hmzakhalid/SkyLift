import { type NextPage } from "next";
import Head from "next/head";
import SiteHeader from "containers/SiteHeader";
import Footer from "shared/Footer/Footer";
import PageHome from "containers/PageHome/PageHome";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SkyLift</title>
        <meta name="description" content="Elevate your travel experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SiteHeader />
        <PageHome />
        <Footer />
      </div>
    </>
  );
};

export default Home;
