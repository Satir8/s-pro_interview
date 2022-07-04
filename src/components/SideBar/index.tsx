import React, { FC } from "react";
import cn from "classnames";
import LogoBlock from "./components/LogoBlock";
import NavMenu from "./components/NavMenu";
import styles from "./styles.module.scss";

type Props = {
  isOpen: boolean;
  onToggle: () => void;
};

const SideBar: FC<Props> = ({ isOpen, onToggle }) => {
  return (
    <div className={cn(styles.wrapper, { [styles.wrapperCollapsed]: !isOpen })}>
      <div className={cn(styles.sidebar, { [styles.sidebarCollapsed]: !isOpen })}>
        <div className={styles.sidebarContent}>
          <LogoBlock isOpen={isOpen} onToggle={onToggle} />
          <NavMenu isOpen={isOpen} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
