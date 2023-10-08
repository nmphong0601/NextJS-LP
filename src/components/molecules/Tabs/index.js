import { useState } from "react";
import styles from "./Index.module.scss";

const Tabs = ({ items = [], ...props }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div>
      <div className={`${styles["tab-head"]}`}>
        <ul className={`${styles["tab-links"]}`} style={{ listStyle: "none" }}>
          {items.map((item, idxItem) => {
            return (
              <li
                key={`tab-head-item-${idxItem}`}
                className="tab-link"
                onClick={() => {
                  setActiveTab(idxItem);
                }}
              >
                <button
                  className={`${activeTab === idxItem ? "btn-active" : ""}`}
                >
                  <span>{item.title}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className={`${styles["tab-container"]}`}>
        {items.map((item, idxItem) => {
          return (
            <div
              key={`tab-content-item-${idxItem}`}
              className={`${styles["tab-panel"]} ${
                activeTab === idxItem ? "tab-panel-active" : ""
              }`}
            >
              {typeof item.content === "string" ? (
                <div dangerouslySetInnerHTML={{ __html: item.content }}></div>
              ) : (
                item.content
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tabs;
