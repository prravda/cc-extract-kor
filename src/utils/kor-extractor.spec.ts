import { extractKoreanStringsFromCode } from "./kor-extractor";
import { testSuitsHtmlBlocks } from "./test-suits/test-suits-html-blocks";

describe("Test: korExtractor function", () => {
  it("should be defined", () => {
    expect(extractKoreanStringsFromCode).toBeDefined();
  });

  it("should extract Korean strings from html block", () => {
    const { generalCase } = testSuitsHtmlBlocks;
    const { html, korean } = generalCase;

    const extractedKoreanStrings = extractKoreanStringsFromCode(
      html,
    ).map<string>((result) => result.koreanString);

    expect(extractedKoreanStrings).toEqual(korean);
  });

  it("should extract Korean strings from html block with Korean in placeholder", () => {
    const { caseKoreanInPlaceHolder } = testSuitsHtmlBlocks;
    const { html, korean } = caseKoreanInPlaceHolder;

    const extractedKoreanStrings = extractKoreanStringsFromCode(
      html,
    ).map<string>((result) => result.koreanString);

    expect(extractedKoreanStrings).toEqual(korean);
  });

  it("should extract Korean strings from html block with breaking tag", () => {
    const { caseContainsBreakingTag } = testSuitsHtmlBlocks;
    const { html, korean } = caseContainsBreakingTag;

    const extractedKoreanStrings = extractKoreanStringsFromCode(
      html,
    ).map<string>((result) => result.koreanString);

    expect(extractedKoreanStrings).toEqual(korean);
  });

  it("should extract Korean strings from html block with number seg one", () => {
    const { caseContainsNumberSegOne } = testSuitsHtmlBlocks;
    const { html, korean } = caseContainsNumberSegOne;

    const extractedKoreanStrings = extractKoreanStringsFromCode(
      html,
    ).map<string>((result) => result.koreanString);

    expect(extractedKoreanStrings).toEqual(korean);
  });
});
