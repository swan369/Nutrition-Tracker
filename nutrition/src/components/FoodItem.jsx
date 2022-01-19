import React from "react";
import "./FoodItem.css";

const FoodItem = (props) => {
  let list = props.cart.map((item, index) => {
    return (
      <li
        className="list"
        key={index}
        onClick={() => {
          props.handleClick(index);
        }}
      >
        <img className="image" src={item?.food?.image} />
        <div className="description">
          {"Carbs"} {item?.food?.nutrients?.CHOCDF}g, Protein:{" "}
          {item?.food?.nutrients?.PROCNT}g, Fat: {item?.food?.nutrients?.FAT}g,
          {item?.food?.nutrient?.ENRGC_KCAL}
        </div>
      </li>
    );
  });

  return (
    <div>
      <h2>Your food</h2>
      <ul>{list}</ul>
    </div>
  );
};

export default FoodItem;

/* <Carb carb={Food?.food?.nutrients.CHOCDF} />
<Protein carb={Food?.food?.nutrients.CHOCDF} />
<Fat carb={Food?.food?.nutrients.CHOCDF} />
<Calories carb={Food?.food?.nutrients.CHOCDF} /> */

// {Food?.food?.nutrients.PROCNT}{Food?.food?.nutrients.FAT}{Food?.food?.nutrients.ENERC_KCAL}
