import File from "./File";
import * as require from "module";
import { module } from "node:module";

const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                test: /\.js($|\?)/i,
                parallel: true,
                include: path.join(__dirname, "dist"),
            }),
        ],
    },
};
