interface ICardExerciseProps {
  kcal: string;
  title: string;
  time: string;
}

const CardExercise = ({ time, title, kcal }: ICardExerciseProps) => {
  return (
    <div className="flex justify-between w-full">
      {/* border-b border-[#777777] border-solid */}
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
