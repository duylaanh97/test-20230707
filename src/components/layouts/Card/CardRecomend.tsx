import clsx from "clsx";

interface ICardRecomendProps {
  recomend: string;
  title: string;
  classNames?: string;
}

const CardRecomend = ({ recomend, title, classNames }: ICardRecomendProps) => {
  return (
    <div className={clsx("bg-[#2E2E2E] p-4 text-center", classNames)}>
      <div className="uppercase text-[#FFCC21] font-normal text-[22px]">
        RECOMMENDED
      </div>
      <div className="uppercase text-[#FFCC21] font-normal text-[22px]">
        {recomend}
      </div>
      <div className="border-b-[1px] border-solid border border-white my-4 w-14 mx-auto" />
      <div className="text-white font-light text-fs-18">{title}</div>
    </div>
  );
};

export default CardRecomend;
