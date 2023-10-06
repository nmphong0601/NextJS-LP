import { Fragment, useState } from "react";
import styles from "./Index.module.scss";

const MenuItem = ({ data, getChildren, ...props }) => {
  let Tag = "a";
  let Dropleft = () => <Fragment></Fragment>;

  if (data.child && data.child.length > 0) {
    Tag = "span";
    Dropleft = ({ className, ...props }) => {
      return (
        <span
          className={`toggle-submenu-left group-hover:text-nmp-primary`}
          {...props}
        ></span>
      );
    };
  }

  return (
    <li
      className="relative group cursor-pointer px-6 capitalize text-sm border-b border-nmp-gray"
      {...props}
    >
      <Tag
        className="block label-block-link"
        href={Tag === "a" ? data.url : null}
        title={data.label}
      >
        {data.label}
      </Tag>
      <Dropleft
        onClick={() => {
          const isGroupChild = data.type === "group" ? true : false;
          getChildren && getChildren(isGroupChild, data.child);
        }}
      />
    </li>
  );
};

const MenuItemGroup = ({ data, className, ...props }) => {
  return (
    <div className="group-wrapper relative z-10" {...props}>
      <div className="group-title">
        <h2>{data.label}</h2>
      </div>
      <div className="group-container">
        <ul className="group-menu">
          {data.child.map((item, index) => {
            return (
              <li key={`group-menu-item-${data.id}-${index}`}>
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
};

const Sidebar = ({ isOpen = true, changeState, navigates = [] }) => {
  const [histories, setHistories] = useState([]);
  const [depths, setDepths] = useState([{ type: "list", value: 1 }]);

  return (
    <div className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}>
      <div className="menu-actions">
        <button
          className={`menu-prev-btn ${depths.length === 1 ? "hidden" : ""}`}
          onClick={() => {
            const _depths = [...depths];
            const _histories = [...histories];

            _depths.pop();
            _histories.pop();

            setDepths(_depths);
            setHistories(_histories);
          }}
        ></button>
        <button
          className="menu-close-btn"
          onClick={() => {
            changeState && changeState(false);
          }}
        >
          x
        </button>
      </div>
      <div className="menu-panels">
        {depths.map((depth, index) => {
          return (
            <div
              key={`menu-panels-${index}`}
              className={`menu-panels-main ${
                depths.length === index + 1
                  ? "menu-panels-opened"
                  : "menu-panels-closed"
              }`}
            >
              {depth.type === "list" ? (
                <ul>
                  {depths.length === 1 || index === 0
                    ? navigates.map((navigate, index) => {
                        return (
                          <MenuItem
                            key={`navigate-${index}`}
                            data={navigate}
                            getChildren={(isGroup, children) => {
                              setDepths([
                                ...depths,
                                {
                                  type: isGroup ? "group" : "list",
                                  value: depths.length + 1,
                                },
                              ]);
                              setHistories([...histories, children]);
                            }}
                          />
                        );
                      })
                    : histories[index - 1] &&
                      histories[index - 1].length > 0 &&
                      histories[index - 1].map((child, childIndex) => {
                        return (
                          <MenuItem
                            key={`navigate-child-${index}-${childIndex}`}
                            data={child}
                            getChildren={(isGroup, children) => {
                              setDepths([
                                ...depths,
                                {
                                  type: isGroup ? "group" : "list",
                                  value: depths.length + 1,
                                },
                              ]);
                              setHistories([...histories, children]);
                            }}
                          />
                        );
                      })}
                </ul>
              ) : (
                <div className="sub-group-menu">
                  {depths.length === 1 || index === 0
                    ? navigates.map((navigate, index) => {
                        return (
                          <MenuItemGroup
                            key={`navigate-group-${index}`}
                            data={navigate}
                          />
                        );
                      })
                    : histories[index - 1] &&
                      histories[index - 1].length > 0 &&
                      histories[index - 1].map((child, childIndex) => {
                        return (
                          <MenuItemGroup
                            key={`navigate-group-child-${index}-${childIndex}`}
                            data={child}
                          />
                        );
                      })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
