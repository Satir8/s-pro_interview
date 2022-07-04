import React, { FC } from "react";
import cn from "classnames";
import { IconType } from "components/Icons";
import IconBox from "../IconBox";
import styles from "./styles.module.scss";

type InfoRowProps = {
  children: React.ReactNode;
  icons: {
    default: IconType;
    active: IconType;
  };
  rowClasses?: string;
  contentClasses?: string;
};

const InfoRow: FC<InfoRowProps> = ({ icons, children, rowClasses, contentClasses }) => {
  return (
    <div className={cn(styles.row, { [rowClasses]: rowClasses })}>
      <IconBox icons={icons} />
      <div className={cn(styles.contentBox, { [contentClasses]: contentClasses })}>{children}</div>
    </div>
  );
};

export default InfoRow;
