import React from "react";
import { useState, useEffect, createContext } from "react";
import Form from "./Form";
import FoodItem from "./FoodItem";
import DoughnutChart from "./DoughnutChart";
import CalFat from "./CalFat";
import "./Diet.css";
import { Link } from "react-router-dom";

export const DataContext = createContext();

function Diet() {
  const [Food, setFood] = useState(null);
  const [Request, setRequest] = useState("");
  const [FoodObjArr, setFoodObjArr] = useState([]);
  const [Status, setStatus] = useState("");
  const [Calories, setCalories] = useState(0);
  const [Carb, setCarb] = useState(0);
  const [Prot, setProt] = useState(0);
  const [Fat, setFat] = useState(0.1);
  const [Nutrients, setNutrients] = useState(0);
  const [PercNutrient, setPercNutrient] = useState(null);

  const myKey = import.meta.env.VITE_API_KEY;
  const myUsername = import.meta.env.VITE_USERNAME;
  // console.log("mykey", myKey);

  const foodURL = `https://api.edamam.com/api/food-database/v2/parser?app_id=${myUsername}&app_key=${myKey}&ingr=${Request}&nutrition-type=cooking&category=generic-foods`;

  const getRandomFood = () => {
    setStatus("pending");

    fetch(foodURL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        setStatus("complete");
        let n = data?.parsed?.[0];
        // console.log(n);
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
    addTotalCarb(Food);
    addTotalProt(Food);
    addTotalFat(Food);
    addTotalCalories(Food);
    setRequest("");
  }, [Food]);

  useEffect(() => {
    totalNutrients(Carb, Prot, Fat);
  }, [Carb, Prot, Fat]);

  useEffect(() => {
    percentEaNutrient(Carb, Prot, Fat);
  }, [Nutrients]);

  function sanitise(x) {
    if (isNaN(x)) {
      return NaN;
    }
    return x;
  }
  const percentEaNutrient = (Carb, Prot, Fat) => {
    const carb = Math.floor((Carb / Nutrients) * 100);
    const prot = Math.floor((Prot / Nutrients) * 100);
    const fat = Math.floor((Fat / Nutrients) * 100);

    setPercNutrient({ carb, prot, fat });
    // console.log(PercNutrient);
  };
  const totalNutrients = (Carb, Prot, Fat) => {
    setNutrients(Carb + Prot + Fat);
  };

  const addTotalCarb = (Food) => {
    const foodCarb = parseInt(Food?.food?.nutrients?.CHOCDF);
    if (sanitise(foodCarb)) {
      setCarb((prevCarb) => prevCarb + foodCarb);
    }
  };
  const addTotalProt = (Food) => {
    const foodProt = parseInt(Food?.food?.nutrients?.PROCNT);
    if (sanitise(foodProt)) {
      setProt((prevProt) => prevProt + foodProt);
    }
    // console.log(Prot);
  };

  const addTotalFat = (Food) => {
    const foodFat = parseInt(Food?.food?.nutrients?.FAT);
    if (sanitise(foodFat)) {
      setFat((prevFat) => prevFat + foodFat);
    }
  };
  const addTotalCalories = (Food) => {
    const foodCal = parseInt(Food?.food?.nutrients?.ENERC_KCAL);
    if (sanitise(foodCal)) {
      setCalories((prevCalories) => prevCalories + foodCal);
    }
  };

  const removeTotalCarb = (Food) => {
    const item = Food[0];
    const foodCarb = parseInt(item?.food?.nutrients?.CHOCDF);
    // console.log(foodCarb);
    setCarb(Carb - foodCarb);
  };

  const removeTotalProt = (Food) => {
    const item = Food[0];
    const foodProt = parseInt(item?.food?.nutrients?.PROCNT);
    setProt(Prot - foodProt);
  };

  const removeTotalFat = (Food) => {
    const item = Food[0];
    const foodFat = parseInt(item?.food?.nutrients?.FAT);
    setFat(Fat - foodFat);
  };

  const removeTotalCalories = (Food) => {
    const item = Food[0];
    const foodCalories = parseInt(item?.food?.nutrients?.ENERC_KCAL);
    setCalories(Calories - foodCalories);
  };

  const removeFromCart = (index) => {
    const foodRemoved = FoodObjArr.filter((item, i) => i === index);
    console.log(foodRemoved);
    const cartArr = FoodObjArr.filter((item, i) => i !== index);
    setFoodObjArr(cartArr);
    removeTotalProt(foodRemoved);
    removeTotalFat(foodRemoved);
    removeTotalCarb(foodRemoved);
    removeTotalCalories(foodRemoved);
    // removeNutrients(foodRemoved);
    totalNutrients(Carb, Prot, Fat);
  };

  const handleSubmit = (msg, e) => {
    e.preventDefault();
    console.log(e.target.name);
    const messageTyped = msg.current.value;
    setRequest(messageTyped);
    setFood("");
    // alert("handlesubmit works");
  };
  if (Status === "pending") {
    return "LOADING";
  }

  if (Status === "error") {
    return "ERROR";
  }

  return (
    <>
      <div className="ketogenic">
        <p>
          Keto goal: less than 30g of Carb, Carb: 5%, Protein: 20%, Fat: 75%
        </p>
        <DataContext.Provider value={handleSubmit}>
          <Form />
        </DataContext.Provider>

        {/* <Form click={handleSubmit} /> */}
        <div>
          {/* <h2>Your food</h2> */}
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
        <DoughnutChart carb={Carb} prot={Prot} fat={Fat} />
        {/* {FoodObjArr.map((item, index) => {
          return <CalFat carb={Carb} cal={Calories} />;
        })} */}
        <CalFat carb={Carb} cal={Calories} percNutrient={PercNutrient} />
        <Link to="/diet/test">{/* <span>Test</span> */}</Link>
      </div>
    </>
  );
}

export default Diet;
