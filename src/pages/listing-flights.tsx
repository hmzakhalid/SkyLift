
import { type NextPage } from "next";
import Head from "next/head";
import SiteHeader from "containers/SiteHeader";
import Footer from "shared/Footer/Footer";
import ListingFlightsPage from "containers/ListingFlightsPage/ListingFlightsPage";


const FlightListings: NextPage = () => {
  return (
    <>
      <Head>
        <title>FisWing</title>
      </Head>
      <div className="bg-white text-base dark:bg-neutral-900 text-neutral-900 dark:text-neutral-200">
        <SiteHeader />
        <ListingFlightsPage />
        <Footer />
      </div>
    </>
  );
};

export default FlightListings;

// Flights Table
/**
 * flight_id
 * airline_id
 * price
 * total_seats
 * booked_seats
 * stops
 * time
 * origin = [location_id]
 * destination = [location_id]
 * type = ["One Way", "Two Way"]
 * date_left
 * date_return
 */


// Ticktes Table
/**
 * ticket_id
 * user_id
 * flight_id
 * class = ["Economy, Business, First"]
 * date_booked
 */

// Airlines Table
/**
 * id
 * name
 * logo
 */

// locations
/**
 * id
 * name
 * airport_code
 */

// Query String
// ?from=123&to=321&pickup=15/8/2022&dropoff=16/8/2022&class=economy&type=one-way