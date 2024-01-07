interface TestSuitsHtmlBlocks {
  [key: string]: {
    html: string;
    korean: string[];
  };
}

export const testSuitsHtmlBlocks: TestSuitsHtmlBlocks = {
  generalCase: {
    html: `<tr class="quiz-method-detail quiz-method-detail-2 <? if ($test_info->try_condition != 2): ?>hidden<? endif; ?>">
<th></th>
<td>
<div class="m-t-sm" style="font-size: 90%;">
    학생이 비번을 알아야만 응시 허용합니다. 교실 시험에 이용하세요.
</div>
<div class="m-t-xs m-b">
<span class="m-r-xs">비밀번호</span>
    <input type="text" class="try_pw text-danger" id="try_pw" name="try_pw" min="0" max="9999" value="<?= $test_info->try_pw ?>" style="width: 45px; border: none; text-align: right;">
<a onclick="$('#try_pw').val(randomRange(1000, 9999));"><span class="m-l-sm m-r-sm text-info">변경</span></a>
</div>
</td>
</tr>`,

    korean: [
      "학생이 비번을 알아야만 응시 허용합니다. 교실 시험에 이용하세요.",
      "비밀번호",
      "변경",
    ],
  },

  caseKoreanInPlaceHolder: {
    html: `<div class="quest_body form-inline" style="height: 177px; margin-bottom: 10px; padding-top:70px;">
<div class="form-group" style="padding-left: 10px;">
<input type="text" class="form-control" style="width:710px;" name="input_answer[]" required
placeholder="정답을 입력하고 엔터를 치세요" autocomplete="off" autocorrect="off" spellcheck="false" <? if ($_SERVER['HTTP_HOST']!='stg.classcard.net'): ?> onpaste="return false;"<? endif; ?> maxlength="500" onblur="inputMaxLength(this);">
<a class="btn btn-info btn-next-quiz" style="min-width: 100px; margin-left:10px;">제출</a>
    <a class="btn btn-success btn-submit-quiz hidden">제출</a>
    </div>
    </div>`,

    korean: ["정답을 입력하고 엔터를 치세요", "제출"],
  },

  caseContainsBreakingTag: {
    html: `<div class="quest_body form-inline" style="height: 177px; margin-bottom: 10px; padding-top:70px;">
   <div><br>처음에 있는 경우</div>
   <div>사이에<br>있는 경우</div>
   <div>끝에 있는 경우<br></div>
</div>>`,

    korean: [
      `<br>처음에 있는 경우`,
      `사이에<br>있는 경우`,
      `끝에 있는 경우<br>`,
    ],
  },

  caseContainsMultipleBreakingTags: {
    html: `
<div class="quest_body form-inline" style="height: 177px; margin-bottom: 10px; padding-top:70px;">
   <div>
        <div><br><br>처음에 있는 경우</div>
        <div>사이에<br> <br>있는 경우</div>
        <div>끝에 있는 경우<br><br></div>
  </div>
</div>`,

    korean: [
      `<br><br>처음에 있는 경우`,
      `사이에<br> <br>있는 경우`,
      `끝에 있는 경우<br><br>`,
    ],
  },

  caseContainsNumberSegOne: {
    html: `<a class="btn btn-warning btn-lg mw-180 btn-yoon-noti-close" href="/Pro/pro_info">20% 할인가로 PRO 업그레이드 하기</a>`,
    korean: ["20% 할인가로 PRO 업그레이드 하기"],
  },

  caseContainsNumberSegTwo: {
    html: `<div class="font-28 font-bold" style="line-height:1.4"><?= $s_a_info_2021->a_school_name ?> 2021년 학교인증 종료안내</div>`,
    korean: ["2021년 학교인증 종료안내"],
  },

  caseContainsNumberSegThree: {
    html: `<div class="font-28 font-bold" style="line-height:1.4"><?= $s_a_info_2021->a_school_name ?> 
                2021년에도 클래스카드와 20% 할인받으세요.
          </div>`,
    korean: ["2021년 학교인증 종료안내"],
  },
};
