import React, { FC } from "react";
import { SideBar } from "components";
import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
};

const Layout: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <SideBar />
      <div className={styles.contentWrapper}>{children}</div>
    </div>
  );
};

export default Layout;
