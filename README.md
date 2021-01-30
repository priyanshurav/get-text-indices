![License](https://img.shields.io/github/license/pr357/get-text-indices?style=flat-square)
![Issues](https://img.shields.io/github/issues/pr357/get-text-indices?style=flat-square)
![Weekly downloads](https://img.shields.io/npm/dw/get-text-indices?label=weekly%20downloads&style=flat-square)
![Total downloads](https://img.shields.io/npm/dt/get-text-indices?label=total%20downloads&style=flat-square)
![Minified Size](https://img.shields.io/bundlephobia/min/get-text-indices?label=minified%20size&style=flat-square)
![Version](https://img.shields.io/npm/v/get-text-indices?style=flat-square)

# get-text-indices

A tool to help you find the start and the end index of a part of a string

# Table of contents

- [Installation](#installation)
- [Documentation](#documentation)
- [Contributing](#contributing)
- [License](#license)

# [Installation](#installation)

```bash
npm install get-text-indices
```

Or, if you prefer yarn

```bash
yarn add get-text-indices
```

# [Documentation](#documentation)

There is only a single function exported from this module which is `getTextIndices()`.
The first argument of that function is the string to search in, the second argument is the string to search in the first argument, the third argument is the multiple, by default it is set to false, when set to true it will return an array of multiple matches, if set to false, it will return an array with a single object containing the first search result, and the fourth argument, which is optional is the options object, in the option you can specify if you want a case-sensitive search or not, by default case-sensitivity is on.

## Usage in JavaScript

```javascript
const { getTextIndices } = require('get-text-indices');

// To find the first match with case-sensitivity on
console.log(getTextIndices('a SAMPLE sample sentence', 'sample')); // [ { start: 9, end: 14 } ]

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
console.log(getTextIndices('', 'sample')); // []
```

## Using the provided types in TypeScript

```typescript
import {
  getTextIndices,
  TextIndicesSearchResult,
  GetTextIndicesOptions,
} from 'get-text-indices';

// If you want to store the options in a seperate variable
const options: GetTextIndicesOptions = { caseSensitive: false };

// The reason we are setting the type as an array of TextIndicesSearchResult is because getTextIndices() always returns an array of TextIndicesSearchResult
const result: TextIndicesSearchResult[] = getTextIndices(
  'sample sentence',
  'sample',
  false,
  options
);

console.log(result); // [ { start: 0, end 5 } ]
```

# [Contributing](#contributing)

Contributions are welcome! See the [contribution guide](https://github.com/pr357/get-text-indices/blob/main/CONTRIBUTING.md) for more info.

# [License](#license)

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). See the [LICENSE](https://github.com/pr357/get-text-indices/blob/main/LICENSE) for more info
