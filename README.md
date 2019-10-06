# eslint-config-react-recommend

[![npm][npm]][npm-url] 
[![downloads][downloads]][downloads-url]
[![license][license]][license-url]

The eslint recommended configuration for react.

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

Creating `.eslintrc.js` file in the root of your project and add the configuration as below: 

```javascript
module.exports = {
  extends: [
    'react-recommend'
  ],
};
```

## Testing
Add the following npm scripts to `package.json`:

```json
"scripts": {
  "lint": "eslint --ext .js,.jsx src"
}
```

then

```bash
npm run lint
```

## Integrating into vscode

Integrating eslint into vscode can check code in real time and fix it automatically when saving code.

You need to install the vscode plugin `eslint`, then create the `.vscode/settings.json` file in the root of your project and add the following configuration.

```json
{
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    }
  ],
}

```
However, eslint can only handle `.js` and `.jsx` files. If you want to format `.html`, `.css`, `.less` and `.json` files when you save them, you need to do the following things：

You need to install the vscode plugin `prettier` and modify the `settings.json` file as below:

```json
{
  "editor.detectIndentation": false,
  "editor.tabSize": 2,
  "[html]": {
    "editor.formatOnSave": true
  },
  "[css]": {
    "editor.formatOnSave": true
  },
  "[less]": {
    "editor.formatOnSave": true
  },
  "[json]": {
    "editor.formatOnSave": true
  },
  "eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    }
  ],
  "prettier.singleQuote": true
}
```

## Integrating into webpack

Integrating eslint into webpack can automatically check code format when executing `npm run dev` or `npm run build`.

You need to install `eslint-loader` and configure it in webpack as follows:

```javascript
module: {
  rules: [
    {
      test: /\.(js|jsx)$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }
  ]
}

```

