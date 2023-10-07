import React from "react";

const DEVICE_SIZES_VALUE = {
  MOBILE: 576,
  TABLET: 768,
  DESKTOP: 992,
  LARGE_DESKTOP: 1200,
};

export default function useDeviceDetect() {
  const [isDesktop, setDesktop] = React.useState(false);
  const [screen, setScreen] = React.useState("");
  const [width, setWidth] = React.useState(
    typeof window !== "undefined" && window.innerWidth
  );

  React.useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  React.useEffect(() => {
    let _screen = "";
    if (width >= DEVICE_SIZES_VALUE.DESKTOP) {
      _screen = "DESKTOP";
    } else if (
      width < DEVICE_SIZES_VALUE.DESKTOP &&
      width >= DEVICE_SIZES_VALUE.TABLET
    ) {
      _screen = "TABLET";
    } else if (width < DEVICE_SIZES_VALUE.TABLET) {
      _screen = "MOBILE";
    }
    setScreen(_screen);
    setDesktop(_screen === "DESKTOP");
  }, [width]);

  return { isDesktop, screen };
}
