import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import className from "clsx";
import Image from "next/image";

const tabMenu = [
  {
    name: "自分の記録",
    slug: "/1",
    logo: "/icons/listing.svg",
  },
  {
    name: "チャレンジ",
    slug: "/2",
    logo: "/icons/challenge.svg",
  },
  {
    name: "お知らせ",
    slug: "/2",
    logo: "/icons/info.svg",
  },
  {
    logo: "/icons/menu.svg",
    isHamberger: true,
  },
];

const Header = () => {
  const [visible, setVisible] = useState(false);

  const router = useRouter();
  const currentPath = useMemo(() => {
    return router.pathname;
  }, [router]);

  return (
    <header
      id="header"
      className="fixed top-0 left-0 w-full z-10 bg-[#414141] shadow-[rgba(0,0,0,0.16)"
    >
      <div className="flex justify-between items-center py-3 h-[44px] md:h-[40px] px-40">
        <Link href={"/"} title="Home">
          <Image src="/images/Logo.png" alt="Logo" width={109} height={40} />
        </Link>
        <div className="lg:flex gap-10 md:hidden xs:hidden sm:hidden">
          {tabMenu.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={className(
                  "text-base text-[rgba(255,255,255,1)] font-light cursor-pointer hover:text-[rgba(255,150,60,1)] y-2",
                  currentPath.includes(item.slug) && "text-[rgba(255,150,60,1)]"
                )}
                onClick={() => router.push(item.slug ?? "/")}
              >
                <div className="flex items-center">
                  <Image
                    src={item.logo}
                    width={32}
                    height={32}
                    alt="menu"
                    className="text-[rgba(255,150,60,1)]"
                  />
                  <span className="ml-2">{item.name}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
