import styles from "./index.module.scss";
import Card from "components/molecules/Card";
import Slider from "components/molecules/Slider";

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

const TrangChuTemplate = ({ infor }) => {
  return (
    <>
      <div>
        <section className="py-5 relative inline-grid grid-cols-1 lg:grid-cols-3 grid-rows-1 gap-4">
          <Slider className="col-span-1 lg:col-span-2" />
          <div className="grid grid-cols-2 grid-rows-1 lg:grid-cols-1 lg:grid-rows-2 gap-4">
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
      </div>
    </>
  );
};

export default TrangChuTemplate;
