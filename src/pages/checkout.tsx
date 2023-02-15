// export default CheckOutPage
import { type NextPage } from "next";
import Head from "next/head";
import SiteHeader from "containers/SiteHeader";
import Footer from "shared/Footer/Footer";
import CheckOutPage from "containers/CheckOutPage/CheckOutPage";

const CheckOut: NextPage = () => {
  return (
    <>
      <Head>
        <title>Checkout - SkyLift</title>
      </Head>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SiteHeader />
        <CheckOutPage />
        <Footer />
      </div>
    </>
  );
};

export default CheckOut;
