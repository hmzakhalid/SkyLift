import { useEffect } from "react";
import { useRouter } from "next/router";

export interface ScrollToTopProps {}

const ScrollToTop: React.FC<ScrollToTopProps> = () => {
  const locationPathName = useRouter().pathname;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [locationPathName]);

  return null;
};

export default ScrollToTop;
