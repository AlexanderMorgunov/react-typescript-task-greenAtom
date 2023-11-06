import React from "react";
import { VehicleTypeSelect } from "./VehicleTypeSelect";
import { VehicleType, FilterProps } from "../data/vehicles/contracts";
import Input from "./Input/Input";

export class Filter extends React.Component<FilterProps> {
  render(): React.ReactNode {
    const { filter, setFilter } = this.props;
    return (
      <>
        <Input
          title={filter.title}
          onInputChange={(title: string): void => {
            setFilter({ ...filter, title });
          }}
        />
        <VehicleTypeSelect
          value={filter.type}
          onChange={(type: VehicleType | null): void => {
            setFilter({ ...filter, type });
          }}
        />
      </>
    );
  }
}
