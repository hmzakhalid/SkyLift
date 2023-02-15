import React, { FC } from "react";
import TabFilters from "./TabFilters";
import Heading2 from "components/Heading/Heading2";
import FlightCard, { FlightCardProps } from "components/FlightCard/FlightCard";
import ButtonPrimary from "shared/Button/ButtonPrimary";
import axios from "axios";

export interface SectionGridFilterCardProps {
  className?: string;
}

// const DEMO_DATA: FlightCardProps["data"][] = [
//   {
//     id: "1",
//     price: "$4,100",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
//       name: "Korean Air",
//     },
//   },
//   {
//     id: "2",
//     price: "$3,380",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
//       name: "Singapore Airlines",
//     },
//   },
//   {
//     id: "3",
//     price: "$2,380",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/multi.png",
//       name: "Philippine Airlines",
//     },
//   },
//   {
//     id: "1",
//     price: "$4,100",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
//       name: "Korean Air",
//     },
//   },
//   {
//     id: "2",
//     price: "$3,380",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
//       name: "Singapore Airlines",
//     },
//   },
//   {
//     id: "1",
//     price: "$4,100",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/KE.png",
//       name: "Korean Air",
//     },
//   },
//   {
//     id: "2",
//     price: "$3,380",
//     airlines: {
//       logo: "https://www.gstatic.com/flights/airline_logos/70px/SQ.png",
//       name: "Singapore Airlines",
//     },
//   },
// ];

const SectionGridFilterCard: FC<SectionGridFilterCardProps> = ({
  className = "",
}) => {

  const [flights, setFlights] = React.useState([]);

  React.useEffect(() => {
    axios.get('http://localhost:3000/api/getFlights')
      .then((response) => {
        console.log(response.data);
        setFlights(response.data.flights);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);



  return (
    <div
      className={`nc-SectionGridFilterCard ${className}`}
      data-nc-id="SectionGridFilterCard"
    >
      <Heading2
        heading="Singapore - Tokyo"
        subHeading={
          <span className="block text-neutral-500 dark:text-neutral-400 mt-3">
            10+ flights
            <span className="mx-2">·</span>
            round trip
          </span>
        }
      />
      <div className="lg:p-10 lg:bg-neutral-50 lg:dark:bg-black/20 grid grid-cols-1 gap-6  rounded-3xl">
        {flights.map((item, index) => (
          <FlightCard key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default SectionGridFilterCard;
