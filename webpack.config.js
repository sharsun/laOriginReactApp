const htmlplugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const plugin = new MiniCssExtractPlugin({
    filename: "[name].css",
  });
module.exports = {
    devtool: "source-map",
    devServer:{
      port:process.env.PORT || 8080,
    }
,
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader'
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
              },
              {
                test: /\.css$/,
               
                use: [
                  MiniCssExtractPlugin.loader,
                ]
              },
              {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                  {
                    loader: 'file-loader',
                  },
                ],
              },
        ]
    },
    optimization:{
        splitChunks:{
            chunks:"initial"
        }
    },
    plugins: [new htmlplugin({ template: './src/index.html', title: 'LaOrigin-HomePage' }),plugin]


}