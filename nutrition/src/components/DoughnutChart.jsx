import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = (props) => {
  const carb = props.carb;
  const data = {
    labels: ["Carb", "Protein", "Fat"],
    datasets: [{ data: [carb, 19, 3] }],
  };
  return (
    <div>
      <div style={{ width: "400px", margin: "0 auto" }}>
        <h3>Doughnut Chart</h3>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
