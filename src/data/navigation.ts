import { NavItemType } from "shared/Navigation/NavigationItem";
import ncNanoId from "utils/ncNanoId";

export const MainNavigation: NavItemType[] = [
  {
    id: ncNanoId(),
    href: "/",
    name: "Home",
    isNew: true,
  },
  {
    id: ncNanoId(),
    href: "/unique_id_",
    name: "Flights",
  },
  {
    id: ncNanoId(),
    href: "/about",
    name: "About",
  },
];
