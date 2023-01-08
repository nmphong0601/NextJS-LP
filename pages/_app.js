import { Gluten } from "@next/font/google";
import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.scss";

import { useEffect } from "react";

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
        </main>
    );
}

export default MyApp;
