import React, { Fragment, useEffect } from "react";
import Header from "../components/Header/Header";
import { useRouter } from "next/router";
import { PathName } from "routers/types";
import { useSession, signIn, signOut } from "next-auth/react"

export type SiteHeaders = "Header 1" | "Header 2" | "Header 3";

const SiteHeader = () => {
  const anchorRef = React.useRef<HTMLDivElement>(null);
  const { data: session } = useSession()
  const [headerSelected, setHeaderSelected] = React.useState<SiteHeaders>("Header 1");
  const [isTopOfPage, setIsTopOfPage] = React.useState<boolean>(true);

  useEffect(() => {
    setIsTopOfPage(window.pageYOffset < 5);
    if(session) {
      setHeaderSelected("Header 2");
    }
    else {
      setHeaderSelected("Header 1");
    }
  }, []);

  const renderHeader = () => {
    let headerClassName = "shadow-sm dark:border-b dark:border-neutral-700";
    switch (headerSelected) {
      case "Header 1":
        return <Header className={headerClassName} navType="MainNav1" />;
      case "Header 2":
        return <Header className={headerClassName} navType="MainNav2" />;
    }
  };

  return (
    <>
      {renderHeader()}
      <div ref={anchorRef} className="h-1 absolute invisible"></div>
    </>
  );
};

export default SiteHeader;
