import React, { FC } from "react";
import { Link } from "react-router-dom";
import cn from "classnames";
import { ArrowButton } from "components";
import { ROUTES } from "constants/routes";
import { ReactComponent as LogoIcon } from "assets/icons/logo.svg";
import styles from "./styles.module.scss";

type LogoBlockProps = {
  onToggle: () => void;
  isOpen: boolean;
};

const LogoBlock: FC<LogoBlockProps> = ({ onToggle, isOpen }) => {
  return (
    <div className={styles.logoBlock}>
      <Link className={styles.logoLink} to={ROUTES.DASHBOARD}>
        <LogoIcon className={styles.logoIcon} />
        <span
          className={cn(styles.logoTitle, {
            [styles.logoTitleHidden]: !isOpen
          })}
        >
          RST
        </span>
      </Link>

      <ArrowButton
        isOpen={isOpen}
        onClick={onToggle}
        buttonClasses={styles.arrowButton}
      />
    </div>
  );
};

export default LogoBlock;
