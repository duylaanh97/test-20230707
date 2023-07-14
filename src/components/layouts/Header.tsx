import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useMemo, useState } from "react";
import className, { clsx } from "clsx";
import Image from "next/image";
import { DeviceContext } from "@/context/device.context";

const tabMenu = [
  {
    name: "自分の記録",
    slug: "/my-profile",
    logo: "/icons/listing.svg",
  },
  {
    name: "チャレンジ",
    slug: "",
    logo: "/icons/challenge.svg",
  },
  {
    name: "お知らせ",
    slug: "",
    logo: "/icons/info.svg",
  },
  {
    logo: "/icons/menu.svg",
    isHamberger: true,
  },
];

const dropDownMenu = [
  {
    name: "自分の記録",
    slug: "/my-profile",
  },
  {
    name: "体重グラフ",
    slug: "",
  },
  {
    name: "目標",
    slug: "",
  },
  {
    name: "選択中のコース",
    slug: "",
  },
  {
    name: "コラム一覧",
    slug: "/my-list",
  },
  {
    name: "設定",
    slug: "",
  },
];

const Header = () => {
  const [visible, setVisible] = useState(false);
  const { isMobile } = useContext(DeviceContext);

  const router = useRouter();
  const currentPath = useMemo(() => {
    return router.pathname;
  }, []);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full z-10 bg-[#414141] shadow-[rgba(0,0,0,0.16)"
    >
      <div
        className={clsx(
          "flex justify-between items-center py-3 h-[44px] md:h-[40px] lg:px-40 md:px-20",
          { "px-10": isMobile }
        )}
      >
        <Link href={"/"} title="Home">
          <Image src="/images/Logo.png" alt="Logo" width={109} height={40} />
        </Link>
        <div className={clsx("flex gap-10")}>
          {tabMenu.map((item: any, index: number) => {
            return (
              <>
                <div
                  key={index}
                  className={className(
                    "text-base text-[rgba(255,255,255,1)] font-light cursor-pointer hover:text-[rgba(255,150,60,1)] y-2",
                    { hidden: isMobile },
                    currentPath.includes(item.slug) &&
                      "text-[rgba(255,150,60,1)]"
                  )}
                  onClick={() => {
                    if (item.isHamberger) {
                      setVisible(!visible);
                    } else {
                      router.push(item.slug ?? "/");
                    }
                  }}
                >
                  <div className="flex items-center">
                    <Image
                      src={item.logo}
                      width={32}
                      height={32}
                      alt="menu"
                      className="text-[rgba(255,150,60,1)] cursor-pointer"
                    />
                    <span className="ml-2">{item.name}</span>
                  </div>
                </div>
                {isMobile && item.isHamberger && (
                  <Image
                    onClick={() => setVisible(!visible)}
                    src={item.logo}
                    width={32}
                    height={32}
                    alt="menu"
                    className="text-[rgba(255,150,60,1)] cursor-pointer"
                  />
                )}
              </>
            );
          })}
        </div>

        {visible && (
          <div
            className={clsx(
              "drop-down-recuitment z-20 absolute top-16 right-40 bg-[rgba(119,119,119,1)] w-72",
              { "right-8": isMobile }
            )}
          >
            {dropDownMenu.map((item: any, idx: number) => {
              return (
                <div
                  key={idx}
                  onClick={() => router.push(item.slug ?? "/")}
                  className={clsx(
                    "text-white cursor-pointer hover:opacity-[0.8] font-light text-lg p-4 border-b border-t-0 border-x-0 border-solid border-[rgba(255,255,255,0.15)]"
                  )}
                >
                  {item.name}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
