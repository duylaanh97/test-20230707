import Link from "next/link";
import { useRouter } from "next/router";
import { useMemo, useState } from "react";
import className from "clsx";

const tabMenu = [
  {
    name: "Về REDT",
    slug: "/ve-redt",
    logo: "https://s3.ap-southeast-1.amazonaws.com/users.meeyland/articles/aboutmeeygroupmenubar.1669964487946.png?w=24&h=24",
  },
  {
    name: "Sản phẩm",
    slug: "/san-pham",
    logo: "https://s3.ap-southeast-1.amazonaws.com/users.meeyland/articles/ecosystemmenubar.1669964473834.png?w=24&h=24",
  },
  {
    name: "Hợp tác kinh doanh",
    slug: "/hop-tac-kinh-doanh",
    logo: "https://s3.ap-southeast-1.amazonaws.com/users.meeyland/articles/shareholdermenubar.1669964460553.png?w=24&h=24",
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
      className="fixed top-0 left-0 w-full z-10 bg-white shadow-[0_2px_4px_rgba(0,0,0,0.1)]"
    >
      <div className="flex justify-between items-center px-4 py-3 w-full h-[44px] md:h-[56px]">
        <Link href={"/"} title="Home">
          LOGO
        </Link>
        <div className="lg:flex gap-[0.25rem] md:hidden xs:hidden sm:hidden">
          {tabMenu.map((item: any, index: number) => {
            return (
              <div
                key={index}
                className={className(
                  "text-base text-black-11 font-medium cursor-pointer hover:text-blue-08 hover:bg-background-blue-01 hover:rounded-3xl y-2",
                  currentPath.includes(item.slug) &&
                    "text-blue-08 bg-background-blue-01 rounded-3xl"
                )}
                onClick={() => router.push(item.slug ?? "/")}
              >
                {item.name}
              </div>
            );
          })}
        </div>
      </div>
    </header>
  );
};

export default Header;
