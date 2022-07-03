import React, { FC, useState } from "react";
import { IconType } from "components/Icons";
import styles from "./styles.module.scss";

type IconBoxProps = {
  icons: {
    default: IconType;
    active: IconType;
  };
};

const IconBox: FC<IconBoxProps> = ({
  icons: { default: DefaultIcon, active: ActiveIcon }
}) => {
  const [isHovered, setHovered] = useState(false);

  return (
    <div
      className={styles.iconBox}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {isHovered ? (
        <ActiveIcon className={styles.icon} />
      ) : (
        <DefaultIcon className={styles.icon} />
      )}
    </div>
  );
};

export default IconBox;
