import React, { FC, useState } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface FlightCardProps {
  className?: string;
  data: {
    id: string;
    airlines: {
      logo: string;
      name: string;
    };
    price: string;
  };
}

const FlightCard: FC<FlightCardProps> = ({ className = "", data }) => {
  const setCheckOut = () => {
    // localStorage.setItem();
  }
  return (
    <div
      className={`nc-FlightCardgroup p-4 sm:p-6 relative bg-white dark:bg-neutral-900 border border-neutral-100
     dark:border-neutral-800 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow space-y-6 ${className}`}
      data-nc-id="FlightCard"
    >
      <div
        className={` relative  ${className}`}
        data-nc-id="FlightCard"
      >
        {/*  eslint-disable-next-line jsx-a11y/anchor-has-content */}

        <div className="flex  flex-col sm:flex-row sm:items-center space-y-6 sm:space-y-0">
          {/* LOGO IMG */}
          <div className="w-24 lg:w-32 flex-shrink-0">
            <img src={data.airlines.logo} className="w-10" alt="" />
          </div>

          {/* FOR MOBILE RESPONSIVE */}
          <div className="block lg:hidden space-y-1">
            <div className="flex font-semibold">
              <div>
                <span>11:00</span>
                <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                  HND
                </span>
              </div>
              <span className="w-12 flex justify-center">
                <i className=" text-2xl las la-long-arrow-alt-right"></i>
              </span>
              <div>
                <span>20:00</span>
                <span className="flex items-center text-sm text-neutral-500 font-normal mt-0.5">
                  SIN
                </span>
              </div>
            </div>

            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              <span className="VG3hNb">Nonstop</span>
              <span className="mx-2">·</span>
              <span>7h 45m</span>
              <span className="mx-2">·</span>
              <span>HAN</span>
            </div>
          </div>

          {/* TIME - NAME */}
          <div className="hidden lg:block  min-w-[150px] flex-[4] ">
            <div className="font-medium text-lg">11:00 - 20:00</div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              {data.airlines.name}
            </div>
          </div>

          {/* TIMME */}
          <div className="hidden lg:block flex-[4] whitespace-nowrap">
            <div className="font-medium text-lg"> HND - SIN</div>
            <div className="text-sm text-neutral-500 font-normal mt-0.5">
              7 hours 15 minutes
            </div>
          </div>

          {/* PRICE */}
          <div className="flex-[4] whitespace-nowrap">
            <div>
              <span className="text-xl font-semibold text-secondary-6000">
                {data.price}
              </span>
            </div>
            <div className="text-xs sm:text-sm text-neutral-500 font-normal mt-0.5">
              round-trip
            </div>
          </div>
          {/* Buy Now */}
          <div className="hidden lg:block flex-[4] whitespace-nowrap text-right">
            <ButtonPrimary className="bg-red-500 hover:bg-red-400">Buy Now</ButtonPrimary>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightCard;
