import { GetServerSidePropsContext } from "next";

export async function getHomeSSRProps(context: GetServerSidePropsContext) {
  const response = {
    totalResults: 12,
    totalPages: 2,
    page: 1,
    limit: 8,
    results: [
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
    ],
  };
  return {
    props: {
      listRecord: response.results,
    },
  };
}
