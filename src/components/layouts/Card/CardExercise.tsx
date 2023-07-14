interface ICardExerciseProps {
  kcal: string;
  title: string;
  time: string;
}

const CardExercise = ({ time, title, kcal }: ICardExerciseProps) => {
  return (
    <div className="flex justify-between w-full py-2 border-b border-t-0 border-x-0 border-solid border-[rgba(119,119,119,1)]">
      <div className="flex w-full">
        <li className="text-white" />
        <div className="text-left">
          <div className="font-light text-base text-white">{title}</div>
          <div className="font-normal text-base text-[#FFCC21]">
            {kcal} kcal
          </div>
        </div>
      </div>
      <div className="font-normal text-fs-18 text-[#FFCC21] pr-4">
        {time} min
      </div>
    </div>
  );
};

export default CardExercise;
