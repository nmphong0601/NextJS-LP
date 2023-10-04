import "styles/globals.scss";
import "styles/custom.scss";

import { Fragment } from "react";

import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";

function MyApp({ Component, pageProps }) {
    return (
        <Fragment>
            <Header />
            <main className="">
                <Component {...pageProps} />
            </main>
            <Footer />
        </Fragment>
    );
}

export default MyApp;
