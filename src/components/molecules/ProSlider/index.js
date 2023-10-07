import { useState } from "react";
import styles from "./Index.module.scss";

import ProCard from "components/molecules/ProCard";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const ProSlider = ({ products, ...props }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div {...props}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="slide"
        pagination={{
          //   dynamicBullets: true,
          clickable: true,
          bulletClass: styles["swiper-bullet"],
          bulletActiveClass: styles["swiper-bullet-active"],
          horizontalClass: styles["horizontal-pagination"],
        }}
        wrapperClass={`swiper-wrapper ${styles["product-swiper-wrapper"]}`}
        spaceBetween={20}
        slidesPerView={1}
        initialSlide={0}
        breakpoints={{
          1280: {
            slidesPerView: 4,
          },
          990: {
            slidesPerView: 3,
          },
          640: {
            slidesPerView: 2,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        onRealIndexChange={(swipper) => {
          setActiveSlide(swipper.realIndex);
        }}
      >
        {products.map((product, idxSlide) => {
          return (
            <SwiperSlide key={`slide-product-${idxSlide}`}>
              <ProCard data={product} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProSlider;
