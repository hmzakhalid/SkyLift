import React, { FC } from "react";
import ButtonPrimary from "shared/Button/ButtonPrimary";

export interface PayPageProps {
  className?: string;
}

const PayPage: FC<PayPageProps> = ({ className = "" }) => {
  const renderContent = () => {
    return (
      <div className="w-full flex flex-col text-center  justify-center align-middle sm:rounded-2xl sm:border border-neutral-200 dark:border-neutral-700 space-y-8 px-0 sm:p-6 xl:p-8">
        <h2 className="text-3xl lg:text-4xl font-semibold">
          Congratulation, Your Payment was Successfull 🎉
        </h2>
        <ButtonPrimary href="/">Explore more Flights</ButtonPrimary>
      </div>
    );
  };

  return (
    <div className={`nc-PayPage ${className}`} data-nc-id="PayPage">
      <main className="container mt-11 mb-24 lg:mb-32 ">
        <div className="max-w-4xl mx-auto">{renderContent()}</div>
      </main>
    </div>
  );
};

export default PayPage;
