const mix = require('laravel-mix');

// const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin');
// // const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');

// var webpackConfig = {
//     plugins: [
//       //   new CaseSensitivePathsPlugin(),
//         new VuetifyLoaderPlugin()
//         // other plugins ...
//     ]
//     // other webpack config ...
// }
// mix.webpackConfig( webpackConfig );

// webpack.config.js

module.exports = {
   module: {
     rules: [
       {
         test: /\.s(c|a)ss$/,
         use: [
           'vue-style-loader',
           'css-loader',
           {
             loader: 'sass-loader',
             // Requires sass-loader@^7.0.0
             options: {
               implementation: require('sass'),
               indentedSyntax: true // optional
             },
             // Requires >= sass-loader@^8.0.0
             options: {
               implementation: require('sass'),
               sassOptions: {
                 indentedSyntax: true // optional
               },
             },
           },
         ],
       },
     ],
   }
 }
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css');

   mix.browserSync('http://gesta-stock.test/');