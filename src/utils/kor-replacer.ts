export type PhpReplacementType = "phpWithAngleBracket" | "phpPlain";
export const getPhpReplacementType = (
  replacementType: PhpReplacementType = "phpWithAngleBracket",
  variable: string,
): string => {
  switch (replacementType) {
    case "phpWithAngleBracket":
      return `<?= lang('${variable}') ?>`;
    case "phpPlain":
    default:
      return `lang('${variable}')`;
  }
};

interface JsReplacementType {
  jsWrappedWithQuotes: string;
  jsWithoutQuotes: string;
}

const getJsReplacementType = (variable: string): JsReplacementType => {
  return {
    jsWrappedWithQuotes: `lang('${variable}')`,
    jsWithoutQuotes: `\${lang(${variable})}`,
  };
};

export const replaceJsString = (
  code: string,
  targetString: string,
  variableName: string,
) => {
  const { jsWrappedWithQuotes, jsWithoutQuotes } =
    getJsReplacementType(variableName);
  return code
    .replaceAll(`"${targetString}"`, jsWrappedWithQuotes)
    .replaceAll(`'${targetString}'`, jsWrappedWithQuotes)
    .replaceAll(targetString, jsWithoutQuotes);
};

export const korReplacer = (
  codeSnippet: string,
  variableNames: string[],
  targetStrings: string[],
  isJavascript: boolean = false,
  phpReplacementType: PhpReplacementType = "phpWithAngleBracket",
) => {
  let modifiedCode = codeSnippet;

  targetStrings.forEach((targetString, index) => {
    const variableName = variableNames[index];

    if (isJavascript) {
      modifiedCode = replaceJsString(modifiedCode, targetString, variableName);
    } else {
      modifiedCode = modifiedCode.replaceAll(
        targetString,
        getPhpReplacementType(phpReplacementType, variableName),
      );
    }
  });

  return modifiedCode;
};
