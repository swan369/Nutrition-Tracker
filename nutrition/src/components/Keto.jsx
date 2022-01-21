import React from "react";
import { useState, useEffect, prevState } from "react";
import Form from "./Form";
import FoodItem from "./FoodItem";
import DoughnutChart from "./DoughnutChart";

function Keto() {
  const [Food, setFood] = useState(null);
  const [Request, setRequest] = useState("");
  const [FoodObjArr, setFoodObjArr] = useState([]);
  const [Status, setStatus] = useState("");
  const [Carb, setCarb] = useState(0);

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
  };

  useEffect(() => {
    addToCart(Food);
    setRequest("");
    addTotalCarb(Food);
  }, [Food]);

  function sanitise(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
  }

  const addTotalCarb = (Food) => {
    console.log(Food);
    const foodCarb = parseInt(Food?.food?.nutrients?.CHOCDF);
    if (sanitise(foodCarb)) {
      console.log(Carb);
      // setCalories(Calories + foodCal);
      setCarb((prevCarb) => prevCarb + foodCarb);
    }
  };

  const removeTotalCarb = (Food) => {
    const foodCarb = parseInt(Food?.food?.nutrients?.CHOCDF);
    if (sanitise(foodCarb)) {
      console.log(Carb);
      setCarb((prevCarb) => prevCarb - foodCarb);
    }
  };

  const removeFromCart = (index) => {
    const cartArr = FoodObjArr.filter((item, i) => i !== index);
    setFoodObjArr(cartArr);

    removeTotalCarb(Food);
  };

  const handleSubmit = (msg, e) => {
    e.preventDefault();
    const messageTyped = msg.current.value;
    setRequest(messageTyped);
    setFood("");
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
        <h2>Keto goal: less than 50g Carb, Carb: 5%, Protein: 20%, Fat: 75%</h2>
        <Form click={handleSubmit} />
        <div>
          <h2>Your food</h2>
          <ul className="list-group">
            {FoodObjArr.map((item, index) => {
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
            })}
          </ul>
        </div>
        <DoughnutChart carb={Carb} />
      </div>
    </>
  );
}

export default Keto;

// const [TotalCarb, setTotalCarb] = useState(0);
// const [TotalProt, setTotalProt] = useState(0);
// const [TotalFat, setTotalFat] = useState(0);
// const [TotalCal, setTotalCal] = useState(0);

// const [Undefined, setUndefined] = useState("");

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

// {
/* <p>Name: {JSON.stringify(person)}</p> */
// }
// {
// }
