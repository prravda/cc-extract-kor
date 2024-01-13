import { korReplacer, replaceJsString } from "./kor-replacer";
import { testSuiteJsBlock } from "./test-suits/test-suite-js-block";

describe("Test: replaceJsString function", () => {
  it("should be defined", () => {
    expect(korReplacer).toBeDefined();
  });

  it("should replace double quotes to lang('${variableName}')", () => {
    const { wrappedDoubleQuotes } = testSuiteJsBlock;
    const { jsBlock, korean } = wrappedDoubleQuotes;
    const mockVariableName = "mock_variable_name";
    const expectedResult = `showAlert(lang('${mockVariableName}'))`;

    const result = replaceJsString(jsBlock, korean[0], mockVariableName);
    expect(result).toEqual(expectedResult);
  });

  it("should replace single quotes to lang('{variableName}')", () => {
    const { wrappedSingleQuotes } = testSuiteJsBlock;
    const { jsBlock, korean } = wrappedSingleQuotes;
    const mockVariableName = "mock_variable_name";
    const expectedResult = `showAlert(lang('${mockVariableName}'))`;

    const result = replaceJsString(jsBlock, korean[0], mockVariableName);
    expect(result).toEqual(expectedResult);
  });

  it("should replace single quotes to ${lang('{variableName}')}", () => {
    const { nonWrapped } = testSuiteJsBlock;
    const { jsBlock, korean } = nonWrapped;
    const mockVariableName = "mock_variable_name";
    const expectedResult = `<a class="text-primary" href="https://cafe.naver.com/classcardhakwon/12138" target="_blank"><u>\$\{lang(${mockVariableName})\}</u></a>`;

    const result = replaceJsString(jsBlock, korean[0], mockVariableName);
    expect(result).toEqual(expectedResult);
  });
});

describe("Test: korReplacer function", () => {
  const exampleHTMLBlock: string = `<div style="line-height: 1.5;">클래스카드는 빠르고 보안이 강력한 <span class="text-success">구글 크롬</span> 브라우저에 최적화 되어 있습니다.</div>`;
  const variableNames: string[] = [
    "mock_classcard_is_fast",
    "mock_google_chrome",
    "mock_optimized_for_chrome",
  ];
  const targetStrings: string[] = [
    "클래스카드는 빠르고 보안이 강력한",
    "구글 크롬",
    "브라우저에 최적화 되어 있습니다.",
  ];

  it("should be defined", () => {
    expect(korReplacer).toBeDefined();
  });

  it("should replace targetStrings in exampleHTMLBlock in php with angle bracket", () => {
    const expectedResult: string = `<div style="line-height: 1.5;"><?= lang('${variableNames[0]}') ?> <span class="text-success"><?= lang('${variableNames[1]}') ?></span> <?= lang('${variableNames[2]}') ?></div>`;
    const result: string = korReplacer(
      exampleHTMLBlock,
      variableNames,
      targetStrings,
    );
    expect(result).toEqual(expectedResult);
  });

  it("should replace targetStrings in exampleHTMLBlock in php plain", () => {
    const expectedResult: string = `<div style="line-height: 1.5;">lang('${variableNames[0]}') <span class="text-success">lang('${variableNames[1]}')</span> lang('${variableNames[2]}')</div>`;
    const result: string = korReplacer(
      exampleHTMLBlock,
      variableNames,
      targetStrings,
      false,
      "phpPlain",
    );
    expect(result).toEqual(expectedResult);
  });

  it("should replace targetStrings in exampleHTMLBlock in javascript", () => {
    const expectedResult: string = `<div style="line-height: 1.5;">\${lang(${variableNames[0]})} <span class="text-success">\${lang(${variableNames[1]})}</span> \${lang(${variableNames[2]})}</div>`;
    const result: string = korReplacer(
      exampleHTMLBlock,
      variableNames,
      targetStrings,
      true,
    );
    expect(result).toEqual(expectedResult);
  });
});
