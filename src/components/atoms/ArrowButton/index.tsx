import React, { FC } from "react";
import cn from "classnames";
import { ArrowIcon } from "components/Icons";
import styles from "./styles.module.scss";

type Props = {
  onClick: () => void;
  isOpen: boolean;
  buttonClasses?: string;
};

const ArrowButton: FC<Props> = ({ onClick, isOpen, buttonClasses }) => {
  return (
    <button onClick={onClick} className={cn(styles.button, { [buttonClasses]: buttonClasses })}>
      <ArrowIcon className={cn(styles.icon, { [styles.iconReversed]: !isOpen })} />
    </button>
  );
};

export default ArrowButton;
