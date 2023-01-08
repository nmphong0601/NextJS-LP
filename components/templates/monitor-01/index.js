import Image from "next/image";
import { createElement, useEffect, useState } from "react";
import styles from "./index.module.scss";

const colors = [
    "rgba(182, 15, 97, 0.9)",
    "rgba(223, 103, 43, 0.9)",
    "rgba(45, 181, 167, 0.9)",
    "rgba(190, 61, 244, 0.9)",
    "rgba(180, 224, 67, 0.9)",
    "rgba(252, 248, 44, 0.9)",
    "rgba(30, 247, 229, 0.9)",
    "rgba(240, 72, 21, 0.9)",
    "rgba(253, 30, 216, 0.9)",
    "rgba(245, 142, 142, 0.9)",
];

function getColor(color) {
    let sep = color.indexOf(",") > -1 ? "," : " ";

    const regexRGB = /(rgb)\(([0-9]+),\s+([0-9]+),\s+([0-9]+)\)/;
    const regexRGBA =
        /(rgba)\(([0-9]+),\s+([0-9]+),\s+([0-9]+),\s+(1|[0]*[.][0-9]){1}\)/;

    // Make r, g, and b fractions of 1
    let r = 255;
    let g = 255;
    let b = 255;
    let a = 1;

    // Find greatest and smallest channel values
    let cmin = Math.min(r, g, b),
        cmax = Math.max(r, g, b),
        delta = cmax - cmin,
        h = 0,
        s = 0,
        l = 0;

    if (regexRGB.test(color)) {
        // let lighten = color.replace(regexRGB, "rgba($2,$3,$4,0.2)");
        // let darken = color.replace(regexRGB, "rgba($2,$3,$4,1)");
        // let normal = color.replace(regexRGB, "rgba($2,$3,$4,0.9)");

        const rgb = color.substr(4).split(")")[0].split(sep);

        for (let R in rgb) {
            let r = rgb[R];
            if (r.indexOf("%") > -1)
                rgb[R] = Math.round((r.substr(0, r.length - 1) / 100) * 255);
        }

        // Make r, g, and b fractions of 1
        (r = rgb[0] / 255), (g = rgb[1] / 255), (b = rgb[2] / 255);
    }

    if (regexRGBA.test(color)) {
        // let lighten = color.replace(regexRGBA, "rgba($2,$3,$4,0.2)");
        // let darken = color.replace(regexRGBA, "rgba($2,$3,$4,1)");
        // let normal = color.replace(regexRGBA, "rgba($2,$3,$4,0.9)");

        const rgba = color.substr(5).split(")")[0].split(sep);

        // Strip the slash if using space-separated syntax
        if (rgba.indexOf("/") > -1) rgba.splice(3, 1);

        for (let R in rgba) {
            let r = rgba[R];
            if (r.indexOf("%") > -1) {
                let p = r.substr(0, r.length - 1) / 100;

                if (R < 3) {
                    rgba[R] = Math.round(p * 255);
                }
            }
        }

        // Make r, g, and b fractions of 1
        (r = rgba[0] / 255),
            (g = rgba[1] / 255),
            (b = rgba[2] / 255),
            (a = rgba[3]);
    }

    // Find greatest and smallest channel values
    (cmin = Math.min(r, g, b)),
        (cmax = Math.max(r, g, b)),
        (delta = cmax - cmin),
        (h = 0),
        (s = 0),
        (l = 0);

    // No difference
    if (delta == 0) h = 0;
    // Red is max
    else if (cmax == r) h = ((g - b) / delta) % 6;
    // Green is max
    else if (cmax == g) h = (b - r) / delta + 2;
    // Blue is max
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);

    // Make negative hues positive behind 360°
    if (h < 0) h += 360;

    // Calculate lightness
    l = (cmax + cmin) / 2;

    // Calculate saturation
    s = delta == 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    // Multiply l and s by 100
    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    let lighten = "hsl(" + h + "," + s + "%," + 100 + "%)";
    let normal = "hsl(" + h + "," + s + "%," + l + "%)";
    let darken = "hsl(" + h + "," + s + "%," + 30 + "%)";

    return { lighten, normal, darken };
}

// function randomColor() {
//     const red = Math.floor(((1 + Math.random()) * 256) / 2);
//     const green = Math.floor(((1 + Math.random()) * 256) / 2);
//     const blue = Math.floor(((1 + Math.random()) * 256) / 2);

//     const lighten = "rgba(" + red + "," + green + "," + blue + 0.2 + ")";
//     const darken = "rgba(" + red + "," + green + "," + blue + "," + 1 + ")";
//     const normal = "rgba(" + red + "," + green + "," + blue + "," + 0.8 + ")";

