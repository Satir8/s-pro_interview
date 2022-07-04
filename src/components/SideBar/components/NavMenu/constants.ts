import { ROUTES } from "constants/routes";
import {
  DashboardIconDefault,
  DashboardIconActive,
  FlagIconDefault,
  FlagIconActive,
  BellIconDefault,
  BellIconActive
} from "components/Icons";

export const NAV_LINKS = [
  {
    path: ROUTES.DASHBOARD,
    title: "Dashboard",
    icons: {
      default: DashboardIconDefault,
      active: DashboardIconActive
    }
  },
  {
    path: ROUTES.EVENTS,
    title: "Events",
    icons: {
      default: FlagIconDefault,
      active: FlagIconActive
    }
  },
  {
    path: ROUTES.NOTIFICATIONS,
    title: "Notifications",
    icons: {
      default: BellIconDefault,
      active: BellIconActive
    }
  }
];
