interface TextIndicesSearchResult {
  start: number;
  end: number;
}
interface Options {
  caseSensitive: boolean;
}
type GetTextIndicesReturnType<T> = T extends false
  ? TextIndicesSearchResult
  : TextIndicesSearchResult[];

const defaultOptions: Options = { caseSensitive: true };

function stringEquals(
  str1: string,
  str2: string,
  caseSensitive: boolean
): boolean {
  return (
    (caseSensitive ? str1 : str1.toLowerCase()) ===
    (caseSensitive ? str2 : str2.toLowerCase())
  );
}

/**
 * Finds the indices of the 'searchText' in the 'fullStr'
 * @param {string} fullStr The string to search on
 * @param {string} searchText The string to find indices in the 'fullStr'
 * @param {boolean} multiple If this is set to true then the function will return an array of matches
 * @param {Options} options The options
 */
export function getTextIndices<T extends boolean>(
  fullStr: string,
  searchText: string,
  multiple: T,
  options: Options = defaultOptions
): GetTextIndicesReturnType<T> {
  if (typeof fullStr !== 'string') throw new Error(`'str' must be string`);
  else if (typeof searchText !== 'string')
    throw new Error(`'searchText' must be a string`);
  else if (typeof multiple !== 'boolean')
    throw new Error(`'multiple' must be a boolean`);

  const { caseSensitive } = options;

  const regex = new RegExp(searchText, `g${caseSensitive ? '' : 'i'}`);
  const searchResults = [...fullStr.matchAll(regex)];
  const results: TextIndicesSearchResult[] = [];
  if (!searchResults) return results as GetTextIndicesReturnType<T>;
  searchResults.forEach((result) => {
    const { index: startIndex } = result;
    if (typeof startIndex !== 'number') return;
    let foundedText = '';
    for (let i = startIndex; i < fullStr.length; i++) {
      foundedText += fullStr[i];
      if (stringEquals(foundedText, searchText, caseSensitive))
        results.push({ start: startIndex, end: i });
    }
  });
  if (multiple) {
    return results as GetTextIndicesReturnType<T>;
  } else {
    return (results[0]
      ? results[0]
      : { start: -1, end: -1 }) as GetTextIndicesReturnType<T>;
  }
}
