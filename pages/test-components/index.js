//import resources from "pages/api/resources";
import { getResources } from "common/funtions";
import { Children, cloneElement, useEffect, useRef, useState } from "react";
// import path from "path";

import styles from "./index.module.scss";

const DIRECTIOM_TYPE = {
    next: "NEXT",
    prev: "PREV",
};

const Card = (props) => {
    const { data, ...otherProps } = props;
    return (
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
    );
};

const Slider = ({ children, settings }) => {
    const [slides, setSlides] = useState([]);
    const [activeSlide, setActiveSlide] = useState(0);
    const [needTransition, setNeedTransition] = useState(true);
    const [internalSettings, setInternalSettings] = useState({});
    const [direction, setDirection] = useState("");

    const containerRef = useRef(null);

    const [width, setWidth] = useState(0);
    const [slideWidth, setSlideWidth] = useState(0);

    const defaultSettings = {
        initialSlide: 1,
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        useTransition: true,
        spaceBetween: 20,
        loopAddSlides: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    useEffect(() => {
        setInternalSettings({ ...defaultSettings, ...settings });
    }, [settings]);

    useEffect(() => {
        let allSettings = { ...defaultSettings, ...settings };

        if (allSettings.responsive) {
            const responsives = [...allSettings.responsive];
            const breakpoints = responsives.filter(
                (x) => x.breakpoint >= width
            );
            const breakpoint =
                breakpoints && breakpoints.length > 0
                    ? breakpoints.reduce((prev, curr) => {
                          return prev < curr ? prev : curr;
                      })
                    : undefined;
            const breakpointSettings = breakpoint
                ? breakpoint.settings
                : undefined;
            allSettings = breakpointSettings ? breakpointSettings : allSettings;
        }

        setInternalSettings(allSettings);
    }, [width]);

    useEffect(() => {
        setActiveSlide(internalSettings.initialSlide);
    }, [internalSettings]);

    useEffect(() => {
        if (Children.count(children) !== 0) {
            setSlides(Children.toArray(children));
        }
    }, [children]);

    useEffect(() => {
        setWidth(containerRef.current.clientWidth);
        setSlideWidth(
            containerRef.current.clientWidth / internalSettings.slidesToShow
        );
    });

    const calcLoopSlides = (slides) => {
        let loopedSlides = Math.ceil(
            parseFloat(internalSettings.slidesToShow, 10)
        );

        loopedSlides += internalSettings.loopAddSlides;

        if (loopedSlides > slides.length) {
            loopedSlides = slides.length;
        }

        return loopedSlides;
    };

    const renderLoop = (slides, settings) => {
        const modifiedSlides = slides.map((child, index) => {
            return cloneElement(child, {
                "data-slide-index": index,
                style: {
                    width: `${slideWidth}px`,
                    marginLeft: `${settings.spaceBetween / 2}px`,
                    marginRight: `${settings.spaceBetween / 2}px`,
                },
            });
        });

        function duplicateSlide(child, index, position) {
            return cloneElement(child, {
                key: `${child.key}-duplicate-${index}-${position}`,
                className: `${child.props.className || ""} slide-duplicate`,
                style: {
                    width: `${slideWidth}px`,
                    marginLeft: `${settings.spaceBetween / 2}px`,
                    marginRight: `${settings.spaceBetween / 2}px`,
                },
            });
        }

        const loopedSlides = calcLoopSlides(modifiedSlides);

        const prependSlides = [];
        const appendSlides = [];
        for (let i = 0; i < loopedSlides; i += 1) {
            const index =
                i -
                Math.floor(i / modifiedSlides.length) * modifiedSlides.length;
            appendSlides.push(
                duplicateSlide(modifiedSlides[index], i, "append")
            );
            prependSlides.unshift(
                duplicateSlide(
                    modifiedSlides[modifiedSlides.length - index - 1],
                    i,
                    "prepend"
                )
            );
        }

        return [...prependSlides, ...modifiedSlides, ...appendSlides];
    };

    const renderSlides = () => {
        return renderLoop(slides, internalSettings);
    };

    const handleSliderTranslateEnd = () => {
        console.log("handleSliderTranslateEnd");
        switch (direction) {
            case DIRECTIOM_TYPE.next:
                vaildNextSlider();
                break;
            case DIRECTIOM_TYPE.prev:
                vaildPrevSlider();
                break;
            default:
                break;
        }
    };

    const vaildNextSlider = () => {
        let _activeSlide = activeSlide;
        // if (_activeSlide > slides.length - internalSettings.slidesToShow) {
        _activeSlide -= 1;
        const _slides = [
            ...slides,
            ...slides.slice(0, internalSettings.slidesToShow),
        ].slice(-slides.length);
        setNeedTransition(false);
        setActiveSlide(_activeSlide);
        setSlides(_slides);
        // }
    };

    const vaildPrevSlider = () => {
        let _activeSlide = activeSlide;
        // if (_activeSlide < 1) {
        _activeSlide += 1;
        const _slides = [
            ...slides.slice(-internalSettings.slidesToShow),
            ...slides,
        ].slice(0, slides.length);
        setNeedTransition(false);
        setActiveSlide(_activeSlide);
        setSlides(_slides);
        //}
    };

    const handleNext = () => {
        let _activeSlide = activeSlide;
        _activeSlide += 1;
        if (_activeSlide > slides.length - internalSettings.slidesToShow)
            return;
        setNeedTransition(true);
        setActiveSlide(_activeSlide);
        setDirection(DIRECTIOM_TYPE.next);
    };

    const handlePrev = () => {
        let _activeSlide = activeSlide;
        _activeSlide = _activeSlide - internalSettings.slidesToScroll;
        if (_activeSlide < 0) return;
        setNeedTransition(true);
        setActiveSlide(_activeSlide);
        setDirection(DIRECTIOM_TYPE.prev);
    };

    const transLateVal = () => {
        return activeSlide * slideWidth * internalSettings.slidesToScroll;
    };

    const sliderStyle = () => {
        if (needTransition) {
            return {
                transform: `translateX(-${transLateVal()}px)`,
                transition: "transform 0.3s ease-in-out",
                width: `${slideWidth * slides.length}px`,
            };
        }

        return {
            transform: `translateX(-${transLateVal()}px)`,
            width: `${slideWidth * slides.length}px`,
        };
    };

    return (
        <div className="overflow-hidden">
            <div className="position-relative">
                <div
                    ref={containerRef}
                    className="container position-relative mx-auto w-100 overflow-visible whitespace-no-wrap"
                >
                    <div
                        style={sliderStyle()}
                        className="d-flex justify-content-center"
                        onTransitionEnd={handleSliderTranslateEnd}
                    >
                        {/* {slides.map((item, i) => (
                            <div
                                key={i}
                                style={{
                                    width: `${slideWidth}px`,
                                    marginLeft: `${
                                        internalSettings.spaceBetween / 2
                                    }px`,
                                    marginRight: `${
                                        internalSettings.spaceBetween / 2
                                    }px`,
                                }}
                            >
                                {item}
                            </div>
                        ))} */}
                        {renderSlides()}
                    </div>
                    <div>
                        <button onClick={() => handlePrev()}>prev</button>
                        <button onClick={() => handleNext()}> next</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Component = ({ data }) => {
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
        <section className="mt-4 mb-4">
            <Slider>
                {data?.posts.slice(0, 7).map((item, i) => (
                    <Card key={i} data={item} className="w-full" />
                ))}
            </Slider>
        </section>
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
