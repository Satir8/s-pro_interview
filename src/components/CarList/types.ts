export interface CarProgress {
  actual: number;
  total: number;
  date: string;
  color: string;
}

export interface CarPlanTypes {
  datePlanned: string;
  daysLeft: number;
}

export interface CarPartsTypes {
  partsToMaintenance: number;
  color: string;
}

export interface Car {
  id: string;
  colorTitle: string;
  img: string;
  progress: CarProgress | null;
  planned: CarPlanTypes | null;
  parts: CarPartsTypes | null;
}
