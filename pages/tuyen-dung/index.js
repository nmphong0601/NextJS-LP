//import resources from "pages/api/resources";
import { getResources } from "common/funtions";
import { useState } from "react";
// import path from "path";

import styles from "./index.module.scss";

const Card = (props) => {
    const { data, ...otherProps } = props;
    return (
        <div className={styles.flip}>
            <div className={styles.back}></div>
            <div {...otherProps}>
                <div className="d-block mb-2">
                    <img
                        src="/assets/images/BanLamViec_2.jpg"
                        style={{ width: "100%", height: "100%" }}
                    />
                </div>
                <div className="d-flex flex-col justify-content-center">
                    <div>{data?.code}</div>
                </div>
            </div>
        </div>
    );
};

const Component = ({ data }) => {
    const [checkedPage, setCheckedPage] = useState(["page-1", "page-2"]);

    const onPageChange = (e) => {
        const pages = [...checkedPage];
        console.log("pages: ", pages);
        if (e.target.value) {
            const idx = pages.findIndex((x) => x === e.target.value);
            if (idx !== -1) {
                pages.splice(idx, 1);
            } else {
                pages.push(e.target.value);
            }
        }

        setCheckedPage(pages);
    };

    return (
        <div className="container">
            {/* <div className="row">
                {data.posts.slice(0, 6).map((country) => (
                    <Card
                        key={country.code}
                        data={country}
                        className="col-lg-3 d-flex flex-column"
                    />
                ))}
            </div> */}
            <div className="cover">
                <div className="book">
                    <label
                        // htmlFor={`page-1`}
                        className="book__page book__page--1"
                    >
                        <div className="page__content">Page first</div>
                    </label>

                    <label
                        // htmlFor={nextPage}
                        className="book__page book__page--4"
                    >
                        <div className="page__content">Page last</div>
                    </label>

                    {/* <!-- Resets the page --> */}
                    <input
                        type="radio"
                        name="page"
                        id="page-1"
                        value={"page-1"}
                        checked={
                            checkedPage.findIndex((x) => x === "page-1") !== -1
                        }
                        onClick={(e) => onPageChange(e)}
                        style={{
                            zIndex: `${
                                checkedPage.findIndex((x) => x === "page-1") !==
                                -1
                                    ? 100
                                    : 10
                            }`,
                        }}
                    />

                    {/* <!-- Goes to the second page --> */}
                    <input
                        type="radio"
                        name="page-2"
                        id="page-2"
                        value={"page-2"}
                        checked={
                            checkedPage.findIndex((x) => x === "page-2") !== -1
                        }
                        onClick={(e) => onPageChange(e)}
                        style={{
                            zIndex: `${
                                checkedPage.findIndex((x) => x === "page-1") !==
                                -1
                                    ? 100
                                    : 10
                            }`,
                        }}
                    />
                    <label
                        className={`book__page book__page--2`}
                        style={{
                            zIndex: `${
                                checkedPage.findIndex((x) => x === "page-1") !==
                                -1
                                    ? 100
                                    : 10
                            }`,
                        }}
                    >
                        <div className="book__page-front">
                            <div className="page__content">Page 1</div>
                        </div>
                        <div className="book__page-back">
                            <div className="page__content">Page 1.2</div>
                        </div>
                    </label>
                    {/* <!-- Goes to the second page --> */}
                    <input
                        type="radio"
                        name="page-3"
                        id="page-3"
                        value={"page-3"}
                        onClick={(e) => onPageChange(e)}
                        checked={
                            checkedPage.findIndex((x) => x === "page-3") !== -1
                        }
                        style={{
                            zIndex: `${
                                checkedPage.findIndex((x) => x === "page-3") !==
                                -1
                                    ? 100
                                    : 10
                            }`,
                        }}
                    />
                    <label
                        className={`book__page book__page--2`}
                        style={{
                            zIndex: `${
                                checkedPage.findIndex((x) => x === "page-3") !==
                                -1
                                    ? 100
                                    : 10
                            }`,
                        }}
                    >
                        <div className="book__page-front">
                            <div className="page__content">Page 2</div>
                        </div>
                        <div className="book__page-back">
                            <div className="page__content">Page 2.2</div>
                        </div>
                    </label>
                </div>
            </div>
        </div>
    );
};

export async function getStaticProps() {
    //const res = await fetch(`${process.env.NEXT_HOST}/api/resources`, {method: 'POST'});
    //const resData = await res.json();

    let dataJson = await import("./tuyen-dung.json").default;

    if(!dataJson){
        dataJson = await getResources("tuyen-dung.json");
    }

    return {
        props: {
            data: {
                page: {},
                posts: dataJson.countries || [],
            },
        },
    };
}

export default Component;
