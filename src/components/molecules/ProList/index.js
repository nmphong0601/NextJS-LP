import ProCard from "components/molecules/ProCard";
import styles from "./Index.module.scss";

const ProList = ({ products = [], ...props }) => {
  return (
    <div className="row">
      {products.map((product, index) => {
        return (
          <div key={`product-item-${index}`} className="sm:col-6 md:col-4 xl:col-3 mb-5 lg:mb-8">
            <ProCard data={product} />
          </div>
        );
      })}
    </div>
  );
};

export default ProList;
