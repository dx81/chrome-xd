const TerserPlugin = require("terser-webpack-plugin");

(() => {
    console.log("config loaded");
})()

module.exports = {
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    keep_classnames: true,
                },
            }),
        ],
    },
};