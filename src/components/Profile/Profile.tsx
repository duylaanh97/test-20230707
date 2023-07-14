import clsx from "clsx";
import CardDaily from "../layouts/Card/CardDaily";
import CardExercise from "../layouts/Card/CardExercise";
import CardProfile from "../layouts/Card/CardProfile";
import CardRecord from "../layouts/Card/CardRecord";
import HealthyButton from "../layouts/HealthyButton";
import HealthyChart from "../layouts/HealthyChart";
import MainLayout from "../layouts/MainLayout";
import { useContext, useState } from "react";
import { DeviceContext } from "@/context/device.context";

interface IListActionProps {
  image: string;
  title: string;
  description: string;
}

interface IListDailyProps extends IListActionProps {
  date: string;
  time: string;
}

interface IListExercieProps {
  time: string;
  kcal: string;
  title: string;
}

interface IProfileProps {
  listAction: Array<IListActionProps>;
  listDaily: Array<IListDailyProps>;
  listExercies: Array<IListExercieProps>;
}

const dateFilter = ["日", "週", "月", "年"];

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

const Profile = ({ listAction, listDaily, listExercies }: IProfileProps) => {
  const [newsType, setNewsType] = useState(0);
  const { isMobile } = useContext(DeviceContext);

  const handleClick = (idx: number) => {
    setNewsType(idx);
  };

  return (
    <MainLayout>
      <div className="text-center">
        <div
          className={clsx(
            "grid grid-cols-3 gap-10 py-10 max-w-[80rem] mx-auto",
            {
              "!grid-cols-1": isMobile,
            }
          )}
        >
          {listAction.map((item, idx) => {
            return (
              <CardProfile
                key={idx}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>

        <div className="py-10  max-w-[80rem] mx-auto">
          <div className="bg-[#414141] px-4 py-1">
            <div className="flex items-center">
              <div className="font-normal text-base text-white">
                BODY RECORD
              </div>
              <div className="font-normal text-[22px] text-white ml-2">
                2021.05.21
              </div>
            </div>
            <HealthyChart options={options} data={data} classNames="p-[1rem]" />
            <div className="flex items-center p-4 gap-3">
              {dateFilter.map((item, idx) => {
                return (
                  <div
                    onClick={() => handleClick(idx)}
                    className={clsx(
                      "text-center rounded-full px-6 py-1 bg-white cursor-pointer hover:opacity-[0.8] text-[#FFCC21]",
                      {
                        "!bg-[#FFCC21] text-white": idx == newsType,
                      }
                    )}
                    key={idx}
                  >
                    {item}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="py-10  max-w-[80rem] mx-auto">
          <div className="bg-[#414141] px-4 py-1">
            <div className="flex items-center">
              <div className="font-normal text-base text-white">
                MY EXERCISE
              </div>
              <div className="font-normal text-[22px] text-white ml-2">
                2021.05.21
              </div>
            </div>
            <div className="grid grid-cols-2 gap-x-10 mt-2 overflow-y-scroll max-h-[264px] pb-2">
              {listExercies.map((item, idx) => {
                return (
                  <CardExercise
                    key={idx}
                    time={item.time}
                    kcal={item.kcal}
                    title={item.title}
                  />
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 py-10  max-w-[80rem] mx-auto">
          {listDaily.map((item, idx) => {
            return (
              <CardDaily
                key={idx}
                date={item.date}
                time={item.time}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>

        <HealthyButton
          title="自分の日記をもっと見る"
          classNames="max-w-[10rem] mx-auto text-center py-4 mt-10"
        />
      </div>
    </MainLayout>
  );
};

export default Profile;
