import { Gluten } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.scss";

import { useEffect } from "react";
import FacebookChat from "components/atoms/FacebookChat";

const gluten = Gluten({
    weight: ["400", "500", "600", "800"],
    subsets: ["latin"],
});

function MyApp({ Component, pageProps }) {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
    return (
        <main className={gluten.className}>
            <Component {...pageProps} />
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
                    FB.CustomerChat.show(true);
                }}
            >
                <Image
                    unoptimized={true}
                    width={36}
                    height={36}
                    src="/assets/icons/facebook-chat-new.svg"
                />
            </div>
        </main>
    );
}

export default MyApp;
