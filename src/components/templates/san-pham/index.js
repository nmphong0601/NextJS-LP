import { Fragment, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Banner from "components/molecules/Banner";
import styles from "./Index.module.scss";

import staticData from "common/data.json";
import ShareSocialList from "components/molecules/ShareSocialList";
import Tabs from "components/molecules/Tabs";
import ProSlider from "components/molecules/ProSlider";

const _second = 1000;
const _minute = _second * 60;
const _hour = _minute * 60;
const _day = _hour * 24;

const SanPhamTemplate = ({ ...props }) => {
  const router = useRouter();
  const [product, setProduct] = useState(null);
  const [related, setRelated] = useState([]);
  const [date, setDate] = useState(null);
  const [offer, setOffer] = useState({ price: null, priceValidUntil: null });
  const [quantity, setQuantity] = useState(1);

  const sourceRef = useRef(null);
  const targetRef = useRef(null);
  const containerRef = useRef(null);
  const [opacity, setOpacity] = useState(0);
  const [offset, setOffset] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const { slug } = router.query;
    if (slug) {
      const _product = staticData.products.find((x) => x.slug === slug);
      setProduct(_product);
    }
  }, [router.query]);

  useEffect(() => {
    let timer = null;
    const _related = [
      ...staticData.products.filter((pro) => {
        const categories = pro.categories?.map((cat) => cat.name);
        const tags = pro.tags?.map((tag) => tag.name);

        if (
          categories.every((cat) =>
            product?.categories?.map((c) => c.name).includes(cat)
          )
        ) {
          return pro;
        }
      }),
    ];

    if (product && product.on_sale) {
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

      if (product.offers && product.offers.length > 0) {
        const maxDate = new Date(
          Math.max(
            ...product.offers.map((offer) => {
              return new Date(offer.priceValidUntil);
            })
          )
        );
        const _offer = product.offers.find((x) => {
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
    setRelated(_related);
  }, [product]);

  const tabList = [
    {
      title: "Description",
      content: product?.description,
    },
    {
      title: `Reviews (${product?.review_count})`,
      content: <div></div>,
    },
  ];

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
    setOffset({ left: 0, top: 0 });
  };

  const handleMouseMove = (e) => {
    const targetRect = targetRef.current.getBoundingClientRect();
    const sourceRect = sourceRef.current.getBoundingClientRect();
    const containerRect = containerRef.current.getBoundingClientRect();

    const xRatio = (targetRect.width - containerRect.width) / sourceRect.width;
    const yRatio =
      (targetRect.height - containerRect.height) / sourceRect.height;

    const left = Math.max(
      Math.min(e.pageX - sourceRect.left, sourceRect.width),
      0
    );
    const top = Math.max(
      Math.min(e.pageY - sourceRect.top, sourceRect.height),
      0
    );

    setOffset({
      left: (left * -xRatio) / 2,
      top: (top * -yRatio) / 2,
    });
  };

  return (
    <>
      <section className="mt-8 mb-12">
        <Banner />
      </section>
      <section className="overflow-hidden">
        <div className="row">
          <div className="relative w-full h-full lg:col-6 mb-8 flex justify-center">
            <div
              ref={containerRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
              className="relative overflow-hidden block w-full h-full"
            >
              <img
                ref={sourceRef}
                alt={product?.images[0].name}
                srcset={product?.images[0]?.srcset}
                src={product?.images[0]?.src}
                sizes={product?.images[0]?.sizes}
                loading="lazy"
                decoding="async"
                width={689}
                height={689}
              />
              <img
                ref={targetRef}
                alt="target"
                src={product?.images[0]?.src}
                loading="lazy"
                decoding="async"
                width={689}
                height={689}
                className={`absolute inset-0`}
                style={{
                  opacity: opacity,
                  top: offset?.top,
                  left: offset?.left,
                  scale: "2",
                  transformOrigin: "top center",
                }}
              />
            </div>
          </div>
          <div className="lg:col-6 mb-8">
            <h1 className={styles["product-title"]}>{product?.name}</h1>
            <p className={styles["product-price"]}>
              {product?.on_sale ? (
                <Fragment>
                  <del>
                    <span>
                      <bdi>
                        <span>
                          {Number(
                            product?.prices?.regular_price
                          ).toLocaleString("vi-VN", {
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
                          {Number(offer?.price).toLocaleString("vi-VN", {
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
                    {product?.prices?.price_range
                      ? `${Number(
                          product?.prices?.price_range?.min_amount
                        ).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })} - ${Number(
                          product?.prices?.price_range?.max_amount
                        ).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}`
                      : Number(product?.prices?.price).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                  </span>
                </bdi>
              )}
            </p>
            <p className={styles["product-stock"]}>
              Availability:{" "}
              <span>
                {product?.is_in_stock ? product?.add_to_cart?.maximum : 0} In
                Stock
              </span>
            </p>
            {product?.short_description && (
              <div
                className={styles["product-short-description"]}
                dangerouslySetInnerHTML={{ __html: product?.short_description }}
              />
            )}
            {date ? (
              <div className="mb-6">
                <h4 className={styles["product-deal-title"]}>
                  Hungry Up ! Deals end in :
                </h4>
                <div className={styles["product-countdown"]}>
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
              </div>
            ) : (
              ""
            )}
            <div className={styles["product-cart"]}>
              <div className={styles["product-quantity"]}>
                <div className="control">
                  <button
                    className="btn-number quantity-minus"
                    onClick={() => {
                      if (quantity > product?.add_to_cart?.minimum) {
                        setQuantity(quantity - 1);
                      }
                    }}
                  >
                    -
                  </button>
                  <input
                    type="text"
                    title="Quantity"
                    name="quantity"
                    min={product?.add_to_cart?.minimum}
                    max={product?.add_to_cart?.maximum}
                    size={4}
                    defaultValue={quantity}
                    pattern="[0-9]*"
                    className="border-none text-center w-10 h-10 p-0 px-1"
                  />
                  <button
                    className="btn-number quantity-plus"
                    onClick={() => {
                      if (quantity < product?.add_to_cart?.maximum) {
                        setQuantity(quantity + 1);
                      }
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                id="add-to-cart"
                name="add-to-cart"
                className={styles["add-to-cart"]}
              >
                Add to cart
              </button>
            </div>
            <div className={styles["product-meta"]}>
              <div className="sku">
                SKU: <span className="sku-content">{product?.sku}</span>
              </div>
              <div className="categories">
                Categories:{" "}
                <span className="categories-content">
                  {product?.categories?.map((cat, catIdx) => {
                    const last = catIdx === product?.categories?.length - 1;

                    if (last) {
                      return cat.name;
                    }
                    return `${cat.name}, `;
                  })}
                </span>
              </div>
              <div className="tags">
                Tags:{" "}
                <span className="tags-content">
                  {product?.tags?.map((tag, tagIdx) => {
                    const last = tagIdx === product?.tags?.length - 1;

                    if (last) {
                      return tag.name;
                    }
                    return `${tag.name}, `;
                  })}
                </span>
              </div>
            </div>
            <ShareSocialList title={product?.name} url={router.asPath} />
          </div>
        </div>
      </section>
      <section className="mt-10">
        <Tabs items={tabList} position={"left"} />
      </section>
      <section className="pb-16">
        <div className="text-center">
          <h3 className="title mt-16 mb-14">Related products</h3>
        </div>
        <ProSlider products={related} />
      </section>
    </>
  );
};

export default SanPhamTemplate;
