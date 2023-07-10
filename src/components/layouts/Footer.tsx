import { PAGE_ROUTE } from "@/constants/route";
import { DeviceContext } from "@/context/device.context";
import Link from "next/link";
import { useContext } from "react";
import styles from "@/styles/modules/footer.module.scss";

const dataFooter = [
  {
    name: "会員登録",
    url: PAGE_ROUTE.ABOUT_US,
  },
  {
    name: "運営会社",
    url: PAGE_ROUTE.HELP,
  },
  {
    name: "利用規約",
    url: PAGE_ROUTE.TERM_OF_USE,
  },
  {
    name: "個人情報の取扱について",
    url: PAGE_ROUTE.PRIVATE_POLICY,
  },
  {
    name: "特定商取引法に基づく表記",
    url: PAGE_ROUTE.PRIVATE_POLICY,
  },
  {
    name: "お問い合わせ",
    url: PAGE_ROUTE.PRIVATE_POLICY,
  },
];

const FooterDesktop = () => {
  return (
    <footer
      id="footer"
      className="fixed bottom-0 left-0 w-full z-10 bg-[#414141]"
    >
      <div className="flex jitems-center py-3 h-[104px] md:h-[104px] px-40">
        {dataFooter.map((item, index) => (
          <div className={styles.footerLinkItem} key={item.url}>
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

const Footer = () => {
  const { isMobile } = useContext(DeviceContext);
  return <>{isMobile ? "<FooterMobile />" : <FooterDesktop />}</>;
};

export default Footer;
