import { PAGE_ROUTE } from "@/constants/route";
import { DeviceContext } from "@/context/device.context";
import Link from "next/link";
import { useContext } from "react";
import styles from "@/styles/modules/footer.module.scss";

const dataFooter = [
  {
    name: "Về Meey Share",
    url: PAGE_ROUTE.ABOUT_US,
  },
  {
    name: "Trợ giúp",
    url: PAGE_ROUTE.HELP,
  },
  {
    name: "Điều khoản sử dụng",
    url: PAGE_ROUTE.TERM_OF_USE,
  },
  {
    name: "Chính sách bảo mật",
    url: PAGE_ROUTE.PRIVATE_POLICY,
  },
];

const FooterDesktop = () => {
  return (
    <div className="py-6 px-4 border-t border-solid border-grey-200 border-b-0 border-x-0 text-center">
      <div className="mb-3 text-fs-12 text-grey-500" key="1">
        Giấy phép MXH số 95/GP - BTTTT do Bộ Thông tin truyền thông cấp ngày
        24/03/2023
      </div>
      <div className="mb-3 text-fs-12 text-grey-500" key="2">
        Tổ chức quản lý trang mạng xã hội: Công ty Cổ phần Tập đoàn Meey Land -
        Địa chỉ liên lạc: Tầng 5 Tòa nhà 97 - 99 Láng Hạ, phường Láng Hạ, Quận
        Đống Đa, TP. Hà Nội
      </div>
      <div className="mb-3 text-fs-12 text-grey-500" key="3">
        Điện thoại: <a href="tel:02462538566">02462538566</a> - Email:{" "}
        <a href="mailto:contact@meeyland.com">contact@meeyland.com</a> - Chịu
        trách nhiệm nội dung: Ông Hoàng Mai Chung
      </div>

      <div className="flex justify-center">
        {dataFooter.map((item, index) => (
          <div className={styles.footerLinkItem} key={item.url}>
            <Link
              key={index}
              href={item.url}
              className="text-fs-12 text-primary-500 px-4"
              title={item.name}
            >
              {item.name}
            </Link>
            <div className={styles.footerLinkItemDivide}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const { isMobile } = useContext(DeviceContext);
  return <>{isMobile ? "<FooterMobile />" : <FooterDesktop />}</>;
};

export default Footer;
