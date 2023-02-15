import { type NextPage } from "next";
import Head from "next/head";
import SiteHeader from "containers/SiteHeader";
import Footer from "shared/Footer/Footer";
import PageLogin from "containers/PageLogin/PageLogin";

const Login:NextPage = () => {
  return (
    <>
      <Head>
        <title>SkyLift</title>
      </Head>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SiteHeader />
        <PageLogin />
        <Footer />
      </div>
    </>
  );
};

export default Login;