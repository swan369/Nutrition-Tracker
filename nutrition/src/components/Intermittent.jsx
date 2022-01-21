// import React from "react";
// // import "./Intermittent.css";

// const Intermittent = () => {
//   return <div className="inter">intermittent fasting page</div>;
// };

// export default Intermittent;

import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import FoodItem from "./FoodItem";

function Intermittent() {
  const [Food, setFood] = useState({});
  const [Request, setRequest] = useState("");
  const [FoodObjArr, setFoodObjArr] = useState([]);
  const [Status, setStatus] = useState("");

  const foodURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=52bf2812&app_key=66ff0f0b901d583501ff1d55e8b00be7&ingr=${Request}&nutrition-type=cooking&category=generic-foods`;
  const getRandomFood = () => {
    setStatus("pending");

    fetch(foodURL)
      .then((response) => response.json())
      .then((data) => {
        setStatus("complete");
        const n = data?.parsed[0];
        console.log(n);
        setFood(n);
      });
    // .catch((error) => {
    //   setStatus("error");
    //   console.error("Error:", error);
    // });
  };

  useEffect(() => {
    getRandomFood();
  }, [foodURL]);

  useEffect(() => {
    // console.log(Food);
    addToCart(Food);
  }, [Food]);

  const addToCart = (item) => {
    setFoodObjArr([...FoodObjArr, item]);
  };

  const removeFromCart = (index) => {
    const cartArr = FoodObjArr.filter((item, i) => i !== index);
    setFoodObjArr(cartArr);
  };

  const handleControlledSubmit = (e) => {
    const query = e.target.value;
    e.preventDefault();
    setRequest(query);
  };

  if (Status === "pending") {
    return "LOADING";
  }

  if (Status === "error") {
    return "ERROR";
  }
  return (
    <>
      <div>
        <h2>Intermittent Diet goal: Slight Calorie Deficit</h2>
        {/* <Form click={handleSubmit} /> */}
        <Form click={handleControlledSubmit} />
        <FoodItem
          request={Request}
          cart={FoodObjArr}
          handleClick={removeFromCart}
        />
        {/* <p>Name: {JSON.stringify(person)}</p> */}
      </div>
    </>
  );
}

export default Intermittent;

// const handleSubmit = (msg, e) => {
//   e.preventDefault();
//   const messageTyped = msg.current.value;
//   setRequest(messageTyped);
// };
