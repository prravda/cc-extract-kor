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
      `<?= lang('${variableNames[i]}') ?>`,
    );
  }

  return codeSnippet;
};
