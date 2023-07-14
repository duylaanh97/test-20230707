import Image from "next/image";

interface ICardProfileProps {
  image: string;
  title: string;
  description: string;
}

const CardProfile = ({ image, title, description }: ICardProfileProps) => {
  return (
    <div className="relative bg-[rgba(0,0,0,1)] border-solid border-[24px] border-[rgba(255,204,33,1)]">
      <Image
        src={image}
        alt=""
        width={240}
        height={240}
        className="w-full h-full"
      />
      <div className="absolute text-center top-[40%] justify-center w-full">
        <div className="text-[rgba(255,204,33,1)] text-[25px] leading-[30px] font-normal">
          {title}
        </div>
        <div className="text-[rgba(255,255,255,1)] text-fs-14 font-light bg-[rgba(255,150,60,1)] max-w-[12rem] mx-auto mt-1 py-1">
          {description}
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
