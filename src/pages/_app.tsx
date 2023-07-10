import { DeviceContextProvider } from "@/context/device.context";
import "@/styles/globals.scss";
import App, { AppProps, AppContext } from "next/app";

type TProps = AppProps & {
  isMobile: boolean;
};

const CustomApp = ({ Component, pageProps, isMobile }: TProps) => {
  return (
    <>
      <DeviceContextProvider isMobile={isMobile}>
        <Component {...pageProps} />
      </DeviceContextProvider>
    </>
  );
};

CustomApp.getInitialProps = async (context: AppContext) => {
  const ctx = await App.getInitialProps(context);
  let userAgent: any;
  if (context.ctx.req) {
    // if you are on the server and you get a 'req' property from your context
    userAgent = context.ctx.req.headers["user-agent"]; // get the user-agent from the headers
  } else {
    userAgent = navigator.userAgent; // if you are on the client you can access the navigator from the window object
  }

  const isMobile = Boolean(
    userAgent.match(
      /Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i
    )
  );
  return { ...ctx, isMobile };
};

export default CustomApp;
