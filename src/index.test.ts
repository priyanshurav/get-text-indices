import { getTextIndices } from '.';

test('should calculate right text indices', () => {
  expect(getTextIndices('this is a simple sentence', 'simple')).toStrictEqual([
    {
      start: 10,
      end: 15,
    },
  ]);
  expect(getTextIndices('', 'simple')).toStrictEqual([]);
  expect(getTextIndices('this is a simple sentence', '')).toStrictEqual([]);
});

test('should calculate right multiple text indices', () => {
  expect(
    getTextIndices('this is a example text. This is a example text', 'this', {
      multiple: true,
    })
  ).toStrictEqual([{ start: 0, end: 3 }]);
  expect(
    getTextIndices(
      'this is a example text. This is a example text',
      'example',
      { multiple: true }
    )
  ).toStrictEqual([
    { start: 10, end: 16 },
    { start: 34, end: 40 },
  ]);
  expect(
    getTextIndices('a simple sentence', 'jhsdhkdsa', { multiple: true })
  ).toHaveLength(0);
});

test('should calculate right text indices without case sensitivity', () => {
  expect(
    getTextIndices('This is a example text', 'this', {
      caseSensitive: false,
    })
  ).toStrictEqual([{ start: 0, end: 3 }]);
});

test('should calculate right text indices with case sensitivity', () => {
  expect(
    getTextIndices('This is a example text', 'this', {
      caseSensitive: true,
    })
  ).toStrictEqual([]);
});

test('should calculate right multiple text indices with case sensitivity', () => {
  expect(
    getTextIndices('this is a example text. This is a example text', 'this', {
      caseSensitive: true,
      multiple: true,
    })
  ).toStrictEqual([{ start: 0, end: 3 }]);
  expect(
    getTextIndices('This is a example text. This is a example text', 'this', {
      caseSensitive: true,
      multiple: true,
    })
  ).toHaveLength(0);
  expect(
    getTextIndices('This is a example text. This is a example text', 'This', {
      caseSensitive: true,
      multiple: true,
    })
  ).toStrictEqual([
    { start: 0, end: 3 },
    { start: 24, end: 27 },
  ]);
});

test('should calculate right multiple text indices without case sensitivity', () => {
  expect(
    getTextIndices('this is a example text. This is a example text', 'this', {
      caseSensitive: false,
      multiple: true,
    })
  ).toStrictEqual([
    { start: 0, end: 3 },
    { start: 24, end: 27 },
  ]);
  expect(
    getTextIndices('This is a example text. This is a example text', 'this', {
      caseSensitive: false,
      multiple: true,
    })
  ).toStrictEqual([
    { start: 0, end: 3 },
    { start: 24, end: 27 },
  ]);
  expect(
    getTextIndices('This is a example text. this is a example text', 'This', {
      caseSensitive: false,
      multiple: true,
    })
  ).toStrictEqual([
    { start: 0, end: 3 },
    { start: 24, end: 27 },
  ]);
});
