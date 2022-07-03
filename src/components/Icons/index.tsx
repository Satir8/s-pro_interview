export { ReactComponent as DashboardIconDefault } from "assets/icons/dashboard_default.svg";
export { ReactComponent as DashboardIconActive } from "assets/icons/dashboard_active.svg";

export { ReactComponent as FlagIconDefault } from "assets/icons/flag_default.svg";
export { ReactComponent as FlagIconActive } from "assets/icons/flag_active.svg";

export { ReactComponent as BellIconDefault } from "assets/icons/bell_default.svg";
export { ReactComponent as BellIconActive } from "assets/icons/bell_active.svg";

export { ReactComponent as LogoutIconDefault } from "assets/icons/logout_default.svg";
export { ReactComponent as LogoutIconActive } from "assets/icons/logout_active.svg";

export { ReactComponent as ArrowIcon } from "assets/icons/arrow.svg";
export { ReactComponent as InfoIcon } from "assets/icons/info.svg";
export { ReactComponent as SettingsDefaultIcon } from "assets/icons/settings_default.svg";
export { ReactComponent as SettingsActiveIcon } from "assets/icons/settings_active.svg";
export { ReactComponent as RepairDefaultIcon } from "assets/icons/repair_default.svg";
export { ReactComponent as RepairActiveIcon } from "assets/icons/repair_active.svg";

export type IconType = React.FunctionComponent<
  React.SVGProps<SVGSVGElement> & {
    title?: string;
  }
>;
