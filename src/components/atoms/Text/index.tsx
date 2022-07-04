import React, { FC } from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

export enum TextColors {
  YELLOW = "yellow",
  RED = "red",
  GREEN = "green"
}

type Props = {
  children: React.ReactNode;
  tag: "p" | "span";
  sizeClass: "b1" | "b2";
  color?: TextColors;
  classes?: string;
};

const Text: FC<Props> = ({ tag, children, sizeClass, color, classes }) => {
  return React.createElement(
    tag,
    {
      className: cn({ [styles[color]]: color }, styles.titleComponent, styles[sizeClass], classes)
    },
    children
  );
};

export default Text;
