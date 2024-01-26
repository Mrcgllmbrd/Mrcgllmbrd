import React from "react";
import { Chart } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

import { UserDashboardCalendar } from "./UserDashboardCalendar";

export const PieChart = () => {
  return (
    <Doughnut 
      data={{
        labels: ["Carboidrati", "Proteine", "Grassi"],
        datasets: [
          {
            label: "gr",
            data: [500, 300, 200],
          },
        ],
      }}
    />
  );
};
