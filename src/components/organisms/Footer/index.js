import SocialList from "components/molecules/SocialList";

const Footer = () => {
  return (
    <footer>
      <section className="footer-content">
        <div className="row">
          <div className="md:col-6 lg:col-3">
            <a href={process.env.NEXT_HOST}>
              <img
                alt="logo mini"
                className="logo"
                src="assets/images/logo-mini.png"
              />
            </a>
            <div className="pt-5 pb-8">
              <p>
                In general, dracaena care is relatively simple. Use our
                comprehensive care guide to discover more growing tips and
                tricks!
              </p>
            </div>
            <div className="leading-6">
              <SocialList />
            </div>
          </div>
          <div className="md:col-6 lg:col-3 mb-8">
            <h2 class="widget-title">Quick Menu</h2>
            <div className="quick-menu-container">
              <ul id="quick-menu" className="quick-menu">
                <li id="menu-item-726" class="quick-menu-item">
                  <a href="#">New Arrivals</a>
                </li>
                <li id="menu-item-727" class="quick-menu-item">
                  <a href="#">Hot Sale</a>
                </li>
                <li id="menu-item-728" class="quick-menu-item">
                  <a href="#">Cacti</a>
                </li>
                <li id="menu-item-729" class="quick-menu-item">
                  <a href="#">Palms</a>
                </li>
                <li id="menu-item-730" class="quick-menu-item">
                  <a href="#">Ferns</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-6 lg:col-3 mb-8">
            <h2 class="widget-title">Information</h2>
            <div className="quick-menu-container">
              <ul id="quick-menu" className="quick-menu">
                <li id="menu-item-693" class="quick-menu-item">
                  <a href="#">Order Tracking</a>
                </li>
                <li id="menu-item-694" class="quick-menu-item">
                  <a href="#">Contact Us</a>
                </li>
                <li id="menu-item-106" class="quick-menu-item">
                  <a href="#">Delivery</a>
                </li>
                <li id="menu-item-108" class="quick-menu-item">
                  <a href="#">Return</a>
                </li>
                <li id="menu-item-104" class="quick-menu-item">
                  <a href="#">FAQs</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="md:col-6 lg:col-3">
            <h2 className="widget-title">Newsletter</h2>
            <p className="description">
              Sign up for our free video course and teamo garden inspiration
            </p>
            <form id="notification-form">
              <input
                type="email"
                name="EMAIL"
                placeholder="Nhập địa chỉ email"
                required=""
                className="w-full border border-gray-300 focus:border-gray-300 ring-0 mb-2"
              />
              <button
                type="submit"
                className="inline-block text-center mt-3 uppercase bg-nmp-primary p-2 px-5 lg:py-4 font-bold text-xs text-white max-w-max"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
      <div className="overflow-hidden p-4 text-center bg-[#292929] text-[#9b9b9b]">
        <p>Copyright © 2023 NMP. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
