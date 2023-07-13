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
      <main className="items-center justify-between">
        <div className="grid grid-cols-5 items-center">
          <Image
            src={"/images/main_photo.svg"}
            alt="home-image-process"
            className="w-full h-full col-span-2"
            width={540}
            height={312}
          />
          <div className="w-full h-full bg-[rgba(46,46,46,1)] col-span-3">
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

        {/* <CardList
          description="2021.05.17   23:25"
          image="/images/record-1.png"
          title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ"
          tags={[
            "魚料理",
            "和食",
            "DHA",
            "魚料理",
            "和食",
            "DHA",
            "魚料理",
            "和食",
            "DHA",
            "魚料理",
            "和食",
            "DHA",
            "魚料理",
            "和食",
            "DHA",
            "魚料理",
            "和食",
            "DHA",
            "魚料理",
            "和食",
            "DHA",
            "魚料理",
            "和食",
            "DHA",
            "魚料理",
            "和食",
            "DHA",
            "魚料理",
            "和食",
            "DHA",
          ]}
        />
        <CardRecord description="05.21.Morning" image="/images/record-1.png" />
        <CardProfile /> */}
      </main>
    </MainLayout>
  );
}
