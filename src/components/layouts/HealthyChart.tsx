import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
    },
  },
  scales: {
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      grid: {
        drawBorder: false,
        display: false,
      },
    },
    x: {
      grid: {
        color: "rgba(119, 119, 119, 1)",
      },
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

const data = {
  labels,
  datasets: [
    {
      labels: false,
      data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 6, 3],
      borderColor: "rgba(255, 204, 33, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      labels: false,
      data: [2, 6, 3, 8, 1, 9, 5, 2, 6, 1, 2, 6],
      borderColor: "rgba(143, 233, 208, 1)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};
const HealthyChart = () => {
  return <Line options={options} data={data} className="!w-full px-16" />;
};

export default HealthyChart;
