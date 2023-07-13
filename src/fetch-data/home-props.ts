import { GetServerSidePropsContext } from "next";

export async function getHomeSSRProps(context: GetServerSidePropsContext) {
  const listRecord = [
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
    {
      image: "/images/record-1.png",
      time: "5.21",
      category: "Morning",
    },
  ];
  return {
    props: {
      listRecord,
    },
  };
}
