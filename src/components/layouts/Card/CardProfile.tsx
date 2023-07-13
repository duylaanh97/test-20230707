import Image from "next/image";

const CardProfile = () => {
  return (
    <div className="relative bg-[rgba(0,0,0,1)] border-solid border-[24px] border-[rgba(255,204,33,1)]">
      <Image
        src={"/images/body-morning.svg"}
        alt=""
        width={240}
        height={240}
        className="w-full h-full"
      />
      <div className="absolute text-center top-[40%] justify-center w-full">
        <div className="text-[rgba(255,204,33,1)] text-[25px] leading-[30px] font-normal">
          BODY RECORD
        </div>
        <div className="text-[rgba(255,255,255,1)] text-fs-14 font-light bg-[rgba(255,150,60,1)] w-[80%] mx-auto mt-1">
          自分のカラダの記録
        </div>
      </div>
    </div>
  );
};

export default CardProfile;
