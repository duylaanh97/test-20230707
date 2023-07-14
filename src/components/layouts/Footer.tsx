import { DeviceContext } from "@/context/device.context";
import Link from "next/link";
import { useContext } from "react";
import styles from "@/styles/modules/footer.module.scss";
import clsx from "clsx";

const dataFooter = [
  {
    name: "会員登録",
    url: "",
  },
  {
    name: "運営会社",
    url: "",
  },
  {
    name: "利用規約",
    url: "",
  },
  {
    name: "個人情報の取扱について",
    url: "",
  },
  {
    name: "特定商取引法に基づく表記",
    url: "",
  },
  {
    name: "お問い合わせ",
    url: "",
  },
];

const Footer = () => {
  const { isMobile } = useContext(DeviceContext);
  return (
    <footer id="footer" className="w-full z-10 bg-[#414141]">
      <div
        className={clsx("flex items-center py-3 h-[104px] md:h-[104px] px-40", {
          "!block h-full": isMobile,
        })}
      >
        {dataFooter.map((item, index) => (
          <div
            className={clsx(styles.footerLinkItem, {
              "justify-center p-4": isMobile,
            })}
            key={item.url}
          >
            <Link
              key={index}
              href={item.url}
              className="text-[11px] hover:text-[rgba(255,150,60,1)] leading-4 font-light text-[rgba(255,255,255,1)] px-8 no-underline"
              title={item.name}
            >
              {item.name}
            </Link>
            <div className={styles.footerLinkItemDivide}></div>
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
