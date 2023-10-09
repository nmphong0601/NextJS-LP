import { Image as PreviewImage } from "antd";
import styles from "./Index.module.scss";

import useDeviceDetect from "common/utils/useDeviceDetect";

// import Swiper JS
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
// import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const Gallery = ({ title, images = [] }) => {
  // const { isDesktop, width } = useDeviceDetect();

  return (
    <div>
      <div className={styles["gallery-heading"]}>
        <div className="icon">
          <span className="flaticon-instagram"></span>
        </div>
        <h3 className="title">
          <span>{title}</span>
        </h3>
      </div>
      <Swiper
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        effect="slide"
        slidesPerView={images.length}
        // breakpoints={{
        //   1280: {
        //     slidesPerView: images.length,
        //   },
        //   990: {
        //     slidesPerView: 3,
        //   },
        //   640: {
        //     slidesPerView: 2,
        //   },
        // }}
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={`slide-gallery-${index}`}>
              <PreviewImage
                // width={266}
                src={image.src}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Gallery;
