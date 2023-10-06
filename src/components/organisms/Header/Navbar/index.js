import { Fragment, useState } from "react";
import styles from "./Index.module.scss";
import Image from "next/image";

const MenuItem = ({ data, ...props }) => {
  let Tag = "a";
  let Dropdown = () => <Fragment></Fragment>;
  let MenuList = () => <Fragment></Fragment>;
  let MenuGroup = () => <Fragment></Fragment>;
  const [activeMenu, setActiveMenu] = useState(null);

  if (data.child && data.child.length > 0) {
    Tag = "span";
    Dropdown = () => {
      return (
        <span className={`toggle-submenu group-hover:text-nmp-primary`}></span>
      );
    };
    MenuList = ({ parent }) => {
      return (
        <ul
          className={`sub-menu transition-all duration-700 ease-out ${
            activeMenu === parent.id
              ? "translate-y-0 opacity-100 z-[100] visible"
              : "translate-y-4 opacity-0 z-0 invisible"
          }`}
        >
          {parent.child.map((item, index) => {
            return (
              <li
                key={`submenu-item-${parent.id}-${index}`}
                className="hover:bg-nmp-gray"
              >
                <a href={item.url} title={item.label}>
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      );
    };

    MenuGroup = ({ parent }) => {
      return (
        <div
          className={`sub-group-menu transition-all duration-700 ease-out ${
            activeMenu === parent.id
              ? "translate-y-0 z-50"
              : "translate-y-10 z-0 opacity-0 invisible h-0"
          }`}
        >
          {parent.background && (
            <div className="absolute z-0 w-full h-full left-0 top-0 p-0">
              <Image
                unoptimized={true}
                src={`${parent.background}`}
                alt={parent.label}
                fill
              />
            </div>
          )}
          {parent.child.map((item, index) => {
            return (
              <div
                key={`group-${index}`}
                className="group-wrapper relative z-10"
              >
                <div className="group-title">
                  <h2>{item.label}</h2>
                </div>
                <div className="group-container">
                  <ul className="group-menu">
                    {item.child.map((item, index) => {
                      return (
                        <li key={`group-menu-item-${parent.id}-${index}`}>
                          <a href={item.url} title={item.label}>
                            {item.label}
                          </a>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      );
    };
  }

  return (
    <li
      className="inline-block cursor-pointer px-6 first:pl-0 uppercase text-sm"
      onMouseEnter={() => setActiveMenu(data.id)}
      onMouseLeave={() => setActiveMenu(null)}
      {...props}
    >
      <div className="relative group w-full">
        <Tag
          className="font-bold block label-block-link"
          href={Tag === "a" ? data.url : null}
          title={data.label}
        >
          {data.label}
        </Tag>
        <Dropdown />
        {data.type !== "group" && <MenuList parent={data} />}
      </div>
      {data.type == "group" && <MenuGroup parent={data} />}
    </li>
  );
};

const Navbar = ({ className, categories = [], navigates = [] }) => {
  const [isDropdown, setIsDropdown] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <div className={`${styles["nav-bar"]} ${className ? className : ""}`}>
      <div className="nav-category">
        <div className="block-title" onClick={() => setIsDropdown(!isDropdown)}>
          <span className="icon-title">
            <span className="w-6 block border-solid border-b-2 border-white group-hover:border-nmp-primary mb-2"></span>
            <span className="w-4 block border-solid border-b-2 border-white group-hover:border-nmp-primary mb-2"></span>
            <span className="w-6 block border-solid border-b-2 border-white group-hover:border-nmp-primary"></span>
          </span>
          <span className="text-title">
            {categories.find((x) => x.value === activeCategory)?.label}
          </span>
        </div>
        <div
          className={`block-content ${
            isDropdown ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
        >
          <ul>
            {categories.map((category, index) => {
              return (
                <li
                  key={`nav-category-${index}`}
                  className="border-b last:border-none hover:cursor-pointer"
                  onClick={() => {
                    setActiveCategory(category.value);
                    setIsDropdown(false);
                  }}
                >
                  <a className="block mx-6 py-4">{category.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="nav-menu">
        <ul className="menu">
          {navigates.map((item, index) => {
            return <MenuItem key={`menu-item-${index}`} data={item} />;
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
