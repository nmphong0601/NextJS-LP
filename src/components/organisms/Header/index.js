import { useState } from "react";
import styles from "./Index.module.scss";

const categories = [
    {
        label: "Tất cả loại sản phẩm",
        value: 0,
    },
    {
        label: "Loại 1",
        value: 1,
    },
    {
        label: "Loại 2",
        value: 2,
    },
    {
        label: "Loại 3",
        value: 3,
    },
];

const LoginFormWidget = ({ isOpen }) => {
    const [remember, setRemember] = useState(false);

    return (
        <div
            className={`${styles["popup-dialog"]} ${styles["login-form"]} ${
                isOpen ? "translate-y-0 z-50" : "translate-y-5 opacity-0 z-0"
            }`}
        >
            <div className="w-full text-left p-4 px-5 font-semibold">
                Đăng nhập
            </div>
            <div className="p-4 px-5 text-left w-full">
                <div className="form-login">
                    <div className="input-group flex flex-col items-start">
                        <label
                            className="inline-flex w-full"
                            htmlFor="username"
                        >
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
                        <label
                            className="inline-flex w-full"
                            htmlFor="password"
                        >
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
                                className={`relative pl-7 ${
                                    remember ? "checked" : ""
                                }`}
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
                isOpen ? "translate-y-0 z-50" : "translate-y-5 opacity-0 z-0"
            }`}
        >
            <div className="w-full text-left p-4 px-5 font-semibold">
                Giỏ hàng
            </div>
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
                isOpen ? "translate-y-0 z-50" : "translate-y-5 opacity-0 z-0"
            }`}
        >
            <div className="w-full text-left p-4 md:px-8 lg:px-16 font-semibold">
                Tìm kiếm
            </div>
            <div className="flex justify-center p-4 pb-0">
                <SearchBox className="w-full" />
            </div>
        </div>
    );
};

const SearchBox = ({ className }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);

    return (
        <div className={`search-box ${className ? className : ""}`}>
            <div className="category hidden lg:block">
                <div
                    className="chosen-container chosen-container-single chosen-container-active chosen-with-drop"
                    onMouseLeave={() => {
                        setIsOpen(false);
                    }}
                >
                    <a
                        className="chosen-single"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        <span className="chosen-label">
                            {
                                categories.find(
                                    (x) => x.value === activeCategory
                                ).label
                            }
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
                                            setActiveCategory(category.value);
                                            setIsOpen(false);
                                        }}
                                    >
                                        {category.label}
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
                placeholder="Tìm kiếm tại đây..."
                aria-label="Tìm kiếm tại đây..."
                aria-describedby="basic-addon"
            />
            <button type="button" className="btn-shine btn-search">
                <span className="flaticon-magnifying-glass"></span>
            </button>
        </div>
    );
};

const Header = () => {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showWidget, setShowWidget] = useState(false);
    const [showSearchWidget, setShowSearchWidget] = useState(false);

    return (
        <header className={styles.header}>
            <section className="header-top">
                <div className="container flex max-w-full items-center justify-center lg:justify-between">
                    <ul className="menu-left">
                        <li>
                            <a
                                title="Chào mừng bạn đến với cửa hàng của chúng tôi!"
                                href="https://nmp-amazon-store.vercel.app"
                            >
                                Chào mừng bạn đến với cửa hàng của chúng tôi!
                            </a>
                        </li>
                    </ul>
                    <ul className="menu-right">
                        <li className="first:pl-0 last:pr-0 px-2">
                            <a
                                title="Về chúng tôi"
                                href="https://nmp-amazon-store.vercel.app/about-us"
                            >
                                Về chúng tôi
                            </a>
                        </li>
                        <li className="first:pl-0 last:pr-0 px-2">
                            <a
                                title="Liên hệ"
                                href="https://nmp-amazon-store.vercel.app/contact-us"
                            >
                                Liên hệ
                            </a>
                        </li>
                    </ul>
                </div>
            </section>
            <section className="header-middle">
                <div className="flex items-center lg:hidden">
                    <div className="menu-bar inline-block align-middle text-[0]">
                        <button className="menu block leading-10 w-7 h-12 p-3 px-0 group">
                            <span className="w-full block border-solid border-b-2 border-black group-hover:border-nmp-primary mb-2"></span>
                            <span className="w-full block border-solid border-b-2 border-black group-hover:border-nmp-primary mb-2"></span>
                            <span className="w-full block border-solid border-b-2 border-black group-hover:border-nmp-primary mb-2"></span>
                        </button>
                    </div>
                    <div
                        className="header-search-inner"
                        data-teamo="teamo-dropdown"
                    >
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
                    <a href="https://nmp-amazon-store.vercel.app">
                        <img
                            alt="NMP"
                            className="logo"
                            src="assets/images/logo.svg"
                        />
                    </a>
                </div>
                <div className="hidden lg:block">
                    <SearchBox />
                </div>
                <div className="customer">
                    <div className="block-user relative">
                        <button
                            className="block-link"
                            onClick={() => {
                                setShowLoginForm(!showLoginForm);
                                setShowWidget(false);
                                setShowSearchWidget(false);
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
            <section className="header-bottom"></section>
        </header>
    );
};

export default Header;
