import { isCommentLine } from "./kor-extractor";

export type PhpReplacementType = "phpWithAngleBracket" | "plainPhp";

interface JsReplacementType {
  jsWrappedWithQuotes: string;
  jsWithoutQuotes: string;
}

const getJsReplacementType = (variable: string): JsReplacementType => {
  return {
    jsWrappedWithQuotes: `lang('${variable}')`,
    jsWithoutQuotes: `\${lang('${variable}')}`,
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

interface PlainPhpReplacementType {
  phpWrappedWithQuotes: string;
  phpWithoutQuotes: string;
}

const getPlainPhpReplacementType = (
  variable: string,
): PlainPhpReplacementType => {
  return {
    phpWrappedWithQuotes: `lang('${variable}')`,
    phpWithoutQuotes: `lang('${variable}')`,
  };
};

export const replacePlainPhpString = (
  code: string,
  targetString: string,
  variableName: string,
) => {
  const { phpWrappedWithQuotes, phpWithoutQuotes } =
    getPlainPhpReplacementType(variableName);
  return code
    .replaceAll(`"${targetString}"`, phpWrappedWithQuotes)
    .replaceAll(`'${targetString}'`, phpWrappedWithQuotes)
    .replaceAll(targetString, phpWithoutQuotes);
};

interface PhpWithAngleBracketReplacementType {
  generalCase: string;
}

const getPhpWithAngleBracketReplacementType = (
  variable: string,
): PhpWithAngleBracketReplacementType => {
  return {
    generalCase: `<?= lang('${variable}') ?>`,
  };
};

// implements php with angle bracket like replacerPlainPhpString
const replacerPhpWithAngleBracket = (
  code: string,
  targetString: string,
  variableName: string,
) => {
  const { generalCase } = getPhpWithAngleBracketReplacementType(variableName);
  return code.replaceAll(targetString, generalCase);
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
  ignoredKeywords,
  isJavascript = false,
  phpReplacementType = "phpWithAngleBracket",
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

    // case of JS
    if (isJavascript) {
      modifiedCodeLine = replaceJsString(
        modifiedCodeLine,
        targetString,
        variableName,
      );
    }
    // case of plain PHP
    if (phpReplacementType === "plainPhp") {
      modifiedCodeLine = replacePlainPhpString(
        modifiedCodeLine,
        targetString,
        variableName,
      );
    }
    // case of PHP with angle bracket
    if (phpReplacementType === "phpWithAngleBracket") {
      modifiedCodeLine = replacerPhpWithAngleBracket(
        modifiedCodeLine,
        targetString,
        variableName,
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
