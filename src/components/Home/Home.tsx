import Image from "next/image";
import ButtonScrollTop from "../layouts/ButtonScrollTop";
import CardList from "../layouts/Card/CardList";
import CardProfile from "../layouts/Card/CardProfile";
import CardRecord from "../layouts/Card/CardRecord";
import HealthyButton from "../layouts/HealthyButton";
import HealthyHexagon from "../layouts/HealthyHexagon";
import MainLayout from "../layouts/MainLayout";
import HealthyChart from "../layouts/HealthyChart";

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

export default function Home(props: IHomeProps) {
  const { listRecord } = props;
  return (
    <MainLayout>
      <div className="items-center justify-between">
        <div className="grid grid-cols-2 items-center">
          <div className="relative">
            <Image
              src={"/images/main_photo.svg"}
              alt="home-image-process"
              className="w-full h-full"
              width={540}
              height={312}
            />
            <div className="absolute top-0 justify-center items-center flex text-white w-full h-full">
              {/* <svg
                className="w-32 h-32 transform translate-x-1 translate-y-1"
                x-cloak
                aria-hidden="true"
              >
                <circle
                  className="text-white shadow-[#FC7400]"
                  stroke-width="5"
                  stroke-linecap="round"
                  stroke-dasharray="circumference"
                  stroke-dashoffset="circumference - percent / 100 * circumference"
                  stroke="currentColor"
                  fill="transparent"
                  r="50"
                  cx="60"
                  cy="60"
                />
              </svg> */}
            </div>
          </div>
          <div className="w-full h-full bg-[rgba(46,46,46,1)]">
            <HealthyChart />
          </div>
        </div>

        <div className="flex items-center justify-center gap-28">
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

        <div className="grid grid-cols-4 px-80 gap-3">
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
          classNames="w-[296px] mx-auto text-center py-4 mt-10"
        />
      </div>
    </MainLayout>
  );
}
