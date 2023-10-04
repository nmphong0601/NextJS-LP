/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
    basePath: "",
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: "imgix",
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        path: process.env.NEXT_HOST,
    },
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")],
    },
    webpack: function (config, options) {
        return config;
    },
    eslint: {
        dirs: ["pages", "utils"], // Only run ESLint on the 'pages' and 'utils' directories during production builds (next build)
    },

    async redirects() {
        return [
            {
                source: "/",
                destination: "/trang-chu",
                permanent: true,
            },
        ];
    },
    // module: {
    //     rules: [
    //         {
    //             test: /\.(jpe?g|png|webp)$/i,
    //             use: {
    //                 loader: "responsive-loader",
    //                 options: {
    //                     // If you want to enable sharp support:
    //                     adapter: require("responsive-loader/sharp"),
    //                 },
    //             },
    //         },
    //     ],
    // },
};

module.exports = nextConfig
