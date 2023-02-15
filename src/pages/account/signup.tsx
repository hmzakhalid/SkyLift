import { type NextPage } from "next";
import Head from "next/head";
import SiteHeader from "containers/SiteHeader";
import Footer from "shared/Footer/Footer";
import PageSignUp from "containers/PageSignUp/PageSignUp";

const Signup:NextPage = () => {
  return (
    <>
      <Head>
        <title>Login - SkyLift</title>
      </Head>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SiteHeader />
        <PageSignUp />
        <Footer />
      </div>
    </>
  );
};

export default Signup;