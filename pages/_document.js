import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

import Image from "next/image";
import FacebookChat from "components/atoms/FacebookChat";
import { Partytown } from "@builder.io/partytown/react";

export default function Document() {
    return (
        <Html>
            <Head>
                <Partytown
                    debug={true}
                    forward={["dataLayer.push", "fbq"]}
                    resolveUrl={(url, location) => {
                        if (
                            url.hostname.includes("google-analytics") ||
                            url.hostname.includes("connect.facebook.net")
                        ) {
                            const proxyUrl = new URL(
                                "https://cdn.builder.io/api/v1/proxy-api"
                            );
                            proxyUrl.searchParams.append("url", url);
                            return proxyUrl;
                        }
                    }}
                    set={(opts) => {
                        return opts.continue;
                    }}
                    apply={(opts) => {
                        return opts.continue;
                    }}
                />
            </Head>
            <body>
                <noscript
                    dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NKZK6D5"
                                height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                    }}
                ></noscript>
                <Main />
                <NextScript />
                <FacebookChat />
                <div
                    className="position-fixed d-flex justify-content-center align-items-center animate"
                    style={{
                        width: "60px",
                        height: "60px",
                        bottom: "24px",
                        right: "24px",
                        zIndex: "9999999999",
                        background: "#0A7CFF",
                        borderRadius: "100%",
                        cursor: "pointer",
                    }}
                    onClick={(e) => {
                        FB.CustomerChat.show(false);
                    }}
                >
                    <Image
                        unoptimized={true}
                        width={36}
                        height={36}
                        src="/assets/icons/expand-chat.svg"
                    />
                </div>
                <Script
                    id="GTM_API"
                    strategy="lazyOnload"
                    type="text/partytown"
                >
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-NKZK6D5');
                    `}
                </Script>
            </body>
        </Html>
    );
}
