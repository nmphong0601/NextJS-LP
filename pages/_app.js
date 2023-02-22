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
        </main>
    );
}

export default MyApp;
