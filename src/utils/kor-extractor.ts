import { KoreanExtractorResults } from "../interfaces/korean-extractor-results";

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

export const extractKoreanStrings = (
  codeLine: string,
): KoreanExtractorResults[] => {
  // Regular expression to match Korean characters, including composite characters
  const koreanRegex =
    // eslint-disable-next-line
    /(?:<br\s*\/?>|<\/br>\s*)*[\uAC00-\uD7AFa-zA-Z0-9%]+(?:[\s.,~!?\/|]*(?:<br\s*\/?>|<\/br>\s*)*[\uAC00-\uD7AFa-zA-Z0-9%]+)*(?:[.,~!?]|(?:<br\s*\/?>|<\/br>\s*)+)?/g;

  // Find all matches in the input code
  const matches = codeLine.match(koreanRegex);

  // Filter matches which contains only non-korean characters and return
  const extractedKeywords = matches
    ? matches.filter((match) => !doesNotContainKorean(match))
    : [];

  // Return extracted keywords and code line
  return extractedKeywords.map<KoreanExtractorResults>((koreanString) => {
    return {
      koreanString,
      codeLine,
    };
  });
};

export const extractKoreanStringsFromCode = (
  code: string,
): KoreanExtractorResults[] => {
  // initialize result array
  const result: KoreanExtractorResults[] = [];

  // read line by line and extract korean strings
  for (const eachLine of code.split("\n")) {
    // first, trim the line using trimStart
    eachLine.trimStart();

    // then, if this codeline is comment, skip this line
    if (isCommentLine(eachLine)) continue;

    // also, if this codeline contains only non-korean characters, skip this line
    if (doesNotContainKorean(eachLine)) continue;

    // otherwise, extract korean strings from this line
    result.push(...extractKoreanStrings(eachLine));
  }

  // remove duplicates by the key 'koreanString'
  const uniqueResults = result.reduce<KoreanExtractorResults[]>(
    (unique, eachResult) => {
      if (
        !unique.find(
          (eachUnique) => eachUnique.koreanString === eachResult.koreanString,
        )
      ) {
        unique.push(eachResult);
      }
      return unique;
    },
    [],
  );

  // sort by the length of koreanString in descending order
  uniqueResults.sort((a, b) => b.koreanString.length - a.koreanString.length);

  // then return the result
  return uniqueResults;
};
