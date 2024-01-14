import { isCommentLine } from "./kor-extractor";

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

interface KorReplacerInput {
  codeSnippet: string;
  variableNames: string[];
  targetStrings: string[];
  isJavascript?: boolean;
  phpReplacementType?: PhpReplacementType;
  ignoredKeywords: string[];
}

interface KorReplacerByEachLinesInput extends KorReplacerInput {}

export const korReplacer = ({
  codeSnippet,
  variableNames,
  targetStrings,
  isJavascript = false,
  phpReplacementType = "phpWithAngleBracket",
  ignoredKeywords,
}: KorReplacerInput) => {
  let modifiedCodeLine = codeSnippet;

  for (const [index, targetString] of targetStrings.entries()) {
    const variableName = variableNames[index];
    // if the target string is a substring of one of ignored keywords
    // skip this target string
    if (
      ignoredKeywords.some((ignoredKeyword) =>
        ignoredKeyword.includes(targetString),
      )
    ) {
      continue;
    }

    if (isJavascript) {
      modifiedCodeLine = replaceJsString(
        modifiedCodeLine,
        targetString,
        variableName,
      );
    } else {
      modifiedCodeLine = modifiedCodeLine.replaceAll(
        targetString,
        getPhpReplacementType(phpReplacementType, variableName),
      );
    }
  }

  return modifiedCodeLine;
};

export const korReplacerByEachLines = ({
  codeSnippet,
  variableNames,
  targetStrings,
  isJavascript = false,
  phpReplacementType = "phpWithAngleBracket",
  ignoredKeywords,
}: KorReplacerByEachLinesInput): string => {
  // an array of code lines after replacing
  const replacedCodeLines: string[] = [];

  // splitting by \n and iterate them
  for (const codeLine of codeSnippet.split("\n")) {
    // if this code line is empty,
    // just push this code line and skip it
    if (codeLine.trim() === "") {
      replacedCodeLines.push(codeLine);
      continue;
    }
    // if this code line is comment,
    // just push this code line and skip it
    if (isCommentLine(codeLine)) {
      replacedCodeLines.push(codeLine);
      continue;
    }

    // Replace this line using korReplacer
    const modifiedCodeLine = korReplacer({
      codeSnippet: codeLine,
      variableNames,
      targetStrings,
      isJavascript,
      phpReplacementType,
      ignoredKeywords,
    });
    replacedCodeLines.push(modifiedCodeLine);
  }

  // join all code lines with \n
  // and return it
  return replacedCodeLines.join("\n");
};
