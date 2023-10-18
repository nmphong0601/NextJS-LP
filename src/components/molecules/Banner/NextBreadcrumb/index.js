import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Breadcrumb } from "antd";

import styles from "./Index.module.scss";

const _defaultGetTitleGenerator = (param, query) => null;
const _defaultGetDefaultTitleGenerator = (path) => path;

// Pulled out the path part breakdown because its
// going to be used by both `asPath` and `pathname`
const generatePathParts = (pathStr) => {
  const pathWithoutQuery = pathStr.split("?")[0];
  return pathWithoutQuery.split("/").filter((v) => v.length > 0);
};

const NextBreadcrumb = ({
  getTitleGenerator = _defaultGetTitleGenerator,
  getDefaultTitleGenerator = _defaultGetDefaultTitleGenerator,
}) => {
  // Gives us ability to load the current route details
  const router = useRouter();

  // Two things of importance:
  // 1. The addition of getDefaultTextGenerator in the useMemo dependency list
  // 2. getDefaultTextGenerator is now being used for building the text property
  const breadcrumbs = useMemo(
    function generateBreadcrumbs() {
      const asPathNestedRoutes = generatePathParts(router.asPath);
      const pathnameNestedRoutes = generatePathParts(router.pathname);

      const crumblist = asPathNestedRoutes.map((subpath, idx) => {
        // Pull out and convert "[post_id]" into "post_id"
        const param = pathnameNestedRoutes[idx]
          .replace("[", "")
          .replace("]", "");

        const path = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
        return {
          path,
          titleGenerator: getTitleGenerator(param, router.query),
          title: getDefaultTitleGenerator(subpath, path),
        };
      });

      return [{ path: "/", title: "Trang chủ" }, ...crumblist];
    },
    [
      router.asPath,
      router.pathname,
      router.query,
      getTitleGenerator,
      getDefaultTitleGenerator,
    ]
  );

  function renderCrumb(route, params, routes, paths) {
    const last = routes.indexOf(route) === routes.length - 1;

    if (last) {
      return <span className="text-nmp-gray-dark">{route.title}</span>;
    }

    return <a href={route.path}>{route.title}</a>;
  }

  return (
    <Breadcrumb separator=" " itemRender={renderCrumb} items={breadcrumbs} />
  );
};

export default NextBreadcrumb;
