import { Html, Head, Main, NextScript } from "next/document";

const cssFontString = `
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  src:  url('/fonts/Inter/Inter-Regular.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 100;
  src:  url('/fonts/Inter/Inter-Thin.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 200;
  src:  url('/fonts/Inter/Inter-ExtraLight.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 300;
  src:  url('/fonts/Inter/Inter-Light.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 500;
  src:  url('/fonts/Inter/Inter-Medium.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  src:  url('/fonts/Inter/Inter-SemiBold.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 700;
  src:  url('/fonts/Inter/Inter-Bold.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 800;
  src:  url('/fonts/Inter/Inter-ExtraBold.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 900;
  src:  url('/fonts/Inter/Inter-Black.ttf') format('truetype');
  font-display: swap;
}

@font-face {
  font-family: 'Noto SansCJK JP';
  font-style: normal;
  font-weight: 400;
  src:  url('/fonts/NotoSansJP/NotoSansJP-Regular.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Noto SansCJK JP';
  font-style: normal;
  font-weight: 100;
  src:  url('/fonts/NotoSansJP/NotoSansJP-Thin.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Noto SansCJK JP';
  font-style: normal;
  font-weight: 200;
  src:  url('/fonts/NotoSansJP/NotoSansJP-ExtraLight.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Noto SansCJK JP';
  font-style: normal;
  font-weight: 300;
  src:  url('/fonts/NotoSansJP/NotoSansJP-Light.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Noto SansCJK JP';
  font-style: normal;
  font-weight: 500;
  src:  url('/fonts/NotoSansJP/NotoSansJP-Medium.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Noto SansCJK JP';
  font-style: normal;
  font-weight: 600;
  src:  url('/fonts/NotoSansJP/NotoSansJP-SemiBold.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Noto SansCJK JP';
  font-style: normal;
  font-weight: 700;
  src:  url('/fonts/NotoSansJP/NotoSansJP-Bold.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Noto SansCJK JP';
  font-style: normal;
  font-weight: 800;
  src:  url('/fonts/NotoSansJP/NotoSansJP-ExtraBold.ttf') format('truetype');
  font-display: swap;
}
@font-face {
  font-family: 'Noto SansCJK JP';
  font-style: normal;
  font-weight: 900;
  src:  url('/fonts/NotoSansJP/NotoSansJP-Black.ttf') format('truetype');
  font-display: swap;
}
`;

export default function Document() {
  return (
    <Html lang="en">
      <Head></Head>
      <body className="relative m-0">
        <Main />
        <NextScript />
      </body>

      <style dangerouslySetInnerHTML={{ __html: cssFontString }}></style>
    </Html>
  );
}
