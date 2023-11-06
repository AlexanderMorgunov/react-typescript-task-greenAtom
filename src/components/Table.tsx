import React from "react";
import { CurrencyLabel } from "@skbkontur/react-ui";
import {
  TableItemProps,
  TableProps,
  vehicleTypeTitles,
} from "../data/vehicles/contracts";

const TableItem: React.FC<TableItemProps> = ({ vehicle, number }) => {
  return (
    <tr>
      <td>{number}</td>
      <td>{vehicle.title}</td>
      <td>
        <CurrencyLabel value={vehicle.price} fractionDigits={2} />
      </td>
      <td>{vehicleTypeTitles[vehicle.type]}</td>
    </tr>
  );
};

export const Table: React.FC<TableProps> = ({ vehicles }): JSX.Element => {
  const content = vehicles.length ? (
    vehicles.map((x, i) => <TableItem key={x.id} number={i + 1} vehicle={x} />)
  ) : (
    <tr>
      <td colSpan={4}>По Вашему запросу нет автомобилей</td>
    </tr>
  );
  return (
    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>Название</th>
          <th>Цена, ₽</th>
          <th>Тип ТС</th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
    </table>
  );
};
