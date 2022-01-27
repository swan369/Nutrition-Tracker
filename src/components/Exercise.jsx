import React from "react";
import { Link, Navigate, Outlet, useNavigate } from "react-router-dom";
import Drop from "./Drop.jsx";
import Busy from "./Busy.jsx";
import { useEffect, useState, API } from "react";

const Exercise = () => {
  const [muscleCategory, setMuscleCategory] = useState([]);
  const [days, setDays] = useState([]);
  const [busyMuscles, setBusyMuscles] = useState([]);
  const [busyDays, setBusyDays] = useState([]);
  const [merged, setMerged] = useState(null);
  const navigate = useNavigate();

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

    // navigate("/busy");
  };

  useEffect(() => {
    setMerged([...busyDays, ...busyMuscles]);
  }, [busyDays]);

  useEffect(() => {
    getMusclesURL();
  }, [handleBusy]);

  useEffect(() => {
    getDaysURL();
  }, [busyMuscles]);

  const drop = (handleBusy) => {
    return <Drop handleBusy={handleBusy} />;
  };

  const busy = (merged) => {
    if (merged) {
      // console.log(merged);
      return merged.map((item, index) => {
        return <Busy {...item} key={index} />;
      });
    }
  };

  return (
    <>
      <div>
        <h1>Exercise</h1>
        <p>How many days a week can you devote to change your life forever</p>
        {drop(handleBusy)}
        {/* <Drop handleBusy={handleBusy} /> */}
        {busy(merged)}
        {/* <Outlet /> */}
      </div>
    </>
  );
};

export default Exercise;
