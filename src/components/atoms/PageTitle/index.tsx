import React, { FC } from "react";
import styles from "./styles.module.scss";

type Props = {
  title: string;
};

const PageTitle: FC<Props> = ({ title }) => {
  return <h1 className={styles.title}>{title}</h1>;
};

export default PageTitle;
