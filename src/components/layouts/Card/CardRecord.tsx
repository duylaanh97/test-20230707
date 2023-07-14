import Image from "next/image";

interface ICardReportProps {
  description: string;
  image: string;
}

const CardRecord = ({ description, image }: ICardReportProps) => {
  return (
    <div className="relative w-full bg-red-600">
      <Image
        alt=""
        className="w-full h-full object-cover"
        src={image}
        width={234}
        height={234}
      />
      <div className="absolute bottom-0 left-0 bg-[rgba(255,204,33,1)] px-2 py-2 w-1/2">
        <div className="text-[rgba(255,255,255,1)] text-[15px] leading-[18px] font-normal">
          {description}
        </div>
      </div>
    </div>
  );
};

export default CardRecord;
