![License](https://img.shields.io/github/license/priyanshurav/get-text-indices?style=flat-square)
![Issues](https://img.shields.io/github/issues/priyanshurav/get-text-indices?style=flat-square)
![Weekly downloads](https://img.shields.io/npm/dw/get-text-indices?label=weekly%20downloads&style=flat-square)
![Total downloads](https://img.shields.io/npm/dt/get-text-indices?label=total%20downloads&style=flat-square)
![Minified Size](https://img.shields.io/bundlephobia/min/get-text-indices?label=minified%20size&style=flat-square)
![Version](https://img.shields.io/npm/v/get-text-indices?style=flat-square)

# get-text-indices

A tool to help you find the start and the end index of a part of a string

## Table of contents

- [Installation](#installation)
- [Documentation](#documentation)
  1.  [Usage in JavaScript](#usage-in-javascript)
  2.  [Using the provided types in TypeScript](#using-the-provided-types-in-typescript)
- [Contributing](#contributing)
- [License](#license)

## Installation

```bash
npm install get-text-indices
```

Or, if you prefer yarn

```bash
yarn add get-text-indices
```

## Documentation

There is only a single function exported from this module which is `getTextIndices()`.
The first argument of that function is the string to search in, the second argument is the string to search in the first argument, and the fourth argument, which is optional is the options object, in the option you can specify if you want a case-sensitive search or not, by using the `caseSensitive` option, by default case-sensitivity is on and you can also specify whether you want to have multiple matches returned or not using the `multiple` option.

### Usage in JavaScript

```javascript
const { getTextIndices } = require('get-text-indices');

// To find the first match with case-sensitivity on
console.log(getTextIndices('a SAMPLE sample sentence', 'sample')); // [ { start: 9, end: 14 } ]

// To find multiple matches with case-sensitivity on
console.log(
  getTextIndices('a SAMPLE sample sentence', 'sample', { multiple: true })
); // [ { start: 9, end: 14 } ]

// To find the first match with case-sensitivity off
console.log(
  getTextIndices('a SAMPLE sentence', 'sample', { caseSensitive: false })
); // [ { start: 2, end: 7 } ]

// To find multiple matches with case-sensitivity off
console.log(
  getTextIndices('a SAMPLE sample sentence', 'sample', {
    caseSensitive: false,
    multiple: true,
  })
); // [ { start: 2, end: 7 }, { start: 9, end: 14 } ]

// When no result is found then it returns an empty array
console.log(getTextIndices('', 'sample')); // []
```

### Using the provided types in TypeScript

```typescript
import {
  getTextIndices,
  GetTextIndicesSearchResult,
  GetTextIndicesOptions,
} from 'get-text-indices';

const options: GetTextIndicesOptions = { caseSensitive: false };

const result: GetTextIndicesSearchResult[] = getTextIndices(
  'sample sentence',
  'sample',
  options
);

console.log(result); // [ { start: 0, end 5 } ]
```

## Contributing

Contributions are welcome! See the [contribution guide](https://github.com/priyanshurav/get-text-indices/blob/main/CONTRIBUTING.md) for more info.

## License

This software is licensed under the [MIT License](https://choosealicense.com/licenses/mit/). See the [LICENSE](https://github.com/priyanshurav/get-text-indices/blob/main/LICENSE) for more info
