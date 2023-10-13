import styles from "./index.module.scss";

import Card from "components/molecules/Card";
import PosterSlider from "components/molecules/PosterSlider";
import ProList from "components/molecules/ProList";
import ProSlider from "components/molecules/ProSlider";
import Tabs from "components/molecules/Tabs";
import Gallery from "components/molecules/Gallery";

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
  {
    id: 18,
    title: "Monstera subpinnata",
    rate: 5,
    price: "330000",
    image: {
      alt: "Monstera subpinnata",
      src: "assets/images/products/pd-18/pd18-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Monstera subpinnata",
      src: "assets/images/products/pd-1/pd1-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 9,
      price: "299000",
      expireDate: "12/31/2023 21:15:00",
    },
    quantity: 13,
  },
  {
    id: 17,
    title: "Aspidistra Elatior",
    rate: 0,
    price: "150000",
    image: {
      alt: "Aspidistra Elatior",
      src: "assets/images/products/pd-17/pd17-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Aspidistra Elatior",
      src: "assets/images/products/pd-17/pd17-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 13,
      price: "130000",
      expireDate: "10/31/2023 11:30:00",
    },
    quantity: 2,
  },
  {
    id: 11,
    title: "Cretan Brake Fern",
    rate: 0,
    price: "250000",
    image: {
      alt: "Cretan Brake Fern",
      src: "assets/images/products/pd-11/pd11-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Cretan Brake Fern",
      src: "assets/images/products/pd-11/pd11-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: null,
    quantity: 7,
  },
  {
    id: 7,
    title: "Canary Date Palm",
    rate: 2,
    price: "310000",
    image: {
      alt: "Canary Date Palm",
      src: "assets/images/products/pd-7/pd7-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Canary Date Palm",
      src: "assets/images/products/pd-7/pd7-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 6,
      price: "290000",
      expireDate: "10/21/2023 8:45:00",
    },
    quantity: 5,
  },
  {
    id: 4,
    title: "Bird's Nest Fern",
    rate: 3.5,
    price: "340000",
    image: {
      alt: "Bird's Nest Fern",
      src: "assets/images/products/pd-4/pd4-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Bird's Nest Fern",
      src: "assets/images/products/pd-4/pd4-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 6,
      price: "309000",
      expireDate: "10/10/2023 19:00:00",
    },
    quantity: 10,
  },
  {
    id: 2,
    title: "Areca palm",
    rate: 3,
    price: "210000",
    image: {
      alt: "Areca palm",
      src: "assets/images/products/pd-2/pd2-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Areca palm",
      src: "assets/images/products/pd-2/pd2-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 10,
      price: "189000",
      expireDate: "11/05/2023 6:30:00",
    },
    quantity: 0,
  },
];

