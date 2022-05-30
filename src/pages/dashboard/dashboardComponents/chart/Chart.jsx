import React from "react";
import { Line } from "react-chartjs-2";

const Chart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Sales",
        data: [33, 53, 85, 41, 44, 65],
        fill: true,
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.5,
        borderWidth: 1,
      },
      {
        label: "Visitors",

        data: [56, 93, 12, 35, 18, 65],
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        tension: 0.5,
        borderWidth: 1,
      },
    ],
  };

  const legend = {
    display: true,
    position: "bottom",
    labels: {
      fontColor: "#323130",
      fontSize: 14,
    },
  };

  const options = {
    maintainAspectRatio: true,
    title: {
      display: true,
      text: "Chart Title",
    },
    scales: {
      yAxes: [
        {
          ticks: {
            suggestedMin: 0,
            suggestedMax: 100,
          },
        },
      ],
    },
  };

  return <Line data={data} legend={legend} options={options} />;
};

export default Chart;
