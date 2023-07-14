import { GetServerSidePropsContext } from "next";

export async function getHomeSSRProps(context: GetServerSidePropsContext) {
  const response = {
    totalResults: 12,
    totalPages: 2,
    page: 1,
    limit: 8,
    results: [
      {
        image: "/images/meal-1.svg",
        time: "5.21",
        category: "Morning",
      },
      {
        image: "/images/meal-2.svg",
        time: "5.21",
        category: "Morning",
      },
      {
        image: "/images/meal-3.svg",
        time: "5.21",
        category: "Morning",
      },
      {
        image: "/images/meal-4.svg",
        time: "5.21",
        category: "Morning",
      },
      {
        image: "/images/meal-5.svg",
        time: "5.21",
        category: "Morning",
      },
      {
        image: "/images/meal-6.svg",
        time: "5.21",
        category: "Morning",
      },
      {
        image: "/images/meal-1.svg",
        time: "5.21",
        category: "Morning",
      },
      {
        image: "/images/meal-3.svg",
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