const bestSellerProducts = [
  {
    id: 6,
    title: "Broadleaf Lady Palm",
    rate: 4,
    price: "180000",
    image: {
      alt: "Broadleaf Lady Palm",
      src: "assets/images/products/pd-6/pd6-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Broadleaf Lady Palm",
      src: "assets/images/products/pd-6/pd6-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: null,
    quantity: 13,
  },
  {
    id: 16,
    title: "Golden Pothos",
    rate: 0,
    price: "280000",
    image: {
      alt: "Golden Pothos",
      src: "assets/images/products/pd-16/pd16-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Golden Pothos",
      src: "assets/images/products/pd-16/pd16-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: null,
    quantity: 18,
  },
  {
    id: 18,
    title: "Monstera subpinnata",
    rate: 5,
    price: "330000",
    image: {
      alt: "Monstera subpinnata",
      src: "assets/images/products/pd-18/pd18-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Monstera subpinnata",
      src: "assets/images/products/pd-1/pd1-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 9,
      price: "299000",
      expireDate: "12/31/2023 21:15:00",
    },
    quantity: 13,
  },
  {
    id: 11,
    title: "Cretan Brake Fern",
    rate: 0,
    price: "250000",
    image: {
      alt: "Cretan Brake Fern",
      src: "assets/images/products/pd-11/pd11-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Cretan Brake Fern",
      src: "assets/images/products/pd-11/pd11-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: null,
    quantity: 7,
  },
  {
    id: 7,
    title: "Canary Date Palm",
    rate: 2,
    price: "310000",
    image: {
      alt: "Canary Date Palm",
      src: "assets/images/products/pd-7/pd7-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Canary Date Palm",
      src: "assets/images/products/pd-7/pd7-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 6,
      price: "290000",
      expireDate: "10/21/2023 8:45:00",
    },
    quantity: 5,
  },
  {
    id: 4,
    title: "Bird's Nest Fern",
    rate: 4,
    price: "340000",
    image: {
      alt: "Bird's Nest Fern",
      src: "assets/images/products/pd-4/pd4-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Bird's Nest Fern",
      src: "assets/images/products/pd-4/pd4-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 6,
      price: "309000",
      expireDate: "10/10/2023 19:00:00",
    },
    quantity: 10,
  },
  {
    id: 8,
    title: "Fiddle Leaf Fig",
    rate: 4.5,
    price: "350000",
    image: {
      alt: "Fiddle Leaf Fig",
      src: "assets/images/products/pd-8/pd8-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Fiddle Leaf Fig",
      src: "assets/images/products/pd-8/pd8-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 17,
      price: "290000",
      expireDate: null,
    },
    quantity: 10,
  },
];

const newArrivalProducts = [
  {
    id: 5,
    title: "Boston Fern",
    rate: 0,
    price: "230000",
    image: {
      alt: "Boston Fern",
      src: "assets/images/products/pd-5/pd5-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Boston Fern",
      src: "assets/images/products/pd-5/pd5-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: null,
    quantity: 35,
  },
  {
    id: 17,
    title: "Aspidistra Elatior",
    rate: 0,
    price: "150000",
    image: {
      alt: "Aspidistra Elatior",
      src: "assets/images/products/pd-17/pd17-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Aspidistra Elatior",
      src: "assets/images/products/pd-17/pd17-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 13,
      price: "130000",
      expireDate: "10/31/2023 11:30:00",
    },
    quantity: 2,
  },
  {
    id: 20,
    title: "Philodendron tenue",
    rate: 4,
    price: {
      min: "250000",
      max: "290000",
    },
    image: {
      alt: "Philodendron tenue",
      src: "assets/images/products/pd-20/pd20-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Philodendron tenue",
      src: "assets/images/products/pd-20/pd20-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: null,
    quantity: 12,
  },
  {
    id: 21,
    title: "Cyperus helferi",
    rate: 5,
    price: {
      min: "290000",
      max: "320000",
    },
    image: {
      alt: "Cyperus helferi",
      src: "assets/images/products/pd-21/pd21-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Cyperus helferi",
      src: "assets/images/products/pd-21/pd21-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: null,
    quantity: 10,
  },
  {
    id: 2,
    title: "Areca palm",
    rate: 3,
    price: "210000",
    image: {
      alt: "Areca palm",
      src: "assets/images/products/pd-2/pd2-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Areca palm",
      src: "assets/images/products/pd-2/pd2-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 10,
      price: "189000",
      expireDate: "11/05/2023 6:30:00",
    },
    quantity: 0,
  },
];

const topRateProducts = [
  {
    id: 6,
    title: "Broadleaf Lady Palm",
    rate: 4,
    price: "180000",
    image: {
      alt: "Broadleaf Lady Palm",
      src: "assets/images/products/pd-6/pd6-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Broadleaf Lady Palm",
      src: "assets/images/products/pd-6/pd6-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: null,
    quantity: 13,
  },
  {
    id: 18,
    title: "Monstera subpinnata",
    rate: 5,
    price: "330000",
    image: {
      alt: "Monstera subpinnata",
      src: "assets/images/products/pd-18/pd18-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Monstera subpinnata",
      src: "assets/images/products/pd-1/pd1-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 9,
      price: "299000",
      expireDate: "12/31/2023 21:15:00",
    },
    quantity: 13,
  },
  {
    id: 4,
    title: "Bird's Nest Fern",
    rate: 4,
    price: "340000",
    image: {
      alt: "Bird's Nest Fern",
      src: "assets/images/products/pd-4/pd4-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Bird's Nest Fern",
      src: "assets/images/products/pd-4/pd4-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 6,
      price: "309000",
      expireDate: "10/10/2023 19:00:00",
    },
    quantity: 10,
  },
  {
    id: 8,
    title: "Fiddle Leaf Fig",
    rate: 4.5,
    price: "350000",
    image: {
      alt: "Fiddle Leaf Fig",
      src: "assets/images/products/pd-8/pd8-600x600.jpg",
      width: 600,
      height: 600,
    },
    imageHover: {
      alt: "Fiddle Leaf Fig",
      src: "assets/images/products/pd-8/pd8-600x600.jpg",
      width: 600,
      height: 600,
    },
    saleOff: {
      ratio: 17,
      price: "290000",
      expireDate: null,
    },
    quantity: 10,
  },
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
