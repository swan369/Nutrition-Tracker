import React from "react";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const DoughnutChart = () => {
  const data = {
    labels: ["Carb", "Protein", "Fat", "Calories"],
    datasets: [{ data: [12, 19, 3, 30] }],
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
