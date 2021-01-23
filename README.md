![License](https://img.shields.io/github/license/pr357/get-text-indices?style=flat-square)
![Issues](https://img.shields.io/github/issues/pr357/get-text-indices?style=flat-square)
![Downloads](https://img.shields.io/npm/dw/get-text-indices?style=flat-square)
![Minified Size](https://img.shields.io/bundlephobia/min/get-text-indices?label=minified%20size&style=flat-square)
![Version](https://img.shields.io/npm/v/get-text-indices?style=flat-square)

# get-text-indices

A tool to help you find the start and the end index of a part of a string

# Installation

```bash
$ npm install get-text-indices
```

# Usage

The first argument is the string to search in, the second argument is the string to search in the first argument, the third argument is the multiple, when set to true it will return an array of multiple matches, if set to false, it will return an array with a single object containing the first search result, and the fourth argument, which is optional is the options object, in the option you can specify if you want a case-sensitive search or not, by default case-sensitivity is on.

```javascript
const { getTextIndices } = require('get-text-indices');

// To find the first match with case-sensitivity on
console.log(getTextIndices('a SAMPLE sample sentence', 'sample', false)); // [ { start: 9, end: 14 } ]

// To find multiple matches with case-sensitivity on
console.log(getTextIndices('a SAMPLE sample sentence', 'sample', true)); // [ { start: 9, end: 14 } ]

// To find the first match with case-sensitivity off
console.log(
  getTextIndices('a SAMPLE sentence', 'sample', false, { caseSensitive: false })
); // [ { start: 2, end: 7 } ]

// To find multiple matches with case-sensitivity off
console.log(
  getTextIndices('a SAMPLE sample sentence', 'sample', true, {
    caseSensitive: false,
  })
); // [ { start: 2, end: 7 }, { start: 9, end: 14 } ]

// When no result is found then it returns an empty array
console.log(getTextIndices('', 'sample', false)); // []
```

# Contributing

We love contributions! See the [contribution guide](https://github.com/pr357/get-text-indices/blob/main/CONTRIBUTING.md) for more info.

# License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). See the [LICENSE](https://github.com/pr357/get-text-indices/blob/main/LICENSE) for more info
