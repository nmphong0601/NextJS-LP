import { useState } from "react";
import styles from "./Index.module.scss";

import useDeviceDetect from "common/utils/useDeviceDetect";

import SearchBox from "./SearchBox";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

const categories = [
  {
    label: "Tất cả loại sản phẩm",
    url: "/",
    value: 0,
  },
  {
    label: "Loại 1",
    url: "/type-1",
    value: 1,
  },
  {
    label: "Loại 2",
    url: "/type-2",
    value: 2,
  },
  {
    label: "Loại 3",
    url: "/type-3",
    value: 3,
  },
];

const menus = [
  {
    id: 1,
    label: "Trang Chủ",
    url: "/trang-chu",
    child: [],
  },
  {
    id: 2,
    label: "Sản phẩm",
    url: "/san-pham",
    type: "group",
    child: [
      {
        id: 21,
        label: "Loại 1",
        url: "/san-pham?loai=1",
        child: [
          {
            id: 211,
            label: "Sản phẩm 1",
            url: "/san-pham?id=1&loai=1",
            child: [],
          },
          {
            id: 212,
            label: "Sản phẩm 2",
            url: "/san-pham?id=2&loai=1",
            child: [],
          },
          {
            id: 213,
            label: "Sản phẩm 3",
            url: "/san-pham?id=3&loai=1",
            child: [],
          },
        ],
      },
      {
        id: 22,
        label: "Loại 2",
        url: "/san-pham?loai=2",
        child: [
          {
            id: 221,
            label: "Sản phẩm 1",
            url: "/san-pham?id=1&loai=2",
            child: [],
          },
          {
            id: 222,
            label: "Sản phẩm 2",
            url: "/san-pham?id=2&loai=2",
            child: [],
          },
          {
            id: 223,
            label: "Sản phẩm 3",
            url: "/san-pham?id=3&loai=2",
            child: [],
          },
        ],
      },
      {
        id: 23,
        label: "Loại 3",
        url: "/san-pham?loai=3",
        child: [
          {
            id: 231,
            label: "Sản phẩm 1",
            url: "/san-pham?id=1&loai=3",
            child: [],
          },
          {
            id: 232,
            label: "Sản phẩm 2",
            url: "/san-pham?id=2&loai=3",
            child: [],
          },
          {
            id: 233,
            label: "Sản phẩm 3",
            url: "/san-pham?id=3&loai=3",
            child: [],
          },
          {
            id: 234,
            label: "Sản phẩm 4",
            url: "/san-pham?id=4&loai=3",
            child: [],
          },
          {
            id: 235,
            label: "Sản phẩm 5",
            url: "/san-pham?id=5&loai=3",
            child: [],
          },
        ],
      },
      {
        id: 24,
        label: "Loại 4",
        url: "/san-pham?loai=4",
        child: [
          {
            id: 241,
            label: "Sản phẩm 1",
            url: "/san-pham?id=1&loai=4",
            child: [],
          },
          {
            id: 242,
            label: "Sản phẩm 2",
            url: "/san-pham?id=2&loai=4",
            child: [],
          },
          {
            id: 243,
            label: "Sản phẩm 3",
            url: "/san-pham?id=3&loai=4",
            child: [],
          },
        ],
      },
      {
        id: 25,
        label: "Loại 5",
        url: "/san-pham?loai=5",
        child: [
          {
            id: 251,
            label: "Sản phẩm 1",
            url: "/san-pham?id=1&loai=5",
            child: [],
          },
          {
            id: 252,
            label: "Sản phẩm 2",
            url: "/san-pham?id=2&loai=5",
            child: [],
          },
          {
            id: 253,
            label: "Sản phẩm 3",
            url: "/san-pham?id=3&loai=5",
            child: [],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    label: "Blog",
    url: null,
    background: "/assets/images/mega-bg.jpg",
    type: "group",
    child: [
      {
        id: 31,
        label: "Blog layout",
        url: "/blog",
        child: [
          {
            id: 311,
            label: "No Sidebar",
            url: "/blog?layout=no-sidebar",
            child: [],
          },
          {
            id: 312,
            label: "Has Sidebar",
            url: "/blog?layout=has-sidebar",
            child: [],
          },
          {
            id: 313,
            label: "Blog Standard",
            url: "/blog?layout=standard",
            child: [],
          },
          {
            id: 314,
            label: "Blog Grid",
            url: "/blog?layout=grid",
            child: [],
          },
          {
            id: 315,
            label: "Blog List",
            url: "/blog?layout=list",
            child: [],
          },
        ],
      },
      {
        id: 32,
        label: "Post layout",
        url: "/post",
        child: [
          {
            id: 321,
            label: "No Sidebar",
            url: "/post?layout=no-sidebar",
            child: [],
          },
          {
            id: 322,
            label: "Has Sidebar",
            url: "/post?layout=has-sidebar",
            child: [],
          },
          {
            id: 323,
            label: "Product In Post",
            url: "/post?layout=product-in",
            child: [],
          },
          {
            id: 324,
            label: "Post Standard",
            url: "/post?layout=standard",
            child: [],
          },
          {
            id: 325,
            label: "Post Video",
            url: "/post?layout=video",
            child: [],
          },
          {
            id: 326,
            label: "Post Gallery",
            url: "/post?layout=gallery",
            child: [],
          },
        ],
      },
    ],
  },
  {
    id: 4,
    label: "Trang",
    url: null,
    child: [
      {
        id: 41,
        label: "Liên hệ",
        url: "/lien-he",
        child: [],
      },
      {
        id: 42,
        label: "404",
        url: "/404",
        child: [],
      },
    ],
  },
  {
    id: 5,
    label: "Về chúng tôi",
    url: "/ve-chung-toi",
    child: [],
  },
];

const LoginFormWidget = ({ isOpen }) => {
  const [remember, setRemember] = useState(false);

  return (
    <div
      className={`${styles["popup-dialog"]} ${styles["login-form"]} ${
        isOpen ? "translate-y-0 z-50" : "translate-y-5 opacity-0 z-0 invisible"
      }`}
    >
      <div className="w-full text-left p-4 px-5 font-semibold">Đăng nhập</div>
      <div className="p-4 px-5 text-left w-full">
        <div className="form-login">
          <div className="input-group flex flex-col items-start">
            <label className="inline-flex w-full" htmlFor="username">
              <span>Tên đăng nhập hoặc email&nbsp;</span>
              <span className={styles.required}>*</span>
            </label>
            <input
              id="username"
              name="username"
              type="text"
              autoComplete="off"
              className="w-full border border-gray-300 focus:border-gray-300 ring-0 mb-2"
            />
          </div>
          <div className="input-group flex flex-col items-start">
            <label className="inline-flex w-full" htmlFor="password">
              <span>Mật khẩu&nbsp;</span>
              <span className={styles.required}>*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="off"
              className="w-full border border-gray-300 focus:border-gray-300 ring-0 mb-2"
            />
          </div>
          <div className="mb-4">
            <label>
              <input type="checkbox" />
              <span
                className={`relative pl-7 ${remember ? "checked" : ""}`}
                onClick={() => setRemember(!remember)}
              >
                Ghi nhớ
              </span>
            </label>
          </div>
          <button className="bg-nmp-primary p-4 px-5 hover:bg-nmp-dark">
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

const CartsWidget = ({ isOpen }) => {
  return (
    <div
      className={`${styles["popup-dialog"]} ${styles["widget-carts"]} ${
        isOpen ? "translate-y-0 z-50" : "translate-y-5 opacity-0 z-0 invisible"
      }`}
    >
      <div className="w-full text-left p-4 px-5 font-semibold">Giỏ hàng</div>
      <div className="p-4 px-5 text-left w-full">
        <p className="message-cart">Không có sản phẩm trong giỏ hàng</p>
      </div>
    </div>
  );
};

const SearchWidget = ({ isOpen }) => {
  return (
    <div
      className={`${
        styles["popup-dialog"]
      } w-full left-0 top-full py-4 divide-y divide-gray-300 ${
        isOpen ? "translate-y-0 z-50" : "translate-y-5 opacity-0 z-0 invisible"
      }`}
    >
      <div className="w-full text-left p-4 md:px-8 lg:px-16 font-semibold">
        Tìm kiếm
      </div>
      <div className="flex justify-center p-4 pb-0">
        <SearchBox className="w-full" categories={categories} />
      </div>
    </div>
  );
};

const Header = () => {
  const { isDesktop } = useDeviceDetect();
  const [showSidebar, setShowSidebar] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);
  const [showWidget, setShowWidget] = useState(false);
  const [showSearchWidget, setShowSearchWidget] = useState(false);

  return (
    <header className={styles.header}>
      <section className="header-top">
        <div className="container flex max-w-full items-center justify-center lg:justify-between">
          <ul className="menu-left">
            <li className="text-center lg:text-left">
              <a
                title="Chào mừng bạn đến với cửa hàng Salom!"
                href={process.env.NEXT_HOST}
              >
                Chào mừng bạn đến với cửa hàng Salom!
              </a>
            </li>
          </ul>
          <ul className="menu-right">
            <li className="first:pl-0 last:pr-0 px-2">
              <a
                title="Về chúng tôi"
                href={`${process.env.NEXT_HOST}/about-us`}
              >
                Về chúng tôi
              </a>
            </li>
            <li className="first:pl-0 last:pr-0 px-2">
              <a title="Liên hệ" href={`${process.env.NEXT_HOST}/contact-us`}>
                Liên hệ
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="header-middle">
        <div className="flex items-center lg:hidden">
          <div className="menu-bar inline-block align-middle text-[0]">
            <button
              className="menu block leading-10 w-7 h-12 p-3 px-0 group"
              onClick={() => setShowSidebar(true)}
            >
              <span className="w-full block border-solid border-b-2 border-black group-hover:border-nmp-primary mb-2"></span>
              <span className="w-full block border-solid border-b-2 border-black group-hover:border-nmp-primary mb-2"></span>
              <span className="w-full block border-solid border-b-2 border-black group-hover:border-nmp-primary mb-2"></span>
            </button>
          </div>
          <div className="header-search-inner" data-teamo="teamo-dropdown">
            <button
              className="link-dropdown block-link"
              onClick={() => {
                setShowLoginForm(false);
                setShowWidget(false);
                setShowSearchWidget(!showSearchWidget);
              }}
            >
              <span
                className={
                  showSearchWidget
                    ? "flaticon-close text-xl"
                    : "flaticon-magnifying-glass-1"
                }
              ></span>
            </button>
          </div>
        </div>
        <SearchWidget isOpen={showSearchWidget} />
        <div className="header-logo">
          <a href={process.env.NEXT_HOST}>
            <img alt="Salom" className="logo" src="assets/images/logo.png" />
          </a>
        </div>
        <div className="hidden lg:block">
          <SearchBox categories={categories} />
        </div>
        <div className="customer">
          <div className="block-user relative">
            <button
              className="block-link"
              onClick={() => {
                if (isDesktop) {
                  setShowLoginForm(!showLoginForm);
                  setShowWidget(false);
                  setShowSearchWidget(false);
                } else {
                  location.href =
                    "https://nmp-amazon-store.vercel.app//auth/login";
                }
              }}
            >
              <span className="flaticon-user"></span>
            </button>
            {<LoginFormWidget isOpen={showLoginForm} />}
          </div>
          <div className="block-cart">
            <button
              className="block-link"
              onClick={() => {
                setShowLoginForm(false);
                setShowWidget(!showWidget);
                setShowSearchWidget(false);
              }}
            >
              <span className="flaticon-shopping-bag-1"></span>
              <span className="count">0</span>
            </button>
            {<CartsWidget isOpen={showWidget} />}
          </div>
        </div>
      </section>
      <section className="header-bottom">
        <Navbar
          categories={categories}
          navigates={menus}
          className={"lg:table hidden"}
        />
      </section>
      <Sidebar
        navigates={menus}
        isOpen={showSidebar}
        changeState={(state) => setShowSidebar(state)}
      />
    </header>
  );
};

export default Header;
