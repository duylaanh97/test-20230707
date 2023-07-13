import clsx from "clsx";
import Image from "next/image";
import { useEffect, useState } from "react";

const ButtonScrollTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
  }, []);

  return (
    <div
      className={clsx(
        "fixed rounded-full w-10 h-10 bottom-5 md:bottom-36 border border-solid border-gray-400 right-5 md:right-10 bg-white flex items-center justify-center cursor-pointer",
        { hidden: !visible, block: visible }
      )}
      onClick={scrollToTop}
    >
      <Image
        src={"/icons/arrow_up.svg"}
        className="text-gray-400 text-fs-20"
        alt="arrow_up"
        width={15}
        height={8}
      />
    </div>
  );
};

export default ButtonScrollTop;
