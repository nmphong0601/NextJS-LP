import Image from "next/image";

import styles from "./Index.module.scss";
import { Fragment, useEffect, useState } from "react";

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

const ProCard = ({ data, ...props }) => {
  const [date, setDate] = useState(null);
  const [offer, setOffer] = useState({ price: null, priceValidUntil: null });

  useEffect(() => {
    let timer = null;

    if (data && data.on_sale) {
      const setRemaining = (offer) => {
        if (offer.priceValidUntil) {
          const { priceValidUntil: date } = offer;
          const end = new Date(date);
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

          setOffer(offer);
          setDate({ day: days, hour: hours, min: minutes, sec: seconds });
        }
      };

      if (data.offers && data.offers.length > 0) {
        const maxDate = new Date(
          Math.max(
            ...data.offers.map((offer) => {
              return new Date(offer.priceValidUntil);
            })
          )
        );
        const _offer = data.offers.find((x) => {
          const currentDate = new Date(x.priceValidUntil);
          return currentDate.getTime() === maxDate.getTime();
        });

        timer = setInterval(setRemaining, 1000, _offer);
      } else {
        const _offer = {
          price: data.prices?.price,
          priceValidUntil: null,
        };
        setOffer(_offer);
      }
    }
  }, []);

  return (
    <div className={`group ${styles["product-container"]}`} {...props}>
      <div className={styles["product-thumb"]}>
        <a className="block relative" href={`/san-pham/${data.slug}`}>
          {data.image ? (
            <Image
              src={data.image.src}
              width={data.image.width}
              height={data.image.height}
              unoptimized
              className="relative z-0 h-full"
              alt={data.image.alt}
            />
          ) : (
            <Image
              src={data.images[0].src}
              sizes={data.images[0].sizes}
              unoptimized
              className="relative z-0 h-full"
              width={600}
              height={600}
              alt={data.images[0].name}
            />
          )}
        </a>
        <div className="hover-image invisible opacity-100 group-hover:visible group-hover:opacity-1">
          <a href={`/san-pham/${data.slug}`}>
            {data.imageHover ? (
              <Image
                src={data.imageHover.src}
                width={data.imageHover.width}
                height={data.imageHover.height}
                unoptimized
                className="relative z-0"
                alt={data.imageHover.alt}
              />
            ) : (
              <Image
                src={
                  data.images.length > 1
                    ? data.images[1].src
                    : data.images[0].src
                }
                sizes={
                  data.images.length > 1
                    ? data.images[1].sizes
                    : data.images[0].sizes
                }
                unoptimized
                className="relative z-0"
                alt={
                  data.images.length > 1
                    ? data.images[1].name
                    : data.images[0].name
                }
                width={600}
                height={600}
              />
            )}
          </a>
        </div>
        {data.on_sale ? (
          <div className="flash">{`-${Math.floor(
            100 -
              (Number(data.prices?.sale_price) * 100) /
                Number(data.prices?.regular_price)
          )}%`}</div>
        ) : (
          ""
        )}
        {!data.is_in_stock ? <div className="sold-out">Sold Out</div> : ""}
        <div className="group-button lg:opacity-0 lg:invisible lg:group-hover:opacity-100 lg:group-hover:visible lg:group-hover:-translate-y-1/2 lg:group-hover:-translate-x-1/2">
          <button className="action-button add-wishlist-button">
            Add to wishlist
          </button>
          <button className="action-button quick-view-button">
            Quick View
          </button>
          <button className="action-button add-to-cart-button">
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
          <a href={`/san-pham/${data.slug}`}>{data.name}</a>
        </h3>
        <div className={"product-rating-wrapper"}>
          <div className={"product-rating"}>
            <span
              style={{ width: `${(Number(data.average_rating) * 100) / 5}%` }}
            ></span>
          </div>
        </div>
        <div className={"product-price"}>
          {data.on_sale ? (
            <Fragment>
              <del>
                <span>
                  <bdi>
                    <span>
                      {Number(data.prices?.regular_price).toLocaleString(
                        "vi-VN",
                        {
                          style: "currency",
                          currency: "VND",
                        }
                      )}
                    </span>
                  </bdi>
                </span>
              </del>
              <ins>
                <span>
                  <bdi>
                    <span>
                      {Number(offer.price).toLocaleString("vi-VN", {
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
                {data.prices?.price_range
                  ? `${Number(
                      data.prices.price_range.min_amount
                    ).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })} - ${Number(
                      data.prices.price_range.max_amount
                    ).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}`
                  : Number(data.prices?.price).toLocaleString("vi-VN", {
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
