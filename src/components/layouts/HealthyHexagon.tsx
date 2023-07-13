import Image from "next/image";
import { clsx } from "clsx";
import { IHealthyProps } from "@/constants/base-type";

interface IHealthyHexagon extends IHealthyProps {
  icon: string;
}

const HealthyHexagon = ({
  classNames,
  onClick,
  title,
  icon,
}: IHealthyHexagon) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        "relative flex justify-center items-center hover:opacity-[0.7] cursor-pointer",
        classNames
      )}
    >
      <div className="hexagon" />
      <div className="absolute">
        <Image
          alt="category"
          src={icon}
          width={56}
          height={56}
          className="w-full h-full"
        />
        <div className="font-normal font-default-inter text-fs-20 text-[rgba(255,255,255,1)]">
          {title}
        </div>
      </div>
    </div>
  );
};

export default HealthyHexagon;
