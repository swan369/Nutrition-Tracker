import React from "react";
import { Link, Outlet } from "react-router-dom";
import Drop from "./Drop.jsx";
import Busy from "./Busy.jsx";
import { useEffect, useState, API } from "react";

const Exercise = () => {
  const [muscleCategory, setMuscleCategory] = useState([]);
  const [busyMuscles, setBusyMuscles] = useState([]);
  const [days, setDays] = useState([]);
  const [busyDays, setBusyDays] = useState([]);

  const muscleCategoryURL = "https://wger.de/api/v2/exercisecategory";
  const getMusclesURL = () => {
    fetch(muscleCategoryURL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let n = data?.results;
        setMuscleCategory(n);
      });
  };

  const daysURL = "https://wger.de/api/v2/daysofweek";
  const getDaysURL = () => {
    fetch(daysURL)
      .then((response) => response.json())
      .then((data) => {
        // console.log(data);
        let n = data?.results;
        setDays(n);
      });
  };

  const handleBusy = (e) => {
    e.preventDefault();
    // console.log("handleBusy working");
    // console.log(muscleCategory);

    const filteredMuscles = muscleCategory.filter((item) => {
      return (
        item.name.toLowerCase() === "back" ||
        item.name.toLowerCase() === "chest" ||
        item.name.toLowerCase() === "legs"
      );
    });
    const filteredDays = days.filter((item) => {
      return (
        item.day_of_week.toLowerCase() === "monday" ||
        item.day_of_week.toLowerCase() === "friday"
      );
    });
    console.log(days);
    // console.log(filteredMuscles);
    // console.log(filteredMuscles);
    setBusyMuscles(filteredMuscles);
    setMuscleCategory([]);
    // console.log(busyMuscles);
    setBusyDays(filteredDays);
    setDays([]);

    console.log(filteredDays);
    console.log(busyDays);
  };

  useEffect(() => {
    getMusclesURL();
    getDaysURL();
  }, [handleBusy]);

  // useEffect(() => {
  //   API.subscribe();
  //   return function cleanup() {
  //     API.unsubscribe();
  //   };
  // });

  return (
    <>
      <div>
        <h1>Exercise</h1>
        <p>How many days a week can you devote to change your life forever</p>

        <Drop handleBusy={handleBusy} />
        {busyMuscles.map((item, index) => {
          return <Busy {...item} message="Targetted Muscles: " key={index} />;
        })}

        {busyDays.map((item, index) => {
          return <Busy day={item.day_of_week} key={index} />;
        })}

        {/* <Outlet /> */}
      </div>
    </>
  );
};

export default Exercise;
