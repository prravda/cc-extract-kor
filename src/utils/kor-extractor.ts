export const extractKoreanStrings = (code: string): string[] => {
  // Regular expression to match Korean characters, including composite characters
  const koreanRegex =
    /[\uAC00-\uD7AF]+([.,\s\/|0-9]*[\uAC00-\uD7AF]+)*[.~!?]?/g;

  // Find all matches in the input code
  const matches = code.match(koreanRegex);

  // Return the matches or an empty array if no matches found
  return matches || [];
};

export const extractKoreanStringsFromCode = (code: string): string[] => {
  // initialize result array
  const result: string[] = [];

  // read line by line and extract korean strings
  for (const eachLine of code.split("\n")) {
    const koreanStringsInThisLine = extractKoreanStrings(eachLine);
    result.push(...koreanStringsInThisLine);
  }

  // sort the result array by elements length in descending order
  const sortedByDescOrder = [...result].sort((a, b) => b.length - a.length);

  // remove duplicates and return
  return Array.from(new Set<string>(sortedByDescOrder));
};
