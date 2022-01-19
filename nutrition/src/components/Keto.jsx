import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
// import Image from "./Image";
// import Carb from "./Carb";
// import Protein from "./Protein";
// import Fat from "./Fat";
// import Calories from "./Calories";
import FoodItem from "./FoodItem";

function Keto() {
  // const [GetAPI, setGetAPI] = useState(true);
  const [Food, setFood] = useState({});
  const [Request, setRequest] = useState("");
  const [FoodObjArr, setFoodObjArr] = useState([]);

  const getRandomFood = () => {
    fetch(
      `https://api.edamam.com/api/food-database/v2/parser?app_id=52bf2812&app_key=66ff0f0b901d583501ff1d55e8b00be7&ingr=${Request}&nutrition-type=cooking&category=generic-foods`
    )
      .then((response) => response.json())
      .then((data) => {
        const n = data?.parsed[0];
        console.log(n);
        setFood(n);
      });
  };

  useEffect(() => {
    getRandomFood();
  }, [Request]);

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

  const handleSubmit = (msg) => {
    const messageTyped = msg.current.value;
    setRequest(messageTyped);
  };

  return (
    <>
      <div className="App">
        <Form click={handleSubmit} />
        <FoodItem cart={FoodObjArr} handleClick={removeFromCart} />
        {/* <Carb carb={GIF?.fields?.item_name} /> */}
        {/* <Image url={Food?.food?.image} />
       

        {/* <Image url={GIF?.images?.original?.url} /> */}
        {/* <p>New Name: {person?.name?.first}</p> */}
        {/* <p>Name: {JSON.stringify(person)}</p> */}
      </div>
    </>
  );
}

export default Keto;
