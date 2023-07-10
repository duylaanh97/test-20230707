import { GetServerSidePropsContext } from "next";

export async function getHomeSSRProps(context: GetServerSidePropsContext) {
  console.log("context :", context);
  const app = "abc";
  return {
    props: {
      app,
    },
  };
}
