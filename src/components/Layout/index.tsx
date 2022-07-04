import React, { FC, useState, createContext } from "react";
import cn from "classnames";
import { SideBar } from "components";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

const STORAGE_KEY = "rst_sidebar";

export const LayoutContext = createContext(null);

const Layout: FC<Props> = ({ children }) => {
  const [isOpen, setOpen] = useState<boolean>(
    localStorage.getItem(STORAGE_KEY) ? JSON.parse(localStorage.getItem(STORAGE_KEY)) : true
  );

  const handleToggle = () => {
    setOpen((prev) => {
      localStorage.setItem(STORAGE_KEY, `${!prev}`);
      return !prev;
    });
  };

  return (
    <div className={styles.wrapper}>
      <SideBar isOpen={isOpen} onToggle={handleToggle} />

      <LayoutContext.Provider value={{ isSidebarOpen: isOpen }}>
        <div
          className={cn(styles.contentWrapper, {
            [styles.contentSidebarClosed]: !isOpen
          })}
        >
          {children}
        </div>
      </LayoutContext.Provider>
    </div>
  );
};

export default Layout;
