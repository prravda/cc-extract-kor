import { korReplacer } from "./kor-replacer";

describe("Test: korExtractor function", () => {
  it("should be defined", () => {
    expect(korReplacer).toBeDefined();
  });

  it("replace all targetStrings to variableNames", () => {
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
    const expectedResult: string = `<div style="line-height: 1.5;"><?= lang('mock_classcard_is_fast') ?> <span class="text-success"><?= lang('mock_google_chrome') ?></span> <?= lang('mock_optimized_for_chrome') ?></div>`;
    const testResult = korReplacer(
      exampleHTMLBlock,
      variableNames,
      targetStrings,
    );
    expect(testResult).toEqual(expectedResult);
  });
});
