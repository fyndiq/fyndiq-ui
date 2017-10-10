# Migration Guide

## Migrating to v2

Fyndiq-ui v2 removes the need for LESS compiler, and adds some postcss plugins dependencies.

To start with, update all your `fyndiq-*` dependencies in your `package.json` file to version `"^2.0.0"` and run `npm i`

#### Install dependencies

``` sh
npm i -S postcss-cssnext postcss-import
```

#### Webpack config

You should add a rule for `.css` rules

``` js
module: {
  rules: [
    {
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: true,
              modules: true,
            },
          }, {
            loader: 'postcss-loader',
            options: {
              plugins: () => ([
                require('postcss-import'),
                require('postcss-cssnext'),
              ]),
            },
          },
        ],
      }),
    },
  ],
},
```

#### In LESS files

- Change the extension to `.css`, and update the places where the file is being imported accordingly
- Change the `@import` lines:

``` less
// v1
@import "~fyndiq-styles-[type]/[type].less";

// v2 : remove ~ symbol and change extension.
@import "fyndiq-styles-[type]/[type].css";
```

- Change the colors variables:

``` less
// v1
color: @black;

// v2: remove @ sign and add var() and --color prefix.
// one gotcha to this is the `bordercolor` color: it becomes
// var(--color-border) and not var(--color-bordercolor);
color: var(--color-black);
```

- Change the media queries:

``` less
// v1
@media @phone {}

// v2
@media (--phone) {}
```

- Change the font variables:

``` less
// v1
font-family: @font-headline;

// v2
font-family: var(--font-headline);
```

- Change the color manipulation functions to [new ones](https://github.com/postcss/postcss-color-function#list-of-color-adjuster). If you have more LESS features that you used to use, try to replace them using one of [CSSnext features](http://cssnext.io/features/)

#### Clean up

You can remove the need for parsing LESS files in your webpack config, and remove `less` and `less-loader` from your `package.json` file

You can also remove the need for `autoprefixer` if you used to use it, since it is bundled in `cssnext`
