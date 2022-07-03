import React, { FC, useState } from "react";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { NAV_LINKS } from "./constants";
import {
  LogoutIconDefault,
  LogoutIconActive,
  IconType
} from "components/Icons";
import styles from "./styles.module.scss";

type NavMenuProps = {
  isOpen: boolean;
};

const NavMenu: FC<NavMenuProps> = ({ isOpen }) => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {NAV_LINKS.map(({ path, ...rest }) => (
          <li key={path} className={styles.navListItem}>
            <NavLink to={path}>
              {({ isActive }) => (
                <MenuItem
                  tag="div"
                  isActive={isActive}
                  isTitleHidden={!isOpen}
                  {...rest}
                />
              )}
            </NavLink>
          </li>
        ))}
      </ul>

      <MenuItem
        tag="button"
        isActive={false}
        isTitleHidden={!isOpen}
        icons={{
          default: LogoutIconDefault,
          active: LogoutIconActive
        }}
        title="Logout"
      />
    </nav>
  );
};

interface Icons {
  default: IconType;
  active: IconType;
}

type MenuItemProps = {
  tag: "div" | "button";
  title: string;
  icons: Icons;
  isActive: boolean;
  isTitleHidden: boolean;
};

const MenuItem: FC<MenuItemProps> = ({
  tag,
  title,
  icons: { default: DefaultIcon, active: ActiveIcon },
  isActive,
  isTitleHidden
}) => {
  const [isHovered, setHovered] = useState(false);
  const showActive = isActive || isHovered;

  const getCurrentIcon = () => {
    if (showActive) return <ActiveIcon className={styles.menuIcon} />;

    return <DefaultIcon className={styles.menuIcon} />;
  };

  return React.createElement(
    tag,
    {
      className: cn(styles.menuItem, {
        [styles.menuItemActive]: showActive
      }),
      onMouseEnter: () => setHovered(true),
      onMouseLeave: () => setHovered(false)
    },
    <>
      {getCurrentIcon()}
      <span
        className={cn(styles.menuLabel, {
          [styles.menuLabelActive]: showActive,
          [styles.menuLabelHidden]: isTitleHidden
        })}
      >
        {title}
      </span>
    </>
  );
};

export default NavMenu;
