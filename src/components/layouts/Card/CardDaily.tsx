interface ICardDailyProps {
  date: string;
  time: string;
  title: string;
  description: string;
}

const CardDaily = ({ date, time, title, description }: ICardDailyProps) => {
  return (
    <div className="text-left bg-white border-2 border-solid border-[#707070] p-4">
      <div className="font-normal text-fs-18 text-[#414141]">{date}</div>
      <div className="font-normal text-fs-18 text-[#414141]">{time}</div>
      <div className="font-light text-fs-12 text-[#414141] line-clamp-2 break-all">
        {title}
      </div>
      <div className="font-light text-fs-12 text-[#414141] line-clamp-5 break-all pb-10">
        {description}
      </div>
    </div>
  );
};

export default CardDaily;
