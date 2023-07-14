import { GetServerSidePropsContext } from "next";

export async function getProfileSSRProps(context: GetServerSidePropsContext) {
  const response = {};
  const listAction = [
    {
      image: "/images/body-morning.svg",
      title: "BODY RECORD",
      description: "自分のカラダの記録",
    },
    {
      image: "/images/body-morning.svg",
      title: "MY EXERCISE",
      description: "自分の運動の記録",
    },
    {
      image: "/images/body-morning.svg",
      title: "MY DIARY",
      description: "自分の日記",
    },
  ];

  const listDaily = [
    {
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます。",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます。",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます。",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます。",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます。",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます。",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます。",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
    {
      date: "2021.05.21",
      time: "23:25",
      title: "私の日記の記録が一部表示されます。",
      description:
        "テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト",
    },
  ];

  const listExercies = [
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
    {
      time: 10,
      kcal: 26,
      title: "家事全般（立位・軽い）",
    },
  ];
  return {
    props: {
      response,
      listAction,
      listDaily,
      listExercies,
    },
  };
}
