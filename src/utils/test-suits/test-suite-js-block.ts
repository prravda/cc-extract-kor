interface TestSuiteJsBlock {
  [key: string]: {
    jsBlock: string;
    korean: string[];
  };
}

export const testSuiteJsBlock: TestSuiteJsBlock = {
  wrappedSingleQuotes: {
    jsBlock: `showAlert('잠시후 다시 시도해주세요')`,
    korean: ["잠시후 다시 시도해주세요"],
  },
  wrappedDoubleQuotes: {
    jsBlock: `showAlert("잠시후 다시 시도해주세요")`,
    korean: ["잠시후 다시 시도해주세요"],
  },
  nonWrapped: {
    jsBlock: `<a class="text-primary" href="https://cafe.naver.com/classcardhakwon/12138" target="_blank"><u>마감일 지정방법 안내</u></a>`,
    korean: ["마감일 지정방법 안내"],
  },
};
