import React from "react";
import { FC, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export interface CommonLayoutProps {
  children?: React.ReactNode;
}

const CommonLayout: FC<CommonLayoutProps> = ({ children }) => {
  const location = useRouter();

  return (
    <div className="nc-CommonLayoutProps bg-neutral-50 dark:bg-neutral-900">
      <div className="border-b border-neutral-200 dark:border-neutral-700 pt-12 bg-white dark:bg-neutral-800">
        <div className="container">
          <div className="flex space-x-8 md:space-x-14 overflow-x-auto hiddenScrollbar">
            <Link
              href="/account"
              className={ `block py-5 md:py-8 border-b-2 flex-shrink-0 ${
                location.pathname === "/account"
                  ? "border-transparent"
                  : "border-primary-500"
              }`}
            >
              Account info
            </Link>
            <Link
              href="/account-savelists"
              className={ `block py-5 md:py-8 border-b-2 flex-shrink-0 ${
                location.pathname === "/account-savelists"
                  ? "border-transparent"
                  : "border-primary-500"
              }`}
            >
              Save lists
            </Link>
            <Link
              href="/account-password"
              className={ `block py-5 md:py-8 border-b-2 flex-shrink-0 ${
                location.pathname === "/account-password"
                  ? "border-transparent"
                  : "border-primary-500"
              }`}
            >
              Change password
            </Link>
            <Link
              href="/account-billing"
              className={ `block py-5 md:py-8 border-b-2 flex-shrink-0 ${
                location.pathname === "/account-billing"
                  ? "border-transparent"
                  : "border-primary-500"
              }`}
            >
              Change Billing
            </Link>
          </div>
        </div>
      </div>
      <div className="container pt-14 sm:pt-20 pb-24 lg:pb-32">{children}</div>
    </div>
  );
};

export default CommonLayout;
