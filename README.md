# eslint-config-react-recommend

## Install

``` bash
npm i eslint-config-react-recommend -D
```

## Usage

Create `.eslintrc.js` file in the root of your project as below: 

```
module.exports = {
  extends: [
    'react-recommend'
  ],
};
```

## Testing
Add npm script as follow:


```
"scripts": {
  "lint": "eslint --ext .js,.jsx src"
}
```

then

```
npm run lint
```