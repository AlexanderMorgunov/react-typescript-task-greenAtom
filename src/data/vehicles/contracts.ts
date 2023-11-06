export enum VehicleType {
  sedan,
  hatchback,
  roadster,
  coupe,
  minivan,
}

export const vehicleTypes: VehicleType[] = [
  VehicleType.sedan,
  VehicleType.hatchback,
  VehicleType.roadster,
  VehicleType.coupe,
  VehicleType.minivan,
];

export const vehicleTypeTitles: Record<VehicleType, string> = {
  [VehicleType.sedan]: "Седан",
  [VehicleType.hatchback]: "Хэтчбэк",
  [VehicleType.roadster]: "Роадстер",
  [VehicleType.coupe]: "Купэ",
  [VehicleType.minivan]: "Минивэн",
};

export interface Vehicle {
  id: string;
  type: VehicleType;
  title: string;
  price: number;
}

export interface VehicleFilter {
  title: string;
  type: VehicleType | null;
}

export interface TableProps {
  vehicles: Vehicle[];
}

export interface TableItemProps {
  vehicle: Vehicle;
  number: number;
}

export interface FilterProps {
  filter: VehicleFilter;
  setFilter: (filter: VehicleFilter) => void;
}

export interface InputProps {
  title: string;
  onInputChange: (title: string) => void;
}
