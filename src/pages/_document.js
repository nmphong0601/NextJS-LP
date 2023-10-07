import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
      <Html>
        <Head>
          <link
            rel="icon"
            href="assets/icons/cropped-favicon-32x32.png"
            sizes="32x32"
          />
          <link
            rel="icon"
            href="assets/icons/cropped-favicon-192x192.png"
            sizes="192x192"
          />
          <link
            rel="apple-touch-icon"
            href="assets/icons/cropped-favicon-180x180.png"
          />
          <link
            rel="stylesheet"
            id="flaticon-css"
            href="assets/fonts/flaticon-1.0/flaticon.css"
            type="text/css"
            media="all"
          />
          <link
            rel="stylesheet"
            id="flaticon-css"
            href="assets/fonts/font-awesome-4.7.0/font-awesome.min.css"
            type="text/css"
            media="all"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
}
