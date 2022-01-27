import React from "react";
import "./DoughnutChart.css";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
// import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Chart.register(ChartDataLabels);
const DoughnutChart = (props) => {
  const carb = props.carb;
  const prot = props.prot;
  const fat = props.fat;
  const data = {
    labels: ["Carb", "Protein", "Fat"],
    datasets: [
      {
        data: [carb, prot, fat],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
        borderWidth: 2,
      },
    ],
  };
  return (
    <div className="dough">
      <div className="nut" style={{ width: "400px", margin: "0 auto" }}>
        <h3>Doughnut Chart</h3>
        <Doughnut data={data} />
      </div>
    </div>
  );
};

export default DoughnutChart;
