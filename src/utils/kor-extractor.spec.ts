import { extractKoreanStringsFromCode } from "./kor-extractor";
import {
  testSuitsHtmlBlocks,
  hugeHtmlBlockCaseOne,
  hugeHTMLBlockCaseTwo,
} from "./test-suits/test-suits-html-blocks";

describe("Test: korExtractor function", () => {
  it("should return an array of korean characters - case 0", () => {
    const { html, korean } = testSuitsHtmlBlocks.koreanInplaceHolder;
    const testResult = extractKoreanStringsFromCode(html);
    expect(testResult).toEqual(korean);
  });

  it("should return an array of korean characters - case 1", () => {
    const { html, korean } = testSuitsHtmlBlocks.generalCase;
    const testResult = extractKoreanStringsFromCode(html);
    expect(testResult).toEqual(korean);
  });

  it("should return an array of korean characters - case 2", () => {
    const result = extractKoreanStringsFromCode(hugeHtmlBlockCaseOne);
    console.log(result);
    expect(result.length).not.toBe(0);
  });

  it("should return an array of korean characters - case 3", () => {
    const result = extractKoreanStringsFromCode(hugeHTMLBlockCaseTwo);
    console.log(result);
    expect(result.length).not.toBe(0);
  });
});
