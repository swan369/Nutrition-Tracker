import React from "react";
import "./FoodItem.css";

const FoodItem = (props) => {
  const nutrition = props?.item?.food?.nutrients;
  return (
    <li
      className="list-group-item"
      onClick={() => {
        props.clickRemove(props.index);
      }}
    >
      <div className="tagContainer">
        <img className="image" src={props.item?.food?.image} />
        <div className="description">
          Carb: {nutrition?.CHOCDF} g, Protein: {nutrition?.PROCNT} g, Fat:{" "}
          {nutrition?.FAT} g, Calories: {nutrition?.ENERC_KCAL} kcal
        </div>
      </div>
    </li>
  );
};
export default FoodItem;
