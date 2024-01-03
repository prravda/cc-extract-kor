export const isCommentLine = (codeLine: string): boolean => {
  // Remove single-line comments
  const patternForSingleLineComments = /\/\/.*/g;

  // Remove HTML comments
  const patternForHTMLStyleComments = /<!--[\s\S]*?-->/g;

  // Remove multi-line comments
  const patternForMultiLineComments = /\/\*[\s\S]*?\*\//g;

  // return true if any comments are found
  return (
    patternForSingleLineComments.test(codeLine) ||
    patternForHTMLStyleComments.test(codeLine) ||
    patternForMultiLineComments.test(codeLine)
  );
};

export const doesNotContainKorean = (codeLine: string): boolean => {
  const patternForNonKoreanCharactersOnly = /^[^\uAC00-\uD7AF]*$/;

  return patternForNonKoreanCharactersOnly.test(codeLine);
};

export const extractKoreanStrings = (codeLine: string): string[] => {
  // Regular expression to match Korean characters, including composite characters
  const koreanRegex =
    /(<br\s*\/?>)?[\uAC00-\uD7AFa-zA-Z]+([.,~!?\s\/|0-9]*(<br\s*\/?>)?[\uAC00-\uD7AFa-zA-Z]+)*(<br\s*\/?>|[.~!?])?/g;
  // /(<br\s*\/?>)?[\uAC00-\uD7AFa-zA-Z]+([.,~!?\s\/|0-9]*[\uAC00-\uD7AFa-zA-Z]+)*(<br\s*\/?>|[.~!?])?/g;

  // Find all matches in the input code
  const matches = codeLine.match(koreanRegex);

  // Finally, filter matches which contains only non-korean characters and return
  return matches ? matches.filter((match) => !doesNotContainKorean(match)) : [];
};

export interface KoreanExtractorResults {
  koreanStrings: string[];
  codeLines: string[];
}

export const extractKoreanStringsFromCode = (code: string): string[] => {
  // initialize result array
  const result: string[] = [];

  // read line by line and extract korean strings
  for (const eachLine of code.split("\n")) {
    // first, trim the line using trimStart
    eachLine.trimStart();

    // then, if this codeline is comment, skip this line
    if (isCommentLine(eachLine)) continue;

    // also, if this codeline contains only non-korean characters, skip this line
    if (doesNotContainKorean(eachLine)) continue;

    // otherwise, extract korean strings from this line
    const koreanStringsInThisLine = extractKoreanStrings(eachLine);
    result.push(...koreanStringsInThisLine);
  }

  // sort the result array by elements length in descending order
  const sortedByDescOrder = [...result].sort((a, b) => b.length - a.length);

  // remove duplicates and return
  return Array.from(new Set<string>(sortedByDescOrder));
};
