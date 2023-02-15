import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import SiteHeader from "../containers/SiteHeader";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>SkyLift</title>
        <meta name="description" content="Elevate your travel experience." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <SiteHeader />

    </>
  );
};

export default Home;
