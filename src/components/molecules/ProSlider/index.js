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
  return (
    <div {...props}>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="slide"
        pagination={{
          dynamicBullets: true,
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
            slidesPerView: products.length === 3 ? 3 : 4,
          },
          990: {
            slidesPerView: products.length === 2 ? 2 : 3,
          },
          640: {
            slidesPerView: products.length === 1 ? 1 : 2,
          },
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
