// module.exports = {
//     mode: process.env.NODE_ENV || "development",
//     context: path.resolve(process.cwd(), "src"),
//     entry: {
//         index: ["./src/index.js", "./main.css"],
//     },
//     module: {
//         rules: [
//             { test: /\.svg$/, use: "svg-inline-loader" },
//             { test: /\.css$/, use: ["style-loader", "css-loader"] },
//             { test: /\.(js)$/, use: "babel-loader" },
//         ],
//     },
//     output: {
//         clean: true,
//         filename: "main.js",
//         path: path.resolve(process.cwd(), "dist"),
//     },
//     plugins: [new HtmlWebpackPlugin()],
// };

const HtmlWebpackPlugin = require("html-webpack-plugin");

exports.default = {
    mode: process.env.NODE_ENV || "development",
    output: {
        clean: true,
        filename: "app.js",
    },
    module: {
        rules: [
            { test: /\.ts$/, use: "ts-loader" },
            { test: /\.css$/, use: ["style-loader", "css-loader"] },
            { test: /\.(js)$/, use: "babel-loader" },
        ],
    },
    resolve: {
        extensions: [".ts"],
    },
    plugins: [new HtmlWebpackPlugin({ template: "index.html" })],
};
