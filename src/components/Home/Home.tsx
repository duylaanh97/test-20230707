import Image from "next/image";
import ButtonScrollTop from "../layouts/ButtonScrollTop";
import CardList from "../layouts/Card/CardList";
import CardProfile from "../layouts/Card/CardProfile";
import CardRecord from "../layouts/Card/CardRecord";
import HealthyButton from "../layouts/HealthyButton";
import HealthyHexagon from "../layouts/HealthyHexagon";
import MainLayout from "../layouts/MainLayout";
import HealthyChart from "../layouts/HealthyChart";
import { useContext, useEffect } from "react";
import { DeviceContext } from "@/context/device.context";
import clsx from "clsx";

interface IListRecordProps {
  image: "";
  time: "";
  category: "";
}

interface IHomeProps {
  listRecord?: Array<IListRecordProps>;
}

const mealSchedule = [
  {
    icon: "/icons/icon_knife.svg",
    title: "Morning",
    slug: "/",
  },
  {
    icon: "/icons/icon_knife.svg",
    title: "Lunch",
    slug: "/",
  },
  {
    icon: "/icons/icon_knife.svg",
    title: "Dinner",
    slug: "/",
  },
  {
    icon: "/icons/icon_cup.svg",
    title: "Snack",
    slug: "/",
  },
];

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

export default function Home(props: IHomeProps) {
  const { listRecord } = props;
  const { isMobile } = useContext(DeviceContext);

  useEffect(() => {
    var circles: any = document.querySelectorAll(".circleProcess");

    // @ts-ignore
    build(circles);

    function setDefault() {
      // @ts-ignore
      circles.forEach(function (item) {
        var circle_1 = item.children[1];
        var circle_2 = item.children[0];
        circle_1.children[0].style.transitionDuration = "0s";
        circle_2.children[0].style.transitionDuration = "0s";
        circle_1.children[0].style.transitionDelay = "0s";
        circle_2.children[0].style.transitionDelay = "0s";
        circle_1.children[0].style.transform = "rotateZ(-180deg)";
        circle_2.children[0].style.transform = "rotateZ(-180deg)";
        var percentBox = item.children[2].children[0].children[1];
        percentBox.innerHTML = "0%";
      });
    }
    function build() {
      // @ts-ignore
      setDefault(circles);
      setTimeout(function () {
        // @ts-ignore
        circles.forEach(function (item) {
          var percent = item.dataset.percent;
          var circle_1 = item.children[1];
          var circle_2 = item.children[0];
          circle_1.children[0].removeAttribute("style");
          circle_2.children[0].removeAttribute("style");
          var percentBox = item.children[2].children[0].children[1];
          percentBox.innerHTML = percent + "%";
          if (percent > 50) {
            if (percent == 100) {
              circle_1.children[0].style.transform = "rotateZ(0deg)";
              circle_2.children[0].style.transform = "rotateZ(0deg)";
            } else {
              circle_1.children[0].style.transform = "rotateZ(0deg)";
              var percentMore = percent - 50;
              var deg = -180 + 360 * (percentMore / 100);
              circle_2.children[0].style.transform = "rotateZ(" + deg + "deg)";
            }
          } else {
            var deg = -180 + 360 * (percent / 100);
            circle_1.children[0].style.transform = "rotateZ(" + deg + "deg)";
          }
        });
      }, 300);
    }
  }, []);

  return (
    <MainLayout>
      <div className="items-center justify-between">
        <div className="grid grid-cols-5 items-center">
          <div
            className={clsx("relative h-full col-span-2", {
              "!col-span-12": isMobile,
            })}
          >
            <Image
              src={"/images/main_photo.svg"}
              alt="home-image-process"
              className="w-full h-full object-cover"
              width={540}
              height={312}
            />
          </div>
          <div
            className={clsx("w-full col-span-3 h-full bg-[rgba(46,46,46,1)]", {
              "!col-span-12": isMobile,
            })}
          >
            <HealthyChart
              options={options}
              data={data}
              classNames={isMobile && "!p-2"}
            />
          </div>
        </div>

        <div
          className={clsx(
            "grid grid-cols-4 justify-center gap-28 py-2 max-w-[80rem] mx-auto",
            {
              "!px-2 !py-0 !grid-cols-1 !gap-0": isMobile,
            }
          )}
        >
          {mealSchedule.map((item, index) => {
            return (
              <HealthyHexagon
                onClick={() => console.log(item.slug)}
                key={index}
                icon={item.icon}
                title={item.title}
              />
            );
          })}
        </div>

        <div
          className={clsx("grid grid-cols-4 gap-3 max-w-[80rem] mx-auto", {
            "!px-2 !grid-cols-3": isMobile,
          })}
        >
          {listRecord?.map((item, index) => (
            <CardRecord
              key={index}
              description={`${item.time}.${item.category}`}
              image={item.image}
            />
          ))}
        </div>

        <HealthyButton
          title="記録をもっと見る"
          classNames="max-w-[10rem] mx-auto text-center py-4 mt-10"
        />
      </div>
    </MainLayout>
  );
}
