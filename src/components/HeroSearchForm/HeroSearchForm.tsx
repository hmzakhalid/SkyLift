import React, { FC, useState } from "react";
import FlightSearchForm from "./FlightSearchForm";

export type SearchTab = "Flights";

export interface HeroSearchFormProps {
  className?: string;
  currentTab?: SearchTab;
  currentPage?: "Flights";
}

const HeroSearchForm: FC<HeroSearchFormProps> = ({
  className = "",
  currentPage,
}) => {
  const isArchivePage = !!currentPage;
  return (
    <div
      className={`nc-HeroSearchForm w-full max-w-6xl py-5 lg:py-0 ${className}`}
      data-nc-id="HeroSearchForm"
    >
      <FlightSearchForm haveDefaultValue={isArchivePage} />
    </div>
  );
};

export default HeroSearchForm;
