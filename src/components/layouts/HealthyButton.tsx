import { IHealthyProps } from "@/constants/base-type";
import { clsx } from "clsx";

const HealthyButton = ({ classNames, onClick, title }: IHealthyProps) => {
  return (
    <div
      onClick={onClick}
      className={clsx(
        `rounded-md bg-gradient-to-r from-[rgba(255,204,33,1)] to-[rgba(255,150,60,1)] p-2 px-16 cursor-pointer hover:opacity-[0.7]`,
        classNames
      )}
    >
      <div className="text-[rgba(255,255,255,1)]">{title}</div>
    </div>
  );
};

export default HealthyButton;
