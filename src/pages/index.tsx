import Home from "@/components/Home";
import { getHomeSSRProps } from "@/fetch-data/home-props";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await getHomeSSRProps(context);
}

export default Home;
