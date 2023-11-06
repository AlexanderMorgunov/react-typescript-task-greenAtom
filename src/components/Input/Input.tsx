import React from "react";
import { InputProps } from "../../data/vehicles/contracts";
import "./Input.css";

const Input: React.FC<InputProps> = ({ title, onInputChange }) => {
  return (
    <input
      type="text"
      title={title}
      onChange={(e) => {
        onInputChange(e.target.value);
      }}
      placeholder="...Введите модель"
    />
  );
};

export default Input;
