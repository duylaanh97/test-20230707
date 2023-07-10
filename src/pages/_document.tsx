import { Html, Head, Main, NextScript } from "next/document";

const cssFontString = `
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src:  url('/fonts/Inter/Inter-Regular.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 400;
  src:  url('/fonts/Inter/Inter-Italic.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  src:  url('/fonts/Inter/Inter-Thin.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 100;
  src:  url('/fonts/Inter/Inter-ThinItalic.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  src:  url('/fonts/Inter/Inter-ExtraLight.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 200;
  src:  url('/fonts/Inter/Inter-ExtraLightItalic.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  src:  url('/fonts/Inter/Inter-Light.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 300;
  src:  url('/fonts/Inter/Inter-LightItalic.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src:  url('/fonts/Inter/Inter-Medium.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 500;
  src:  url('/fonts/Inter/Inter-MediumItalic.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src:  url('/fonts/Inter/Inter-SemiBold.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 600;
  src:  url('/fonts/Inter/Inter-SemiBoldItalic.woff') format('woff');
  font-display: swap;
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src:  url('/fonts/Inter/Inter-Bold.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 700;
  src:  url('/fonts/Inter/Inter-BoldItalic.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  src:  url('/fonts/Inter/Inter-ExtraBold.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 800;
  src:  url('/fonts/Inter/Inter-ExtraBoldItalic.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  src:  url('/fonts/Inter/Inter-Black.woff') format('woff');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: italic;
  font-weight: 900;
  src:  url('/fonts/Inter/Inter-BlackItalic.woff') format('woff');
  font-display: swap;
}
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="relative">
        <Main />
        <NextScript />
      </body>

      <style dangerouslySetInnerHTML={{ __html: cssFontString }}></style>
    </Html>
  );
}
