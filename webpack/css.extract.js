const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = function(paths) {
   return {
       module: {
           rules: [
               {
                   test: /\.styl$/,
                   include: paths,
                   use: ExtractTextPlugin.extract({
                       publicPath: '../',
                       fallback: 'style-loader',
                       use: ['css-loader','stylus-loader'],
                   }),
               },
               {
                   test: /\.css$/,
                   include: paths,
                   use: ExtractTextPlugin.extract({
                       fallback: 'style-loader',
                       use: 'css-loader',
                   }),
               },
           ],
       },
       plugins: [
           new ExtractTextPlugin('./css/[name].css'),
       ],
   };
};