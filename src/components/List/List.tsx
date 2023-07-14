import Image from "next/image";
import HealthyButton from "../layouts/HealthyButton";
import MainLayout from "../layouts/MainLayout";
import CardRecomend from "../layouts/Card/CardRecomend";
import CardList from "../layouts/Card/CardList";
import clsx from "clsx";
import { useContext } from "react";
import { DeviceContext } from "@/context/device.context";

const listRecomend = [
  {
    title: "オススメ",
    recomend: "COLUMN",
  },
  {
    title: "ダイエット",
    recomend: "DIET",
  },
  {
    title: "美容",
    recomend: "BEAUTY",
  },
  {
    title: "健康",
    recomend: "HEALTH",
  },
];

interface IListNewsProps {
  description: string;
  image: string;
  title: string;
  tags: Array<string>;
}

interface IListProps {
  listNews: Array<IListNewsProps>;
}

const List = ({ listNews }: IListProps) => {
  const { isMobile } = useContext(DeviceContext);
  return (
    <MainLayout>
      <div className="">
        <div
          className={clsx(
            "grid grid-cols-4 gap-10 py-10 max-w-[80rem] mx-auto",
            {
              "!grid-cols-2 gap-4": isMobile,
            }
          )}
        >
          {listRecomend.map((item, index) => {
            return (
              <CardRecomend
                key={index}
                recomend={item.recomend}
                title={item.title}
              />
            );
          })}
        </div>

        <div
          className={clsx(
            "grid grid-cols-4 gap-10 py-10 max-w-[80rem] mx-auto",
            {
              "!grid-cols-2 gap-4": isMobile,
            }
          )}
        >
          {listNews.map((item, idx) => {
            return (
              <CardList
                key={idx}
                description={item.description}
                image={item.image}
                title={item.title}
                tags={item.tags}
              />
            );
          })}
        </div>

        <HealthyButton
          title="コラムをもっと見る"
          classNames="max-w-[10rem] mx-auto text-center py-4 mt-10"
        />
      </div>
    </MainLayout>
  );
};

export default List;
