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
import clsx from "clsx";
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


const HealthyChart = ({ classNames, options, data }: any) => {
  return (
    <Line
      options={options}
      data={data}
      className={clsx("!w-full !h-full p-16", classNames)}
    />
  );
};

export default HealthyChart;
