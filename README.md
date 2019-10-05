# eslint-config-react-recommend

[![npm][npm]][npm-url] 
[![downloads][downloads]][downloads-url]
[![license][license]][license-url]

The eslint recommend configuration for react.

[npm]: https://img.shields.io/npm/v/eslint-config-react-recommend.svg
[npm-url]: https://www.npmjs.com/package/eslint-config-react-recommend
[downloads]: https://img.shields.io/npm/dm/eslint-config-react-recommend.svg
[downloads-url]: https://npmcharts.com/compare/eslint-config-react-recommend?minimal=true
[license]: https://img.shields.io/npm/l/eslint-config-react-recommend.svg
[license-url]:https://github.com/git-onepixel/eslint-config-react-recommend/blob/master/LICENSE

## Install

```bash
# use npm
npm i eslint-config-react-recommend -D
# use yarn
yarn add eslint-config-react-recommend
```

## Usage

Create `.eslintrc.js` file in the root of your project as below: 

```javascripts
module.exports = {
  extends: [
    'react-recommend'
  ],
};
```

## Testing
Add npm script as follow:


```bash
"scripts": {
  "lint": "eslint --ext .js,.jsx src"
}
```

then

```bash
npm run lint
```