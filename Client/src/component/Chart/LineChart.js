import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  PointElement,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "Color ",
      data: [12, 19, 3, 5, 2, 3],
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const LineChart = () => {
  return (
    <div>
      <Line data={data} />
    </div>
  );
};

export default LineChart;
