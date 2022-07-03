import React, { FC } from "react";
import cn from "classnames";
import { InfoIcon } from "components/Icons";
import styles from "./styles.module.scss";

type Props = {
  wrapperClasses?: string;
};

const InfoBox: FC<Props> = ({ wrapperClasses }) => {
  return (
    <div className={cn(styles.wrapper, { [wrapperClasses]: wrapperClasses })}>
      <InfoIcon className={styles.icon} />
    </div>
  );
};

export default InfoBox;
