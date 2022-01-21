import React from "react";
import "./CalFat.css";

const CalFat = (props) => {
  return (
    <div>
      <div className="shadow-none p-3 mb-5 bg-light rounded">
        <p>
          Carb: {props.carb} grams - Calories: {props.cal} cal
        </p>
      </div>
    </div>
  );
};

export default CalFat;
