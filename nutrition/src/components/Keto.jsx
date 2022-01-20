import React from "react";
import { useState, useEffect } from "react";
import Form from "./Form";
import FoodItem from "./FoodItem";

function Keto() {
  // const [GetAPI, setGetAPI] = useState(true);
  const [Food, setFood] = useState({});
  const [Request, setRequest] = useState("");
  const [FoodObjArr, setFoodObjArr] = useState([]);
  const [Status, setStatus] = useState("");
  const [TotalCal, setTotalCal] = useState(0);
  // const [TotalCarb, setTotalCarb] = useState(0);
  // const [TotalProt, setTotalProt] = useState(0);
  // const [TotalFat, setTotalFat] = useState(0);

  // const [Undefined, setUndefined] = useState("");
  const foodURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=52bf2812&app_key=66ff0f0b901d583501ff1d55e8b00be7&ingr=${Request}&nutrition-type=cooking&category=generic-foods`;

  const getRandomFood = () => {
    setStatus("pending");

    fetch(foodURL)
      .then((response) => response.json())
      .then((data) => {
        setStatus("complete");
        let n = data?.parsed?.[0];
        console.log(n);
        setFood(n);
        console.log(Food);
      })
      .catch((error) => {
        setStatus("error");
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    getRandomFood();
  }, [foodURL]);

  const addToCart = (item) => {
    if (item) {
      setFoodObjArr([...FoodObjArr, item]);
      console.log("FoodObjArr: ", FoodObjArr);
    } else {
      return;
    }
    // updateTotalCalories(FoodObjArr);
  };

  useEffect(() => {
    addToCart(Food);
  }, [Food]);

  // const updateTotalCalories = (arr) => {
  //   console.log(arr);
  //   let calories = 0;
  //   arr.forEach((item) => {
  //     const nonParsedcalories = item?.food?.nutrients?.ENERC_KCAL;
  //     const parsed = Number(Math.trunc(nonParsedcalories));
  //     calories += parsed;
  //   });
  // calories = Food.food.nutrients.ENERC_KCAL;
  // console.log(calories);
  // setTotalCal(calories);
  // };

  const removeFromCart = (index) => {
    const cartArr = FoodObjArr.filter((item, i) => i !== index);
    setFoodObjArr(cartArr);
  };

  const handleSubmit = (msg, e) => {
    e.preventDefault();
    const messageTyped = msg.current.value;
    console.log(messageTyped);
    setRequest(messageTyped);
  };

  console.log(Request);
  // const handleControlledSubmit = (e) => {
  //   console.log(e);
  //   const query = e.target.value;
  //   e.preventDefault();
  //   setRequest(query);
  // };
  if (Status === "pending") {
    return "LOADING";
  }

  if (Status === "error") {
    return "ERROR";
  }
  return (
    <>
      <div>
        <h2>Keto goal: less than 50g Carb, Carb: 5%, Protein: 20%, Fat: 75%</h2>
        <Form click={handleSubmit} />
        {/* <Form request={Request}click={handleControlledSubmit} /> */}
        <div>
          <h2>Your food</h2>
          <ul className="list-group">
            {FoodObjArr.map((item, index) => {
              // if (item) {
              return (
                <FoodItem
                  FoodObjArr={FoodObjArr}
                  request={Request}
                  clickRemove={removeFromCart}
                  item={item}
                  index={index}
                  key={index}
                />
              );
              // }
            })}
          </ul>
        </div>
        {/* <p>Name: {JSON.stringify(person)}</p> */}
      </div>
    </>
  );
}

export default Keto;
