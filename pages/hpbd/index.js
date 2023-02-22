//import resources from "pages/api/resources";
// import { getResources } from "common/funtions";
import { Children, cloneElement, useEffect, useRef, useState } from "react";
// import path from "path";

import staticData from "./data.json";

/* components */
// import Monitor01 from "components/templates/monitor-01";
// import Monitor02 from "components/templates/monitor-02";

import styles from "./index.module.scss";
import Image from "next/image";

const Component = ({ data }) => {
    // const [hover, setHover] = useState(false);

    return <div className="position-relative vw-100 vh-100"></div>;
};

export async function getStaticProps() {
    //const res = await fetch(`${process.env.NEXT_HOST}/api/resources`, {method: 'POST'});
    //const resData = await res.json();

    let dataJson = await import("./data.json").default;

    // if (!dataJson) {
    //     dataJson = await getResources("data.json");
    // }

    return {
        props: {
            data: dataJson || {},
        },
    };
}

export default Component;
