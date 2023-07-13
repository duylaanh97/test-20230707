import className, { clsx } from "clsx";
import Header from "./Header";
import Footer from "./Footer";
import ButtonScrollTop from "./ButtonScrollTop";

interface IMainLayoutProps {
  classNames?: string;
  children: React.ReactNode;
}

const MainLayout = ({ classNames, children }: IMainLayoutProps) => {
  return (
    <div className={className(classNames)}>
      <Header />
      <main
        className={clsx(
          `mt-11 md:mt-[64px] relative min-h-[calc(100vh-80px)] pb-20`,
          classNames
        )}
      >
        {children}
      </main>
      <ButtonScrollTop />
      <Footer />
    </div>
  );
};

export default MainLayout;
