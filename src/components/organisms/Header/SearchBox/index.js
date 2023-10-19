import { useState } from "react";
import styles from "./Index.module.scss";

const SearchBox = ({ className, categories = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className={`${styles["search-box"]} ${className ? className : ""}`}>
      <div className="category hidden lg:block">
        <div
          className="chosen-container chosen-container-single chosen-container-active chosen-with-drop"
          onMouseLeave={() => {
            setIsOpen(false);
          }}
        >
          <a className="chosen-single" onClick={() => setIsOpen(!isOpen)}>
            <span className="chosen-label">
              {categories.find((x) => x.id === activeCategory)?.name}
            </span>
            <div className="chosen-dropdown-btn">
              <b></b>
            </div>
          </a>
          <div
            className={`chosen-dropdown ${!isOpen && "hidden"}`}
            onMouseLeave={() => {
              setIsOpen(false);
            }}
          >
            <ul className="chosen-results">
              {categories.map((category, index) => {
                return (
                  <li
                    key={`category-${index}`}
                    className="active-result"
                    onClick={() => {
                      setActiveCategory(category.id);
                      setIsOpen(false);
                    }}
                  >
                    {category.name}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <input
        type="text"
        autoComplete="off"
        className="txt-search focus:ring-0 w-full"
        placeholder="Search here..."
        aria-label="Search here..."
        aria-describedby="basic-addon"
      />
      <button type="button" className="btn-shine btn-search">
        <span className="flaticon-magnifying-glass"></span>
      </button>
    </div>
  );
};

export default SearchBox;
