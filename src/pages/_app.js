import "styles/globals.scss";
import "styles/custom.scss";

import { Fragment, useEffect, useState } from "react";

import Header from "components/organisms/Header";
import Footer from "components/organisms/Footer";

function MyApp({ Component, pageProps }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffset(window.scrollY);
    };

    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Fragment>
      <Header />
      <main className="">
        <Component {...pageProps} />
      </main>
      <Footer />
      <button
        className={`back-to-top ${offset !== 0 ? "active" : ""}`}
        onClick={(e) => {
          // this changes the scrolling behavior to "smooth"
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <span>Top</span>
      </button>
    </Fragment>
  );
}

export default MyApp;
