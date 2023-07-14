import Image from "next/image";
import HealthyButton from "../layouts/HealthyButton";
import MainLayout from "../layouts/MainLayout";
import CardRecomend from "../layouts/Card/CardRecomend";
import CardList from "../layouts/Card/CardList";

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
  return (
    <MainLayout>
      <div className="items-center justify-between px-96">
        <div className="flex justify-center gap-10 w-full">
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

        <div className="grid grid-cols-4 gap-10">
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
          classNames="w-[296px] mx-auto text-center py-4 mt-10"
        />
      </div>
    </MainLayout>
  );
};

export default List;
