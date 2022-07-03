import React, { FC, useState } from "react";
import cn from "classnames";
import LogoBlock from "./components/LogoBlock";
import NavMenu from "./components/NavMenu";
import styles from "./styles.module.scss";

const STORAGE_KEY = "rst_sidebar";

const SideBar: FC = () => {
  const [isOpen, setOpen] = useState<boolean>(
    localStorage.getItem(STORAGE_KEY)
      ? JSON.parse(localStorage.getItem(STORAGE_KEY))
      : true
  );

  const handleToggle = () => {
    setOpen((prev) => {
      localStorage.setItem(STORAGE_KEY, `${!prev}`);
      return !prev;
    });
  };

  return (
    <div className={cn(styles.wrapper, { [styles.wrapperCollapsed]: !isOpen })}>
      <div
        className={cn(styles.sidebar, { [styles.sidebarCollapsed]: !isOpen })}
      >
        <div className={styles.sidebarContent}>
          <LogoBlock isOpen={isOpen} onToggle={handleToggle} />
          <NavMenu isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
