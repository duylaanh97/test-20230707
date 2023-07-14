import List from "@/components/List/List";
import Profile from "@/components/Profile/Profile";
import { getListSSRProps } from "@/fetch-data/list-props";
import { GetServerSidePropsContext } from "next";

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await getListSSRProps(context);
}

export default List;
