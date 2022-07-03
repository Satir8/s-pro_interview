import React, { FC } from "react";
import { InfoBox } from "components";
import {
  SettingsDefaultIcon,
  SettingsActiveIcon,
  RepairDefaultIcon,
  RepairActiveIcon,
  FlagIconDefault,
  FlagIconActive
} from "components/Icons";
import { capitalizeFirstLetter } from "helpers";
import {
  ProgressContent,
  PlannedContent,
  PartsContent
} from "./components/InfoRowContents";
import InfoRow from "./components/InfoRow";
import { Car as CarTypes } from "./types";
import styles from "./styles.module.scss";

type Props = {
  list: Array<CarTypes>;
};

const CarList: FC<Props> = ({ list }) => {
  return (
    <ul className={styles.carList}>
      {list.map(({ id, ...rest }, idx) => (
        <CarListItem key={id} count={idx + 1} {...{ ...rest, id }} />
      ))}
    </ul>
  );
};

interface CarItemProps extends CarTypes {
  count: number;
}

const CarListItem: FC<CarItemProps> = ({
  count,
  colorTitle,
  img,
  progress,
  planned,
  parts
}) => {
  return (
    <li className={styles.carListItem}>
      <InfoBox wrapperClasses={styles.infoBox} />

      <div className={styles.countBox}>{`# ${count} ${capitalizeFirstLetter(
        colorTitle
      )}`}</div>

      <div className={styles.imgWrapper}>
        <img src={img} alt={`${colorTitle} car`} className="img-fluid" />
      </div>

      <InfoRow
        rowClasses={styles.carInfoRow}
        icons={{ default: SettingsDefaultIcon, active: SettingsActiveIcon }}
      >
        <ProgressContent progress={progress} />
      </InfoRow>

      <InfoRow
        rowClasses={styles.carInfoRow}
        icons={{ default: FlagIconDefault, active: FlagIconActive }}
      >
        <PlannedContent planned={planned} />
      </InfoRow>

      <InfoRow
        contentClasses={styles.clearRowBorder}
        icons={{ default: RepairDefaultIcon, active: RepairActiveIcon }}
      >
        <PartsContent parts={parts} />
      </InfoRow>
    </li>
  );
};

export default CarList;
