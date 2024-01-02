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

export const extractKoreanStrings = (codeLine: string): string[] => {
  // Regular expression to match Korean characters, including composite characters
  const koreanRegex =
    /[\uAC00-\uD7AF]+([.,\s\/|0-9]*[\uAC00-\uD7AF]+)*[.~!?]?/g;

  // Find all matches in the input code
  const matches = codeLine.match(koreanRegex);

  // Return the matches or an empty array if no matches found
  return matches || [];
};

export const extractKoreanStringsFromCode = (code: string): string[] => {
  // initialize result array
  const result: string[] = [];

  // read line by line and extract korean strings
  for (const eachLine of code.split("\n")) {
    // first, trim the line using trimStart
    eachLine.trimStart();

    // then, if this codeline is comment, skip this line
    if (isCommentLine(eachLine)) continue;

    // otherwise, extract korean strings from this line
    const koreanStringsInThisLine = extractKoreanStrings(eachLine);
    result.push(...koreanStringsInThisLine);
  }

  // sort the result array by elements length in descending order
  const sortedByDescOrder = [...result].sort((a, b) => b.length - a.length);

  // remove duplicates and return
  return Array.from(new Set<string>(sortedByDescOrder));
};
