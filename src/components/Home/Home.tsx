import CardList from "../layouts/Card/CardList";
import CardProfile from "../layouts/Card/CardProfile";
import CardRecord from "../layouts/Card/CardRecord";
import MainLayout from "../layouts/MainLayout";

interface IHomeProps {
  app?: string;
}

export default function Home(props: IHomeProps) {
  console.log("props :", props.app);
  return (
    <MainLayout>
      <main className="items-center justify-between">
        <CardList
          description="2021.05.17   23:25"
          image="/images/record-1.png"
          title="魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメ魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ"
          tags={["魚料理", "和食", "DHA"]}
        />
        {/* <CardRecord description="05.21.Morning" image="/images/record-1.png" />
        <CardProfile /> */}
      </main>
    </MainLayout>
  );
}
