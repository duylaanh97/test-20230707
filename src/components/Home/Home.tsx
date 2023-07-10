import Image from "next/image";
import MainLayout from "../layouts/MainLayout";

interface IHomeProps {
  app?: string;
}

export default function Home(props: IHomeProps) {
  console.log("props :", props.app);
  return (
    <MainLayout>
      <main className="flex items-center justify-between">
        <div>hello</div>
      </main>
    </MainLayout>
  );
}
