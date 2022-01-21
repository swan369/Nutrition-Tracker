import React from "react";
import "./FoodItem.css";

const FoodItem = (props) => {
  const nutrition = props?.item?.food?.nutrients;
  return (
    <li
      // className="list"
      className="list-group-item"
      // key={index}
      onClick={() => {
        props.clickRemove(props.index);
      }}
    >
      <img className="image" src={props.item?.food?.image} />
      <div className="description">
        Carb: {nutrition?.CHOCDF} g, Protein: {nutrition?.PROCNT} g, Fat:{" "}
        {nutrition?.FAT}
        g, Calories: {nutrition?.ENERC_KCAL}
      </div>
    </li>
  );
};
export default FoodItem;
