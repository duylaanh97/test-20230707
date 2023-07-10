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
      <div className="md:flex">
        <main
          className={clsx(
            `mt-11 md:mt-[80px] md:mx-auto relative min-h-[calc(100vh-80px)]`,
            classNames
          )}
        >
          {children}
        </main>
        <ButtonScrollTop />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
