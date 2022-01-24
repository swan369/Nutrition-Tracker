import React from "react";
import "./CalFat.css";

const CalFat = (props) => {
  const food = props.percNutrient;
  console.log(food);

  return (
    <div>
      <div className="shadow-none p-3 mb-5 bg-light rounded">
        <p>
          Carb: {food?.carb} % Prot: {food?.prot} % Fat: {food?.fat} %
        </p>
        <p>
          <strong>Carb: {props?.carb} grams</strong> - Calories: {props?.cal}{" "}
          kcal
        </p>
      </div>
    </div>
  );
};

export default CalFat;
