import { Fragment, useState } from "react";
import Image from "next/image";
import styles from "./Index.module.scss";

import WrappedText from "components/atoms/WrappedText";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const slides = [
  {
    background: {
      src: "assets/images/home-slider/slide-home101.jpg",
      width: 940,
      height: 615,
      alt: "slide-home101",
    },
    contents: [
      {
        text: "Teamo a plant",
        characterProps: {
          className:
            "text-nmp-primary font-bold uppercase text-xs sm:text-sm md:text-base",
        },
      },
      {
        text: "Get 20% Off",
        characterProps: {
          className: "font-bold text-xs sm:text-sm md:text-3xl text-black",
        },
        effect: {
          position: "rtl",
          type: "rotate",
        },
      },
      {
        text: "Plants",
        characterProps: {
          className: "font-bold text-xs sm:text-sm md:text-3xl text-black",
        },
        effect: {
          position: "rtl",
          type: "rotate",
        },
      },
      {
        children: (
          <Fragment>
            <span>New Price: </span>{" "}
            <strong style={{ fontSize: "140%", color: "rgb(101, 161, 90)" }}>
              $32.00
            </strong>
          </Fragment>
        ),
        effect: {
          position: "ltr",
          type: "",
        },
      },
    ],
  },
  {
    background: {
      src: "assets/images/home-slider/slide-home102.jpg",
      width: 940,
      height: 615,
      alt: "slide-home102",
    },
    contents: [
      {
        text: "Teamo best collection",
        characterProps: {
          className:
            "text-nmp-primary font-bold uppercase text-xs sm:text-sm md:text-base",
        },
      },
      {
        text: "Inspiration ",
        characterProps: {
          className: "font-bold text-xs sm:text-sm md:text-3xl text-black",
        },
        effect: {
          position: "rtl",
          type: "rotate",
        },
      },
      {
        text: "Plants",
        characterProps: {
          className: "font-bold text-xs sm:text-sm md:text-3xl text-black",
        },
        effect: {
          position: "rtl",
          type: "rotate",
        },
      },
      {
        children: (
          <Fragment>
            <span>New Price: </span>{" "}
            <strong style={{ fontSize: "140%", color: "rgb(101, 161, 90)" }}>
              $25.00
            </strong>
          </Fragment>
        ),
        effect: {
          position: "ltr",
          type: "",
        },
      },
    ],
  },
  {
    background: {
      src: "assets/images/home-slider/slide-home103.jpg",
      width: 940,
      height: 615,
      alt: "slide-home103",
    },
    contents: [
      {
        text: "Sale up to 40% off",
        characterProps: {
          className:
            "text-nmp-primary font-bold uppercase text-xs sm:text-sm md:text-base",
        },
      },
      {
        text: "Plans for",
        characterProps: {
          className:
            "font-bold text-xs sm:text-sm md:text-3xl text-black capitallize",
        },
        effect: {
          position: "rtl",
          type: "rotate",
        },
      },
      {
        text: "Your house",
        characterProps: {
          className:
            "font-bold text-xs sm:text-sm md:text-3xl text-black capitallize",
        },
        effect: {
          position: "rtl",
          type: "rotate",
        },
      },
      {
        children: (
          <Fragment>
            <span>New Price: </span>{" "}
            <strong style={{ fontSize: "140%", color: "rgb(101, 161, 90)" }}>
              $27.00
            </strong>
          </Fragment>
        ),
        effect: {
          position: "ltr",
          type: "",
        },
      },
    ],
  },
];

const Slider = (props) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div {...props}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000 }}
        loop={true}
        pagination={{
          //   dynamicBullets: true,
          clickable: true,
          bulletClass: styles["tp-bullet"],
          bulletActiveClass: styles["selected"],
          horizontalClass: styles["horizontal-pagination"],
        }}
        spaceBetween={50}
        slidesPerView={1}
        initialSlide={0}
        onRealIndexChange={(swipper) => {
          setActiveSlide(swipper.realIndex);
        }}
      >
        {slides.map((slide, idxSlide) => {
          return (
            <SwiperSlide key={`slide-shop-${idxSlide}`}>
              <Image
                src={slide.background.src}
                width={slide.background.width}
                height={slide.background.height}
                unoptimized
                className="relative z-0 h-full"
                alt={slide.background.alt}
              />
              <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-10">
                <div className="mb-2 md:mb-6">
                  {slide.contents &&
                    slide.contents.length > 0 &&
                    slide.contents.map((content, idxContent) => {
                      if (content.children) {
                        return (
                          <WrappedText
                            key={`wrapped-text-${idxContent}`}
                            isActive={activeSlide === idxSlide}
                            charProps={content.characterProps}
                            effect={content.effect}
                          >
                            {content.children}
                          </WrappedText>
                        );
                      } else {
                        return (
                          <WrappedText
                            key={`wrapped-text-${idxContent}`}
                            isActive={activeSlide === idxSlide}
                            text={content.text}
                            charProps={content.characterProps}
                            effect={content.effect}
                          />
                        );
                      }
                    })}
                </div>
                <button
                  className={`relative max-w-max uppercase text-xs md:text-xl bg-nmp-primary hover:bg-nmp-dark p-4 py-3 lg:px-6 font-bold opacity-0 ${
                    activeSlide === idxSlide
                      ? styles["animation-bot-to-top"]
                      : styles["animation-bot-to-top-out"]
                  }`}
                  style={{ animationDelay: "0.75s" }}
                >
                  Mua ngay
                </button>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
