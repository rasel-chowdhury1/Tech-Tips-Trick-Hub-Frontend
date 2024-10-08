"use client";
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ChartOptions,
  LineControllerChartOptions,
} from "chart.js";
import { Line } from "react-chartjs-2";

// Registering necessary components from Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

type TProps = {
  labels: string[];
  datasets: number[];
};

const CustomLineChart = ({ labels, datasets }: TProps) => {
  // Data for the chart
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Project Statistics", // Data series label
        data: datasets,
        fill: true,
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgb(75, 192, 192)",
        borderWidth: 2,
        tension: 0.4, // Smoothness of the line
      },
    ],
  };

  // Chart options
  const options: ChartOptions<'line'> = { // Ensure the type aligns with the Line chart
    responsive: true, // Ensures the chart is responsive
    maintainAspectRatio: false, // Allows for responsive height
    scales: {
      y: {
        title: {
          display: true,
          text: "Number of Statistics",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        display: true,
        beginAtZero: true,
      },
      x: {
        title: {
          display: true,
          text: "Statistics Type",
          font: {
            size: 14,
            weight: "bold",
          },
        },
        display: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "top", // You can change this to 'bottom' if preferred
        labels: {
          font: {
            size: 12,
            weight: "bold",
          },
        },
      },
      title: {
        display: true,
        text: "Tech Tips Hub Project Statistics", // Updated title
        align: "center", // Center the title
        font: {
          size: 20, // Font size of the title
          weight: "bold", // Font weight of the title
        },
      },
    },
  };

  return (
    <div className="w-full mt-5 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[400px]"> 
      <Line data={data} options={options} />
    </div>
  );
};

export default CustomLineChart;
