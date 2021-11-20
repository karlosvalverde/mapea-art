const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
    .postCss('resources/css/app.css', 'public/css', [
        //
    ]);

mix.webpackConfig({
    resolve: {
        alias: {
            'react': path.resolve('node_modules/react'),
            'react-dom': path.resolve('node_modules/react-dom'),
            'components': path.resolve('resources/js/src/components'),
            'hooks': path.resolve('resources/js/src/hooks'),
            'layouts': path.resolve('resources/js/src/layouts'),
            'pages': path.resolve('resources/js/src/pages'),
        },
    },
});

mix.react('resources/js/app.js', 'public/js').extract(['react', 'react-dom']);
