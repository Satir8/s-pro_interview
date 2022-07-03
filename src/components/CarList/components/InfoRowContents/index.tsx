import React, { FC } from "react";
import cn from "classnames";
import { Text, TextColors } from "components";
import { getPercentage } from "helpers";
import {
  CarProgress as CarProgressTypes,
  CarPlanTypes,
  CarPartsTypes
} from "../../types";
import styles from "./styles.module.scss";

type ProgressContentProps = {
  progress: CarProgressTypes | null;
};

export const ProgressContent: FC<ProgressContentProps> = ({ progress }) => {
  const percentage = getPercentage(progress?.actual, progress?.total);
  const defaultPercentage = 3;

  return progress ? (
    <div className={styles.progressContent}>
      <Text tag="span" sizeClass="b1">
        {progress.actual} of {progress.total}
      </Text>
      <div className={styles.progressBar}>
        <div
          style={{
            width: `${percentage ? percentage : defaultPercentage}%`
          }}
          className={cn(
            styles.progressValue,
            styles[`progress--${progress.color}`]
          )}
        />
      </div>

      <Text tag="span" sizeClass="b1">
        {progress.date}
      </Text>
    </div>
  ) : (
    <Text tag="span" sizeClass="b2">
      no tasks
    </Text>
  );
};

type PlannedContentProps = {
  planned: CarPlanTypes | null;
};

export const PlannedContent: FC<PlannedContentProps> = ({ planned }) => {
  return planned ? (
    <div className={styles.plannedContent}>
      <Text tag="span" sizeClass="b1" classes={styles.plannedDate}>
        {planned.datePlanned}
      </Text>
      <Text tag="span" sizeClass="b2">{`${planned.daysLeft} days left`}</Text>
    </div>
  ) : (
    <Text tag="span" sizeClass="b2">
      not planned
    </Text>
  );
};

type PartsContentProps = {
  parts: CarPartsTypes | null;
};

export const PartsContent: FC<PartsContentProps> = ({ parts }) => {
  if (!parts)
    return (
      <Text tag="span" sizeClass="b2">
        no parts
      </Text>
    );

  return parts.partsToMaintenance ? (
    <div className={styles.partsContent}>
      <Text
        tag="span"
        sizeClass="b1"
        color={parts.color as TextColors}
        classes={styles.partsNumber}
      >
        {parts.partsToMaintenance}
      </Text>
      <Text tag="span" sizeClass="b2">
        parts is close to maintenance
      </Text>
    </div>
  ) : (
    <Text tag="span" sizeClass="b2" color={parts.color as TextColors}>
      perfect
    </Text>
  );
};
