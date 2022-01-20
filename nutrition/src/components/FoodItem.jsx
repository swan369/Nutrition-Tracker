import React from "react";
import "./FoodItem.css";

const FoodItem = (props) => {
  // let list = props.cart.map((item, index) => {
  //   if (!props.request) {
  //     return;
  //   } else {
  // console.log("item: ", item);
  // return (
  // <li
  //   // className="list"
  //   className="list-group-item"
  //   key={index}
  //   onClick={() => {
  //     props.handleClick(index);
  //   }}
  // >
  //   <img className="image" src={item?.food?.image} />
  //   <div className="description">
  //     Carb: {item?.food?.nutrients?.CHOCDF} g, Protein:{" "}
  //     {item?.food?.nutrients?.PROCNT}g, Fat: {item?.food?.nutrients?.FAT}
  //     g, Calories: {item?.food?.nutrients?.ENERC_KCAL}
  //   </div>
  // </li>
  // );

  // );}

  // return (
  // <div>
  //   <h2>Your food</h2>
  //   <ul className="list-group">{list}</ul>
  // </div>
  // );
  // };
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
        Carb: {props.item?.food?.nutrients?.CHOCDF} g, Protein:{" "}
        {props.item?.food?.nutrients?.PROCNT}g, Fat:{" "}
        {props.item?.food?.nutrients?.FAT}
        g, Calories: {props.item?.food?.nutrients?.ENERC_KCAL}
      </div>
    </li>
  );
};
export default FoodItem;
