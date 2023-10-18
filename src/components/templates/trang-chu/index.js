import styles from "./index.module.scss";

import Card from "components/molecules/Card";
import PosterSlider from "components/molecules/PosterSlider";
import ProList from "components/molecules/ProList";
import ProSlider from "components/molecules/ProSlider";
import Tabs from "components/molecules/Tabs";
import Gallery from "components/molecules/Gallery";

import staticData from "common/data.json";

const posters = [
  {
    title: "Hanging Plants",
    description: "Adipiscing elit curabitur senectus sem",
    price: null,
    button: {
      label: "Show now",
      title: "Show now",
      url: "/san-pham",
    },
    background: {
      src: "assets/images/posters/home1-banner1.jpg",
      width: 380,
      height: 300,
      alt: "home1-banner1",
    },
  },
  {
    title: "Grow Orchids",
    description: "Cras pulvinar lorem ipsum dolor conse",
    price: "$379.00",
    button: null,
    background: {
      src: "assets/images/posters/home1-banner2.jpg",
      width: 380,
      height: 300,
      alt: "home1-banner2",
    },
  },
];

const saleOffProducts = [
  ...staticData.products.filter((x) => x.on_sale === true),
];

const bestSellerProducts = [
  ...staticData.products.filter(
    (x) =>
      x.categories.some((cat) => cat.name === "Hot Sale") ||
      x.tags.some((cat) => cat.name === "Hot Sale")
  ),
];

const newArrivalProducts = [
  ...staticData.products.filter((x) =>
    x.tags.some((cat) => cat.name === "New Arrivals")
  ),
];

const topRateProducts = [
  ...staticData.products.filter((x) => Number(x.average_rating) >= 4),
];

const images = [
  {
    src: "assets/images/galleries/item-instagram-1.jpg",
    width: 384,
    height: 384,
  },
  {
    src: "assets/images/galleries/item-instagram-2-266x266.jpg",
    width: 266,
    height: 266,
  },
  {
    src: "assets/images/galleries/item-instagram-3-266x266.jpg",
    width: 266,
    height: 266,
  },
  {
    src: "assets/images/galleries/item-instagram-4-266x266.jpg",
    width: 266,
    height: 266,
  },
  {
    src: "assets/images/galleries/item-instagram-5-266x266.jpg",
    width: 266,
    height: 266,
  },
];

const TrangChuTemplate = ({ infor }) => {
  const tabList = [
    {
      title: "Bán chạy",
      content: <ProList products={bestSellerProducts} />,
    },
    {
      title: "Sản phẩm mới",
      content: <ProList products={newArrivalProducts} />,
    },
    {
      title: "Đánh giá cao",
      content: <ProList products={topRateProducts} />,
    },
  ];

  return (
    <>
      <div>
        <section className="pt-5 pb-5 relative inline-grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4">
          <PosterSlider className="col-span-1 lg:col-span-2" />
          <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 lg:grid-cols-1 lg:grid-rows-2 gap-4">
            {posters.map((poster, index) => {
              return (
                <Card
                  key={`poster-top-${index}`}
                  type={"simple"}
                  data={poster}
                />
              );
            })}
          </div>
        </section>
        <section className="pt-5 pb-14 relative">
          <div className="text-center">
            <h3 className="title">Deal of the day</h3>
          </div>
          <ProSlider products={saleOffProducts} />
        </section>
        <section className="pt-5 pb-14 relative">
          <Tabs items={tabList} />
        </section>
        <Gallery title={"Gallery Feed"} images={images} />
      </div>
    </>
  );
};

export default TrangChuTemplate;
