import { getTextIndices } from '.';

test('should calculate right text indices', () => {
  expect(
    getTextIndices('this is a simple sentence', 'simple', false)
  ).toStrictEqual([
    {
      start: 10,
      end: 15,
    },
  ]);
  expect(getTextIndices('', 'simple', false)).toStrictEqual([]);
  expect(getTextIndices('this is a simple sentence', '', false)).toStrictEqual(
    []
  );
});

test('should calculate right multiple text indices', () => {
  expect(
    getTextIndices(
      'this is a example text. This is a example text',
      'this',
      true
    )
  ).toStrictEqual([{ start: 0, end: 3 }]);
  expect(
    getTextIndices(
      'this is a example text. This is a example text',
      'example',
      true
    )
  ).toStrictEqual([
    { start: 10, end: 16 },
    { start: 34, end: 40 },
  ]);
  expect(getTextIndices('a simple sentence', 'jhsdhkdsa', true)).toHaveLength(
    0
  );
});

test('should calculate right text indices without case sensitivity', () => {
  expect(
    getTextIndices('This is a example text', 'this', false, {
      caseSensitive: false,
    })
  ).toStrictEqual([{ start: 0, end: 3 }]);
});

test('should calculate right text indices with case sensitivity', () => {
  expect(
    getTextIndices('This is a example text', 'this', false, {
      caseSensitive: true,
    })
  ).toStrictEqual([]);
});

test('should calculate right multiple text indices with case sensitivity', () => {
  expect(
    getTextIndices(
      'this is a example text. This is a example text',
      'this',
      true,
      { caseSensitive: true }
    )
  ).toStrictEqual([{ start: 0, end: 3 }]);
  expect(
    getTextIndices(
      'This is a example text. This is a example text',
      'this',
      true,
      { caseSensitive: true }
    )
  ).toHaveLength(0);
  expect(
    getTextIndices(
      'This is a example text. This is a example text',
      'This',
      true,
      { caseSensitive: true }
    )
  ).toStrictEqual([
    { start: 0, end: 3 },
    { start: 24, end: 27 },
  ]);
});

test('should calculate right multiple text indices without case sensitivity', () => {
  expect(
    getTextIndices(
      'this is a example text. This is a example text',
      'this',
      true,
      { caseSensitive: false }
    )
  ).toStrictEqual([
    { start: 0, end: 3 },
    { start: 24, end: 27 },
  ]);
  expect(
    getTextIndices(
      'This is a example text. This is a example text',
      'this',
      true,
      { caseSensitive: false }
    )
  ).toStrictEqual([
    { start: 0, end: 3 },
    { start: 24, end: 27 },
  ]);
  expect(
    getTextIndices(
      'This is a example text. this is a example text',
      'This',
      true,
      { caseSensitive: false }
    )
  ).toStrictEqual([
    { start: 0, end: 3 },
    { start: 24, end: 27 },
  ]);
});
