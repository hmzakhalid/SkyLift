import { type NextPage } from "next";
import Head from "next/head";
import SiteHeader from "containers/SiteHeader";
import Footer from "shared/Footer/Footer";
import PageAbout from "containers/PageAbout/PageAbout";

const About: NextPage = () => {
  return (
    <>
      <Head>
        <title>About Us - SkyLift</title>
        <meta name="description" content="Elevate your travel experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SiteHeader />
        <PageAbout />
        <Footer />
      </div>
    </>
  );
};

export default About;
