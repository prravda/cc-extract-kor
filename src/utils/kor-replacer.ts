const getReplacementType = (
  replacementType: "js" | "php" = "php",
  variable: string,
) => {
  switch (replacementType) {
    case "js":
      return `lang('${variable}')`;
    case "php":
    default:
      return `<?= lang('${variable}') ?>`;
  }
};

export const korReplacer = (
  codeSnippet: string,
  variableNames: string[],
  targetStrings: string[],
) => {
  // from codeSnippet, change all targetStrings to variableNames
  // iterate by index
  for (let i = 0; i < targetStrings.length; i++) {
    // replace all targetStrings[i] to variableNames[i]
    codeSnippet = codeSnippet.replaceAll(
      targetStrings[i],
      getReplacementType("js", variableNames[i]),
    );
  }

  return codeSnippet;
};