//     return { lighten, normal, darken };
// }

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Monitor01 = ({ infor }) => {
    const [leave, setLeave] = useState(false);
    const [hover, setHover] = useState(false);
    const [words, setWords] = useState([]);
    const [balloons, setBalloons] = useState([]);

    useEffect(() => {
        const initWords = "happy birthday".split(" ");
        setWords(initWords);
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLeave(true);
        }, 5000);
    }, []);

    useEffect(() => {
        const _balloons = [...balloons];
        if (words.length > 0) {
            words.forEach((word, idx) => {
                const balloonList = getBalloons(word, idx);
                _balloons[idx] = balloonList;
            });

            setBalloons(_balloons);
        }
    }, [words]);

    useEffect(() => {
        if (balloons.length > 0 && balloons.length === words.length) {
            const _balloons = document.querySelectorAll(".balloon");
            if (_balloons && _balloons.length > 0) {
                _balloons.forEach((balloon, idx) => {
                    const maxAxisX = idx + randomInt(-30, 30);
                    const minAxisX = idx + randomInt(-30, 30);

                    const maxAxisY = idx + randomInt(10, 30);
                    const minAxisY = idx + randomInt(10, 30);

                    const maxRotate = 8;
                    const minRotate = idx + randomInt(-8, 8);

                    balloon.animate(
                        {
                            transform: [
                                `translate(${maxAxisX}px, ${maxAxisY}px) rotate(${maxRotate}deg)`,
                                `translate(${minAxisX}px, ${minAxisY}px) rotate(${minRotate}deg)`,
                                `translate(${maxAxisX}px, ${maxAxisY}px) rotate(${maxRotate}deg)`,
                            ],
                        },
                        {
                            // timing options
                            duration: 6000,
                            iterations: Infinity,
                        }
                    );
                });
            }
        }
    }, [words, balloons]);

    const getBalloons = (word, idx) => {
        const balloonList = [];

        if (word.length > 0) {
            word.split("").forEach((char, index) => {
                const idx = randomInt(0, colors.length - 1);
                const color = getColor(colors[idx]);
                const balloon = createElement("div", {
                    className: `balloon ${styles["balloon"]}`,
                    style: {
                        width: `100px`,
                        height: `120px`,
                        left: `${120 * index}px`,
                        "--color": color.normal,
                        "--color-darken": color.darken,
                    },
                    children: <span>{char}</span>,
                    key: index,
                });

                balloonList.push(balloon);
            });
        }

        return balloonList;
    };

    return (
        <>
            <div
                className="container position-absolute overflow-hidden w-100 h-100 start-0 end-0 bg-white"
                style={{
                    transition:
                        "transform 2s, opacity 3s, z-index 3s, visibility 3s",
                    transform: leave ? "translate(-120%,0)" : "translate(0,0)",
                    opacity: leave ? "0" : "1",
                    zIndex: leave ? "0" : "100",
                    visibility: leave ? "hidden" : "visible",
                }}
            >
                {words.map((word, idx) => {
                    return (
                        <div
                            key={idx}
                            className={styles["balloon-wrapper"]}
                            style={{ width: `${word.length * 120}px` }}
                        >
                            {balloons[idx] &&
                                balloons[idx].map((balloon, index) => {
                                    return balloon;
                                })}
                        </div>
                    );
                })}
                <div className={styles.avatar}>
                    <Image
                        src={infor.avatar?.src}
                        alt={infor.avatar?.alt}
                        width={infor.avatar?.width}
                        height={infor.avatar?.height}
                        unoptimized={true}
                        priority={true}
                        style={{
                            objectFit: "contain",
                            objectPosition: "50% 50%",
                            width: "100%",
                            height: "100%",
                        }}
                    />
                </div>
                <div className="d-flex flex-column justify-content-center align-items-center gy-2">
                    <div className="mb-2">{infor?.full_name}</div>
                    <div>{infor?.birthday}</div>
                </div>
                <div className="position-absolute bottom-0 end-0">
                    <button
                        className="border-0 bg-transparent overflow-hidden"
                        onMouseEnter={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                        onClick={() => setLeave(true)}
                    >
                        <Image
                            src="/assets/icons/hd_Mail.svg"
                            alt="icon-mail"
                            width={48}
                            height={48}
                            style={{
                                transform: hover
                                    ? "rotate(-10deg)"
                                    : "rotate(0deg)",
                            }}
                        />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Monitor01;
