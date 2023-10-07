import Image from "next/image";

import styles from "./Index.module.scss";
import { Fragment, useEffect, useState } from "react";

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

const ProCard = ({ data, ...props }) => {
  const [date, setDate] = useState(null);

  useEffect(() => {
    let timer = null;

    if (data && data.saleOff) {
      const setRemaining = (data) => {
        const end = new Date(data.expireDate);
        const now = new Date();
        const distance = end - now;
        if (distance < 0) {
          clearInterval(timer);
          return;
        }
        let days = Math.floor(distance / _day);
        let hours = Math.floor((distance % _day) / _hour);
        let minutes = Math.floor((distance % _hour) / _minute);
        let seconds = Math.floor((distance % _minute) / _second);

        setDate({ day: days, hour: hours, min: minutes, sec: seconds });
      };

      timer = setInterval(setRemaining, 1000, data.saleOff);
    }
  }, []);

  return (
    <div className={`group ${styles["product-container"]}`} {...props}>
      <div className={styles["product-thumb"]}>
        <a className="block relative" href={`/san-pham?id=${data.id}`}>
          <Image
            src={data.image.src}
            width={data.image.width}
            height={data.image.height}
            unoptimized
            className="relative z-0 h-full"
            alt={data.image.alt}
          />
        </a>
        <div className="hover-image invisible opacity-100 group-hover:visible group-hover:opacity-1">
          <a href={`/san-pham?id=${data.id}`}>
            <Image
              src={data.imageHover.src}
              width={data.imageHover.width}
              height={data.imageHover.height}
              unoptimized
              className="relative z-0 h-full"
              alt={data.imageHover.alt}
            />
          </a>
        </div>
        {data.saleOff ? (
          <div class="flash">{`-${data.saleOff.ratio}%`}</div>
        ) : (
          ""
        )}
        <div className="group-button opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:-translate-y-1/2 group-hover:-translate-x-1/2">
          <button className="block-link action-button add-wishlist-button">
            Add to wishlist
          </button>
          <button className="block-link action-button quick-view-button">
            Quick View
          </button>
          <button className="block-link action-button add-to-cart-button">
            Add to cart
          </button>
        </div>
      </div>
      <div className={styles["product-info"]}>
        {date ? (
          <div className={"product-countdown"}>
            <span className="days">
              <span className="number">{date.day}</span>
              <span className="text">Ngày</span>
            </span>
            <span className="hours">
              <span className="number">{date.hour}</span>
              <span className="text">Giờ</span>
            </span>
            <span className="mins">
              <span className="number">{date.min}</span>
              <span className="text">Phút</span>
            </span>
            <span className="secs">
              <span className="number">{date.sec}</span>
              <span className="text">Giây</span>
            </span>
          </div>
        ) : (
          ""
        )}
        <h3 className={"product-name"}>
          <a href={`/san-pham?id=${data.id}`}>{data.title}</a>
        </h3>
        <div className={"product-rating-wrapper"}>
          <div className={"product-rating"}>
            <span style={{ width: `${(data.rate * 100) / 5}%` }}></span>
          </div>
        </div>
        <div className={"product-price"}>
          {data.saleOff ? (
            <Fragment>
              <del>
                <span>
                  <bdi>
                    <span>
                      {Number(data.price).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </bdi>
                </span>
              </del>
              <ins>
                <span>
                  <bdi>
                    <span>
                      {Number(data.saleOff.price).toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </span>
                  </bdi>
                </span>
              </ins>
            </Fragment>
          ) : (
            <bdi>
              <span>
                {Number(data.price).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </span>
            </bdi>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProCard;
