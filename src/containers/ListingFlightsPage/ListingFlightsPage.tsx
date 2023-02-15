import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import SectionHeroArchivePage from "components/SectionHeroArchivePage/SectionHeroArchivePage";
import React, { FC } from "react";
import SectionGridFilterCard from "./SectionGridFilterCard";


export interface ListingFlightsPageProps {
  className?: string;
}

const ListingFlightsPage: FC<ListingFlightsPageProps> = ({
  className = "",
}) => {
  return (
    <div
      className={`nc-ListingFlightsPage relative overflow-hidden ${className}`}
      data-nc-id="ListingFlightsPage"
    >
      <BgGlassmorphism />

      <div className="container relative mb-8">
        {/* SECTION HERO */}
        <SectionHeroArchivePage
          currentPage="Flights"
          currentTab="Flights"
          listingType={
            <>
              <i className="text-2xl las la-plane-departure"></i>
              <span className="ml-2.5">10+ flights</span>
            </>
          }
          className="pt-10 pb-24 lg:pb-28 lg:pt-16 "
        />

        {/* SECTION */}
        <SectionGridFilterCard className="pb-24 lg:pb-28" />
      </div>
    </div>
  );
};

export default ListingFlightsPage;
