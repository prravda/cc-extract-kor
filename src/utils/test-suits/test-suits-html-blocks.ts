export const testSuitsHtmlBlocks = {
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

  koreanInplaceHolder: {
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

  koreanContainBreakingTag: {
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
};

export const hugeHtmlBlockCaseOne = `<?php
        defined('BASEPATH') OR exit('No direct script access allowed');
    ?>
<!DOCTYPE html>
<?

if (isset($page_name) && ($page_name == 'memorize' || $page_name == 'recall' || $page_name == 'spell'
    || $page_name == 'class_test' || $page_name == 'set_test' || $page_name == 'gclass_test'
    || $page_name == 'matching' || $page_name == 'crash' || $page_name == 'paragraph')):
    ?>
<html lang="en" dir="ltr" translate="no">
    <? else: ?>
<html lang="en" dir="ltr">
    <? endif; ?>
<head>
    <meta charset="utf-8">
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <? if (
    $page_mode == 'learn'
    || $page_name == 'view_set'
    || ($page_mode == 'class_test' || $page_mode == 'test_report' || $page_mode == 'gclass_test')
    || ($page_mode == 'main' && $page_name == 'login_page')
    || (isset($user_info) == TRUE && $user_info->user_type == 3 && $page_mode == 'main' && $page_name == 'set_list')
|| ($page_name == 'battle' && $is_mobile == TRUE && isset($is_battle_main) == TRUE && $is_battle_main == TRUE)
|| ($page_name == 'matching' && $is_mobile)
): ?>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
<meta name="HandheldFriendly" content="true" />
    <? endif; ?>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width" />
    <? if ( isset($_SERVER['HTTPS']) ): ?>
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
    <? endif; ?>
<meta name="google" value="notranslate">
<?
    $server_name = '';

$hostname = gethostname();
if (isset($hostname) && $hostname != null) {
  if ($hostname == 'www2') {
    $server_name = ' (2)';
  } elseif ($hostname == 'www3') {
    $server_name = ' (3)';
  } elseif ($hostname == 'mobile') {
    $server_name = ' (m)';
  } else {
    $server_name = '';
  }
}


if ($this->config->item('is_all_https') == 1) {
  $meta_protocol = "https";
} else {
  $meta_protocol = "http";
}

    ?>
<!-- Page title -->
<? if (isset($user_info) && $user_info->user_type == 3):?>
<title><?= $title ?></title>
<? elseif (isset($page_name) && $page_name == 'battle'): ?>
<title>클래스카드 배틀</title>
<? elseif (isset($page_name) && $page_name == 'grammar_info'): ?>
<title>클래스그래머 | 학원을 위한 스마트 문법훈련 서비스</title>
<? elseif (isset($page_name) && $page_name == 'view_set' && isset($set_info)): ?>
<title>클래스카드 | <?= addslashes($set_info['name']) ?></title>
<? else: ?>
<title>클래스카드 | 영어쌤 1/3이 선택한 스마트 단어장!</title>
<? endif; ?>

<? if ($page_mode=="home" && $page_name=="main"): ?>
<link rel="canonical" href="<?= $meta_protocol ?>://www.classcard.net" />
    <? endif; ?>
<!-- Place favicon.ico and apple-touch-icon.png in the root directory -->
<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="manifest" href="/manifest.json">
<meta name="msapplication-TileColor" content="#ffffff">
<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
<meta name="theme-color" content="#ffffff">

    <!-- Vendor styles -->
<link rel="stylesheet" href="/vendor/bootstrap/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="/vendor/fontawesome/css/font-awesome.css">
<link rel="stylesheet" href="/vendor/metisMenu/dist/metisMenu.css">
<link rel="stylesheet" href="/vendor/animate.css/animate.css?v=20190911">
<link rel="stylesheet" href="/vendor/toastr/build/toastr.min.css?v=20190118" />
<link rel="stylesheet" href="/vendor/anno/anno.css?v=20190118" />
<link rel="stylesheet" href="/vendor/select2-4.1.0/css/select2.min.css" />

    <!-- App styles -->
<link rel="stylesheet" href="/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css">
<link rel="stylesheet" href="/fonts/pe-icon-7-stroke/css/helper.css">
<link href="/styles/v2/font-awesome.css?v=20220517" rel="stylesheet">
<link rel="stylesheet" href="/vendor/cropper/dist/cropper.min.css" />
<link href="/styles/v2/google_material.css?v=20190401" rel="stylesheet">

    <?if(isset($page_name) && $page_name == 'grammar_info'):?>
<meta property="og:title" content="클래스그래머 | 학원을 위한 스마트 문법훈련 서비스">
<meta property="og:description" content="학원, 공부방을 위한 초중등 문법문제 반복학습 및 오답관리 제공">
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/main/grammar_og_img.jpg">
<meta name="twitter:title" content="클래스그래머 | 학원을 위한 스마트 문법훈련 서비스">
<meta name="twitter:description" content="학원, 공부방을 위한 초중등 문법문제 반복학습 및 오답관리 제공">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/main/grammar_og_img.jpg">
<meta name="title" content="클래스그래머 | 학원을 위한 스마트 문법훈련 서비스"/>
<meta name="keywords" content="flashcard, 플래시카드, 영단어, Vocabulary, Voca, 보카, 교과서, Dictionary,  English Word, 워드, dictionary, 영어사전, 영한사전, 단어장, 암기, 맵세트, 단어세트, Vocabulary, 스마트교육,  smart, learning, TOEIC, TOEFL, GRE, 한자, HSK, JPT"/>
<meta name="description" content="학원, 공부방을 위한 초중등 문법문제 반복학습 및 오답관리 제공"/>
<meta name="naver-site-verification" content="ae4847d1dc8deb1fe5c810f250f7f291b47676e3"/>
    <? elseif ($page_name == 'view_set'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
<link rel="stylesheet" href="/vendor/social-buttons-3.css">
    <? if (isset($set_info)): ?>
<?
    $desc_str = "";
$header_card_seq = 0;
if ($set_info['set_type']!=3 && isset($query_card)) {
  foreach ($query_card as $card) {
    $header_card_seq++;
    if ($header_card_seq>30) {
      break;
    }
    $desc_str .= htmlspecialchars($card['front']) . " : " . htmlspecialchars($card['back']) . ", ";
  }
}
    ?>
<meta property="og:title" content="<?= addslashes($set_info['name']) ?>">
<meta property="og:description" content="<?= $set_info['card_cnt'] . ' Cards | ' . $desc_str ?>">
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
<meta name="twitter:title" content="<?= addslashes($set_info['name']) ?>">
<meta name="twitter:description" content="<?= $set_info['card_cnt'] . ' Cards | ' . $desc_str ?>">
<meta name="title" content="클래스카드 | 영어쌤 1/3이 선택한 스마트 단어장!"/>
<meta name="keywords" content="flashcard, 플래시카드, 영단어, Vocabulary, Voca, 보카, 교과서, Dictionary,  English Word, 워드, dictionary, 영어사전, 영한사전, 단어장, 암기, 맵세트, 단어세트, Vocabulary, 스마트교육,  smart, learning, TOEIC, TOEFL, GRE, 한자, HSK, JPT"/>
<meta name="description" content="클래스카드 제공 <?= addslashes($set_info['name']) ?> 플래시카드 암기하기"/>
<meta name="naver-site-verification" content="ae4847d1dc8deb1fe5c810f250f7f291b47676e3"/>
    <? endif; ?>
<script src="/scripts/numeral.min.js"></script>
<? elseif ($page_name == 'set_list' && isset($sl_info)): ?>
<?
    $desc_str = "";
$header_set_seq = 0;
if (isset($set_list)) {
  foreach ($set_list as $set) {
    $header_set_seq++;
    if ($header_set_seq>20) {
      break;
    }
    if (isset($set['set_name']) == FALSE && isset($set['name']) == TRUE) {
      $row['set_name'] = $row['name'];
    }
    $desc_str .= htmlspecialchars($set['set_name']). ", ";
  }
}
    ?>
<meta property="og:title" content="<?= addslashes($sl_info->sl_name) ?>">
<meta property="og:description" content="<?= $sl_info->set_cnt . ' 세트 | ' . $desc_str ?>">
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
<meta name="twitter:title" content="<?= addslashes($sl_info->sl_name) ?>">
<meta name="twitter:description" content="<?= $sl_info->set_cnt . ' 세트 | ' . $desc_str ?>">
<meta name="title" content="클래스카드 | 영어쌤 1/3이 선택한 스마트 단어장!"/>
<meta name="keywords" content="flashcard, 플래시카드, 영단어, Vocabulary, Voca, 보카, 교과서, Dictionary,  English Word, 워드, dictionary, 영어사전, 영한사전, 단어장, 암기, 맵세트, 단어세트, Vocabulary, 스마트교육,  smart, learning, TOEIC, TOEFL, GRE, 한자, HSK, JPT"/>
<meta name="description" content="<?= addslashes($sl_info->sl_name) ?>"/>
<meta name="naver-site-verification" content="ae4847d1dc8deb1fe5c810f250f7f291b47676e3"/>
    <? elseif (
        isset($class_info)
        && (
            ($page_name == 'paragraph' && isset($report_type) && isset($report_user))
            || (($page_name == 'class_score_card' || $page_name == 'gclass_score_card') && isset($u_id) && $u_id > 0 && (isset($report_user) || (isset($std_name) && strlen($std_name) > 0)))
        )
    ): ?>
<? if ($page_name == 'paragraph'): ?>
<meta property="og:title" content="<?= addslashes($report_user->std_name) ?> 학생 <? if ($report_type == 1): ?>낭독<? else: ?>녹음<? endif; ?> 리포트">
<meta name="twitter:title" content="<?= addslashes($report_user->std_name) ?> 학생 <? if ($report_type == 1): ?>낭독<? else: ?>녹음<? endif; ?> 리포트">
<meta name="title" content="<?= addslashes($report_user->std_name) ?> 학생 <? if ($report_type == 1): ?>낭독<? else: ?>녹음<? endif; ?> 리포트">
    <? else: ?>
<? if (isset($report_user)): ?>
<meta property="og:title" content="<?= addslashes($report_user->std_name) ?> <? if (isset($print_title)):?><?= $print_title ?><? else: ?><? if ($page_name == 'gclass_score_card'): ?>그래머<? else: ?>클래스카드<? endif; ?> 성적표<? endif; ?>">
<meta name="twitter:title" content="<?= addslashes($report_user->std_name) ?> <? if (isset($print_title)):?><?= $print_title ?><? else: ?><? if ($page_name == 'gclass_score_card'): ?>그래머<? else: ?>클래스카드<? endif; ?> 성적표<? endif; ?>">
<meta name="title" content="<?= addslashes($report_user->std_name) ?> <? if (isset($print_title)):?><?= $print_title ?><? else: ?><? if ($page_name == 'gclass_score_card'): ?>그래머<? else: ?>클래스카드<? endif; ?> 성적표<? endif; ?>">
    <? else: ?>
<meta property="og:title" content="<?= addslashes($std_name) ?> <? if (isset($print_title)):?><?= $print_title ?><? else: ?><? if ($page_name == 'gclass_score_card'): ?>그래머<? else: ?>클래스카드<? endif; ?> 성적표<? endif; ?>">
<meta name="twitter:title" content="<?= addslashes($std_name) ?> <? if (isset($print_title)):?><?= $print_title ?><? else: ?><? if ($page_name == 'gclass_score_card'): ?>그래머<? else: ?>클래스카드<? endif; ?> 성적표<? endif; ?>">
<meta name="title" content="<?= addslashes($std_name) ?> <? if (isset($print_title)):?><?= $print_title ?><? else: ?><? if ($page_name == 'gclass_score_card'): ?>그래머<? else: ?>클래스카드<? endif; ?> 성적표<? endif; ?>">
    <? endif; ?>
<? endif; ?>

<? // 학교 타입 ?>
    <? if ($class_info->school_type == 1): ?>
<? // PRO 상태 ?>
    <? if (isset($registerd_b_s_info) && isset($registerd_b_s_info->service_status) && $registerd_b_s_info->service_status <> 0 && $registerd_b_s_info->service_status <> -1): ?>
<meta property="og:description" content="<?= addslashes($registerd_b_s_info->b_s_name) ?>, <?= addslashes($class_info->name) ?>">
<meta name="twitter:description" content="<?= addslashes($registerd_b_s_info->b_s_name) ?>, <?= addslashes($class_info->name) ?>">
<meta name="description" content="<?= addslashes($registerd_b_s_info->b_s_name) ?>, <?= addslashes($class_info->name) ?>">
    <? if (isset($registerd_b_s_info->b_s_katalk_img) && strlen($registerd_b_s_info->b_s_katalk_img) > 0): ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?><?= $registerd_b_s_info->b_s_katalk_img ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?><?= $registerd_b_s_info->b_s_katalk_img ?>">
    <? elseif (strlen($registerd_b_s_info->a_school_logo_img) == 0): ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
    <? else: ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?><?= $registerd_b_s_info->a_school_logo_img ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?><?= $registerd_b_s_info->a_school_logo_img ?>">
    <? endif; ?>
<? // 학교 인증된 상태 ?>
    <? elseif (isset($auth_schl_info) && $auth_schl_info->a_school_auth_status == 2): ?>
<meta property="og:description" content="<?= addslashes($auth_schl_info->a_school_name) ?>, <?= addslashes($class_info->name) ?>">
<meta name="twitter:description" content="<?= addslashes($auth_schl_info->a_school_name) ?>, <?= addslashes($class_info->name) ?>">
<meta name="description" content="<?= addslashes($auth_schl_info->a_school_name) ?>, <?= addslashes($class_info->name) ?>">
    <? if (isset($auth_schl_info->a_school_katalk_img) && strlen($auth_schl_info->a_school_katalk_img) > 0): ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?><?= $auth_schl_info->a_school_katalk_img ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?><?= $auth_schl_info->a_school_katalk_img ?>">
    <? elseif (strlen($auth_schl_info->a_school_logo_img) == 0): ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
    <? else: ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?><?= $auth_schl_info->a_school_logo_img ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?><?= $auth_schl_info->a_school_logo_img ?>">
    <? endif; ?>
<? // 학교 인증이 안된 상태 ?>
    <? else: ?>
<meta property="og:description" content="<?= addslashes($class_info->name) ?>">
<meta name="twitter:description" content="<?= addslashes($class_info->name) ?>">
<meta name="description" content="<?= addslashes($class_info->name) ?>">
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
    <? endif; ?>
<? // 학원 타입 ?>
    <? else: ?>
<? // PRO 상태 ?>
    <? if (isset($registerd_b_s_info) && isset($registerd_b_s_info->service_status) && $registerd_b_s_info->service_status <> 0 && $registerd_b_s_info->service_status <> -1): ?>
<meta property="og:description" content="<?= addslashes($registerd_b_s_info->b_s_name) ?>, <?= addslashes($class_info->name) ?>">
<meta name="twitter:description" content="<?= addslashes($registerd_b_s_info->b_s_name) ?>, <?= addslashes($class_info->name) ?>">
<meta name="description" content="<?= addslashes($registerd_b_s_info->b_s_name) ?>, <?= addslashes($class_info->name) ?>">
    <? if (isset($registerd_b_s_info->b_s_katalk_img) && strlen($registerd_b_s_info->b_s_katalk_img) > 0): ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?><?= $registerd_b_s_info->b_s_katalk_img ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?><?= $registerd_b_s_info->b_s_katalk_img ?>">
    <? elseif (strlen($registerd_b_s_info->b_s_logo_img) == 0): ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
    <? else: ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?><?= $registerd_b_s_info->b_s_logo_img ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?><?= $registerd_b_s_info->b_s_logo_img ?>">
    <? endif; ?>
<? // 그래머 상태 ?>
    <? elseif (isset($g_b_s_info)): ?>
<meta property="og:description" content="<?= addslashes($g_b_s_info->b_s_name) ?>, <?= addslashes($class_info->name) ?>">
<meta name="twitter:description" content="<?= addslashes($g_b_s_info->b_s_name) ?>, <?= addslashes($class_info->name) ?>">
<meta name="description" content="<?= addslashes($g_b_s_info->b_s_name) ?>, <?= addslashes($class_info->name) ?>">
    <? if (isset($g_b_s_info->b_s_katalk_img) && strlen($g_b_s_info->b_s_katalk_img) > 0): ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?><?= $g_b_s_info->b_s_katalk_img ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?><?= $g_b_s_info->b_s_katalk_img ?>">
    <? elseif (strlen($g_b_s_info->b_s_logo_img) == 0): ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
    <? else: ?>
<meta property="og:image" content="<?= $this->config->item('base_url') ?><?= $g_b_s_info->b_s_logo_img ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?><?= $g_b_s_info->b_s_logo_img ?>">
    <? endif; ?>
<? // 일반 상태 ?>
    <? else: ?>
<meta property="og:description" content="<?= addslashes($class_info->name) ?>">
<meta name="twitter:description" content="<?= addslashes($class_info->name) ?>">
<meta name="description" content="<?= addslashes($class_info->name) ?>">
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/classcard_og_v3.png">
    <? endif; ?>
<? endif; ?>
<meta name="keywords" content="flashcard, 플래시카드, 영단어, Vocabulary, Voca, 보카, 교과서, Dictionary,  English Word, 워드, dictionary, 영어사전, 영한사전, 단어장, 암기, 맵세트, 단어세트, Vocabulary, 스마트교육,  smart, learning, TOEIC, TOEFL, GRE, 한자, HSK, JPT"/>
<meta name="naver-site-verification" content="ae4847d1dc8deb1fe5c810f250f7f291b47676e3"/>
    <? else: ?>
<? if ($page_name == 'battle'): ?>
<? if (isset($event_type) == TRUE && isset($field_id) == TRUE): ?>
<? if (isset($field_info) && isset($field_info->ptn_idx) && $field_info->ptn_idx > 2): ?>
<meta property="og:title" content="수업중 꿀잼, 클래스카드 배틀 한 판! 100만개 퀴즈 중 선택하세요!">
<meta name="twitter:title" content="수업중 꿀잼, 클래스카드 배틀 한 판! 100만개 퀴즈 중 선택하세요!">
<meta name="title" content="수업중 꿀잼, 클래스카드 배틀 한 판! 100만개 퀴즈 중 선택하세요!"/>
<meta property="og:url" content="<?= $this->config->item('base_url') ?>QuizEvent/<?= $field_id ?>">
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/battle/battle_sns_600.png">
<meta name="twitter:url" content="<?= $this->config->item('base_url') ?>QuizEvent/<?= $field_id ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/battle/img_class_battle_main02.png">
<meta name="keywords" content="flashcard, 플래시카드, 영단어, Vocabulary, Voca, 보카, 교과서, Dictionary,  English Word, 워드, dictionary, 영어사전, 영한사전, 단어장, 암기, 맵세트, 단어세트, Vocabulary, 스마트교육,  smart, learning, TOEIC, TOEFL, GRE, 한자, HSK, JPT"/>
<meta name="description" content="PC, 스마트폰으로 동시 참여하는 수업도구 클래스카드 배틀. 제한시간내 많이 맞혀야하는 경쟁게임"/>
<meta name="naver-site-verification" content="ae4847d1dc8deb1fe5c810f250f7f291b47676e3"/>
    <? else: ?>
<meta property="og:title" content="<? if ($event_type == 0): ?>초등학교 영단어 800, 전국 최강반에 피자파티!<? else: ?>중학교 영단어 900, 전국 최강반에 피자파티!<? endif; ?>">
<meta name="twitter:title" content="<? if ($event_type == 0): ?>초등학교 영단어 800, 전국 최강반에 피자파티!<? else: ?>중학교 영단어 900, 전국 최강반에 피자파티!<? endif; ?>">
<meta name="title" content="<? if ($event_type == 0): ?>초등학교 영단어 800, 전국 최강반에 피자파티!<? else: ?>중학교 영단어 900, 전국 최강반에 피자파티!<? endif; ?>"/>
<meta property="og:url" content="<?= $this->config->item('base_url') ?>QuizEvent/<?= $field_id ?>">
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/battle/battle_sns_600.png">
<meta property="og:description" content="퀴즈배틀 10월 전국대전, 우리반 친구들 모여라~">
<meta name="twitter:url" content="<?= $this->config->item('base_url') ?>QuizEvent/<?= $field_id ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/battle/img_class_battle_main02.png">
<meta name="keywords" content="flashcard, 플래시카드, 영단어, Vocabulary, Voca, 보카, 교과서, Dictionary,  English Word, 워드, dictionary, 영어사전, 영한사전, 단어장, 암기, 맵세트, 단어세트, Vocabulary, 스마트교육,  smart, learning, TOEIC, TOEFL, GRE, 한자, HSK, JPT"/>
<meta name="description" content="퀴즈배틀 10월 전국대전, 우리반 친구들 모여라~"/>
<meta name="naver-site-verification" content="ae4847d1dc8deb1fe5c810f250f7f291b47676e3"/>
    <? endif; ?>
<? elseif (isset($rank_info) == TRUE): ?>
<meta property="og:title" content="<?= addslashes($rank_info['battle_name']) ?>의 학생<?= $rank_info['std_cnt'] ?>명이 반대항전 <?= addslashes($rank_info['battlefield_name']) ?>에서 <?= $rank_info['real_no'] ?>위!">
<meta name="twitter:title" content="<?= addslashes($rank_info['battle_name']) ?>의 학생<?= $rank_info['std_cnt'] ?>명이 반대항전 <?= addslashes($rank_info['battlefield_name']) ?>에서 <?= $rank_info['real_no'] ?>위!">
<meta name="title" content="<?= addslashes($rank_info['battle_name']) ?>의 학생<?= $rank_info['std_cnt'] ?>명이 반대항전 <?= addslashes($rank_info['battlefield_name']) ?>에서 <?= $rank_info['real_no'] ?>위!"/>
<meta property="og:url" content="<?= $this->config->item('base_url') ?>battlefield/<?= $rank_info['battlefield_idx'] ?>/<?= $rank_info['rank_idx'] ?>">
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/battle/battle_sns_600.png">
<meta property="og:description" content="클래스카드 배틀, 선생님반도 도전해 보세요.">
<meta name="twitter:url" content="<?= $this->config->item('base_url') ?>battlefield/<?= $rank_info['battlefield_idx'] ?>/<?= $rank_info['rank_idx'] ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/battle/img_class_battle_main02.png">
<meta name="keywords" content="flashcard, 플래시카드, 영단어, Vocabulary, Voca, 보카, 교과서, Dictionary,  English Word, 워드, dictionary, 영어사전, 영한사전, 단어장, 암기, 맵세트, 단어세트, Vocabulary, 스마트교육,  smart, learning, TOEIC, TOEFL, GRE, 한자, HSK, JPT"/>
<meta name="description" content="클래스카드 배틀, 선생님반도 도전해 보세요."/>
<meta name="naver-site-verification" content="ae4847d1dc8deb1fe5c810f250f7f291b47676e3"/>
    <? else: ?>
<meta property="og:title" content="수업중 꿀잼, 클래스카드 배틀 한 판! 100만개 퀴즈 중 선택하세요!">
<meta name="twitter:title" content="수업중 꿀잼, 클래스카드 배틀 한 판! 100만개 퀴즈 중 선택하세요!">
<meta name="title" content="수업중 꿀잼, 클래스카드 배틀 한 판! 100만개 퀴즈 중 선택하세요!"/>
<meta property="og:url" content="<?= $this->config->item('base_url') ?>battle<? if (isset($set_idx)): ?>/<?= $set_idx ?><? endif; ?>">
<meta property="og:image" content="<?= $this->config->item('base_url') ?>images/battle/battle_sns_600.png">
    <? if (isset($share_desc) && strlen($share_desc) > 0): ?>
<meta property="og:description" content="<?= $share_desc ?>">
<meta name="description" content="<?= $share_desc ?>"/>
    <? else: ?>
<meta property="og:description" content="PC, 스마트폰으로 동시 참여하는 수업도구 클래스카드 배틀. 제한시간내 많이 맞혀야하는 경쟁게임">
<meta name="description" content="PC, 스마트폰으로 동시 참여하는 수업도구 클래스카드 배틀. 제한시간내 많이 맞혀야하는 경쟁게임"/>
    <? endif; ?>
<meta name="twitter:url" content="<?= $this->config->item('base_url') ?>battle<? if (isset($set_idx)): ?>/<?= $set_idx ?><? endif; ?>">
<meta name="twitter:image" content="<?= $this->config->item('base_url') ?>images/battle/img_class_battle_main02.png">
<meta name="keywords" content="flashcard, 플래시카드, 영단어, Vocabulary, Voca, 보카, 교과서, Dictionary,  English Word, 워드, dictionary, 영어사전, 영한사전, 단어장, 암기, 맵세트, 단어세트, Vocabulary, 스마트교육,  smart, learning, TOEIC, TOEFL, GRE, 한자, HSK, JPT"/>
<meta name="naver-site-verification" content="ae4847d1dc8deb1fe5c810f250f7f291b47676e3"/>
    <? endif; ?>
<? else: ?>
<? if (isset($user_info) && $user_info->user_type == 3):?>
<meta property="og:title" content="<?= $title ?>">
<meta name="twitter:title" content="<?= $title ?>">
<meta name="title" content="<?= $title ?>"/>
    <? else: ?>
<meta property="og:title" content="클래스카드 | 영어쌤 1/3이 선택한 스마트 단어장!">
<meta name="twitter:title" content="클래스카드 | 영어쌤 1/3이 선택한 스마트 단어장!">
<meta name="title" content="클래스카드 | 영어쌤 1/3이 선택한 스마트 단어장!"/>
    <? endif; ?>
<meta property="og:url" content="<?= $meta_protocol ?>://www.classcard.net/">
<meta property="og:image" content="<?= $meta_protocol ?>://www.classcard.net/images/classcard_og_v3.png">
    <? if (isset($_SERVER['HTTP_HOST']) && ($_SERVER['HTTP_HOST'] == 'battle.classcard.net' || $_SERVER['HTTP_HOST'] == 'stgbattle.classcard.net' || $_SERVER['HTTP_HOST'] == 'devbattle.classcard.net')): ?>
<meta property="og:description" content="PC, 스마트폰으로 동시 참여하는 수업도구 클래스카드 배틀. 제한시간내 많이 맞혀야하는 경쟁게임">
    <? else: ?>
<meta property="og:description" content="선생님은 시간절약, 학생들은 성적쑥쑥">
    <? endif; ?>
<meta name="twitter:url" content="<?= $meta_protocol ?>://www.classcard.net/">
<meta name="twitter:image" content="<?= $meta_protocol ?>://www.classcard.net/images/classcard_og_v3.png">
<meta name="keywords" content="flashcard, 플래시카드, 영단어, Vocabulary, Voca, 보카, 교과서, Dictionary,  English Word, 워드, dictionary, 영어사전, 영한사전, 단어장, 암기, 맵세트, 단어세트, Vocabulary, 스마트교육,  smart, learning, TOEIC, TOEFL, GRE, 한자, HSK, JPT"/>
<meta name="description" content="클래스카드, 스마트교육, 스마트러닝, 선생님이 만들어 우리반이 함께 공부하는 스마트 플래시카드"/>
<meta name="naver-site-verification" content="ae4847d1dc8deb1fe5c810f250f7f291b47676e3"/>
    <? endif; ?>

<? if ($page_name == 'class_test' || $page_name == 'login' || $page_name == 'gclass_test'): ?>
<meta http-equiv='cache-control' content='no-cache'>
<meta http-equiv='expires' content='0'>
<meta http-equiv='pragma' content='no-cache'>
    <? endif; ?>
<? endif; ?>

<link rel="stylesheet" href="/vendor/jReject-master/css/jquery.reject.css" />
    <? if ($page_name == 'learn'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
<link rel="stylesheet" href="/vendor/easySlider/easySlider1.7.css" />
    <? elseif ($page_name == 'memorize'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
<link rel="stylesheet" href="/vendor/easySlider/easySlider1.7.css" />
<link rel="stylesheet" href="/styles/static_custom.css" />
    <? elseif ($page_name == 'recall'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
<link rel="stylesheet" href="/vendor/easySlider/easySlider1.7.css" />
<link rel="stylesheet" href="/styles/static_custom.css" />
    <? elseif ($page_name == 'spell'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
<link rel="stylesheet" href="/vendor/easySlider/easySlider1.7.css" />
<link rel="stylesheet" href="/styles/static_custom.css" />
    <? elseif ($page_name == 'init_class'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
    <? elseif ($page_name == 'print_bingo' || $page_name == 'print_set'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
    <? elseif ($page_name == 'class_test' || $page_name == 'test_report' || $page_name == 'view_grid' || $page_name == 'set_test' || $page_name == 'gclass_test'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
<link href="/vendor/bootstrap-datepicker-master/dist/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <? elseif ($page_name == 'class' || $page_name == 'gclass'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
<link rel="stylesheet" href="/vendor/bootstrap-tour/build/css/bootstrap-tour.min.css" />
<link href="/vendor/bootstrap-datepicker-master/dist/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <? elseif ($page_name == 'main' || $page_name == 'user'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
    <? elseif ($page_name == 'test_print'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
    <? elseif ($page_mode == 'create'): ?>
<script src="/scripts/numeral.min.js"></script>
    <link rel="stylesheet" href="/vendor/social-buttons-3.css">
<link rel="stylesheet" href="/vendor/jquery-ui/themes/redmond/jquery-ui.min.css" />
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
    <? elseif ($page_name == 'class_mng'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
<link href="/vendor/bootstrap-datepicker-master/dist/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <? elseif ($page_name == 'book'): ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
    <? else: ?>
<link rel="stylesheet" href="/vendor/awesome-bootstrap-checkbox/awesome-bootstrap-checkbox.css" />
    <? endif; ?>

<link rel="stylesheet" href="/vendor/jquery-ui/themes/redmond/jquery-ui.css" />

<link rel="stylesheet" href="/vendor/classcard/classcard.css?v=20230427">
<link rel="stylesheet" href="/vendor/classcard2/classcard2.css?v=20231228">
<!-- <link rel="preconnect" href="https://fonts.googleapis.com"> -->
<!-- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> -->
<!-- <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic+Coding:400,700" rel="stylesheet"> -->
<!-- <link href="https://fonts.googleapis.com/css?family=Nanum+Gothic:400,700,800" rel="stylesheet"> -->
<!-- <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&display=swap" rel="stylesheet"> -->
    <? if ($this->config->item('is_noto_sans_font') == true): ?>
<link href="/styles/noto_sans_kr.css" rel="stylesheet">
    <? endif; ?>
<link rel="stylesheet" href="/styles/style_v2.css?v=20231229">
<script src="/scripts/fancytrack.min.js"></script>
    <script src="/vendor/jquery/dist/jquery.min.js"></script>
    <script src="/scripts/clipboard.js"></script>
    <script src="/vendor/select2-4.1.0/js/select2.min.js"></script>

<? if (($page_name == 'user' || $page_name == 'main') || $page_name == 'set_list'): ?>
<link rel="stylesheet" href="/styles/main.css?v=20190118" />
    <? elseif ($page_name == 'class'): ?>
<script src="/vendor/bootstrap-tour/build/js/bootstrap-tour.min.js"></script>
<? elseif ($page_name == 'print_bingo' || $page_name == 'print_set' || $page_name == 'test_print' || $page_name == 'class_score_card' || $page_name == 'gclass_score_card'): ?>
<link rel="stylesheet" href="/styles/print_web.css?v=20210305" type="text/css" />
<link rel="stylesheet" href="/styles/print.css?v=202212011443" type="text/css" media="print" />
<link rel="stylesheet" href="/styles/bootstrap-slider.min.css?v=20190118" type="text/css" />
<link href="/vendor/bootstrap-datepicker-master/dist/css/bootstrap-datepicker.min.css" rel="stylesheet" />
<script src="/scripts/bootstrap-slider.min.js?v=20190118"></script>
<? elseif ($page_name == 'battle' || $page_name == 'pro_report'): ?>
<link href="/vendor/bootstrap-datepicker-master/dist/css/bootstrap-datepicker.min.css" rel="stylesheet" />
    <? elseif ($page_name == 'matching' && (isset($set_info) == FALSE || (isset($set_info) && $set_info["set_type"] != 5))): ?>
<?= setJSObfuscateFile("/scripts/v2/match.js?v=20230427") ?>
<? endif; ?>

<?
    $current_host = $_SERVER['HTTP_HOST'];
if ($current_host=="www.classcard.net" || $current_host=="service.classcard.net" || $current_host=="classcard.net" || $current_host=="battle.classcard.net"):
    ?>

<!-- GA 4 -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-CKZZ47XRJC"></script>
<script>
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

<? if (isset($is_login) && $is_login && isset($login_info->user_idx)): ?>
gtag('set',{'user_id' : '<?= $login_info->user_idx ?>'});
<? endif; ?>

<? if (isset($is_login) && $is_login && isset($login_info->user_type)): ?>
gtag('set', 'user_properties', {user_type : '<?= $login_info->user_type ?>'});
<? endif; ?>

<? if (isset($is_login) && $is_login && isset($login_info->user_type) && $login_info->user_type == 1 && isset($login_info->school_type) ): ?>
gtag('set', 'user_properties', {school_type : '<?= $login_info->school_type ?>'});
<? endif; ?>

<? if (isset($is_login) && $is_login && isset($login_info->user_type) && $login_info->user_type == 1):
$pm_type  = 1;
if (isset($registerd_b_s_info) && isset($registerd_b_s_info->service_status) && $registerd_b_s_info->service_status <> 0 && $registerd_b_s_info->service_status <> -1) {
  $pm_type  = 3;
} elseif (isset($g_b_s_info)) {
  $pm_type  = 4;
} elseif (getAuth($this->user_level, USER_LEVEL_PREMIUM)) {
  $pm_type  = 2;
}
    ?>
gtag('set', 'user_properties', {pm_type : '<?= $pm_type ?>'});
<? endif; ?>


<? if (isset($is_login) && $is_login && isset($login_info->user_type) && $login_info->user_type == 1 && isset($login_info->school_type) && $login_info->school_type == 1):
if (isset($login_info->auth_schl_info) && $login_info->auth_schl_info->a_school_auth_status==2) {
  $auth_type  = 1;
} else {
  $auth_type  = 2;
}
    ?>
gtag('set', 'user_properties', {auth_type : '<?= $auth_type ?>'});
<? endif; ?>

gtag('config', 'G-CKZZ47XRJC');
</script>



<?  endif; ?>

<? if (isset($is_banner) && $is_banner == TRUE): ?>
<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<? endif; ?>
</head>
<!--
    <?
        echo($page_mode."\n");
        echo($page_name."\n");
    ?>
 -->
<? if ($page_mode == 'landing'): ?>
<body class="landing-page <? if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? elseif ($page_name == 'init_class'): ?>
<body style="background-color: #fff;" class="<?if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? elseif ($page_mode == 'learn'): ?>
<body style="background-color: #222328;" class="<? if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? elseif ($page_mode == 'create'): ?>
<? if ($page_name == 'create_drill' || $page_name == 'create_listen'): ?>
<body style="margin-top: 60px;" class="<? if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?> disabled" itemscope itemtype="http://schema.org/WebPage">
<div class="isloading-overlay" style="position:fixed; left:0; top:0; z-index: 10000; background: rgba(0,0,0,0.5); width: 100%; height: 979px;"><span class="isloading-wrapper  isloading-show  isloading-overlay" style="top: 470.5px;">로딩중 입니다.<i class="icon-refresh icon-spin"></i></span></div>
<? elseif ($page_name == 'create_sentence'): ?>
<body style="margin-top: 60px;" class="<? if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?> disabled" itemscope itemtype="http://schema.org/WebPage">
<div class="isloading-overlay" style="position:fixed; left:0; top:0; z-index: 10000; background: rgba(0,0,0,0.5); width: 100%; height: 979px;"><span class="isloading-wrapper  isloading-show  isloading-overlay" style="top: 470.5px;">로딩중 입니다.<i class="icon-refresh icon-spin"></i></span></div>
<? else: ?>
<body style="margin-top: 60px;" class="<? if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?> disabled" itemscope itemtype="http://schema.org/WebPage">
<div class="isloading-overlay" style="position:fixed; left:0; top:0; z-index: 10000; background: rgba(0,0,0,0.5); width: 100%; height: 979px;"><span class="isloading-wrapper  isloading-show  isloading-overlay" style="top: 470.5px;">로딩중 입니다.<i class="icon-refresh icon-spin"></i></span></div>
<? endif; ?>
<? elseif ($page_mode == 'class_test' || $page_mode == 'test_report'|| $page_mode == 'wrong_word' || $page_mode == 'academy_regist'): ?>
<body style="background-color: #222328;" class="<?= $page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? elseif ($page_mode == 'gclass_test'): ?>
<body style="background-color: #ffffff;" class="<?= $page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? elseif ($page_name == 'print_bingo' || $page_name == 'print_set' || ($page_name == 'class' && isset($is_mng) && $is_mng)): ?>
<body style="background-color: #424242;" class="<? if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? elseif ($page_mode == 'class' && $page_name == 'battle'): ?>
<body class="<? if (isset($is_mobile) && $is_mobile): ?>is-mobile<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? elseif ($page_name == 'view_grid' || $page_name == 'class_quiz'): ?>
<body style="background: #222328;" class="<? if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? elseif ($page_name == 'embeded'): ?>
<body style="background-color: #424242;" class="<?if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? elseif ($page_name == 'cedu'): ?>
<body class="cedu" style="margin-top:80px;" itemscope itemtype="http://schema.org/WebPage">
    <? else:?>
<body class=" <?if (isset($mobile_css)): ?><?= $mobile_css ?><? endif; ?><?= " ".$page_name?><? if (isset($is_banner) && $is_banner == TRUE): ?> banner-show<? endif; ?>" itemscope itemtype="http://schema.org/WebPage">
    <? endif; ?>

<script type="text/javascript">
    FancyTrack.init({
      url: '/JsError'
    });
</script>

<script type="text/javascript">
    <? if (isset($login_info) && isset($login_info->user_idx) > 0): ?>
var is_login = true;
var c_u = <?= $login_info->user_idx ?>;
var login_info = <?= json_encode($login_info) ?>;
<? else: ?>
var c_u = 0;
var is_login = false;
<? endif; ?>
</script>

<script type="text/javascript">
    function imageError(element) {
      element.onerror = '';
      element.src = '/images/default_photo.png';
    }
    </script>

    <div class="modal fade <? if (isset($is_embed) == TRUE && $is_embed == TRUE): ?>embed<? endif; ?>" id="newRankModal" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
    <style>
        #newRankModal .checkbox.opt-info label::before { top: -3px; }
#newRankModal .checkbox.opt-info input[type="checkbox"]:checked + label::after { top: -3px; padding-top: 3px; }
#newRankModal.embed .modal-dialog { width: 670px; }
#newRankModal.embed .modal-dialog .rank-body { display: none; }
#newRankModal.modal { background: #000; }
.embed-tooltip { display: inline-block; position: relative; padding: 8px 0px; opacity: 0.95; }
.embed-tooltip .inner { background: #F6FBF3; color: #333; border-radius: 4px; padding: 18px; }
.embed-tooltip .arrow { position: absolute; width: 0; height: 0; border-color: transparent; border-style: solid; bottom: 0; right: 5%; border-width: 8px 8px 0; border-top-color: #F6FBF3; }
</style>
<div class="modal-dialog">
<div class="modal-content">
<div class="cc-row">
    <? if (isset($is_embed) == TRUE && $is_embed == TRUE): ?>
<div class="text-right">
<div class="embed-tooltip text-left">
<div class="arrow"></div>
    <div class="inner">
<div class="cc-table middle" style="width: 325px;">
<div style="width: 100%; font-size: 15px; line-height: 1.7;">
<img src="/images/main/classcard_logo_embed_02.png" style="padding-bottom: 2px;"> 회원이 되면<br>
내가한 학습기록을 선생님께 제출할 수 있어요.
</div>
<div>
<a class="btn btn-lg2 btn-success radius" onclick="javascript:window.parent.location.href='/';">클래스카드 가기</a>
</div>
</div>
</div>
</div>
</div>
<? endif; ?>
<div class="rank-info">
<div class="title-body">
<span class="title text-primary"></span>
    <span class="text-success">Game</span>
    </div>

    <div class="msg-info">
    </div>
    <div class="crash-option">
<div class="radio primary">
<input type="radio" name="selCrashType" id="selCrashType1" value="1"><label for="selCrashType1">단어 제시 &rarr; 의미 입력</label>
</div>
<div class="radio primary m-t-xs">
<input type="radio" name="selCrashType" id="selCrashType2" value="0" checked><label for="selCrashType2">의미 제시 &rarr; 단어 입력</label>
</div>
</div>
<div class="btn-body">
<a class="btn btn-success btn-lg btn-block btn-rank-start"></a>
    <a class="btn btn-default btn-lg btn-block btn-rank-cancel <? if (($page_mode == 'learn' || $page_name == 'embeded') && isset($is_embed) == TRUE && $is_embed == TRUE):?>hidden<? endif; ?>">취소</a>
    </div>
    </div>
    <div class="rank-body">
<div class="opt-info checkbox primary">
<input type="checkbox" id="rank_show_today" value="1">
    <label for="rank_show_today">오늘 기록만 보기</label>
</div>
<div class="cc-scroll-y success" style="height: 100%;">
<div class="class-rank-body m-b-xl">
<div class="title text-center font-20 font-bolder m-t-md cc-ellipsis l1" style="line-height: 1.2;">Class Name</div>
<div class="list m-t-md rank-small">
    <table>
        </table>
    </div>
    </div>
    <div class="all-rank-body">
<div class="title text-center font-20 font-bolder m-t-md">모든 도전기록</div>
<div class="list m-t-md rank-small">
    <table>
        </table>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    </div>
    <div class="rank-template hidden">
<table>
    <tr>
        <td class="img" width="35"><img class="img-circle" src="" width="25" height="25" title="img" onerror="imageError(this)" /></td>
    <td class="name text-ellipsis"></td>
    <td class="score" width="90" align="right"></td>
    </tr>
    </table>
    </div>
    </div>
    <div class="modal fade hmodal-info" id="premiummodal" tabindex="-1" role="dialog" aria-hidden="true" style="display: none; z-index:1110;" data-load-url='' style="display: none;">
<div class="modal-dialog w-500">
<div class="modal-content" style="border-radius:0px;">
    <!-- remote register popup 영역 -->
</div>
</div>
</div>
<div class="modal fade success" id="makeSetListModal" tabindex="-1" role="dialog">
<div class="modal-dialog w-700">
<div class="modal-content">
    <!-- remote login popup 영역 -->
</div>
</div>
</div>
<div class="modal fade success" id="newSet" tabindex="-1" role="dialog" aria-hidden="true">
    <style>
.newset-row { display: inline-block; width: 200px; height: 134px; background: #fff; box-shadow: 0 0 7px 0 rgba(0,0,0,0.18); border-radius: 8px; cursor: pointer; }
.newset-row>* { position: relative; display: table; width: 100%; height: 100%; border-radius: 8px; overflow: hidden; text-align: center; font-weight: 600; }
.newset-row.alert-mode .newset-item { display: none; }
.newset-row .newset-item { color: #fff; }
.newset-row:hover .newset-item { background: rgba(0, 0, 0, 0.5) !important; }
.newset-row:not(.alert-mode):hover .back { display: table; }
.newset-row .newset-item>* { display: table-cell; vertical-align: middle; padding: 10px; }
.newset-row .alert-ly>* { display: table-cell; vertical-align: middle; padding: 10px; }
.alert-row { display: inline-block; width: 300px; height: 200px; background: #fff; }
.alert-row>* { position: relative; display: table; width: 100%; height: 100%; overflow: hidden; text-align: center; font-weight: 600; }
.new-book-item .new-book-img{margin-left:26px; border: 3px solid #fff;}
.new-book-item:hover .new-book-img{border: 3px solid #78D024; box-sizing: border-box;}
.new-book-item:first-child .new-book-img{margin-left:0px;}
.new-publisher-box { -ms-overflow-style: none; scrollbar-width: none; width:650px; height:160px; overflow-x:scroll; white-space:nowrap; }
.new-publisher-box::-webkit-scrollbar { display: none; }
</style>
<input type="hidden" name="target_sl_idx" value="-1">
<input type="hidden" name="target_set_idx" value="-1">
<div class="modal-dialog" style="width:<? if ($is_login && isset($login_info->user_type) && $login_info->user_type==1): ?>920px;<? else: ?>490px;<? endif; ?>">
<div class="">
<div class="modal-content modal-body text-center">
<div class="pull-right" style="position: absolute; right: 10px; top: 5px;">
<a class="font-24" data-dismiss="modal"><i class="cc times"></i></a>
</div>
<? if ($is_login && isset($login_info->user_type) && $login_info->user_type==1): ?>
<? if (isset($login_info) && date("Y-m-d H:i:s") < "2021-09-23 23:59:59" && getAuth($this->user_level, USER_LEVEL_ACADEMY) && getAuth($this->user_level, USER_LEVEL_PRO) == FALSE): ?>
<div class="font-14 text-left m-b-sm p-l-xs">
<span class="text-danger font-bold">NEW!</span>
Academy 이용 중이시죠? 이제 문장학습까지 제공됩니다!
<a class="text-underline anchor-underline" href="/School" target="_blank">자세히</a>
</div>
<? endif; ?>
<div class="newset-row m-r-sm" data-url="/CreateWord" data-type="1">
<div class="newset-item bg-success">
<div class="font-14">영어 등 외국어의 어휘를<br>효과적으로 암기
<br><br><span class="font-24">단어 세트</span>
</div>
</div>
</div>
<div class="newset-row m-r-sm" data-url="/CreateWord/sentence" data-type="5">
<div class="newset-item bg-warning">
<div class="font-14">교과서, 원서의<br> 영어 문장을 빠르게 암기
<br><br><span class="font-24">문장 세트</span>
</div>
</div>
</div>

<div class="newset-row m-r-sm" data-url="/CreateDrill" data-type="6" style="position:relative;">
<div class="newset-item" style="background:#7898FD;">
<div class="font-14">내신 어법 문제를<br>빠르게 출제하고 자동채점
<br><br><span class="font-24">드릴 세트</span>
</div>
</div>
</div>


<div class="newset-row <?if (getAuth($this->user_level, USER_LEVEL_PRO) == FALSE):?>preminum-popup<?endif;?>" data-url="/CreateListen" data-type="7">
<div class="newset-item bg-primary">
<div class="font-14">듣기시험을 실시하고<br>오답만 다시 풀기
<br><br><span class="font-24">듣기 세트</span>
</div>
</div>
</div>


<div class="font-14 text-left m-t-md p-l-xs hidden">
<span class="text-danger font-bold">NEW!</span>
<?if (isset($login_info) && getAuth($this->user_level, USER_LEVEL_ACADEMY) && getAuth($this->user_level, USER_LEVEL_PRO) == FALSE):?>
Academy 이용 중이시죠? 정답세트로 간단히 OMR 시험을 실시하세요.
<?else:?>
정답세트로 간단히 OMR 시험을 실시하세요!
<?endif;?>
<? if (isset($is_login) && $is_login && isset($login_info->user_type) && $login_info->user_type == 1 && isset($login_info->school_type) && $login_info->school_type == 1): ?>
<a class="text-underline anchor-underline" href="https://cafe.naver.com/classcardteacher/2476" target="_blank">자세히</a>
<? elseif (isset($is_login) && $is_login && isset($login_info->user_type) && $login_info->user_type == 1 && isset($login_info->school_type) && $login_info->school_type == 2): ?>
<a class="text-underline anchor-underline" href="https://cafe.naver.com/classcardhakwon/4960" target="_blank">자세히</a>
<? endif ;?>
</div>

<div class="newset-row  m-r-sm" data-url="/CreateTerm" data-type="2">
<div class="newset-item" style="background:#E9B7EF;">
<div class="font-14">사회, 과학 등의<br>용어와 개념을 암기
<br><br><span class="font-24">용어 세트</span>
</div>
</div>
</div>

<div class="newset-row m-r-sm"  data-url="/CreateAnswer" data-type="8">
<div class="newset-item" style="background:#E07141;">
<div class="font-14">종이책, 시험지 문제를<br>자동채점(OMR)
<br><br><span class="font-24">정답 세트</span>
</div>
</div>
</div>

<div class="m-t cc-table middle fill-parent" style="display: inline-block; width: 416px; height: 134px;">
<div class="text-danger text-left font-12 font-bold" style="height: 134px; padding: 10px 20px;border: 1px dashed;line-height: 1.8;">
    저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하면 관련 법률에 저촉되니 주의해 주세요.
    능률보카, 워드마스터, 뜯어먹는 영단어, 경선식 영단어, 우선순위 영단어, 어휘끝, 마더텅 등 판매되는 교재의 내용을 제작하실 경우 비공개로 설정하여 이용하세요
</div>
</div>

<div class="set-small-show text-danger text-bold p-b p-l-lg" style="font-size:15px; margin-top:5px;">세트는 PC에서 제작할 수 있습니다.</div>

<? else: ?>
<div style="display: inline-block; width: 416px;">
<div class="font-14 text-left m-b-sm m-r-sm" style="display: inline-block; width: 200px;">영어 학습목적 세트</div>
<div class="font-14 text-left m-b-sm" style="display: inline-block; width: 200px;">일반과목의 암기학습</div>
</div>
<div>
<div class="newset-row m-r-sm" data-url="/CreateWord" data-type="1">
<div class="newset-item bg-success">
<div class="font-14">영어 등 외국어의 어휘를<br>효과적으로 암기
<br><br><span class="font-24">단어 세트</span>
</div>
</div>
</div>
<div class="newset-row" data-url="/CreateTerm" data-type="2">
<div class="newset-item" style="background:#E9B7EF;">
<div class="font-14">사회, 과학 등의<br>용어와 개념을 암기
<br><br><span class="font-24">용어 세트</span>
</div>
</div>
</div>

<div class="m-t cc-table middle fill-parent" style="display: inline-block; width: 416px; height: 134px;">
<div class="text-danger text-left font-12 font-bold" style="height: 134px; padding: 10px 20px;border: 1px dashed;line-height: 1.8;">
    저작권 등 다른 사람의 권리를 침해하거나 명예를 훼손하면 관련 법률에 저촉되니 주의해 주세요.
    능률보카, 워드마스터, 뜯어먹는 영단어, 경선식 영단어, 우선순위 영단어, 어휘끝, 마더텅 등 판매되는 교재의 내용을 제작하실 경우 비공개로 설정하여 이용하세요
</div>
</div>
</div>

<? endif; ?>
</div>
<? if ($is_login && isset($login_info->user_type) && $login_info->user_type==1): ?>

<div class='text-left m-t-25 new-book-list modal-content modal-body'></div>
<?endif;?>
<script type="text/javascript">
    jQuery(function($){
      $('#newSet').unbind('hidden.bs.modal').on('hidden.bs.modal', function (e) {
        $(this).find('input[name="target_sl_idx"]').val(-1);
        $(this).find('input[name="target_set_idx"]').val(-1);
      });
      $('#newSet').unbind('show.bs.modal').on('show.bs.modal', function (e) {
        <? if ($is_login && isset($login_info->user_type) && $login_info->user_type==1): ?>

        if ($(this).find('.new-book-list .new-book-item').length == 0){
          jQuery.ajax({
            url: "/ClassMain/getNewBookList",
            global: false,
            type: "POST",
            dataType: "json",
            async: true,
            success: function(data) {
              console.log(data);
              if (data.result == 'ok') {
                var book_list = data.msg;
                if (book_list.length > 0 ){
                  var html = "<div class='font-16'>신규 공식제공 세트 소개</div>";
                  html += "<div class='cc-table m-t-md middle '>";
                  html += "<div style='width:650px'><div class='new-publisher-box'>";

                  $.each(book_list, function(idx, item){
                    var link = item.hakwon_link;
                    <? if ($is_login && isset($login_info->user_type) && $login_info->user_type==1 && $login_info->school_type == 1): ?>
                    link = item.school_link;
                    <?endif;?>
                    html += "<a class='new-book-item pos-relative' target='_blank' href='"+link+"'>";
                    html +=     "<img class='new-book-img'src='"+item.thum_img+"'  style='box-shadow:0px 0px 10px rgb(0 0 0 / 20%) !important; width:120px; height:150px;'>";
                    if (idx == 0){
                      html += '<img src="/images/new_book_label.png" style="position: absolute; top: -69px; left: -6px; width: 80px;">';
                    }

                    html += "</a>"

                  });
                  html += '</div></div>'
                  html += '<div class="w-200 text-center" style="padding-left:32px;"><div class="font-18 font-bold">공식제공 학습세트</div><div class="font-16 font-bold m-t-sm">26,752개</div><div class="m-t-sm"><a class="text-primary anchor-underline font-14" target="_blank" href="/Search">더보기 > </a></div></div>'
                  html += '</div>';
                  $('#newSet').find('.new-book-list').append(html);
                }

              }
            },
            error: function(response, textStatus, errorThrown) {
              console.log('response', response);
            }
          });
        }
        <?endif;?>
      });

      var create_url;
      var pm_param = '';
      $('.newset-row, .newset-lc').click(function() {

        if ($(this).hasClass('preminum-popup')){
          $('#premiummodal').modal('show').find('.modal-content').load('/Premium/pro');
          return;
        }

        <? if ($this->config->item('is_block_set_make') == 1): ?>
        <? if ($is_login && $login_info->user_type == 1
        && ( (isset($registerd_b_s_info) && isset($registerd_b_s_info->service_status) && $registerd_b_s_info->service_status <> 0 && $registerd_b_s_info->service_status <> -1)
      || (isset($user_academy_info) && $user_academy_info != null) )
      ):
            ?>
        <? else: ?>
        showAlert('접속자가 많아서 일시적으로 세트제작을 할 수 없습니다. 나중에 이용해 주세요.');
        return;
        <? endif; ?>
        <? endif; ?>

        create_url = $(this).data('url');

        var target_sl_idx = $('#newSet').find('input[name="target_sl_idx"]').val();
        var target_set_idx = $('#newSet').find('input[name="target_set_idx"]').val();
        if (target_sl_idx > -1) {
          create_url += '?tsl=' + target_sl_idx + '&ts=' + target_set_idx;
        }
        pm_param = 'sentence_set';
        if ($(this).data('type') == 5) {
          $('#newSet').modal('hide');
          window.location.href = create_url;

        } else if ($(this).data('type') == 7) {

          <? if ($is_login && $login_info->user_type == 1 && isset($registerd_b_s_info) && isset($registerd_b_s_info->service_status) && $registerd_b_s_info->service_status <> 0 && $registerd_b_s_info->service_status <> -1): ?>
          <? if (isset($registerd_b_s_info->is_b_s_owner) && $registerd_b_s_info->is_b_s_owner == 1): ?>
          $('#newSet').modal('hide');
          window.location.href = create_url;
          <? else: ?>
          showConfirm('듣기세트는 관리자(<?= $registerd_b_s_info->user_name ?>)만 제작할 수 있습니다. 관리자가 만든 듣기세트 또는 추천 듣기세트를 이용하세요', null
              , function() { document.location.href = '/Search/topset?c=lc&c1=lc&c2=lc'; }
              , function() { document.location.href = '/Pro/AcademySet/<?= $registerd_b_s_info->b_s_idx ?>/<?= $registerd_b_s_info->b_s_owner_user_idx ?>'; }
              , null, null, '추천 듣기세트 보기' ,'관리자의 세트 보기'
          );
          $('#confirmModal .close-pos.btn-cancel').unbind('click').click(function() {
            $('#confirmModal').modal('hide');
          });
          <? endif; ?>
          <? else: ?>
          showAlert('듣기세트는 클래스카드 Pro 이용자만 제작할 수 있습니다. 추천 듣기세트를 이용하세요.', null, function() { document.location.href = '/Search/topset?c=lc&c1=lc&c2=lc'; }, null, null, '추천 듣기세트 보기');
          $('#alertModal .close-pos.btn-ok').unbind('click').click(function() {
            $('#alertModal').modal('hide');
          });
          return;
          <? endif; ?>

        } else {
          $('#newSet').modal('hide');
          window.location.href = create_url;
        }
      });

    });
</script>
</div>
</div>
</div>
<script type="text/javascript">
    function showRankType(is_today) {
      // 모든 도전기록도 오늘만 보기 기능 적용
      var t = $('#newRankModal .rank-body .list table tr').not('.first-challenge-info');
      var today_tr = $('#newRankModal .rank-body .list table tr.is-today').not('.first-challenge-info');

      var class_rank = $('#newRankModal .rank-body .class-rank-body .list table tr');
      var all_rank = $('#newRankModal .rank-body .all-rank-body .list table tr');
      if (is_today) {
        today_tr.find('.s-cnt').each(function() {
          $(this).text($(this).data('tcnt') + '회');
        });
        t.not('.is-today').addClass('hidden');
      } else {
        t.find('.s-cnt').each(function() {
          $(this).text($(this).data('cnt') + '회');
        });
        t.not('.is-today').removeClass('hidden');
      }

      if (class_rank.not('.hidden').length == 0) {
        $('.class-rank-body .list-len-zero-info').removeClass('hidden');
      }
      else {
        $('.class-rank-body .list-len-zero-info').addClass('hidden');
      }

      if (all_rank.not('.hidden').length == 0) {
        $('.all-rank-body .list-len-zero-info').removeClass('hidden');
      }
      else {
        $('.all-rank-body .list-len-zero-info').addClass('hidden');
      }
    }
function showRankPopup(u_id, c_id, s_id, a, l, c_s, st, match_is_skip) {
  if (a == 4 && match_is_skip == undefined){
    window.location = '/Match/' + s_id + '?c=' + c_id + '&s=1';
    return;
  }

  if (a == 4) {
    $('#newRankModal').find('.rank-info').find('.all-rank-body').addClass('hidden');
  } else {
    $('#newRankModal').find('.rank-info').find('.all-rank-body').removeClass('hidden');
  }
  var cur_score = (c_s) ? c_s : 0;
  console.log(c_id);
  jQuery.ajax({
    url: "/MainAsync/getRank",
    global: false,
    type: "POST",
    data: {user_idx:u_id, class_idx:c_id, set_idx:s_id, activity:a, limit:100, current_score:cur_score},
    dataType: "json",
    async: true,
    success: function(data) {
      console.log(data);
      if (data.result == 'ok') {
        var modal = $('#newRankModal');
        modal.find('.list-len-zero-info').remove();
        var info = modal.find('.rank-info');
        info.removeClass('crash');
        var table = modal.find('.rank-body .all-rank-body .list table');
        var table_class = modal.find('.rank-body .class-rank-body .list table');
        var tem_tr = modal.find('.rank-template tr');
        var link_url = '';
        var pathname = document.location.pathname;
        var is_study = false;
        if (pathname.indexOf('Match') > -1 || pathname.indexOf('Crash') > -1) {
          is_study = true;
        }
        var curDate = (new Date()).format('yyyy-MM-dd');

        <? if (isset($login_info) && isset($login_info->name) > 0): ?>
        var user_name = '<?= addslashes($login_info->name) ?>';
        <? else: ?>
        var user_name = '';
        <? endif; ?>

        table.find('tr').remove();
        table_class.find('tr').remove();

        if (data.all_rank_list.length == 0 && data.class_rank_list.length == 0) {
          modal.find('.class-rank-body').addClass('hidden');
          modal.find('.all-rank-body .title').addClass('hidden');

          var item = $(document.createElement('tr'));
          item.addClass('first-challenge-info');
          item.css({'height': 420, 'font-weight': '600', 'text-align': 'center', 'line-height': '1.8'});
          item.append('<td style="font-size: 18px;">최초 도전입니다.<br>최고 기록을 남기세요!</td>');
          table.append(item);
        } else {
          modal.find('.class-rank-body').removeClass('hidden');
          modal.find('.all-rank-body .title').removeClass('hidden');

          $.each(data.all_rank_list, function(index, value) {
            var item = tem_tr.clone();

            if (c_u == value.user_idx && value.is_me == 1) {
              item.css({'background': '#7458BA'});
            }

            if (value.reg_date.startsWith(curDate)) {
              item.addClass('is-today');
            }

            if (value.profile_img == null || value.profile_img.length == 0) {
              item.find('.img img').attr('src', '/images/default_photo.png');
            } else {
              item.find('.img img').attr('src', value.profile_img);
            }

            if (c_u == value.user_idx) {
              item.find('.name').text(value.rank + '. ' + value.user_name + " (나)");
            } else {
              item.find('.name').text(value.rank + '. ' + value.user_name);
            }
            if (value.cnt !== undefined && value.cnt > 1) {
              item.find('.score').html('<span class="s-cnt text-light font-10 text-white" data-tcnt="' + value.today_cnt + '" data-cnt="' + value.cnt + '">' + value.cnt + '회</span> ' + value.score);
            } else {
              item.find('.score').html(value.score);
            }


            table.append(item);
          });
          modal.find('.rank-body .class-rank-body .list').append('<div class="list-len-zero-info hidden"style="text-align:center; vertical-align:middle">기록이 없습니다</div>');


          if (data.class_rank_list.length == 0) {
            modal.find('.rank-body .class-rank-body').addClass('hidden');
            modal.find('.rank-body .all-rank-body .list').append('<div class="list-len-zero-info hidden"style="text-align:center; vertical-align:middle">기록이 없습니다</div>');
          } else {
            modal.find('.rank-body .class-rank-body .title').text(data.class_rank_list[0].class_name + ' 도전기록');
            $.each(data.class_rank_list, function(index, value) {
              var item = tem_tr.clone();

              if (c_u == value.user_idx && value.is_me == 1) {
                item.css({'background': '#7458BA'});
              }

              if (value.reg_date.startsWith(curDate)) {
                item.addClass('is-today');
              }

              if (value.profile_img == null || value.profile_img.length == 0) {
                item.find('.img img').attr('src', '/images/default_photo.png');
              } else {
                item.find('.img img').attr('src', value.profile_img);
              }


              if (c_u == value.user_idx) {
                if (data.class_pro_check == 1){
                  var list_user_name = value.user_name;
                  if (data.b_s_type == 2){
                    if (value.nickname == 'null' || value.nickname == null){
                      list_user_name = value.user_name;
                    }else{
                      list_user_name = value.nickname;
                    }
                  }else if (data.b_s_type == 1){
                    if (value.school_nickname == 'null' || value.school_nickname == null){
                      list_user_name = value.user_name;
                    }else{
                      list_user_name = value.school_nickname;
                    }
                  }

                  item.find('.name').text(value.rank + '. ' + list_user_name + " (나)");

                }else{
                  item.find('.name').text(value.rank + '. ' + value.user_name + " (나)");
                }
              }else {
                if (data.class_pro_check == 1){
                  var list_user_name = value.user_name;
                  if (data.b_s_type == 2){
                    if (value.nickname == 'null' || value.nickname == null){
                      list_user_name = value.user_name;
                    }else{
                      list_user_name = value.nickname;
                    }
                  }else if (data.b_s_type == 1){
                    if (value.school_nickname == 'null' || value.school_nickname == null){
                      list_user_name = value.user_name;
                    }else{
                      list_user_name = value.school_nickname;
                    }
                  }

                  item.find('.name').text(value.rank + '. ' + list_user_name);
                }else{
                  item.find('.name').text(value.rank + '. ' + value.user_name);
                }
              }

              if (value.cnt !== undefined && value.cnt > 1) {
                item.find('.score').html('<span class="s-cnt text-light font-10 text-white" data-tcnt="' + value.today_cnt + '" data-cnt="' + value.cnt + '">' + value.cnt + '회</span> ' + value.score);
              } else {
                item.find('.score').html(value.score);
              }

              table_class.append(item);

            });
            modal.find('.rank-body .all-rank-body .list').append('<div class="list-len-zero-info hidden"style="text-align:center; vertical-align:middle">기록이 없습니다</div>');

          }

          showRankType(modal.find('#rank_show_today').is(':checked'));
          modal.find('#rank_show_today').unbind('change').change(function() {
            showRankType(this.checked);
          });
        }

        if (a == 4) {
          if (st == 5) {
            info.find('.title').html('Scramble<br>').next().addClass('invisible');
          } else {
            info.find('.title').html('Matching<br>').next().removeClass('invisible');
          }
          info.find('.crash-option').addClass('hidden');

          if (is_study == false) {
            modal.find('.rank-info').removeClass('end');
            if (st == 5) {
              modal.find('.btn-rank-start').text('스크램블 시작');
            } else {
              modal.find('.btn-rank-start').text('매칭 시작');
            }
            modal.find('.btn-rank-cancel').text('취소');
            info.find('.msg-info').html('');
            link_url = '/Match/' + s_id + '?c=' + c_id + '&s=1';
          } else {
            modal.find('.rank-info').addClass('end');
            modal.find('.btn-rank-start').text('재도전');
            modal.find('.btn-rank-cancel').text('종료');

            if (c_u > 0) {
              info.find('.msg-info').html('Your Score<div class="text-success font-108">' + cur_score + '</div>');
            } else {
              $('.msg-info').css('margin-top', '85px');
              info.find('.msg-info').html('Your Score<div class="text-success font-108">' + cur_score + '</div><div class="text-danger font-14 m-t">비 로그인 상태여서 점수를 기록할 수 없습니다. <a class="text-underline anchor-underline" href="<?= $this->config->item('loginform_url') ?>">로그인</a></div>');
            }
          }
        } else {
          info.find('.title').text('Crash').next().removeClass('invisible');

          console.log(st);
          if (st == 2 || st == 4) {
            $('#selCrashType1').next().html('용어 제시 &rarr; 설명 입력');
            $('#selCrashType2').next().html('설명 제시 &rarr; 용어 입력');
          } else {
            $('#selCrashType1').next().html('단어 제시 &rarr; 의미 입력');
            $('#selCrashType2').next().html('의미 제시 &rarr; 단어 입력');
          }

          if (is_study == false) {
            info.addClass('crash');
            modal.find('.rank-info').removeClass('end');
            info.find('.crash-option').removeClass('hidden');
            modal.find('.btn-rank-start').text('크래시 시작');
            modal.find('.btn-rank-cancel').text('취소');
            info.find('.msg-info').html('');
            link_url = '/Crash/' + s_id + '?c=' + c_id + '&s=1';
          } else {
            modal.find('.rank-info').addClass('end');
            info.find('.crash-option').addClass('hidden');
            modal.find('.btn-rank-start').text('재도전');
            modal.find('.btn-rank-cancel').text('종료');

            if (c_u > 0) {
              info.find('.msg-info').html('Your Score<div class="text-success font-108">' + cur_score + '</div>');
            } else {
              $('.msg-info').css('margin-top', '85px');
              info.find('.msg-info').html('Your Score<div class="text-success font-108">' + cur_score + '</div><div class="text-danger font-14 m-t">비 로그인 상태여서 점수를 기록할 수 없습니다. <a class="text-underline anchor-underline" href="<?= $this->config->item('loginform_url') ?>">로그인</a></div>');
            }
          }

          if (st == 4 || is_study) {
            $('#selCrashType2').click();
            info.find('.crash-option').addClass('hidden');
          } else {
            info.find('.crash-option').removeClass('hidden');
          }
        }

        modal.find('.btn-rank-start').unbind('click').click(function(e) {
          console.log('asd1')
          if (link_url.length > 0) {
            if (a == 5) {
              link_url += '&o=' + modal.find('input[name="selCrashType"]:checked').val();
            }
            window.location = link_url;
            console.log('asd2')
          } else {
            if (a==4 && $('.end-opt-box').length > 0){
              $('.end-opt-box .btn-rank-start').click();
            }else if (typeof setStart == 'function') {
              setStart();
              console.log('asd4')
            } else {
              $('.btn-app-start').click();
            }
          }
          modal.modal('hide');
        });
        modal.find('.btn-rank-cancel').unbind('click').click(function(e) {
          modal.modal('hide');
          if (is_study) {
            history.back();
          }
        });

        modal.modal({backdrop: 'static'});
        modal.modal('show');
      }
    },
    error: function(response, textStatus, errorThrown) {
      console.log('response : ' + response);
    }
  });
}

jQuery(function($){
  $('#premiummodal').on('shown.bs.modal', function () {
    $(this).removeData('bs.modal');
  });

  $('#newRankModal').on('shown.bs.modal', function() {
    if ($('#newRankModal').hasClass('embed')) {
      $('#header-learn').css({'z-index': 1050, 'position': 'relative'});
    }
  });
  $('#newRankModal').on('hidden.bs.modal', function() {
    $('#header-learn').css({'z-index': '', 'position': ''});
  });

  // Date 형태로 리턴한다.
  function formatDate(date1) {
    var a = date1.split(" ");
    var d = a[0].split("-");
    var t = a[1].split(":");
    return new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]);
  }
});
</script>
<? if (
    isset($is_study_tools) && $is_study_tools == TRUE
    && (($is_login && $login_info->user_idx > 0) || (isset($is_battle) && $is_battle == TRUE))
&& (isset($is_embed) == FALSE || $is_embed == FALSE)
): ?>
<a class="study-tools-btns hidden" href="/StudyTools/camera" data-toggle="modal" data-target="#studytools_camera"></a>
    <a class="study-tools-btns hidden" href="/StudyTools/bell" data-toggle="modal" data-target="#studytools_bell"></a>
    <a class="study-tools-btns hidden" href="/StudyTools/sortition/<? if (isset($class_idx)):?><?= $class_idx ?><? else: ?>0<? endif; ?>" data-toggle="modal" data-target="#studytools_sortition"></a>
    <a class="study-tools-btns hidden" href="/StudyTools/timer<? if (isset($class_idx) && $class_idx > 0):?>/<?= $class_idx ?><? endif; ?>" data-toggle="modal" data-target="#studytools_timer"></a>
    <div class="modal fade hmodal-info" id="studytools_bell" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
<div class="modal-dialog">
<div class="modal-content" style="background: transparent; box-shadow: none;">
    <!-- remote login popup 영역 -->
</div>
</div>
</div>
<div class="modal fade hmodal-info" id="studytools_timer" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
<div class="modal-dialog" style="width: 100%; padding: 0px; margin: 0px; height: 100%; overflow: hidden;">
<div class="modal-content" style="height: 100%; background: transparent;">
    <!-- remote login popup 영역 -->
</div>
</div>
</div>
<div class="modal fade hmodal-info" id="studytools_sortition" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
<div class="modal-dialog" style="width: 100%; padding: 0px; margin: 0px; height: 100%; overflow: hidden;">
<div class="modal-content" style="height: 100%; background: transparent;">
    <!-- remote login popup 영역 -->
</div>
</div>
</div>
<div class="modal fade hmodal-info" id="studytools_camera" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
<div class="modal-dialog" style="width: 100%; padding: 0px; margin: 0px; height: 100%;">
<div class="modal-content" style="height: 100%; background: transparent;">
    <!-- remote login popup 영역 -->
</div>
</div>
</div>
<? if ($page_name == 'battle'): ?>
<script src="/scripts/studytools_battle.js?v=2023033012"></script>
<? else: ?>
<script src="/scripts/studytools.js?v=20210107"></script>
<? endif; ?>
<script type="text/javascript">
var ws_server = <?= json_encode($this->config->item('ws_server')) ?>;
var socket_port_list = <? if (isset($socket_port_list) == TRUE && count($socket_port_list) > 0): ?><?= json_encode($socket_port_list) ?><? else: ?>[]<? endif; ?>;
jQuery(function($){
  <? if ($is_login): ?>
  studytools.init(<?= $login_info->user_idx ?>);
  <? else: ?>
  studytools.init(-1);
  <? endif; ?>
  <? if (isset($is_remote) == TRUE && $is_remote == 1): ?>
  studytools.is_remote = true;
  <? endif; ?>

  <? if ($page_name == 'battle'): ?>
  <? if (isset($socket_port)): ?>
  studytools.port = <?= $socket_port ?>;
  <? endif; ?>
  setTimeout(function() {
    studytools.set_socket();
    setTimeout(function() {
      if (studytools.is_connect == false) {
        showAlert('현재 퀴즈배틀 접속자가 너무 많아 접속되지 않고 있습니다. 나중에 다시 이용해 주세요.', null, function() { history.back(); });
      }
    }, 5000);
  }, 500);
  <? endif; ?>
});
</script>
<? endif; ?>`;

export const hugeHTMLBlockCaseTwo = `<?
    $card_cnt = $set_info['card_cnt'];
// 프리미엄 오픈 후 반드시 제거해야 한다.
/*if (isset($login_info->premium_type)) {
    $login_info->premium_type =1;
}*/

function getArrayText($val) {
  $rtn = $val;
  $rtn = preg_replace("/\n/i", " ", $rtn);
  $rtn = preg_replace("/(^ *)|( *$)/i", "", $rtn);
  $rtn = preg_replace("/ +/i", " ", $rtn);

  return explode(" ", $rtn);
}

function getHtmlString($val) {
  $rtn = $val;
  $rtn = preg_replace("/</i", "&lt;", $rtn);
  $rtn = preg_replace("/>/i", "&gt;", $rtn);
  $rtn = preg_replace("/\r\n/i", "<br>", $rtn);
  return $rtn;
}
    ?>
<style>
    input::-webkit-input-placeholder {
  color: #E6E5E5 !important;
}

input:-moz-placeholder { /* Firefox 18- */
  color: #E6E5E5 !important;
}

input::-moz-placeholder {  /* Firefox 19+ */
  color: #E6E5E5 !important;
}

input:-ms-input-placeholder {
  color: #E6E5E5 !important;
}
.quiz-img {
  text-align: center;
  margin-top: 15px;
}
.quiz-img > img {
  max-height: 150px;
  max-width: 230px;
}
@media (min-width: 768px) {
.quiz-img {
    text-align: center;
    margin-top: 0px;
  }
}
.checkbox:hover, .radio:hover { transition: all 0.2s; }
.checkbox:hover, .radio:hover { background: rgba(0, 0, 0, 0.15); }
.radio label::before { top: calc(50% - 8px); }
.radio label::after { top: calc(50% - 5px); }
.checkbox label, .radio label { width: 100%; }

.quiz-start-div {width:100%;}
.quiz-start-div .panel p {height:30px;}
.page-small .quiz-start-div .panel p {height:10px;}
.page-small .quiz-start-div .panel h2 { font-size: 20px;}

.page-small .quiz-start-div { width:100%;}

.quiz-start-quest { position: absolute; width: 100%; height: 450px; overflow: visible; -webkit-perspective: 1000px; perspective: 1000px; }

.option-css {font-size:16px;line-height: 2;}
.page-small .option-css {font-size:14px; line-height: 2;}

.page-small .quiz-end-div h1 {font-size:25px;}
.page-small .quiz-end-div h2 {font-size:15px;}
.test-q-css {font-size:24px; font-weight: 700;}
.page-small .test-q-css {font-size:21px;}

.test-q-div {border-left: 2px solid #e4e5e7;padding-left: 30px;}
.page-small .test-q-div {padding-left: 15px; padding-top:20px; border:none;}

.page-small .content, #wrapper-class .content, .content-main {padding: 0px 5px;}

.test-table { width: 100%; }
.test-table th { vertical-align: top; }
.test-table .tr-premium { height: 35px; }
.test-table .tr-premium th { vertical-align: middle; }

.test-table .checkbox:hover, .test-table .radio:hover { transition: none; background: transparent; }
.test-table .checkbox label, .test-table .radio label { width: auto; }

input[type="number"] { text-align: right; }

.speed-quiz-results { position: absolute; left: 0; right: 0; top: 0; bottom: 0; pointer-events: none; z-index: 10; }
.speed-quiz-results .result { font-size: 140px; display: table-cell; vertical-align: middle; pointer-events: none; -webkit-animation-duration: .4s; animation-duration: .4s; }
.speed-quiz-results .result.correct, .speed-quiz-results .result.wrong, .speed-quiz-results .result.timeout { font-size: 90px; font-weight: bold; text-align: center; }
.speed-quiz-results .result-info { position: absolute; font-size: 18px; color: #fff; padding: 15px; background: #e74c3c; left: 0; right: 0; bottom: 0; overflow: hidden; pointer-events: auto; -webkit-animation-duration: .4s; animation-duration: .4s; }

.test-sentence-input { font-size: 24px; }
.txt-correct-answer { font-size: 24px; padding-bottom: 10px; }
.btn-sentence-word { margin-bottom: 10px; }
.btn-sentence-word.clicked { visibility: hidden; cursor: default; pointer-events: none; }
.txt-next-guide { position: absolute; left: -5px; right: -5px; bottom: -5px; background: #E6E5E5; text-align: center; font-size: 20px; display: none; }
.txt-next-guide.active { display: block; }

#testForm .CardItem { border-radius: inherit; cursor: inherit; box-shadow: none; }
#testForm .CardItem .CardItemSide { border-radius: inherit; padding: 15px; }
#testForm .CardItem .CardItemSide.CardItemSide--secondSide { background: #E6E5E5; }
#testForm .CardItem .CardItemSide.CardItemSide--secondSide .quest_order { display: none; }
#testForm .CardItem .CardItemSide.CardItemSide--secondSide.order { background: #B6B5B5; }
#testForm .CardItem .CardItemSide.CardItemSide--secondSide.order .quest_body { display: none; }
#testForm .CardItem .CardItemSide.CardItemSide--secondSide.order .quest_order { display: block; }

#testForm .CardItem.no-ani .CardItemSide { transition: initial !important; -webkit-transition: initial !important; -moz-transition: initial !important; -ms-transition: initial !important; background: #fff; }

.cc-radio-box { position: relative; display: block; float: left; width: 50%; height: 50%; padding: 10px; }
.cc-radio-box input[type="radio"] { display: none; }
.cc-radio-box input[type="radio"] + label { width: 100%; height: 100%; margin: 0px; cursor: pointer; background: #fff; text-align: center; font-size: 20px; overflow: hidden; transition: all 0.15s linear; }
.cc-radio-box input[type="radio"] + label:hover { color: #3498db; }
.cc-radio-box input[type="radio"] + label.disabled { opacity: 0.3; }
.cc-radio-box input[type="radio"]:checked + label { opacity: 1; box-shadow: 1px 1px 10px, -1px -1px 10px; color: #3498db; }

.progressbar .progress-bar { transition-duration: 0.3s; }

hr { border-top: 1px solid #ddd; margin-bottom: 15px; }

</style>

<?
if ($is_owner) {
  // 초기값
  // print_r($set_info);

  if ($is_print == TRUE)
  {
    $test_type = 1;
  }
  else
  {
    $test_type = 2;
  }

  $test_q_type = 1;

  $test_q_cnt = $set_info['card_cnt'];

  /*
      if ($test_q_cnt>20) {
          $test_q_cnt =20;
      }
  */
  $mem_condition_yn = 0;
  $recall_condition_yn = 0;
  $spell_condition_yn = 0;
  $obj_diff_high_yn = 0;
  $test_retry_yn = 1;
  $is_sentence_random_yn = 0;

  if ($set_info['set_type'] != 3) {
    $q_type1_cnt = 0;
    $q_type2_cnt = round($test_q_cnt/2);
    $q_type3_cnt = $test_q_cnt-$q_type2_cnt;
    // 박성한 선생님
    if ($login_info->user_idx==352 ) {
      // if ($login_info->user_idx==222 ) {
      $q_type2_cnt = $test_q_cnt;
      $q_type3_cnt = 0;
    }
    $q_type4_cnt = 0;
    $q_type5_cnt = 0;
    $q_type6_cnt = 0;
    $q_type7_cnt = 0;
    $q_type8_cnt = 0;
    $q_type9_cnt = 0;
    $test_q_img_yn = 0;
    $case_sensitive_yn = 1;
    $quiz_speed = 2;
    $goal_score = null;
    $mem_over_percent = 0;
    $recall_over_percent = 0;
    $spell_over_percent = 0;
  } else {
    // 투명
    if ($set_info['map_type'] == 1) {
      $q_type1_cnt = 0;
      $q_type2_cnt = $test_q_cnt;
      $q_type3_cnt = 0;
      $q_type4_cnt = 0;
      $q_type5_cnt = 0;
      $q_type6_cnt = 0;
      $q_type7_cnt = 0;
      $q_type8_cnt = 0;
      $q_type9_cnt = 0;
      $mem_over_percent = 0;
      $recall_over_percent = 0;
      $spell_over_percent = 0;
    } else {
      $q_type1_cnt = round($test_q_cnt/2);
      $q_type2_cnt = 0;
      $q_type3_cnt = $test_q_cnt-$q_type1_cnt;
      $q_type4_cnt = 0;
      $q_type5_cnt = 0;
      $q_type6_cnt = 0;
      $q_type7_cnt = 0;
      $q_type8_cnt = 0;
      $q_type9_cnt = 0;
      $mem_over_percent = 0;
      $recall_over_percent = 0;
      $spell_over_percent = 0;
    }
    $test_q_img_yn = 0;
    $case_sensitive_yn = 1;
    $quiz_speed =2;
    $goal_score = null;
  }

  $front_label = "단어";
  $back_label = "의미";
  if ($set_info['set_type'] == 2) {
    $front_label = "용어";
    $back_label = "설명";
  } elseif ($set_info['set_type'] == 4) {
    $front_label = "정답";
    $back_label = "문제";
  }

  if ($test_info->test_q_type!=null) {
    $test_type = $test_info->test_type;
    $test_q_type = $test_info->test_q_type;
    $test_q_cnt = $test_info->test_q_cnt;
    $q_type1_cnt = $test_info->q_type1_cnt;
    $q_type2_cnt = $test_info->q_type2_cnt;
    $q_type3_cnt = $test_info->q_type3_cnt;
    $q_type4_cnt = $test_info->q_type4_cnt;
    $q_type5_cnt = $test_info->q_type5_cnt;
    $q_type6_cnt = $test_info->q_type6_cnt;
    $q_type7_cnt = $test_info->q_type7_cnt;
    $q_type8_cnt = $test_info->q_type8_cnt;
    $q_type9_cnt = $test_info->q_type9_cnt;
    $test_q_img_yn = $test_info->test_q_img_yn;
    $case_sensitive_yn = $test_info->case_sensitive_yn;
    $quiz_speed = $test_info->quiz_speed;
    $goal_score = $test_info->goal_score;
    $mem_condition_yn = $test_info->mem_condition_yn;
    $recall_condition_yn = $test_info->recall_condition_yn;
    $spell_condition_yn = $test_info->spell_condition_yn;
    $obj_diff_high_yn = $test_info->obj_diff_high_yn;
    $test_retry_yn = (isset($test_info->test_retry_yn) == TRUE) ? $test_info->test_retry_yn : 1;
    $mem_over_percent = $test_info->mem_over_percent;
    $recall_over_percent = $test_info->recall_over_percent;
    $spell_over_percent = $test_info->spell_over_percent;
    $is_sentence_random_yn = $test_info->is_sentence_random_yn;


    if ($goal_score==-1) {$goal_score=null;}
    if ($test_q_type==null || $test_q_type=="") {$test_q_type=1;}
    if ($q_type1_cnt==null || $q_type1_cnt=="") {$q_type1_cnt=0;}
    if ($q_type2_cnt==null || $q_type2_cnt=="") {$q_type2_cnt=0;}
    if ($q_type3_cnt==null || $q_type3_cnt=="") {$q_type3_cnt=0;}
    if ($q_type4_cnt==null || $q_type4_cnt=="") {$q_type4_cnt=0;}
    if ($q_type5_cnt==null || $q_type5_cnt=="") {$q_type5_cnt=0;}
    if ($q_type6_cnt==null || $q_type6_cnt=="") {$q_type6_cnt=0;}
    if ($q_type7_cnt==null || $q_type7_cnt=="") {$q_type7_cnt=0;}
    if ($q_type8_cnt==null || $q_type8_cnt=="") {$q_type8_cnt=0;}
    if ($q_type9_cnt==null || $q_type9_cnt=="") {$q_type9_cnt=0;}
    if ($mem_over_percent==null || $mem_over_percent=="") {$mem_over_percent=0;}
    if ($recall_over_percent==null || $recall_over_percent=="") {$recall_over_percent=0;}
    if ($spell_over_percent==null || $spell_over_percent=="") {$spell_over_percent=0;}
  }

  if ($test_q_type==1) {
    $audio_max_cnt = $audio_cnt->cnt;
    $es_max_cnt = $es_cnt->cnt;
  } else {
    $audio_max_cnt = $bookmark_audio_cnt->cnt;
    $es_max_cnt = $bookmark_es_cnt->cnt;
  }

  // 시작전 : 설정기능 제공

  $test_name = 'SPEED QUIZ';
  if ($test_type == 1) {
    $test_name = '시험';
  }
}
    ?>

<div id="wrapper-class" style="overflow-x: hidden;">
    <? if ($is_owner): ?>
<div class="content">
<div class="row">
<div class="col-xs-12 text-center text-white" style="font-size: 16px; font-weight: 300; line-height: 1.7; margin-bottom: 10px;">
    테스트는 학생들이 PC, 스마트폰으로 응시하는데, 매번 문제가 바뀌고 재도전 할 수 있어요.<br>
매번 설정하기 번거로우면 <a class="text-white" href="/ClassTest/common/<?= $class_idx ?>"><u>테스트 기본 정책 설정 이동</u></a>
</div>
</div>
<div class="row">
<div class="col-md-12">
<div class="hpanel ccpanel">
<div class="test-setting-layer panel-body <? if ($p == 0): ?>hidden<? endif; ?>">
<div class="modal-body" style="padding: 0px 10px;">
<form id="infoTestForm" class="input-area">
    <? foreach($class_idxs as $cls_idx): ?>
<input type="hidden" name="class_idxs[]" value="<?= $cls_idx?>" />
    <? endforeach; ?>
<input type="hidden" name="class_idx" value="<?= $class_idx ?>" />
<input type="hidden" name="set_idx" value="<?= $set_idx ?>" />
<input type="hidden" id="is_print" name="is_print" value="<? if ($is_print == TRUE): ?>1<? else: ?>0<? endif; ?>" />
<input type="hidden" id="mode" name="mode" />
<input type="hidden" id="set_type" name="set_type" value="<?= $set_info['set_type'] ?>" />
<input type="hidden" id="test_type" name="test_type" value="2">
<input type="hidden" id="test_q_type" name="test_q_type" value="<?= $test_q_type ?>">
<input type="hidden" id="test_q_cnt" name="test_q_cnt" value="<?= $test_q_cnt ?>">
<input type="hidden" id="test_q_cnt_bm" name="test_q_cnt_bm" value="<?= $test_q_cnt ?>">
<input type="hidden" id="mem_condition_yn" name="mem_condition_yn" value="<?= $mem_condition_yn ?>">
<input type="hidden" id="recall_condition_yn" name="recall_condition_yn" value="<?= $recall_condition_yn ?>">
<input type="hidden" id="spell_condition_yn" name="spell_condition_yn" value="<?= $spell_condition_yn ?>">

<table class="test-table">
<tr><td height="15"></td></tr>
<tr>
    <th>출제할 문항 수</th>
<td class="setting-td">
<div class="pull-right" style="margin-top: -4px; position: relative; z-index: 1;">
<a class="btn btn-info btn-sm btn-test-setting <? if ($p == 1): ?>hidden<? endif; ?>">SPEED QUIZ 설정 변경</a>
<a class="btn btn-info btn-sm btn-test-edit <? if ($p == 0): ?>hidden<? endif; ?>">SPEED QUIZ 설정 저장</a>
</div>
<span class="checkbox" style="margin: 0px;">
<input type="checkbox" name="t_is_favor" id="t_is_favor" value="1" <? if ($bookmark_card_cnt->bookmark_card_cnt == 0): ?>disabled<? endif; ?> <? if ($test_q_type == 2 && $bookmark_card_cnt->bookmark_card_cnt > 0): ?>checked<? endif; ?> data-old="<? if ($test_q_type == 2 && $bookmark_card_cnt->bookmark_card_cnt > 0): ?>true<? else: ?>false<? endif; ?>">
    <label for="t_is_favor">✭표시한 <?= $bookmark_card_cnt->bookmark_card_cnt ?>카드 중에서만 출제</label>
</span>
<? if ($set_info['set_type'] == 5): ?>
<span class="checkbox" style="margin: 0px; margin-top: 3px;">
<input type="checkbox" name="is_sentence_random_yn" id="is_sentence_random_yn" value="1" <? if ($is_sentence_random_yn==1): ?>checked<? endif; ?>>
<label for="is_sentence_random_yn">문항순서 셔플</label>
</span>
<? endif; ?>
<div class="m-t-sm <? if ($set_info['set_type'] != 5): ?>hidden<? endif; ?>">
<div class="test-show-title">어순배열</div>
    <span class="m-l-sm m-r-xs"></span>
    <input type="number" class="q_type_cnt test-type-normal" id="q_type8_cnt" name="q_type8_cnt" min="0" max="<?= $card_cnt ?>" value="<?= $q_type8_cnt ?>" data-old="<?= $q_type8_cnt ?>" style="width: 55px;">
    문항
    </div>
    <div class="m-t-sm <? if ($set_info['set_type'] == 4 || $set_info['set_type'] == 5): ?>hidden<? endif; ?>">
<div class="test-show-title"><?= $front_label ?>제시</div>
<span class="m-l-sm m-r-xs">객관식</span>
    <input type="number" class="q_type_cnt test-type-normal" id="q_type1_cnt" name="q_type1_cnt" min="0" max="<?= $card_cnt ?>" value="<?= $q_type1_cnt ?>" data-old="<?= $q_type1_cnt ?>" style="width: 55px;">
<span class="m-l-sm m-r-xs">주관식</span>
    <input type="number" class="q_type_cnt test-type-normal" id="q_type7_cnt" name="q_type7_cnt" min="0" max="<?= $card_cnt ?>" value="<?= $q_type7_cnt ?>" data-old="<?= $q_type7_cnt ?>" style="width: 55px;">
<span class="m-l-xs">문항</span>
    </div>
    <div class="<? if ($set_info['set_type'] == 4): ?>m-t-sm<? else: ?>m-t-xs<? endif; ?> <? if ($set_info['set_type'] == 5): ?>hidden<? endif; ?>">
<div class="test-show-title"><?= $back_label ?>제시</div>
<span class="m-l-sm m-r-xs">객관식</span>
    <input type="number" class="q_type_cnt test-type-normal" id="q_type2_cnt" name="q_type2_cnt" min="0" max="<?= $card_cnt ?>" value="<?= $q_type2_cnt ?>" data-old="<?= $q_type2_cnt ?>" style="width: 55px;">
<span class="m-l-sm m-r-xs">주관식</span>
    <input type="number" class="q_type_cnt test-type-normal" id="q_type3_cnt" name="q_type3_cnt" min="0" max="<?= $card_cnt ?>" value="<?= $q_type3_cnt ?>" data-old="<?= $q_type3_cnt ?>" style="width: 55px;">
<span class="m-l-xs">문항</span>
    </div>
    <div class="m-t-xs <? if ($set_info['set_type'] != 1): ?>hidden<? endif; ?>">
<div class="test-show-title">발음제시</div>
    <span class="m-l-sm m-r-xs">객관식</span>
    <input type="number" class="q_type_cnt test-type-audio" id="q_type9_cnt" name="q_type9_cnt" min="0" max="<?= $audio_max_cnt ?>" min="0" <? if ($audio_max_cnt==0): ?>readonly<? endif; ?> value="<?= $q_type9_cnt ?>" data-old="<?= $q_type9_cnt ?>" style="width: 55px;">
<span class="m-l-sm m-r-xs">주관식</span>
    <input type="number" class="q_type_cnt test-type-audio" id="q_type4_cnt" name="q_type4_cnt" min="0" max="<?= $audio_max_cnt ?>" min="0" <? if ($audio_max_cnt==0): ?>readonly<? endif; ?> value="<?= $q_type4_cnt ?>" data-old="<?= $q_type4_cnt ?>" style="width: 55px;">
<span class="m-l-xs text-test-audio"><? if ($audio_max_cnt == 0): ?>문항 (발음 없음)<? else: ?>문항 (최대 <?= $audio_max_cnt ?>문항)<? endif; ?></span>
</div>
<div class="m-t-xs <? if ($set_info['set_type'] != 1): ?>hidden<? endif; ?>">
<div class="test-show-title">예문제시</div>
    <span class="m-l-sm m-r-xs">객관식</span>
    <input type="number" class="q_type_cnt test-type-es" id="q_type6_cnt" name="q_type6_cnt" min="0" max="<?= $es_max_cnt ?>" min="0" <? if ($es_max_cnt==0): ?>readonly<? endif; ?> value="<?= $q_type6_cnt ?>" data-old="<?= $q_type6_cnt ?>" style="width: 55px;">
<span class="m-l-sm m-r-xs">주관식</span>
    <input type="number" class="q_type_cnt test-type-es" id="q_type5_cnt" name="q_type5_cnt" min="0" max="<?= $es_max_cnt ?>" min="0" <? if ($es_max_cnt==0): ?>readonly<? endif; ?> value="<?= $q_type5_cnt ?>" data-old="<?= $q_type5_cnt ?>" style="width: 55px;">
<span class="m-l-xs text-test-es"><? if ($es_max_cnt == 0): ?>문항 (예문 없음)<? else: ?>문항 (최대 <?= $es_max_cnt ?>문항)<? endif; ?></span>
</div>
<div class="m-t" style="margin-left: 100px;">
<strong class="txt-total"><u>합계 <span class="txt-total-percent"><?= ($q_type1_cnt + $q_type2_cnt + $q_type3_cnt + $q_type4_cnt + $q_type5_cnt + $q_type6_cnt + $q_type7_cnt + $q_type8_cnt + $q_type9_cnt) ?></span>문항 (최대 <span class="text-test-total"><? if ($test_q_type == 2 && $bookmark_card_cnt->bookmark_card_cnt > 0): ?><?= $bookmark_card_cnt->bookmark_card_cnt ?><? else: ?><?= $card_cnt ?><? endif; ?></span>문항)</u></strong>
</div>
</td>
</tr>
<tr><td colspan="2"><hr></td></tr>
<tr class="tr-premium <? if ($is_print == TRUE): ?>hidden<? endif; ?>">
    <th>응시 제한</th>
<td>
<div data-toggle="buttons" class="btn-group" style="width: 200px;">
<label class="btn btn-xs btn-default btn-cc-radio outline info <? if ($test_info->try_condition == 0): ?>active<? endif; ?>" style="width: 33.3%;">
<input type="radio" value="0" class="try_condition" name="try_condition" <? if ($test_info->try_condition == 0): ?>checked<? endif; ?>>없음
</label>
<label class="btn btn-xs btn-default btn-cc-radio outline info <? if ($test_info->try_condition == 1): ?>active<? endif; ?>" style="width: 33.3%;">
<input type="radio" value="1" class="try_condition" name="try_condition" <? if ($test_info->try_condition == 1): ?>checked<? endif; ?>>사전학습
</label>
<label class="btn btn-xs btn-default btn-cc-radio outline info <? if ($test_info->try_condition == 2): ?>active<? endif; ?>" style="width: 33.3%;">
<input type="radio" value="2" class="try_condition" name="try_condition" <? if ($test_info->try_condition == 2): ?>checked<? endif; ?>>비밀번호
</label>
</div>
</td>
</tr>
<tr class="quiz-method-detail quiz-method-detail-1 <? if ($test_info->try_condition != 1): ?>hidden<? endif; ?>">
<th></th>
<td>
<div class="m-t-sm" style="font-size: 90%;">세트를 지정한 진도 만큼 학습한 후 응시허용 (예) <a onclick="$('.q_condition').val(0)"><u>0%</u></a> (항상 허용), <a onclick="$('.q_condition').val(100)"><u>100%</u></a>, <a onclick="$('.q_condition').val(200)"><u>200%</u></a> ...</div>
<div class="m-t-xs m-b">
<span class="m-r-xs">암기학습</span>
    <input type="number" class="q_condition" id="mem_over_percent" name="mem_over_percent" min="0" max="100" value="<?= $mem_over_percent ?>" style="width: 55px;">%
<span class="m-l-md m-r-xs">리콜학습</span>
    <input type="number" class="q_condition" id="recall_over_percent" name="recall_over_percent" min="0" max="100" value="<?= $recall_over_percent ?>" style="width: 55px;">%
<span class="m-l-md m-r-xs">스펠학습</span>
    <input type="number" class="q_condition" id="spell_over_percent" name="spell_over_percent" min="0" max="100" value="<?= $spell_over_percent ?>" style="width: 55px;">%
    </div>
    </td>
    </tr>
    <tr class="quiz-method-detail quiz-method-detail-2 <? if ($test_info->try_condition != 2): ?>hidden<? endif; ?>">
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
</tr>
<tr class="tr-premium <? if ($is_print == TRUE): ?>hidden<? endif; ?>">
    <th>최대 응시횟수</th>
<td>
<select class="max_try_cnt" name="max_try_cnt">
<option value="0">무제한</option>
<? for ($i = 1; $i < 6; $i++): ?>
<option value="<?= $i?>" <? if ($test_info->max_try_cnt == $i): ?>selected<? endif; ?>><?= $i ?>회</option>
<? endfor; ?>
</select>
</td>
</tr>
<tr class="tr-premium <? if ($is_print == TRUE): ?>hidden<? endif; ?>">
<th><span data-toggle="tooltip" data-placement="top" data-original-title="<div style='text-align: left;'>테스트에서 답안을 선택/입력하는 시간을 변경합니다.<div>">진행속도 (?)</span></th>
<td>
    <div data-toggle="buttons" class="btn-group" style="width: 280px;">
<label class="btn btn-xs btn-default btn-cc-radio outline info <? if ($quiz_speed == 1): ?>active<? endif; ?>" style="width: 67px;">
<input type="radio" value="1" class="quiz_speed" name="quiz_speed" <? if ($quiz_speed == 1): ?>checked<? endif; ?>>느리게
</label>
<label class="btn btn-xs btn-default btn-cc-radio outline info <? if ($quiz_speed == 2): ?>active<? endif; ?>" style="width: 67px;">
<input type="radio" value="2" class="quiz_speed" name="quiz_speed" <? if ($quiz_speed == 2): ?>checked<? endif; ?>>보통
</label>
<label class="btn btn-xs btn-default btn-cc-radio outline info <? if ($quiz_speed == 3): ?>active<? endif; ?>" style="width: 67px;">
<input type="radio" value="3" class="quiz_speed" name="quiz_speed" <? if ($quiz_speed == 3): ?>checked<? endif; ?>>빠르게
</label>
<label class="btn btn-xs btn-default btn-cc-radio outline info <? if ($quiz_speed == 4): ?>active<? endif; ?>">
<input type="radio" value="4" class="quiz_speed" name="quiz_speed" <? if ($quiz_speed == 4): ?>checked<? endif; ?>>매우 빠르게
</label>
</div>
</td>
</tr>
<tr class="tr-premium <? if ($is_print == TRUE): ?>hidden<? endif; ?>">
<th><span data-toggle="tooltip" data-placement="top" data-original-title="<div style='text-align: left;'>학생들에게 설정한 목표점수를 표시합니다.<div>">목표점수 제시 (?)</span></th>
<td>
    <select class="goal_score" name="goal_score">
<option value="-1">설정안함</option>
<? for ($i = 100; $i > 0; $i = $i - 5): ?>
<option value="<?= $i ?>" <? if ($i == $goal_score): ?>selected<? endif; ?>><?= $i ?>점</option>
<? endfor; ?>
</select>
</td>
</tr>
<tr class="tr-premium <? if ($is_print == TRUE): ?>hidden<? endif; ?>">
<th><?= $back_label ?>에 이미지 제공</th>
<td>
<div class="checkbox checkbox-info">
<input type="checkbox" id="word_test_q_img_yn" name="test_q_img_yn" value="1" <? if ($test_q_img_yn == 1): ?>checked<? endif; ?>>
<label for="word_test_q_img_yn"></label>
    </div>
    </td>
    </tr>
    <tr class="tr-premium <? if ($is_print == TRUE || $set_info['set_type'] == 5): ?>hidden<? endif; ?>">
    <th>채점시 대소문자 구분</th>
<td>
<div class="checkbox checkbox-info">
<input type="checkbox" id="word_case_sensitive_yn" name="case_sensitive_yn" value="1" <? if ($case_sensitive_yn == 1): ?>checked<? endif; ?>>
<label for="word_case_sensitive_yn"></label>
    </div>
    </td>
    </tr>
    <tr class="tr-premium hidden">
    <th>프리미엄 설정</th>
<td>
<div class="checkbox checkbox-info <? if ($set_info['set_type'] == 5): ?>hidden<? endif; ?>">
<input type="checkbox" id="word_obj_diff_high_yn" name="obj_diff_high_yn" value="1" <? if ($obj_diff_high_yn == 1): ?>checked<? endif; ?>>
<label for="word_obj_diff_high_yn">객관식 선택지로 "정답 없음"을 추가하여 난이도 높임</label>
</div>
<div class="checkbox checkbox-info hidden">
<input type="checkbox" id="word_test_retry_yn" name="word_test_retry_yn" value="1" <? if ($test_retry_yn == 1): ?>checked<? endif; ?>>
<label for="word_test_retry_yn">재도전 허용</label>
</div>
</td>
</tr>
</table>								
</form>
</div>
</div>
</div>

<?
// 테스트가 진행중이거나 종료된 경우
if ($test_info->test_status!=0):
    ?>

<div class="test-submit-layer hpanel ccpanel <? if ($p == 1): ?>hidden<? endif; ?>" style="margin-bottom: 0px;">
<div class="panel-heading hbuilt" style="padding-bottom: 15px;">
    <? if ($test_info->test_status==0): ?>
<? if ($is_print == TRUE): ?>
<div class="pull-right" style="margin-top: -8px;">
<a class="btn btn-success btn-sm btn-test-edit" style="width:85px;">시험지 생성</a>
</div>
<? elseif ($test_info->test_q_type==null): ?>
<div class="pull-right" style="margin-top: -8px;">
<a class="btn btn-success btn-sm btn-test-edit" style="width:85px;">문항 생성</a>
</div>
<? elseif ($test_info->test_q_type!=null && $test_info->test_status==0 && $is_print == FALSE): ?>
<div class="pull-right">
<!-- <a class="btn btn-success btn-sm btn-test-set-init" style="width:85px;">문항 삭제</a> -->
<span style="padding-left:10px;"><a class="showhide_lib"><i class="fa fa-chevron-up"></i></a></span>
</div>
<? endif; ?>
<strong><?= $test_question_cnt->q_cnt ?></strong> 개의 문항이 있습니다.
<? elseif ($test_info->test_status==1): ?>
<div class="pull-right hidden">
<a class="btn btn-danger btn-sm btn-test-end">테스트 종료</a>
</div>
<? if ($test_info->test_type==1): ?>
<strong>교실에서 시험 진행 중</strong> (<strong><?= $test_user_cnt->test_user_cnt ?></strong>명 제출<? if ($test_info->test_end_type==2): ?>, <strong><?= date_format(new DateTime($test_info->test_finish_date), "m.d") ?></strong> 자동 종료 예정<? endif; ?>)<br>
<small style="font-weight: normal;">학생들의 시험결과 제출은 1회로 제한됩니다.</small><br>
<? else: ?>
<strong>테스트 진행 중</strong> (<strong><?= $test_user_cnt->test_user_cnt ?></strong>명 제출<? if ($test_info->test_end_type==2): ?>, <strong><?= date_format(new DateTime($test_info->test_finish_date), "m.d") ?></strong> 자동 종료 예정<? endif; ?>)<br>
<? if ($test_info->goal_score>-1): ?><small style="font-weight: normal;">목표점수는 <span class="text-danger"><?= $test_info->goal_score ?>점</span>, <? endif; ?>학생들은 테스트 결과를 여러 번 제출할 수 있습니다.</small><br>
    <? endif; ?>
<? else: ?>
<div class="col-md-6 col-xs-12">
    테스트가 종료 되었습니다. <br>
총 <strong><?= $test_user_cnt->test_user_cnt ?></strong>명의 학생이 제출하였습니다.
</div>
<div class="col-md-6 col-xs-12 pull-right" style="text-align: right;padding: 0px;">
<a class="btn btn-success btn-sm btn-test-reset hidden">
    </i> 테스트 초기화</span>
</a>
								<!-- <a class="btn btn-success btn-sm" href="/ClassReport/<?= $class_idx ?>/<?= $set_idx ?>" data-toggle="modal" data-target="#set_report_modal">리포트 보기</a> -->
</div>

<? endif; ?>
</div>

<div class="panel-body h-150" style="padding-left:30px; padding-right:30px;padding-top:20px;padding-bottom:20px; height: 400px;max-height: 400px; overflow-y: auto;">
<div class="table-responsive">
<table id="study-progress" class="table table-striped table-hover" style="margin-bottom:0px;">
<tbody>

    <!-- <tr>
        <td width='7%' style='vertical-align: middle;'></td>
    <td width='18%' style='vertical-align: middle;'><strong>학생이름</strong></td>
<td width='20%' style='vertical-align: middle;' align="center"><strong>제출시간</strong></td>
<td width='10%' style='vertical-align: middle;' align="right"><strong>최종 점수</strong></td>
<td width='25%' style='vertical-align: middle;'></td>
    <td width='20%' style='vertical-align: middle;' align="center"></td>
</tr> -->
<?
if (count($submit_user_list)>0) :
foreach ($submit_user_list as $row):
    ?>
<tr style="border: 0px;" <? if ($row['user_idx']==$user_idx): ?>class="info"<? endif; ?> data-idx="<?= $row['user_idx']?>" data-date="<?= $row['reg_date']?>">
<td width="5%" style='vertical-align: middle; padding:4px;'><img src="<? if (strlen($row['profile_img']) == 0): ?>/images/default_photo.png<? else: ?><?= $row['profile_img'] ?><? endif; ?>" class="profile-img img-circle pull-left" alt="logo" style="width: 30px;height: 30px;" onerror="imageError(this)"></td>
    <td width="20%" style='vertical-align: middle; padding:4px;'><?= $row['user_name'] ?></td>
<td class="set-small" width="23%" style='vertical-align: middle; padding:4px;' align="left"><? if ($row['reg_date']!=null): ?><?= $row['reg_date'] ?> 제출<? else: ?>제출전<? endif; ?></td>
<td width="10%" style='vertical-align: middle; padding:4px;' align="right"><? if ($row['reg_date']!=null): ?><?= $row['score'] ?> 점<? else: ?>-<? endif; ?></td>
<td width="7%" style='vertical-align: middle; padding:4px;' align="right">
    <? if ($row['reg_date']!=null && $test_info->test_type==2 && $test_info->goal_score>-1): ?><? if ($row['score']>=$test_info->goal_score): ?>통과<? else: ?>-<? endif; ?><? else: ?>-<? endif; ?>
</td>
<td style='vertical-align: middle; padding:4px; padding-right:20px;' align="right">
    <? if ($row['reg_date']!=null): ?><a class="anchor-underline submit_row" data-idx="<?= $row['user_idx'] ?>" data-date="<?= $row['reg_date']?>">시험지보기</a><? endif; ?>
    &nbsp;&nbsp;&nbsp;<? if ($row['reg_date']!=null): ?><a class="anchor-underline btn-user-test-reset" data-idx="<?= $row['user_idx'] ?>" data-name="<?= $row['user_name'] ?>">초기화</a><? endif; ?>
</td>
</tr>
<?
    endforeach;
else:
    ?>
<tr style="border: 0px;" >
<td style='vertical-align: middle;' colspan="6" align="center">제출한 학생이 없습니다.</td>
</tr>
<?
    endif;
    ?>
</tbody>
</table>
</div>
</div>
</div>
<? endif; ?>

</div>
</div>
</div>

<? endif; ?>

<?
    $idx =0;
$is_show_quest = FALSE;
if ($is_owner == FALSE || $user_idx > 0) { $is_show_quest = TRUE; }
if ($is_owner == TRUE && $p == 1) { $is_show_quest = TRUE; }



/*
	echo("user_idx : ".$user_idx."<br>");
	echo("is_owner : ".$is_owner."<br>");
	echo("p : ".$p."<br>");
	echo("is_show_quest : ".$is_show_quest."<br>");
	echo("test_info->test_q_type : ".$test_info->test_q_type."<br>");
*/




if ( !$is_owner || $test_info->test_q_type!=null):
    ?>
<div class="speed_quiz_title text-center text-white font-bold hidden main-small" style="font-size: 36px;">테스트</div>
    <div class="test-setting-layer content <? if ((count($test_q_list)<1 && $user_idx < 1) || $is_show_quest == FALSE): ?>hidden<? endif; ?>">
    <? if ($is_owner == FALSE && $p == 1 && $is_show_quest == 1): ?>
<div class="text-white text-center" style="font-size: 24px; font-weight: 300; margin-bottom: 20px; line-height: 1.8;">
    선생님! 다음은 학생에게 제공되는 테스트입니다.<br>
선생님도 도전해 보세요.
&nbsp;&nbsp;<small><u><a class="text-white" data-toggle="modal" data-target="#detailInfoModal">테스트 자세히 보기</a></u></small>
</div>
<? elseif ($is_owner): ?>
<div class="row text-white m-b" style="font-size: 18px;">
<div class="col-md-12 text-center m-t-xs">
    <? if ($is_print == FALSE): ?>
<? if ($test_type==1): ?>
교실에서 시험 방식<br><small style="font-weight: normal;">모든 학생에게 동일 문제를 출제하고, 학생은 1회만 제출 할 수 있습니다.</small>
<? else: ?>
<span class="speed_quiz_txt" style="font-weight: 300;">현재 설정된 테스트를 학생처럼 체험해 보세요</span>
<? endif; ?>
<? endif; ?>
</div>
<div class="col-md-3 m-t-xs text-right hidden">
    <? if ($test_info->test_status==0 || $user_idx==0): ?>
<? if ($is_print == TRUE): ?>
<a class="btn btn-success btn-sm" href="/TestPrint/<?= $class_idx ?>/<?= $set_idx ?>">시험지 레이아웃 조정 및 인쇄</a>
<? endif; ?>
<!-- <a class="btn btn-success btn-sm btn-test-exp" href="/ClassTest/<?= $class_idx ?>/<?= $set_idx ?>?ex=1" target="_new">테스트 체험</a> -->
<? if ($test_info->test_status==0 && $is_print == FALSE): ?>
<!-- <a class="btn btn-success btn-sm btn-test-set-init" style="width:85px;">문항 삭제</a> -->
<? if ($test_info->test_q_type!=null && $test_info->test_type==1): ?>
<a class="btn btn-success btn-sm btn-test-start">학생들에게 공개</a>
<? endif; ?>
<? if ($test_type==2): ?>
<a class="btn btn-md btn-success btn-test-stop hidden">모의테스트 종료</a>
<? endif; ?>
<? else: ?>
<div class="p-t-md"><strong><?= $test_question_cnt->q_cnt ?></strong> 개의 문항</div>
<? endif; ?>
<? endif; ?>
</div>
</div>
<? endif; ?>

<?
    $objective_cnt =0;
// 학생이거나 강사인데 테스트가 시작전 혹은 시작했지만 응시자가 없으면..
if ( !$is_owner || ($is_owner && $test_info->test_status==0) || ($is_owner && $user_idx==0) ):
    ?>
<form id="testForm" class="input-area<? if ($test_info->test_type==1): ?> m-t-md<? endif; ?>" style="position: relative;">
<input type="hidden" name="class_idx" value="<?= $class_idx ?>" />
<input type="hidden" name="set_idx" value="<?= $set_idx ?>" />
<input type="hidden" id="p_case_sensitive_yn" name="p_case_sensitive_yn" value="<?= $test_info->case_sensitive_yn ?>" />
<input type="hidden" id="test_type" name="test_type" value="<?= $test_info->test_type ?>" />
<input type="hidden" name="user_idx" value="<?= $login_info->user_idx ?>" />
<?
    $idx =0;
$objective_cnt =0;
$answer_text ="";
$is_sentence = FALSE;

/************* 시험 방식이면. ****************/
if ($test_info->test_type==1):
    ?>
<div class="hpanel ccpanel" style="margin-bottom: 0px;">
<div class="panel-body h-150">
    <?
        foreach ($test_q_list as $row):
$idx++;
$radio_idx =0;
$q_audio = '';
if ($set_info['set_type'] == 3) {
  $q_str = '';
} else {
  if ($row['q_option']==1) {
    $q_str = $row['front'];
    $answer_text = $row['back'];
  } elseif ($row['q_option']==2) {
    $q_str = $row['back'];
    $answer_text = $row['front'];
  } elseif ($row['q_option']==3) {
    // $q_str = '<a class="btn_audio"><i class="fa fa-volume-off" data-src="http://58.229.240.172'.$row['audio_path']. '"></i></a>';
    $q_str = '<a class="btn btn-success btn-sm btn_audio"><i class="fa fa-volume-off" data-src="'.$row['audio_path']. '">&nbsp;&nbsp;&nbsp;&nbsp;오디오 재생</i></a>';
    $q_audio = '<a class="btn btn-success btn-sm btn_audio"><i class="fa fa-volume-off" data-src="'.$row['audio_path']. '">&nbsp;&nbsp;&nbsp;&nbsp;오디오 재생</i></a>';
    $answer_text = $row['front'];
  } elseif ($row['q_option']==4) {
    $q_str = $row['example_sentence'];
    $answer_text = $row['front'];
  }

  // $q_str = str_replace("\n", "<br>", $q_str);
}
    ?>
<input type="hidden" name="test_question[]" value="<?= $row['test_card_idx'] ?>" />
<input type="hidden" name="user_answer[]" value="" />
    <?
if ($row['subjective_yn']==0 || ($set_info['set_type'] == 3 && $row['map_type'] == 1)): 	// 객관식 
$objective_cnt++;
    ?>
<div class="form-group" id="map_quest_<?=$idx ?>" data-idx="<?=$idx-1?>">
<input type="hidden" name="subjective_yn[]" value="0" />
<div class="answer hidden"><?= getHtmlString($answer_text) ?></div>
<div><a name="<?= $row['test_card_idx'] ?>"></a></div>
<div class="row" style="font-size: 16px;">
    <? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div class="col-sm-8">
    <? else: ?>
<div class="col-sm-12">
    <? endif; ?>
<div class="pull-left" style="width: 50px; text-align: right; margin-top: 3px;">
<div class="label label-default" style="padding:.2em 1.1em .3em;"><?=$idx ?></div>
</div>
<div style="margin-left: 50px; padding-left: 15px;">
    <label for="class_name" class="test-q-css"><? if (strlen($q_audio) > 0): ?><?= $q_audio ?><? else: ?><?= getHtmlString($q_str) ?><? endif; ?></label>
<div class="p-l-sm">
    <? foreach ($row['option_info'] as $row_option):
$radio_idx++;
    ?>
<div class="radio radio-success">
<input type="radio" name="input_radio_<?=$idx-1?>" id="radio_<?=$objective_cnt-1?>_<?= $radio_idx ?>" value="<?= $row_option['option_idx'] ?>"><label for="radio_<?=$objective_cnt-1?>_<?= $radio_idx ?>"><?= getHtmlString($row_option['option_text']) ?></label>
</div>
<?
if ($row['answer_option_no']==$row_option['option_idx']) {
  $answer_text = $row_option['option_text'];
}
    ?>
<? endforeach; ?>
</div>
</div>
</div>
<? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div class="col-sm-4 quiz-img">
<img src="<?= $row['img_path'] ?>">
</div>
<? endif; ?>
</div>

</div>

<? 	else: ?>
<div class="form-group"  id="map_quest_<?=$idx ?>" data-idx="<?=$idx-1?>">
<input type="hidden" name="subjective_yn[]" value="1" />
<div class="answer hidden"><?= getHtmlString($answer_text) ?></div>
<div class="row" style="font-size: 16px;">
    <? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div class="col-sm-8">
    <? else: ?>
<div class="col-sm-10">
    <? endif; ?>
<div class="pull-left" style="width: 50px; text-align: right; margin-top: 3px;">
<div class="label label-default" style="padding:.2em 1.1em .3em;"><?=$idx ?></div>
</div>
<div style="margin-left: 50px; padding-left: 15px;">
    <label for="class_name" class="test-q-css"><?= getHtmlString($q_str) ?></label>
<input type="text" class="form-control" name="input_answer[]" required
placeholder="정답을 입력하세요" autocomplete="off"<? if ($_SERVER['HTTP_HOST']!='stg.classcard.net'): ?> onpaste="return false;"<? endif; ?> maxlength="500" onblur="inputMaxLength(this);">
</div>
</div>
<? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div class="col-sm-4 quiz-img">
<img src="<?= $row['img_path'] ?>">
</div>
<? else: ?>
<div class="col-sm-2"></div>
<? endif; ?>
</div>
</div>
<? 	endif; ?>

<? if ($is_owner): ?>
<div class="row" style="padding:.2em 1.1em .3em;margin-left: 20px;">
<span class="label label-success text-ellipsis" style="font-size:12px; max-width: calc(100% - 110px); display: inline-block; padding: 6px;" data-toggle="tooltip" data-placement="top" title="<?= getHtmlString($answer_text) ?>">정답 : <?= getHtmlString($answer_text) ?></span>
<? if ($row['subjective_yn']==0 && $set_info['set_type'] != 3):  	// 객관식 ?>
<? if (getAuth($this->user_level, USER_LEVEL_PREMIUM)): ?>
<a href="/ClassTest/editOption?class_idx=<?= $class_idx ?>&set_idx=<?= $set_idx ?>&test_card_idx=<?= $row['test_card_idx']?>&idx=<?= $idx ?>&is_print=<?= $is_print ?>" data-toggle="modal" data-target="#option_edit_modal" style="vertical-align: super; margin-left: 8px;">
<strong class="text-info" style="padding-top: 10px;">선택지 수정하기</strong>
</a>
<? elseif ($this->config->item('version')>2): ?>
<a class="test_options_edit" style="vertical-align: super; margin-left: 8px;">
<strong class="text-info" style="padding-top: 10px;">선택지 수정하기</strong>
</a>
<? endif; ?>
<? endif; ?>
</div>
<? endif; ?>
<p style="height:50px;"></p>

<? endforeach; ?>
<? if (!$is_owner && $test_info->test_status==1): ?>
<!-- <a class="btn btn-default btn-block text-info btn-test-submit" style="border-color: #ccc;">테스트를 제출합니다. 제출 후 다시 응시 할 수 없습니다.</a> -->
<a class="btn btn-success btn-block btn-test-submit" style="white-space: normal;">테스트를 제출합니다. 제출 후 다시 응시 할 수 없습니다.</a>
<? endif; ?>
</div>
</div>

<?
/************* 테스트 방식이면. ****************/
else:
    ?>
<div class="hpanel ccpanel quiz-start-div hidden" style="margin-bottom: 0px;">
<div class="panel-body" style="height: 380px;">
<div class="vertical-mid fill-parent">
<? //테스트 응시 조건 처리 ?>
    <?
        $is_condition = FALSE;
// 학생만 조건 처리
if ($is_owner == FALSE && $login_info->user_type != 1) {
  // 응시조건 - 사전학습 체크
  if (
      $test_info->try_condition == 1
          && (
              $test_info->mem_my_percent < $test_info->mem_over_percent
  || $test_info->recall_my_percent < $test_info->recall_over_percent
  || $test_info->spell_my_percent < $test_info->spell_over_percent
)
) {
    $is_condition = TRUE;
        ?>
    <div class="panel text-center">
    <div class="text-left text-info" style="font-size:17px;">
    <img class="img-circle" style="width: 40px;height: 40px;margin-right: 5px;" src="<? if (strlen($class_info->profile_img) == 0): ?>/images/default_photo.png<? else: ?><?= $class_info->profile_img ?><? endif; ?>" alt="logo" onerror="imageError(this)"> <?= $class_info->user_name ?> 선생님 출제
    </div>
    <h2><strong>선생님께서 지정한 학습을 마쳐야 도전 가능합니다.</strong></h2>
    <p style="height:40px;"></p>
        <div style="text-align: left; display: inline-block; font-size: 20px;">
    <div class="<? if ($test_info->mem_my_percent < $test_info->mem_over_percent): ?>text-danger<? endif; ?>">암기학습 <?= $test_info->mem_over_percent ?>% 필요 (현재 <?= $test_info->mem_my_percent ?>%)</div>
    <div class="<? if ($test_info->recall_my_percent < $test_info->recall_over_percent): ?>text-danger<? endif; ?>">리콜학습 <?= $test_info->recall_over_percent ?>% 필요 (현재 <?= $test_info->recall_my_percent ?>%)</div>
    <div class="<? if ($test_info->spell_my_percent < $test_info->spell_over_percent): ?>text-danger<? endif; ?>">스펠학습 <?= $test_info->spell_over_percent ?>% 필요 (현재 <?= $test_info->spell_my_percent ?>%)</div>
    </div>
    <p style="height:30px;"></p>
    <h5><a class="btn btn-md btn-info" onclick="history.back();" style="min-width: 105px;">나중에</a></h5>
    </div>
    <?
  }

  // 응시회수
  if ($test_info->max_try_cnt > 0) {
        ?>
    <div class="panel text-center <? if ($is_condition): ?>hidden<? endif; ?>">
    <div class="text-left text-info" style="font-size:17px;">
    <img class="img-circle" style="width: 40px;height: 40px;margin-right: 5px;" src="<? if (strlen($class_info->profile_img) == 0): ?>/images/default_photo.png<? else: ?><?= $class_info->profile_img ?><? endif; ?>" alt="logo" onerror="imageError(this)"> <?= $class_info->user_name ?> 선생님 출제
    </div>
    <h2>
    <strong style="line-height: 1.5;">
        <? if (count($test_info->user_score_list) < $test_info->max_try_cnt): ?>
    <? if ($test_info->max_try_cnt == 1): ?>
    단 1회만 응시 가능합니다.<br>
    <span class="text-danger">
        도중에 중단하면 자동제출되고 재응시 할 수 없으니<br>
    준비를 마친 후 도전해 주세요
    </span>
    <? else: ?>
    <?= $test_info->max_try_cnt ?>번의 응시기회 중 <?= (count($test_info->user_score_list) + 1)?>번째 도전입니다.
    <? endif; ?>
    <? else: ?>
    제한된 도전횟수 <?= $test_info->max_try_cnt ?>회를 모두 마쳤습니다.
    <? endif; ?>
    </strong>
    </h2>
    <p style="height:40px;"></p>
        <div style="text-align: left; display: inline-block; font-size: 20px;">
        <? foreach($test_info->user_score_list as $s=>$score): ?>
    <? if ($s > 0): ?><br><? endif; ?>
    <?= date("Y/m/d H:i", strtotime($score['reg_date'])) ?>&nbsp;&nbsp;&nbsp;&nbsp;<?= $score['score'] ?>점
    <? endforeach; ?>
    </div>
    <p style="height:30px;"></p>
    <? if (count($test_info->user_score_list) < $test_info->max_try_cnt): ?>
    <h5><a class="btn-next btn btn-md btn-info" style="min-width: 105px;">다음</a></h5>
    <? else: ?>
    <h5><a class="btn btn-md btn-info" onclick="history.back();" style="min-width: 105px;">취소</a></h5>
    <? endif; ?>
    </div>
    <?
        $is_condition = TRUE;
  }

  // 응시조건 - 비밀번호 설정
  if ($test_info->try_condition == 2) {
        ?>
    <div class="panel text-center <? if ($is_condition): ?>hidden<? endif; ?>">
    <div class="text-left text-info" style="font-size:17px;">
    <img class="img-circle" style="width: 40px;height: 40px;margin-right: 5px;" src="<? if (strlen($class_info->profile_img) == 0): ?>/images/default_photo.png<? else: ?><?= $class_info->profile_img ?><? endif; ?>" alt="logo" onerror="imageError(this)"> <?= $class_info->user_name ?> 선생님 출제
    </div>
    <h2><strong>선생님께서 알려주신 비번을 입력하세요.</strong></h2>
    <p style="height:40px;"></p>
        <div style="display: inline-block;">
    <input type="text" class="test_pw" name="test_pw" value="" maxlength="4" style="width: 100px; font-size: 30px; text-align: center; -webkit-text-security: square; padding-bottom: 8px;" autocomplete="off">
    <div class="text-danger m-t-xs hidden">비밀번호가 일치하지 않습니다.</div>
    </div>
    <p style="height:30px;"></p>
    <h5><a class="btn-next btn btn-md btn-info hidden" style="min-width: 105px;">다음</a></h5>
    </div>
    <?
        $is_condition = TRUE;
  }
}
    ?>
<div class="panel text-center <? if ($is_condition): ?>hidden<? endif; ?>">
<div class="text-left text-info" style="font-size:17px;">
<img class="img-circle" style="width: 40px;height: 40px;margin-right: 5px;" src="<? if (strlen($class_info->profile_img) == 0): ?>/images/default_photo.png<? else: ?><?= $class_info->profile_img ?><? endif; ?>" alt="logo" onerror="imageError(this)"> <?= $class_info->user_name ?> 선생님 출제
</div>
<h1><strong>테스트 (<?= $test_info->test_q_cnt ?>문항)</strong></h1>
<p style="height:50px;"></p>
<? if ($test_info->goal_score>-1): ?>
<h2 class="font-bold">선생님이 설정한 목표점수 : <?= $test_info->goal_score ?>점</h2>
<? else: ?>
<h2 class="font-bold">&nbsp;</h2>
<? endif; ?>
<h2 class="text-danger m-t-md">주의) 도중에 중단하면 결과가 자동 제출 됩니다.</h2>
<p style="height:30px;"></p>
<? if ($is_owner): ?>
<h5><a class="btn btn-md btn-info btn-quiz-start<? if ($st==1): ?> btn-outline<? endif; ?>">모의테스트</a>
    <a class="btn btn-md btn-info btn-test-start m-l-md<? if ($st==0): ?> btn-outline<? endif; ?>">학생들에게 공개</a></h5>
<? else: ?>
<h5><a class="btn btn-md btn-info btn-quiz-start">테스트 시작</a></h5>
<? endif; ?>
</div>

</div>
</div>
</div>

<? if ($is_condition): ?>
<script type="text/javascript">
    jQuery(function($) {
      $('.quiz-start-div .btn-next').click(function(e) {
        $(this).closest('.panel').addClass('pass hidden');

        $('.quiz-start-div .panel').not('.pass').first().removeClass('hidden');
      });
    });
</script>
<? endif; ?>

<div class="quiz-start-quest hidden">
    <?
        foreach ($test_q_list as $row):
$idx++;
$radio_idx =0;
$show_sec = 4;
$q_audio = '';
if ($set_info['set_type'] == 3) {
  $q_str = '';
} else {
  if ($row['q_option']==1) {
    $q_str = $row['front'];
    $show_sec = min(20, (4 + (mb_strlen($q_str, 'UTF-8') * 0.5)));
    $answer_text = $row['back'];
  } elseif ($row['q_option']==2) {
    $q_str = $row['back'];
    $show_sec = min(20, (4 + (mb_strlen($q_str, 'UTF-8') * 0.5)));
    $answer_text = $row['front'];
  } elseif ($row['q_option']==3) {
    // $q_str = '<a class="btn_audio"><i class="fa fa-volume-off" data-src="http://58.229.240.172'.$row['audio_path']. '"></i></a>';
    $q_str = '<a class="btn btn-success btn-sm btn_audio"><i class="fa fa-volume-off" data-src="'.$row['audio_path']. '">&nbsp;&nbsp;&nbsp;&nbsp;오디오 재생</i></a>';
    $q_audio = '<a class="btn btn-success btn-sm btn_audio"><i class="fa fa-volume-off" data-src="'.$row['audio_path']. '">&nbsp;&nbsp;&nbsp;&nbsp;오디오 재생</i></a>';
    $show_sec = min(20, (4 + (5 * 0.5)));
    // 발음제시 객관식은 의미가 보기로 제시됨
    if ($row['subjective_yn']==0) {
      $answer_text = $row['back'];
    } else {
      $answer_text = $row['front'];
    }
  } elseif ($row['q_option']==4) {
    $q_str = $row['example_sentence'];
    $show_sec = min(20, (4 + (mb_strlen($q_str, 'UTF-8') * 0.5)));
    $answer_text = $row['front'];
  } elseif ($row['q_option']==5) {
    $q_str = $row['back'];
    $show_sec = min(20, (4 + (mb_strlen($q_str, 'UTF-8') * 0.5)));
    $answer_text = $row['front'];
    $is_sentence = TRUE;
  }

  // $q_str = str_replace("\n", "<br>", $q_str);
}

$row_quiz_speed = $row['quiz_speed'];
if ($row['subjective_yn']==0 || ($set_info['set_type'] == 3 && $row['map_type'] == 1)): 	// 객관식 
$objective_cnt++;

if ($row_quiz_speed==1) {	// 느리게
  $limit_sec = 5 * 2;
  if ($set_info['set_type'] == 4) {
    $limit_sec = 14 * 2;
  }
} elseif ($row_quiz_speed==3) {	// 빠르게
  $limit_sec = 3;
  if ($set_info['set_type'] == 4) {
    $limit_sec = 6;
  }
} elseif ($row_quiz_speed==4) {	// 매우 빠르게
  $limit_sec = 2.4;
  if ($set_info['set_type'] == 4) {
    $limit_sec = 4.8;
  }
} else  { 	// 보통
  $limit_sec = 4;
  if ($set_info['set_type'] == 4) {
    $limit_sec = 10;
  }
}
    ?>
<div class="CardItem current speed_quiz_row speed_quiz_row_<?=$idx ?>" id="map_quest_<?=$idx ?>" data-sec="<?= $limit_sec ?>" data-idx="<?=$idx-1?>" data-object="<?= $objective_cnt ?>" data-show-sec="<?= $show_sec ?>">
<div class="CardItemSide CardItemSide--firstSide">
<input type="hidden" name="test_question[]" value="<?= $row['test_card_idx'] ?>" />
<input type="hidden" name="user_answer[]" value="" />
<input type="hidden" name="subjective_yn[]" value="0" />
<div class="answer hidden"><?= getHtmlString($answer_text) ?></div>
<div class="font-bold" style="font-size: 20px; margin-left: -5px; margin-top: -10px;">
<span class="text-info"><span style="font-size: 36px;"><?=$idx?></span>/<?= count($test_q_list) ?></span>
<span class="font-trans" style="font-size: 70%;">문제를 확인하고, 카드를 클릭 하세요 (또는 스페이스 키)</span>
</div>
<div class="quest_body">
<div><a name="<?= $row['test_card_idx'] ?>"></a></div>
<div <? if ($set_info['set_type']!=4): ?>class="vertical-mid"<? endif; ?> style="width: 100%; height: 354px; margin-bottom: 10px; text-align: center;">
<div class="row" <? if ($set_info['set_type']==4): ?>style="padding-top:30px; min-height:150px;"<? endif; ?>>
<div class="vertical-mid fill-parent" <? if ($set_info['set_type']==4): ?>style="min-height: 150px;"<? endif; ?>>
<div>
    <div class="test-q-css"><span style="font-size: 120%;"><? if (strlen($q_audio) > 0): ?><?= $q_audio ?><? else: ?><?= getHtmlString($q_str) ?><? endif; ?></span></div>
</div>
<? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div style="width: 30%;" class="quiz-img">
<img src="<?= $row['img_path'] ?>">
</div>
<? endif; ?>
</div>
</div>
<? if ($set_info['set_type']==4): ?>
<div class="quest_body">
<div class="row" style="height: 177px; padding-top: 50px; text-align: center; font-size: 16px; opacity: 0.5;">
    <div>답을 미리 생각한 후 SPACE 키를 누르세요.</div>
<div style="margin-top: 7px;">제한시간 (<?= $limit_sec ?>초)내에 정답을 입력하세요.</div>
</div>
</div>
<? endif; ?>
</div>
</div>
<div class="progressbar hidden" style="position: relative;">
<div class="pull-right hidden">
<a class="btn btn-info btn-next-quiz">GO</a>
    <a class="btn btn-success btn-submit-quiz hidden">제출</a>
    </div>
    <div class="progress full" style="height: 5px; margin: 0px 0px 0px 0px;">
<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
<span class="sr-only">60% Complete</span>
    </div>
    </div>
    </div>
    </div>
    <div class="CardItemSide CardItemSide--secondSide">
<div style="height: calc(100% - 5px);">
    <? if ($set_info['set_type']==4): ?>
<div class="row text-center" style="padding-top:10px; padding-bottom:20px; min-height:150px;">
<div class="vertical-mid fill-parent" <? if ($set_info['set_type']==4): ?>style="min-height: 150px;"<? endif; ?>>
<div>
    <div class="test-q-css"><span style="font-size: 120%;"><? if (strlen($q_audio) > 0): ?><?= $q_audio ?><? else: ?><?= getHtmlString($q_str) ?><? endif; ?></span></div>
</div>
<? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div style="width: 30%;" class="quiz-img">
<img src="<?= $row['img_path'] ?>">
</div>
<? endif; ?>
</div>
</div>
<? endif; ?>
<? foreach ($row['option_info'] as $row_option):
$radio_idx++;
    ?>
<div class="cc-radio-box" <? if ($set_info['set_type']==4): ?>style="height: 25%;"<? endif; ?>>
<input type="radio" name="input_radio_<?=$idx-1?>" id="radio_<?=$objective_cnt-1?>_<?= $radio_idx ?>" value="<?= $row_option['option_idx'] ?>">
    <label for="radio_<?=$objective_cnt-1?>_<?= $radio_idx ?>">
<div class="vertical-mid fill-parent"><div><?= getHtmlString($row_option['option_text']) ?></div></div>
</label>
</div>
<?
if ($row['answer_option_no']==$row_option['option_idx']) {
  $answer_text = $row_option['option_text'];
}
    ?>
<? endforeach; ?>
</div>
<div class="progressbar hidden" style="position: relative;">
<div class="pull-right hidden">
<a class="btn btn-info btn-next-quiz">GO</a>
    <a class="btn btn-success btn-submit-quiz hidden">제출</a>
    </div>
    <div class="progress full" style="height: 5px; margin: 0px 0px 0px 0px;">
<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
<span class="sr-only">60% Complete</span>
</div>
</div>
</div>
</div>
</div>

<?
else:
if ($row['q_option']==5) {
  $is_sentence = TRUE;
  $arr_word = getArrayText($answer_text);
  $arr_len = count($arr_word);
  if ($arr_len > 1) { $arr_len = $arr_len - 1; }
  if ($row_quiz_speed==1) {	// 느리게
    $limit_sec = round(($arr_len*5*2)+5);
  } elseif ($row_quiz_speed==3) {	// 빠르게
    $limit_sec = round(($arr_len*3)+5);
  } elseif ($row_quiz_speed==4) {	// 매우 빠르게
    $limit_sec = round(($arr_len*2.4)+5);
  } else  { 	// 보통
    $limit_sec = round(($arr_len*4)+5);
  }
} else {
  if ($row_quiz_speed==1) {	// 느리게
    $limit_sec = round((mb_strlen($answer_text, 'utf-8')*2*2)+4);
  } elseif ($row_quiz_speed==3) {	// 빠르게
    $limit_sec = round((mb_strlen($answer_text, 'utf-8')*1.3)+4);
  } elseif ($row_quiz_speed==4) {	// 매우 빠르게
    $limit_sec = round((mb_strlen($answer_text, 'utf-8')*1.04)+4);
  } else  { 	// 보통
    $limit_sec = round((mb_strlen($answer_text, 'utf-8')*1.6)+4);
  }
}

// 단어세트, 주관식, 의미제시, 매우빠르게 일때
if ($set_info['set_type']==1 && $row['q_option']==2 && $row_quiz_speed==4) {
  $show_sec = 0.8;
}
    ?>
<div class="CardItem current speed_quiz_row speed_quiz_row_<?=$idx ?> <? if ($row['q_option']!=5): ?>no-ani<? endif; ?>" id="map_quest_<?=$idx ?>" data-sec="<?= $limit_sec ?>" data-idx="<?=$idx-1?>" data-object="<?= $objective_cnt ?>" data-show-sec="<?= $show_sec ?>">
    <? if ($row['q_option']==5): ?>
<div class="CardItemSide CardItemSide--firstSide">
<input type="hidden" name="test_question[]" value="<?= $row['test_card_idx'] ?>" />
<input type="hidden" name="user_answer[]" value="" />
<input type="hidden" name="subjective_yn[]" value="1" />
<div class="answer hidden"><?= getHtmlString($answer_text) ?></div>
<div class="font-bold" style="font-size: 20px; margin-left: -5px; margin-top: -10px;">
<span class="text-info"><span style="font-size: 36px;"><?=$idx?></span>/<?= count($test_q_list) ?></span>
<span class="font-trans" style="font-size: 70%;">문제를 확인하고, 카드를 클릭 하세요 (또는 스페이스 키)</span>
</div>
<div class="quest_body">
<div class="vertical-mid" style="width: 100%; height: 354px; margin-bottom: 10px; text-align: center;">
<div class="row">
<div class="vertical-mid fill-parent">
<div>
    <div class="test-q-css"><span style="font-size: 120%;"><? if (strlen($q_audio) > 0): ?><?= $q_audio ?><? else: ?><?= getHtmlString($q_str) ?><? endif; ?></span></div>
</div>
<? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div style="width: 30%;" class="quiz-img">
<img src="<?= $row['img_path'] ?>" style="max-height: 150px; max-width:270px">
</div>
<? endif; ?>
</div>
</div>
</div>
</div>
<div class="progressbar hidden" style="position: relative;">
<div class="pull-right hidden">
<a class="btn btn-info btn-next-quiz">GO</a>
    <a class="btn btn-success btn-submit-quiz hidden">제출</a>
    </div>
    <div class="progress full" style="height: 5px; margin: 0px 0px 0px 0px;">
<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
<span class="sr-only">60% Complete</span>
    </div>
    </div>
    <div class="txt-next-guide text-info">
    화면을 클릭하거나 아무키나 입력하세요 <i class="material-icons">arrow_forward</i>
    </div>
    </div>
    </div>
    <div class="CardItemSide CardItemSide--secondSide">
<div class="vertical-mid" style="width: 100%; height: calc(100% - 5px);">
<div class="quest_body">
<?
    $first_word = '';
if (count($arr_word) > 2) {
  $first_word = getHtmlString(preg_replace('/[!?,.;]+$/i', "", $arr_word[0]));
  unset($arr_word[0]);
}
natcasesort($arr_word);
    ?>
<div class="test-q-css"><? if (strlen($q_audio) > 0): ?><?= $q_audio ?><? else: ?><?= getHtmlString($q_str) ?><? endif; ?></div>
<div class="test-sentence-words">
<input type="hidden" name="input_answer[]" value="">
<div class="txt-correct-answer text-danger"></div>
<? foreach ($arr_word as $w_idx => $word): ?>
<a class="btn btn-primary btn-sentence-word" data-idx="<?= $w_idx ?>"><?= getHtmlString(preg_replace('/[!?,.;]+$/i', "", $word)); ?></a>
<? endforeach; ?>
</div>

<? if ($idx == 1): ?>
<div class="text-success test-sentence-guide" style="font-size: 90%; font-weight: normal;">블록을 클릭하여 단어를 순서대로 배열하세요</div>
<? endif; ?>

<div class="test-sentence-input m-t-xl"><? if (strlen($first_word) > 0): ?><a class="btn btn-warning2 m-r-xs m-b-sm" data-idx="-1"><?= $first_word ?></a><? endif; ?></div>
<div><a class="btn-sentence-order text-info anchor-underline hidden"><i class="material-icons">swap_horiz</i> 단어 옮기기</a></div>
<div style="position: absolute; top: 10px; right: 10px;">
<a class="btn btn-info btn-next-quiz">확인</a>
    <a class="btn btn-success btn-submit-quiz hidden">제출</a>
    </div>
    </div>
    <div class="quest_order">
<div class="order-msg text-white text-center" style="font-size: 26px; margin-bottom: 70px; margin-top: 50px;">옮길 단어를 선택하세요</div>
<div class="order-sentence"></div>
    <div class="order-input" style="margin-top: 60px;"></div>
    <div style="position: absolute; top: 0px; right: 8px; font-size: 45px;">
<a class="btn-order-close text-white"><i class="material-icons">close</i></a>
</div>
</div>
</div>
<div class="progressbar hidden" style="position: relative;">

<div class="progress full" style="height: 5px; margin: 0px 0px 0px 0px;">
<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
<span class="sr-only">60% Complete</span>
    </div>
    </div>
    <div class="txt-next-guide text-info">
    화면을 클릭하거나 아무키나 입력하세요 <i class="material-icons">arrow_forward</i>
</div>
</div>
</div>
<? else: ?>
<div class="CardItemSide CardItemSide--firstSide">
<input type="hidden" name="test_question[]" value="<?= $row['test_card_idx'] ?>" />
<input type="hidden" name="user_answer[]" value="" />
<input type="hidden" name="subjective_yn[]" value="1" />
<div class="answer hidden"><?= getHtmlString($answer_text) ?></div>
<div class="font-bold" style="font-size: 20px; margin-left: -5px; margin-top: -10px;">
<span class="text-info"><span style="font-size: 36px;"><?=$idx?></span>/<?= count($test_q_list) ?></span>
</div>
<div class="quest_body">
<div class="vertical-mid" style="width: 100%; height: 177px; text-align: center;">
<div class="row">
<div class="vertical-mid fill-parent">
<div>
    <div class="test-q-css"><span style="font-size: 120%;"><? if (strlen($q_audio) > 0): ?><?= $q_audio ?><? else: ?><?= getHtmlString($q_str) ?><? endif; ?></span></div>
</div>
<? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div style="width: 30%;" class="quiz-img">
<img src="<?= $row['img_path'] ?>" style="max-height: 150px; max-width:270px">
</div>
<? endif; ?>
</div>
</div>
</div>
</div>
<div class="quest_body">
<div class="row" style="height: 177px; margin-bottom: 10px; text-align: center; font-size: 16px; opacity: 0.5;">
    <div>답을 미리 생각한 후 SPACE 키를 누르세요.</div>
<div style="margin-top: 7px;">제한시간 (<?= $limit_sec ?>초)내에 정답을 입력하세요.</div>
</div>
</div>
<div class="progressbar hidden" style="position: relative;">
<div class="pull-right hidden">
<a class="btn btn-info btn-next-quiz">GO</a>
    <a class="btn btn-success btn-submit-quiz hidden">제출</a>
    </div>
    <div class="progress full" style="height: 5px; margin: 0px 0px 0px 0px;">
<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
<span class="sr-only">60% Complete</span>
    </div>
    </div>
    <div class="txt-next-guide text-info">
    화면을 클릭하거나 아무키나 입력하세요 <i class="material-icons">arrow_forward</i>
    </div>
    </div>
    </div>
    <div class="CardItemSide CardItemSide--secondSide">
<div class="font-bold" style="font-size: 20px; margin-left: -5px; margin-top: -10px;">
<span class="text-info"><span style="font-size: 36px;"><?=$idx?></span>/<?= count($test_q_list) ?></span>
</div>
<div class="quest_body">
<div class="vertical-mid" style="width: 100%; height: 177px; text-align: center;">
<div class="row">
<div class="vertical-mid fill-parent">
<div>
    <div class="test-q-css"><span style="font-size: 120%;"><? if (strlen($q_audio) > 0): ?><?= $q_audio ?><? else: ?><?= getHtmlString($q_str) ?><? endif; ?></span></div>
</div>
<? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div style="width: 30%;" class="quiz-img">
<img src="<?= $row['img_path'] ?>" style="max-height: 150px; max-width:270px">
</div>
<? endif; ?>
</div>
</div>
</div>
</div>
<div class="quest_body form-inline" style="height: 177px; margin-bottom: 10px; padding-top:70px;">
<div class="form-group" style="padding-left: 10px;">
<input type="text" class="form-control" style="width:710px;" name="input_answer[]" required
placeholder="정답을 입력하고 엔터를 치세요" autocomplete="off" autocorrect="off" spellcheck="false" <? if ($_SERVER['HTTP_HOST']!='stg.classcard.net'): ?> onpaste="return false;"<? endif; ?> maxlength="500" onblur="inputMaxLength(this);">
<a class="btn btn-info btn-next-quiz" style="min-width: 100px; margin-left:10px;">제출</a>
    <a class="btn btn-success btn-submit-quiz hidden">제출</a>
    </div>
    </div>
    <div class="progressbar hidden" style="position: relative;">

<div class="progress full" style="height: 5px; margin: 0px 0px 0px 0px;">
<div class="progress-bar progress-bar-success" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;">
<span class="sr-only">60% Complete</span>
    </div>
    </div>
    <div class="txt-next-guide text-info">
    화면을 클릭하거나 아무키나 입력하세요 <i class="material-icons">arrow_forward</i>
</div>
</div>
</div>
<? endif; ?>
</div>
<? 	endif; ?>
<? endforeach; ?>

<? if ($test_info->test_type==1): ?>
<? else: ?>
<div class="speed-quiz-results">
<div style="display: table; height: 100%; width: 100%; padding: 50px 40px;">
<div class="result text-info correct animated-panel hidden">
<i class="material-icons">radio_button_unchecked</i>
    </div>
    <div class="result text-danger wrong animated-panel hidden">
    fall out
</div>
<div class="result text-danger timeout animated-panel hidden">
    fall out
</div>
</div>
<div class="result result-info animated-panel hidden">
    정답 : <span></span>
</div>
</div>
<? endif; ?>

</div>

<? if ($is_sentence==5): ?>
<script type="text/javascript">
    jQuery(function($) {
      $('.btn-sentence-word').click(function(e) {
        var idx = $(this).data('idx');
        var body = $(this).closest('.quest_body');
        var new_item = $('<a class="btn btn-warning2 m-r-xs m-b-sm" data-idx="' + idx + '">' + getHtmlString($(this).text()) + '</a>');
        body.find('.test-sentence-input').append(new_item);
        new_item.click(function(e) {
          body.find('.btn-sentence-word[data-idx="' + $(this).data('idx') + '"]').removeClass('clicked');
          var inputs = '';
          body.find('.test-sentence-input a').each(function(i) {
            if (i > 0) { inputs += ' '; }
            inputs += $(this).text();
          });
          body.find('[name="input_answer[]"]').val(inputs);
          $(this).remove();

          if (body.find('.test-sentence-input .btn').length > 1) {
            body.find('.btn-sentence-order').removeClass('hidden');
          } else {
            body.find('.btn-sentence-order').addClass('hidden');
          }

          e.preventDefault();
          return false;
        });

        $(this).addClass('clicked');
        var inputs = '';
        body.find('.test-sentence-input a').each(function(i) {
          if (i > 0) { inputs += ' '; }
          inputs += $(this).text();
        });
        body.find('[name="input_answer[]"]').val(inputs);

        body.find('.test-sentence-guide').addClass('hidden');

        if (body.find('.test-sentence-input .btn').length > 1) {
          body.find('.btn-sentence-order').removeClass('hidden');
        } else {
          body.find('.btn-sentence-order').addClass('hidden');
        }

        e.preventDefault();
        return false;
      });

      $('.btn-sentence-order').click(function(e) {
        var body = $(this).closest('.CardItemSide');
        var order_body = body.find('.quest_order');
        var order_top = order_body.find('.order-sentence');
        var order_bottom = order_body.find('.order-input');
        order_top.empty().removeClass('text-center');
        order_bottom.empty();

        body.find('.btn-sentence-word').not('.clicked').each(function() {
          order_top.append('<a class="btn-order btn btn-info m-r-xs m-b-sm" data-idx="' + $(this).data('idx') + '">' + getHtmlString($(this).text()) + '</a>');
        });
        body.find('.test-sentence-input .btn').each(function(idx) {
          if (idx == 0) {
            order_bottom.append('<a class="btn-order first-item btn btn-default m-r-xs m-b-sm" data-idx="' + $(this).data('idx') + '">' + getHtmlString($(this).text()) + '</a>');
          } else {
            order_bottom.append('<a class="btn-order btn btn-info m-r-xs m-b-sm" data-idx="' + $(this).data('idx') + '">' + getHtmlString($(this).text()) + '</a>');
          }
        });

        order_body.find('.order-msg').text('옮길 단어를 선택하세요');
        body.addClass('order');

        body.find('.btn-order').click(function(e) {
          if (order_body.hasClass('set-order') == true) {
            $(this).addClass('select-item');
            order_body.find('.btn-order-close').click();
          } else {
            if ($(this).hasClass('first-item') == true) {
              return;
            }

            body.find('.btn-order.first-item').removeClass('btn-default').addClass('btn-info');

            var new_item = $('<a class="btn-insert btn btn-warning2 m-r-xs m-b-sm" data-idx="' + $(this).data('idx') + '">' + getHtmlString($(this).text()) + '</a>');
            order_body.find('.order-msg').text('"' + $(this).text() + '"를 어느 단어 뒤에 둘까요?');
            order_top.addClass('text-center').empty().append(new_item);
            order_body.addClass('set-order');

            $(this).remove();
          }
        });
      });

      $('.btn-order-close').click(function(e) {
        var body = $(this).closest('.CardItemSide');
        var order_body = body.find('.quest_order');
        var order_bottom = order_body.find('.order-input');
        var insert_item = order_body.find('.btn-insert');
        var select_item = order_body.find('.select-item');

        if (order_body.hasClass('set-order') == true && insert_item.length > 0 && select_item.length > 0) {
          select_item.after('<a class="btn-order btn btn-warning2 m-r-xs m-b-sm" data-idx="' + insert_item.data('idx') + '">' + insert_item.text() + '</a>');

          body.find('.btn-sentence-word[data-idx="' + insert_item.data('idx') + '"]').addClass('clicked');
          body.find('.test-sentence-input').empty();
          var inputs = '';
          order_bottom.find('.btn').each(function(i) {
            if (i > 0) { inputs += ' '; }
            inputs += $(this).text();

            var new_item = $('<a class="btn btn-warning2 m-r-xs m-b-sm" data-idx="' + $(this).data('idx') + '">' + getHtmlString($(this).text()) + '</a>');
            body.find('.test-sentence-input').append(new_item);

            if (i > 0) {
              new_item.click(function(e) {
                body.find('.btn-sentence-word[data-idx="' + $(this).data('idx') + '"]').removeClass('clicked');
                var inputs2 = '';
                body.find('.test-sentence-input a').each(function(i) {
                  if (i > 0) { inputs2 += ' '; }
                  inputs2 += $(this).text();
                });
                body.find('[name="input_answer[]"]').val(inputs2);
                $(this).remove();

                if (body.find('.test-sentence-input .btn').length > 1) {
                  body.find('.btn-sentence-order').removeClass('hidden');
                } else {
                  body.find('.btn-sentence-order').addClass('hidden');
                }

                e.preventDefault();
                return false;
              });
            }
          });
          body.find('[name="input_answer[]"]').val(inputs);
        }

        order_body.removeClass('set-order');
        body.removeClass('order');

        e.preventDefault();
        return false;
      });

      $('#testForm').click(function(e) {
        if ($('.txt-next-guide').hasClass('active') == true) {
          console.log('showSpeedResult', '4');
          showSpeedResult(true, true);
        }
      });
    });
</script>
<? endif; ?>

<div class="slider-body quiz-end-div hidden" style="width: 100%; position: relative;">
<div class="panel text-center" style="width:100%;height:400px;padding:50px">
<p style="height:30px;"></p>
<?
if ($test_info->goal_score>-1):
    ?>
<span id="goal_end_span">
<h1 class="font-bold"><span class="my_score_txt"></span></strong></h1>
<p style="height:50px;"></p>
    <h2 style="line-height: 1.5;"><span class="goal_score_txt text-info"></span></h2>
<p style="height:20px;"></p>
<? if ($is_owner): ?>
<h5><a class="btn btn-md btn-success btn-test-stop hidden">시작화면으로</a></h5>
<? else: ?>
<h5>
    <a class="btn btn-md btn-go-result hidden" href="/TestReport/<?= $class_idx ?>/<?= $set_idx ?>">테스트 결과 보기</a>
<a class="btn btn-md m-l-md btn-go-retry hidden" href="/ClassTest/<?= $class_idx ?>/<?= $set_idx ?>">다시 도전하기</a>
</h5>
<? endif; ?>
</span>
<? else: ?>
<h1><strong>수고했습니다.</strong></h1>
<p style="height:50px;"></p>
    <h2 style="line-height: 1.5;">테스트 결과가 제출되었습니다.<br>
</h2>
<p style="height:20px;"></p>
<? if ($is_owner): ?>
<h5><a class="btn btn-md btn-success btn-test-stop hidden">시작화면으로</a></h5>
<? else: ?>
<h5><a class="btn btn-md btn-success" href="/TestReport/<?= $class_idx ?>/<?= $set_idx ?>">테스트 결과 보기</a></h5>
<? endif; ?>
<? endif; ?>
</div>
</div>

<?
    endif;
    ?>
<input type="hidden" id="objective_cnt" name="objective_cnt" value="<?= $objective_cnt ?>" />
</form>

<?
    // 강사 : 테스트가 진행중이거나 종료됐고 응시자가 있으면...
    // else:
    elseif ( $is_owner && $test_info->test_status>0 && $user_idx>0 ):
    ?>
<div class="hpanel ccpanel" style="margin-bottom: 0px;">
    <? if ($is_owner): ?>
<div class="panel-heading hbuilt" >
<div class="row">
<div class="col-md-8 text-left m-t-xs">
    <? if ($selected_user_info!=null): ?>
<img src="<? if (strlen($selected_user_info['profile_img']) == 0): ?>/images/default_photo.png<? else: ?><?= $selected_user_info['profile_img'] ?><? endif; ?>" class="profile-img img-circle pull-left" alt="logo" style="width: 25px;height: 25px;" onerror="imageError(this)">
<span style="font-size:15px;">&nbsp;&nbsp;&nbsp;<?= $selected_user_info['user_name'] ?> (<?= $selected_user_info['login_id'] ?>)</span>
<span class="text-info font-bold" style="font-size:18px;"><?= $test_report['score'] ?>점
<? if ($test_info->test_type==2 && $test_info->goal_score>-1 && $test_report['score']>=$test_info->goal_score): ?> (통과)<? endif; ?></span>
<? endif; ?>
</div>
<div class="col-md-4 m-t-xs text-right">
<input type="checkbox" class="i-checks" name="show_answer" id="show_answer" checked> 정답 보기
</div>
</div>
</div>
<? endif; ?>
<div class="panel-body h-150" style="padding-left:33px; padding-top:30px">
<?
    $idx =0;
$objective_cnt =0;
$answer_text ="";
// print_r($test_report);
// exit;

foreach ($test_report['test_report'] as $row):
$idx++;
$radio_idx =0;
$q_audio = '';

if ($row['q_option']==1) {
  $q_str = $row['front'];
} elseif ($row['q_option']==2) {
  $q_str = $row['back'];
} elseif ($row['q_option']==3) {
  // $q_str = '<a class="btn_audio"><i class="fa fa-volume-off" data-src="http://58.229.240.172'.$row['audio_path']. '"></i></a>';
  $q_str = '<a class="btn btn-success btn-sm btn_audio"><i class="fa fa-volume-off" data-src="'.$row['audio_path']. '">&nbsp;&nbsp;&nbsp;&nbsp;오디오 재생</i></a>';
  $q_audio = '<a class="btn btn-success btn-sm btn_audio"><i class="fa fa-volume-off" data-src="'.$row['audio_path']. '">&nbsp;&nbsp;&nbsp;&nbsp;오디오 재생</i></a>';
} elseif ($row['q_option']==4) {
  $q_str = $row['example_sentence'];
}

if ($row['subjective_yn']==0): 	// 객관식 
$objective_cnt++;
    ?>
<div class="form-group" id="map_quest_<?=$idx ?>" data-idx="<?=$idx-1?>">
<div class="row">
    <? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div class="col-sm-8">
    <? else: ?>
<div class="col-sm-12">
    <? endif; ?>
<div class="pull-left" style="width: 50px; text-align: right; margin-top: 3px;">
<div class="label label-default" style="padding:.2em 1.1em .3em;"><?=$idx ?></div>
<? if ($row['correct_yn']==1): ?>
<i class="answer-o fa fa-circle-thin" style='font-size:68px;position: absolute; left: 13px; top: -20px;color:red;opacity:0.6'></i>
<? else: ?><i class="answer-x pe-7s-close" style='font-size:110px;position: absolute; left: 22px; top: -40px;color:red;opacity:0.6;font-weight:bolder;'></i>
<? endif; ?>
</div>
<div style="margin-left: 50px; padding-left: 15px;">
    <label for="class_name" class="test-q-css">
    <? if (strlen($q_audio) > 0): ?><?= $q_audio ?><? else: ?><?= getHtmlString($q_str) ?><? endif; ?>
</label>
<div class="col-xs-12 option-css">
    <? foreach ($row['option_info'] as $row_option):
$radio_idx++;
    ?>
<div class="radio radio-success">
<input type="radio" name="input_radio_<?=$objective_cnt-1?>" id="radio_<?=$objective_cnt-1?>_<?= $radio_idx ?>" value="<?= $row_option['option_idx'] ?>" <? if ($row['user_input']==$row_option['option_idx']): ?> checked<? else:?> disabled<? endif; ?> ><label for="radio_<?=$objective_cnt-1?>_<?= $radio_idx ?>"><?= getHtmlString($row_option['option_text']) ?></label>
</div>
<?
if ($row['answer']==$row_option['option_idx']) {
  $answer_text = $row_option['option_text'];
}
    ?>
<? endforeach; ?>
</div>
</div>
</div>
<div class="col-sm-4 quiz-img">
    <? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<img src="<?= $row['img_path'] ?>" style="max-height: 150px; max-width:270px">
    <? endif; ?>
</div>
</div>
<div class="row">
<div class="col-xs-1"></div>
    <div class="col-xs-11 p-l-md show-answer-div">
<h5 style="padding-left: 15px;">
<span class="label label-success">정답</span> 
    <span class="m-l-sm text-ellipsis" style="max-width: calc(100% - 80px); display: inline-block; position: relative; top: 3px;" data-toggle="tooltip" data-placement="top" title="<?= getHtmlString($answer_text) ?>"><?= getHtmlString($answer_text) ?></span>
</h5>
</div>
</div>
</div>

<? 	else: ?>
<div class="form-group" id="map_quest_<?=$idx ?>" data-idx="<?=$idx-1?>">
<div class="row">
    <? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div class="col-xs-8">
    <? else: ?>
<div class="col-xs-10">
    <? endif; ?>
<div class="pull-left" style="width: 50px; text-align: right; margin-top: 3px;">
<div class="label label-default" style="padding:.2em 1.1em .3em;"><?=$idx ?></div>
<? if ($row['correct_yn']==1): ?>
<i class="answer-o fa fa-circle-thin" style='font-size:68px;position: absolute; left: 13px; top: -20px;color:red;opacity:0.6'></i>
<? else: ?><i class="answer-x pe-7s-close" style='font-size:110px;position: absolute; left: 22px; top: -40px;color:red;opacity:0.6;font-weight:bolder;'></i>
<? endif; ?>
</div>
<div style="margin-left: 50px; padding-left: 15px;">
    <label for="class_name" class="test-q-css">
    <? if (strlen($q_audio) > 0): ?><?= $q_audio ?><? else: ?><?= getHtmlString($q_str) ?><? endif; ?>
</label>
<input type="text" class="form-control" name="input_answer[]" value="<?= $row['user_input'] ?>"
style="display: block; border: none;border-bottom: 2px solid #757575;" maxlength="500" onblur="inputMaxLength(this);">
</div>
</div>
<? if ($row['img_path'] !='' && $row['img_path'] !=null && $test_info->test_q_img_yn==1 && $row['q_option']!=1): ?>
<div class="col-sm-4 quiz-img">
<img src="<?= $row['img_path'] ?>" style="max-height: 150px; max-width:270px">
</div>
<? else: ?>
<div class="col-sm-2"></div>
<? endif; ?>
</div>
<div class="row m-t-xs">
<div class="col-xs-1"></div>
    <div class="col-xs-11 p-l-md show-answer-div">
<h5>
    <span class="label label-success">정답</span> 
    <span class="m-l-sm text-ellipsis" style="max-width: calc(100% - 80px); display: inline-block; position: relative; top: 3px;" data-toggle="tooltip" data-placement="top" title="<?= $row['answer'] ?>"><?= getHtmlString($row['answer']) ?></span>
</h5>
</div>
</div>
</div>
<? 	endif; ?>
<p style="height:50px;"></p>
<? endforeach; ?>
</div>
</div>
<?  endif; ?>

</div>
<? endif; ?>


<div class="modal fade fmodal fmodal-warning2" id="startTestModal" tabindex="-1" role="dialog" aria-hidden="true">
<div class="modal-dialog" style="width: 350px;">
<div class="modal-content">
<!-- <div class="color-line"></div> -->
    <div class="modal-header">
<h4 class="modal-title">
    테스트 공개
<div class="pull-right">
<a data-dismiss="modal"><i class="fa fa-times"></i></a>
<a class="btn-submit-start"><i class="fa fa-check"></i></a>
</div>
</h4>
					<!-- <small class="font-bold">테스트가 클래스 학생에게 공개되어 테스트 에 응시할 수 있습니다.</small> -->
</div>
<div class="modal-body">
<form id="startTestForm" class="input-area">
    <? foreach($class_idxs as $cls_idx): ?>
<input type="hidden" name="class_idxs[]" value="<?= $cls_idx?>" />
    <? endforeach; ?>
<input type="hidden" name="class_idx" value="<?= $class_idx ?>" />
<input type="hidden" name="set_idx" value="<?= $set_idx ?>" />
<div class="form-group">
<div class="radio" style="padding-left: 0px;">
<div class="iradio_square-green">
<input type="radio" class="i-checks" name="select_end_type" value="1" checked>
</div> 수동 종료
</div>
<div class="radio" style="padding-left: 0px;">
<div class="iradio_square-green">
<input type="radio" class="i-checks" name="select_end_type" value="2">
    </div> 자동 종료 : <span id="newDateSpan" class="text-info font-bold"></span>
<input type="hidden" class="input-date form-control" id="selected_date" name="selected_date" readonly="readonly">
    </div>

    <hr style="border-top-color: #ccc;">

<div style="overflow:hidden;">
<div class="row">
<div class="col-md-11" style="margin-left: 30px;">
<div id="datepicker12"></div>
    </div>
    </div>
    <script type="text/javascript">
    $(function () {
      var d = new Date();
      $('#datepicker12').datepicker({
        /*useCurrent: false,
        defaultDate:d,*/
        inline: true,
        format: 'yyyy-mm-dd',
        language: 'kr',
        todayHighlight: true,
        startDate: '0d'
      }).on('changeDate',function(event){
        console.log('date changed');
        $('#newDateSpan').html(event.format(0,"yyyy-mm-dd"));
        $('#selected_date').val(event.format(0,"yyyy-mm-dd"));
        console.log($('#selected_date').val());
        $('input[name="select_end_type"]:input[value=2]').iCheck('check');
      });;

      $('#datepicker12').datepicker('setDate', d);
      // console.log($('#datepicker12').datepicker('getDates'));

      $('input[name="select_end_type"]:input[value=1]').iCheck('check');
    });
</script>
</div>

							<!-- <div style="overflow:hidden;"  role="form" class="form-horizontal">
<div class="input-group date"  data-date-format="yyyy-mm-dd" id="datepicker">
<input type="text" class="input-date form-control" id="selected_date" name="selected_date" readonly="readonly">
<span class="input-group-addon"><i class="glyphicon glyphicon-th"></i></span>
</div>
</div>
설정된 날짜에 자동으로 테스트가 종료됩니다 -->
</div>
</form>
</div>
</div>
</div>
</div>

<div class="modal fade fmodal fmodal-warning2" id="option_edit_modal" data-keyboard="false" role="dialog" aria-hidden="true" style="display: none;">
<div class="modal-dialog">
<div class="modal-content">
    <!-- remote register popup 영역 -->
</div>
</div>
</div>

<div class="modal fade fmodal fmodal-warning2" id="set_report_modal" tabindex="-1" role="dialog" aria-hidden="true" style="display: none;">
<div class="modal-dialog" style="max-width: 900px; width:100%">
<div class="modal-content">
    <!-- remote login popup 영역 -->
</div>
</div>
</div>

<div class="modal fade fmodal fmodal-warning2" id="detailInfoModal" tabindex="-1" role="dialog" aria-hidden="true" data-mode='battle'>
<div class="modal-dialog" style="margin-top: 140px;">
<div class="modal-content" style="font-size: 22px;">
<div class="modal-body h-bg-blue text-white" style="padding: 40px 50px; font-weight: 300; line-height: 1.7;">
    테스트는 학생들의 세트 학습 정도를 편리하게 테스트할 수 있습니다. 학생들은 세트를 제대로 학습해야만 , 좋은 점수를 얻을 수 있으며 여러 번 응시 가능합니다.
<br><br>문항은 자동 생성되지만, 선생님께서 문항수, 형식을 설정할 수 있습니다.
<div class="text-right">
<a class="text-white btn-go-settings"><u>설정하기</u></a>
</div>
</div>
<script type="text/javascript">
    jQuery(function($) {
      $('.btn-go-settings').click(function(e) {
        location.replace('/ClassTest/<?= $class_idx ?>/<?= $set_idx ?>?p=1');
      });
    });
</script>
</div>
</div>
</div>

</div>
<!-- <div style="position: fixed; width: auto; height: auto; z-index: 1039; bottom: 100px; right: 40px;">
<a class="btn btn-lg btn-success btn-circle map-item-content" style="padding: 6px 8px;" data-target=""><i class="fa fa-arrow-up fa-2x"></i></a>
</div> -->
<script type="text/javascript">

var class_idx = <?= $class_idx ?>;
var set_idx = <?= $set_idx ?>;
var audio = new Audio();
var set_type = <?= $set_info['set_type'] ?>;
var goal_score = <?= $test_info->goal_score ?>;
var isChange = false;
<? if ($is_mng == TRUE): ?>
var is_mng = true;
var class_idxs = [<? for($i = 0; $i < count($class_idxs); $i++) { if ($i > 0) { ?>,<? } ?><?= $class_idxs[$i] ?><? } ?>];
<? else: ?>
var is_mng = false;
var class_idxs = [];
<? endif; ?>

var bookmark_card_cnt = 0;
<? if ($is_owner): ?>
bookmark_card_cnt = <?= $bookmark_card_cnt->bookmark_card_cnt ?>;
<? endif; ?>

// 문제를 제시하면서 자동으로 오디오 플레이가 된 경우 (오디오 끝난 이후 타이머 동작 처리를 위한 변수)
var is_auto_audio = false;

var radio_timer = null;

<? if (!$is_owner): ?>
$(document).ready(function(){
  // submitTest(0);		// Report로 redirect 하지 않는다.
  // isChange = true;
});
<? endif; ?>

<? if ($is_owner): ?>
function modifyTest() {
  var valid = true;
  $modal = $('#infoTestForm');
  $form = $('#infoTestForm');


  var sum = eval($('.txt-total-percent').text());
  var max_cnt = eval($('.text-test-total').text());
  if (sum == 0) {
    showAlert('출제할 문항 수가 없습니다.');
    return;
  } else if (sum > max_cnt) {
    showAlert((sum - max_cnt) + '문항 수를 초과 하였습니다.');
    return;
  }

  if (valid == false) {
    return false;
  } else {
    $('#test_q_cnt').val(sum);
    $('#test_q_cnt_bm').val(sum);

    <? if ($is_print == TRUE): ?>
    submitTestSettings('new');
    <? else: ?>
    <? if ($test_info->test_status!=0 && $is_owner): ?>
    <? if ($test_user_cnt->test_user_cnt == 0): ?>
    // submitTestSettings('renew');
    showConfirm($('.txt-total-percent').text()+'문항을 생성 하겠습니까?', null, checkTestWordSubject, null,'renew');
    <? else: ?>
    if (is_change_setting == true) {
      setTimeout(function() {
        showConfirm('<?= $test_user_cnt->test_user_cnt ?>명의 테스트 기록이 있습니다.<br /><br />테스트 기록을 제거하고 새로 설정 하겠습니까?', null, checkTestWordSubject, null,'renew');
      }, 500);
    } else {
      showConfirm('변경된 SPEED QUIZ 설정을 저장 하겠습니까?', null, checkTestWordSubject, null,'setting');
    }
    <? endif; ?>
    <? else: ?>
    // submitTestSettings('new');
    showConfirm($('.txt-total-percent').text()+'문항을 생성 하겠습니까?', null, checkTestWordSubject, null,'renew');
    <? endif; ?>
    <? endif; ?>
    return true;
  }
}

function checkTestWordSubject(mode) {
  // 단어제시 + 주관식 수로 0보다 크면 안내팝업을 나오게 처리함.
  var word_subject_cnt = eval($('#q_type7_cnt').val());
  if (word_subject_cnt > 0) {
    setTimeout(function() {
      showConfirm('의미를 입력하는 주관식 문항의 채점 기준을 확인해 주세요', '의미를 직접 입력하는 문항을 설정하셨습니다.<br>이 경우 학생이 정답을 매우 정확히 입력해야만 정답되는데,<br>예를 들면 정답이 <b>"귀중한, 소중한"</b>일 때<br><br>귀중한, 소중한 <span class="text-info">(정답처리)</span><br>귀중한 소중한 <span class="text-info">(정답처리)</span><br>소중한, 귀중한 <span class="text-danger">(오답처리)</span><br>귀중한 <span class="text-danger">(오답처리)</span><br>소중한 <span class="text-danger">(오답처리)</span><br><br>즉 학생이 답을 알더라도 사소한 차이로 오답처리 될 수 있으니 유의해 주세요. 이대로 출제 할까요?<br><br>TIP! 객관식으로 출제하시고, 속도를 "매우 빠르게"로 설정하면, 주관식 난이도와 유사해 집니다.', submitTestSettings, null, mode, null, '출제');
    }, 500);
  } else {
    submitTestSettings(mode);
  }
}
<? endif; ?>

function submitTestSettings(mode) {
  console.log('submitTestSettings');
  <? if ($is_mng == TRUE): ?>
  var url = '/ClassMng/edittest';
  <? else: ?>
  var url = '/ClassTest/edittest';
  <? endif; ?>

  $.isLoading({ text: "테스트 문제를 생성중 입니다." });

  $form = $('#infoTestForm');
  $form.find('#mode').val(mode);
  $.ajax(url, {
    type: 'post',
    data: new FormData($form[0]),
    dataType: 'json',
    processData: false,
    contentType: false,

    success: function (data) {
      console.log(data);
      if (data.result == 'ok') {
        isChange = false;
        /*
                        <? if ($is_mng == FALSE): ?>
                        if (mode=="renew") {
                            document.location.href = '/ClassMain/'+class_idx;
                        } else {
                            document.location.reload();
                        }
                        <? else: ?>
                        document.location.reload();
                        <? endif; ?>
        */
        // SB 2.362 정책으로 테스트로 모두 바뀌면서 자동으로 테스트가 시작하도록 변경 (종료날짜는 수동처리)
        if (mode == 'renew') {
          submitTestSettings('new');
        } else {
          startTest();
        }

// 				document.location.href = '/ClassTest/'+class_idx+'/'+set_idx+'p=1';
      }
    },

    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest);
    },
    complete: function() {
      $.isLoading( "hide" );
    }
  });
}
function showTestAlert(test_status) {
  if (test_status==1) {
    showAlert('테스트 진행중에는 설정을 변경할 수 없습니다.');
  } else {
    showAlert('테스트가 종료되어 설정을 변경할 수 없습니다.');
  }
}
function print_sum() {
  var total_cnt = eval($('.text-test-total').text());

  var sum_cnt = 0;
  $('.q_type_cnt').each(function(i, el) {
    sum_cnt += eval(el.value);
  });
  $('.txt-total-percent').text(sum_cnt)

  $('.txt-total').removeClass('text-info text-danger');
  $('.q_type_cnt').removeClass('text-danger');
  if (sum_cnt > 0 && sum_cnt <= total_cnt) {
    $('.txt-total').addClass('text-info');
  } else if (sum_cnt > total_cnt) {
    $('.txt-total').addClass('text-danger');

    $('.q_type_cnt').each(function(i, el) {
      if (el.value > 0) {
        $(this).addClass('text-danger');
      }
    });
  }
}

var is_change_setting = false;
jQuery(function($) {
  // 응시을 시작하면 0으로 하고 응시 중 백버튼 클릭시 경고 팝업이 나오게 한다.
  is_submited = 1;

  $('.tr-premium [data-toggle="tooltip"]').tooltip({html: true, container: 'body'});

  $('.btn-test-setting').click(function(e) {
    /*
            $('.test-setting-layer').removeClass('hidden');
            $('.test-submit-layer').addClass('hidden');
            
            $('.btn-test-edit').removeClass('hidden');
            $(this).addClass('hidden');
            
            $('.btn-quiz-start').click();
    */
    window.location.href = '/ClassTest/' + class_idx + '/' + set_idx + '?p=1';
  });


  var checked_speed_val = $('input[name=quiz_speed]:checked').val();

  $('#header-class').css({'position': 'fixed', 'top': '0', 'background': '#424242'});
  $('#wrapper-class').css({'padding-top': '40px', 'top': '0', 'overflow-y': 'initial'});

  $('.btn-test-reset').click(function(e) {
    showConfirm('테스트 결과를 모두 초기화 하겠습니까?', null, submitTestSettings, null,'renew', null, '초기화', '취소');
  });

  $('.submit_row').click(function(e) {
    user_idx = $(this).data('idx');
    reg_date = $(this).data('date');
    if (reg_date!=null && reg_date.length>0) {
      window.location.href = '/ClassTest/' + class_idx + '/' + set_idx + '?user_idx=' + user_idx;
    }
  });

  $('#show_answer').on('ifChanged', function () {
    // console.log(this.checked);
    if (this.checked) {
      $('.show-answer-div').removeClass('hidden');
    } else {
      $('.show-answer-div').addClass('hidden');
    }
  });


  $(document.body).on('hidden.bs.modal', function () {
    $('#option_edit_modal').removeData('bs.modal')
  });

  //Edit SL: more universal
  $(document).on('hidden.bs.modal', function (e) {
    $(e.target).removeData('bs.modal');
  });

  <? if ($is_owner): ?>
  $('#infoTestForm input').change(function() {
    isChange = true;
  });
  $('#infoTestForm .setting-td input').change(function() {
    console.log('change 2');
    is_change_setting = false;
    $('#infoTestForm .setting-td input').each(function() {
      if (is_change_setting == true) { return; }
      if (this.type == 'checkbox') {
// 				console.log(this.checked, $(this).data('old'));
        if (this.checked != $(this).data('old')) {
          is_change_setting = true;
// 					console.log('checkbox change');
        }
      } else {
// 				console.log(this.value, $(this).data('old'));
        if (this.value != $(this).data('old')) {
          is_change_setting = true;
// 					console.log('text change');
        }
      }
    });
// 		console.log('current is_change_setting', is_change_setting);
  });
  <? else: ?>
  $('#testForm input').change(function() {
    isChange = true;
  });
  $('.test_pw').unbind('change').keyup(function(e) {
    var input = $(this);
    input.next().addClass('hidden');

    if (input.val().length == 4) {
      $.isLoading({ text: "비밀번호를 확인 중 입니다." });

      jQuery.ajax({
        url: '/ClassMainAsync/testPW',
        global: false,
        type: "POST",
        data: {class_idx:<?= $class_idx?>, set_idx:<?= $set_idx ?>, pw:input.val()},
      dataType: "json",
          async: true,
          success: function (data) {
        console.log(data);
        if (data.result == 'ok') {
          input.closest('.panel').find('.btn-next').click();
        } else {
          input.next().removeClass('hidden');
        }
      },

      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log(XMLHttpRequest);
      },
      complete: function() {
        $.isLoading( "hide" );
      }
    });
    }
  });
  <? endif; ?>

  $('.test_options_edit').click(function(e) {
    $('#premiummodal').data('load-url','/Premium/popup?p=test_options_edit');
    $('#premiummodal').modal('show');
  });

  $quiz_speed = $('input[name=quiz_speed]');

  $('#premiummodal').on('show.bs.modal', function (e) {
    var loadurl = $(this).data('load-url');
    $(this).find('.modal-content').load(loadurl);
  });

  <? if (getAuth($this->user_level, USER_LEVEL_PREMIUM) == FALSE): ?>
  $('.tr-premium input').change(function(e) {
    if ($(this).attr('type') == 'checkbox') {
      if (this.name == 'case_sensitive_yn') {
        this.checked = true;
      } else {
        this.checked = false;
      }
    } else if ($(this).attr('type') == 'radio') {
      var input = this;
      var click_idx = 1;
      if (input.name == 'try_condition') {
        click_idx = 0;
      }
      setTimeout(function() {
        $(input).closest('.tr-premium').find('[name="' + input.name + '"]')[click_idx].click();
        $(input).closest('.tr-premium').find('[name="' + input.name + '"]')[click_idx].checked = true;
      }, 100);
    }

    $('#premiummodal').data('load-url','/Premium/popup?p=speed_common');
    $('#premiummodal').modal('show');
  });
  <? endif; ?>

  <? if ($is_owner): ?>
  var q_cnt = 0;
  $('input[type="number"]').change(function(e) {
    console.log('number change', this.value, this.min, this.max);
    if (this.value == '') { this.value = 0; }
    if (eval(this.value) < eval(this.min)) { console.log('set min'); this.value = this.min; }
    if (eval(this.value) > eval(this.max)) { console.log('set max'); this.value = this.max; }
  });
  $('#t_is_favor').change(function(e) {
    console.log(this.checked);
    if (this.checked) {
      $('#test_q_type').val(2);

      $('.text-test-total').text(<?= $bookmark_card_cnt->bookmark_card_cnt ?>);
      $('.test-type-normal').prop('max', <?= $bookmark_card_cnt->bookmark_card_cnt ?>);
      $('.test-type-audio').prop('max', <?= $bookmark_audio_cnt->cnt ?>);
      $('.test-type-es').prop('max', <?= $bookmark_es_cnt->cnt ?>);

      $('.text-test-audio').text('<? if ($bookmark_card_cnt->bookmark_card_cnt == 0): ?>문항 (발음 없음)<? else: ?>문항 (최대 <?= $bookmark_card_cnt->bookmark_card_cnt ?>문항)<? endif; ?>');
      $('.text-test-es').text('<? if ($bookmark_es_cnt->cnt == 0): ?>문항 (예문 없음)<? else: ?>문항 (최대 <?= $bookmark_es_cnt->cnt ?>문항)<? endif; ?>');
    } else {
      $('#test_q_type').val(1);

      $('.text-test-total').text(<?= $card_cnt ?>);
      $('.test-type-normal').prop('max', <?= $card_cnt ?>);
      $('.test-type-audio').prop('max', <?= $audio_cnt->cnt ?>);
      $('.test-type-es').prop('max', <?= $es_cnt->cnt ?>);

      $('.text-test-audio').text('<? if ($audio_cnt->cnt == 0): ?>문항 (발음 없음)<? else: ?>문항 (최대 <?= $audio_cnt->cnt ?>문항)<? endif; ?>');
      $('.text-test-es').text('<? if ($es_cnt->cnt == 0): ?>문항 (예문 없음)<? else: ?>문항 (최대 <?= $es_cnt->cnt ?>문항)<? endif; ?>');
    }
    print_sum();
  });
  $('.q_type_cnt')
      .change(function() {
        print_sum();
      })
      .keyup(function(e) {
        print_sum();
      });
  $('#test_q_cnt')
      .change(function() {
        print_sum();
      })
      .keyup(function(e) {
        print_sum();
      });

  $('.btn-test-set-init').click(function(e) {
    showConfirm('<?= $test_q_cnt ?>문항을 삭제 하겠습니까?', null, initTestSetting);
  });

  $('input[name=try_condition]').change(function(e) {
    $('.quiz-method-detail').addClass('hidden');
    $('.quiz-method-detail-' + this.value).removeClass('hidden');
  });

  <? endif; ?>
  $(window).on("beforeunload", function(e){
    console.log('################################################', isChange, isSystemPopup);
    // 데이터 변경이 있을경우
    if(isChange){
      <? if ($is_owner): ?>
      // return "수정 사항을 저장하지 않고 나가겠습니까?";
      <? else: ?>
      if (isSystemPopup) {
        submitTestUnload();
      }
      <? endif; ?>
    }
  });

  $('.btn-test-edit').click(function(e) {
    // showConfirm($('.txt-total-percent').text()+'문항을 생성 하겠습니까?', null, modifyTest);
    console.log('btn-test-edit click...');
    modifyTest();
  });


  $('.btn-test-start').click(function(e) {
    <? if ($test_info->test_q_type==null): ?>
    showAlert('테스트를 설정한 후에 시작할 수 있습니다.');
    return false;
    <? else:?>
    <? if ($is_mng == TRUE): ?>
    showConfirm('선택한 <?= count($class_idxs) ?>개 클래스에서  설정된 테스트를 일괄  공개 하시겠습니까?', null, showStartTestModal);
// 			showConfirm('선택한 <?= count($class_idxs) ?>개 클래스에서  설정된 테스트를 일괄  공개 하시겠습니까?', null, startTest);
    <? else: ?>
    showStartTestModal();
// 			startTest();
    <? endif; ?>
    <? endif; ?>
  });

  function showStartTestModal() {
    $('#startTestModal').modal('show');
  }

  $('.btn-submit-start').click(function(e) {
    startTest();
  });

  $('.btn-test-end').click(function(e) {
    showConfirm('테스트를 종료합니다.<br><br>학생들이 더 이상 제출할 수 없습니다.', null, endTest, null, null, null, '테스트 종료','취소');
  });

  $('.btn-test-submit').click(function(e) {
    <? if ($ex==1): ?>
    showAlert('테스트 체험 상태에서는 제출 할 수 없습니다.');
    <? else: ?>
    checkSubmitTest(1);
    <? endif; ?>
  });

  $(audio)
      .bind('ended', function() {
        console.log($('i', $('.btn_audio')));
        $('i', $('.btn_audio')).removeClass('fa-volume-up');
        $('i', $('.btn_audio')).addClass('fa-volume-off');

        if (is_auto_audio == true) {
          before = new Date();
          clearInterval(timer2);
          timer2 = setInterval(updateProgressbar2, 200);
        }
        is_auto_audio = false;
      })
      .bind('error', function() {
        console.log('audio error');
        $('i', $('.btn_audio')).removeClass('fa-volume-up');
        $('i', $('.btn_audio')).addClass('fa-volume-off');

        if (is_auto_audio == true) {
          before = new Date();
          clearInterval(timer2);
          timer2 = setInterval(updateProgressbar2, 200);
        }
        is_auto_audio = false;
      })
      .bind('loadeddata', function() {
        console.log('###AUDIO###', this);
        if (typeof global_audio_speed == 'number' && global_audio_speed <= 16 && global_audio_speed > 0) {
          this.playbackRate = global_audio_speed;
          console.log('###AUDIO###', 'set playbackrate');
        } else {
          this.playbackRate = 1.0;
          console.log('###AUDIO###', 'default playbackrate');
        }
      });

  /*
      before = new Date();
      timer2 = setInterval(updateProgressbar2, 200);
  */

  $('.btn_audio').unbind('click').click(function(el) {
    console.log('btn_audio click');
    // console.log(el.currentTarget);

    $target = $(el.currentTarget);
    audio.pause();
    if ($target.find('i').data('src') == '') {
      if (is_auto_audio == true) {
        before = new Date();
        clearInterval(timer2);
        timer2 = setInterval(updateProgressbar2, 200);
      }
      is_auto_audio = false;
      return;
    }
    // console.log($target.parent().next());
    $target.parent().next().focus();

    audio.src = $target.find('i').data('src');
    audio.load();
    audio.play();
    $target.find('i')[0].className = 'fa fa-volume-up';

    el.preventDefault();
    return false;
  });

  $('.cc-radio-box input[type="radio"]').change(function(e) {
    if (radio_timer != null) {
      clearTimeout(radio_timer);
      radio_timer = null;
    }

    $('.cc-radio-box input[name="' + this.name + '"] + label').addClass('disabled');
    $(this).next().removeClass('disabled');

    radio_timer = setTimeout(function() {
      console.log('showSpeedResult', '5');
      showSpeedResult(true, true);
    }, 300);
  });
});

$('input[name="select_end_type"]').on('ifChanged', function() {
  if ($(":input:radio[name='select_end_type']:checked").val()==2) {
    $("input[id='selected_date']").attr('readonly', false);
    $("input[id='selected_date']").attr("required", true);
    // showdatepicker();
  } else {
    $("input[id='selected_date']").attr('readonly', true);
    $("input[id='selected_date']").attr("required", false);
    // $("#datepicker").datepicker("disable");
    // $("#datapicker").prop('disabled', true);
    // $('#datapicker').unbind('focus');
    // $('#datapicker').datepicker("destroy");
    // $('#datapicker').datepicker("option", "disabled", true);
    // $("#datepicker:enabled").datepicker();
  }
});

function showdatepicker() {
  // $('#datepicker').datepicker({
  //   		format: 'yyyy-mm-dd',
  //        	autoclose: true,
  //        	todayHighlight: true
  // });
  $('.input-group.date').datepicker({
    format: 'yyyy-mm-dd',
    autoclose: true,
    todayHighlight: true,
    startDate: '0d'
  });
}

function initTestSetting() {
  var valid = true;
  $form = $('#infoTestForm');
  var url = '/ClassTest/initTestSetting';

  $.ajax(url, {
    type: 'post',
    data: new FormData($form[0]),
    dataType: 'json',
    processData: false,
    contentType: false,

    success: function (data) {
      console.log(data);
      if (data.result == 'ok') {
        document.location.reload();
      }
    },

    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest);
    }
  });
}

function startTest() {
  var valid = true;
  $modal = $('#startTestForm');
  $form = $('#startTestForm');

  if ($(":input:radio[name=select_end_type]:checked").val()==2 && ($('#selected_date').val()==null || $('#selected_date').val()<1)) {
    $('#selected_date').parent().addClass('has-error');
    valid = false;
  }

  if (valid == false) {
    $($('.has-error')[0]).children().next().focus();
    return false;
  }

  <? if ($is_mng == TRUE): ?>
  var url = '/ClassMng/starttest';
  var ok_msg = '선택한 <?= count($class_idxs) ?>개 클래스에서 테스트가 공개 되었습니다.';
  <? else: ?>
  var url = '/ClassTest/starttest';
  var ok_msg = '테스트가 학생들에게 공개되었습니다.';
  <? endif; ?>

  $.ajax(url, {
    type: 'post',
    data: new FormData($form[0]),
    dataType: 'json',
    processData: false,
    contentType: false,

    success: function (data) {
      console.log(data);
      if (data.result == 'ok') {
        isChange = false;
        <? if($is_mng == TRUE): ?>
// 				showAlert(ok_msg, null, goBack);
        <? else: ?>
        // showAlert(ok_msg, null, pageReload);
// 				showAlert(ok_msg, null, goClassMain);
        <? endif; ?>
        document.location.href = '/ClassTest/'+class_idx+'/'+set_idx+'?p=1';
      }
    },

    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest);
    }
  });
}

function goBack() {
  history.back();
}

function pageReload() {
  // document.location.reload();
  document.location.href = '/ClassTest/'+class_idx+'/'+set_idx;
}

function goClassMain() {
  document.location.href = '/ClassMain/'+class_idx;
}

function endTest() {
  var valid = true;
  $modal = $('#startTestForm');
  $form = $('#startTestForm');


  $.ajax('/ClassTest/endtest', {
    type: 'post',
    data: new FormData($form[0]),
    dataType: 'json',
    processData: false,
    contentType: false,

    success: function (data) {
      // console.log(data);
      if (data.result == 'ok') {
        isChange = false;
        // document.location.reload();
        <? if ($is_mng == TRUE): ?>
        document.location.reload();
        <? else: ?>
        if (location.hash.length > 0) {
          document.location.reload();
        } else {
          window.location.replace(location.href);
        }
        <? endif; ?>
      }
    },

    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest);
    }
  });
}

function checkSubmitTest(test_type, is_skip) {

  $('.btn-submit-quiz').attr('disabled', true);

  // isChange = false;
  var valid = true;
  $modal = $('#testForm');
  $form = $('#testForm');
  var blank_cnt = 0;

  var radio_all_answered = true;
  $modal.find('input:radio').each(function(key) {
    var el_name = $(this).attr("name");
    // console.log('checked:' + $('input:radio[name='+el_name+']:checked').val());
    if($("input:radio[name="+el_name+"]:checked").length == 0) {
      radio_all_answered = false;
    }
  });
  // console.log('result:' +radio_all_answered);
  var q_idx = -1;
  var arr_input_value = [];

  /*
      for (var j = 0; j <= <?= $objective_cnt-1 ?>; j++) {
          arr_input_value[j] = $('input:radio[name=input_radio_'+j+']:checked').val();
          if (arr_input_value[j]==null || arr_input_value[j]=="") {
              blank_cnt++;
          }
          q_idx = j;
      }
  
      $modal.find($('input[type=text]')).each(function(index) {
          q_idx++;
          $obj = $(this);
          if ($obj.attr('required') == 'required') {
              if ($obj.val()<1 || $obj.val()==null) {
                  $obj.parent().addClass('has-error');
                  valid = false;
                  blank_cnt++;
              } else {
                  $obj.parent().removeClass('has-error');
                  arr_input_value[q_idx] = $obj.val();
              }
          }
      });
  */
  /*
      for (var k = 0; k <= q_idx; k++) {
          $($('input[name="user_answer[]"]')[k]).val(arr_input_value[k]);
          // console.log('user_answer value:'+$($('input[name="user_answer[]"]')[k]).val());
      }
  */
  var sub_idx =-1;
  for (var i = 0; i < $('input[name="test_question[]"]').length; i++) {
    $obj = $('input[name="subjective_yn[]"]')[i];
    // 객관식
    if ($($('input[name="subjective_yn[]"]')[i]).val()==0) {
      $obj_val = $('input:radio[name=input_radio_'+i+']:checked').val();
      if ($obj_val==null || $obj_val=="") {
        blank_cnt++;
      }
      arr_input_value[i] = $obj_val;
    }
    // 주관식
    else {
      sub_idx++;
      $sub = $($('input[name="input_answer[]"]')[sub_idx]);

      if ($sub.val()<1 || $sub.val()==null) {
        $sub.parent().addClass('has-error');
        valid = false;
        blank_cnt++;
      } else {
        $sub.parent().removeClass('has-error');
        arr_input_value[i] = $sub.val();
      }
    }
    $($('input[name="user_answer[]"]')[i]).val(arr_input_value[i]);

    // console.log( $($('input[name="user_answer[]"]')[i]).val() );
  }
  // return;

  if (is_skip == true) {
    return;
  }

  if (test_type==1) {
    if (valid == false || radio_all_answered==false) {
      $($('.has-error')[0]).children().next().focus();
      showConfirm('아직 ' + blank_cnt + '문제의 답을 입력하지 않았습니다. 제출하겠습니까?', null, submitTest, null, null, null, '제출');
    } else {
      showConfirm('테스트를 제출하시면, 이후 수정할 수 없습니다.<br><br>테스트를 제출 하시겠습니까?', null, submitTest, null, null, null, '제출');
    }
  } else if (test_type==2) {
    submitTest();
  }
}

function submitTestUnload() {
  checkSubmitTest(2, true);

  $form = $('#testForm');
  $.ajax('/ClassTest/submittest', {
    type: 'post',
    data: new FormData($form[0]),
    dataType: 'json',
    async: checkAjaxAsync(),
    processData: false,
    contentType: false,

    success: function (data) {
      console.log(data);
      if (data.result == 'ok') {

      }
    },

    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest);
    },
    complete: function() {
      isSystemPopup = false;
      is_submited = 1;
      isChange = false;
    }
  });
}

function submitTest(redirect) {

  $.isLoading({ text: "응시기록을 제출중 입니다." });
  $form = $('#testForm');
  $.ajax('/ClassTest/submittest', {
    type: 'post',
    data: new FormData($form[0]),
    dataType: 'json',
    processData: false,
    contentType: false,

    success: function (data) {
      console.log(data);
      if (data.result == 'ok') {
        isSystemPopup = false;
        is_submited = 1;
        <? if ($test_info->test_type==2): ?>
        isChange = false;
        $(".speed_quiz_row").removeClass("showing");
// 					$(".speed_quiz_row").parent().height(0);
        $(".quiz-end-div").removeClass("hidden");
        $(".progressbar").addClass("hidden");
        $('.btn-show-feedback').addClass('hidden');

        if (goal_score>-1) {
          <? if (!$is_owner): ?>
          var my_score = data.score.score;
          if (my_score == 100) {
            $('.my_score_txt', $('#goal_end_span')).html('<span class="text-danger">' + my_score + '점</span>, 축하합니다!');
            $('.goal_score_txt', $('#goal_end_span')).html('와우! 정말 대단합니다.');
            $('.btn-go-result', $('#goal_end_span')).addClass('btn-success');
            $('.btn-go-result', $('#goal_end_span')).removeClass('hidden');
            $('.btn-go-retry', $('#goal_end_span')).addClass('hidden');
          } else if (my_score>=goal_score) {
            $('.my_score_txt', $('#goal_end_span')).html('<span class="text-danger">' + my_score + '점</span>, 축하합니다!');
            $('.goal_score_txt', $('#goal_end_span')).html('선생님의 목표점수(' + goal_score + '점)를 달성하였습니다.');
            $('.btn-go-result', $('#goal_end_span')).addClass('btn-success');
            $('.btn-go-result', $('#goal_end_span')).removeClass('hidden');
            $('.btn-go-retry', $('#goal_end_span')).addClass('hidden');
          } else {
            $('.my_score_txt', $('#goal_end_span')).html('<span class="text-danger">' + my_score + '점</span>, 다시 도전해 보세요!');
            $('.goal_score_txt', $('#goal_end_span')).html('선생님의 목표점수(' + goal_score + '점)');
            $('.btn-go-result', $('#goal_end_span')).addClass('btn-default btn-outline');
            $('.btn-go-result', $('#goal_end_span')).removeClass('hidden');
            // $('.btn-go-retry', $('#goal_end_span')).addClass('btn-success');
            // $('.btn-go-retry', $('#goal_end_span')).removeClass('hidden');
            $('.btn-go-retry', $('#goal_end_span')).addClass('hidden');
          }
          <? endif; ?>
        }
        <? else: ?>
        if (redirect!=0) {
          isChange = false;
          document.location.href = '/TestReport/'+class_idx+'/'+set_idx;
        }
        <? endif; ?>
      }
    },

    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest);
    },
    complete: function() {
      $.isLoading( "hide" );
    }
  });
}

$('.btn-user-test-reset').click(function(e) {
  user_idx = $(this).data('idx');
  var user_name = $(this).data('name');
  showConfirm(user_name+'의 테스트 결과를 초기화하고, 재응시토록 하겠습니까?', null, resetUserTest, null, null, null, '초기화');
  e.stopPropagation();
});

function resetUserTest() {
  $data = {class_idx:class_idx, set_idx:set_idx, user_idx:user_idx};
  jQuery.ajax({
    url: "/ClassReport/resetUserTest",
    global: false,
    type: "POST",
    data: $data,
    dataType: "json",
    async: true,
    success: function (data) {
      console.log(data);
      if (data.result == 'ok') {
        // document.location.reload();
        document.location.href = '/ClassTest/'+class_idx+'/'+set_idx;
      }
    },

    error: function (XMLHttpRequest, textStatus, errorThrown) {
      console.log(XMLHttpRequest);
    }
  });
}

<? // if ($test_info->test_type==2 && !$is_owner):
if ($test_info->test_type==2):
    ?>
var card_idx = 0;
var total_card_cnt = <?= $idx ?>;
var progress = 0;
var total_sec = 5;
var dg = 0;
var timer2;
var before = new Date();
var elapsedTime = 0;
var diff = 0;
var elapsedTime2 = 0;

function setProgress(val) {
  var cur_quest = $('.speed_quiz_row.current.showing').first();
  if (cur_quest.length > 0) {
    cur_quest.find(".progressbar .progress-bar").css({'width': val + '%'});
  }
}

function updateProgressbar2(){

  dg = (100/total_sec);

  elapsedTime2 = (new Date().getTime() - before.getTime());
// 		console.log(elapsedTime2);

  $(".progressbar").removeClass("hidden");
  setProgress(((elapsedTime2 / 1000)*dg));

  if ((elapsedTime2 / 1000) >= total_sec) {
    console.log('showSpeedResult', '6');
    showSpeedResult(true);
  }
}

function clickAnswer(idx, ev) {
  var cur_quest = $('.speed_quiz_row.current.showing').first();
  if (cur_quest.length > 0) {
    if (cur_quest.find('input[name="subjective_yn[]"]').val() == 0) {
      $('input:radio[name=input_radio_'+cur_quest.data('idx')+']')[idx].checked = true;
    }
  }
  ev.preventDefault();
}

function setQuestFlip(is_force) {
  // return;
  /*var t0 = performance.now();*/
  console.log(card_idx);
  var cur_quest = $('.speed_quiz_row.current.showing').first();
  if (cur_quest.length > 0) {
    <? if ($is_owner == FALSE): ?>
    if (cur_quest.data('object') == 1 && is_force === undefined) {
      if (cur_quest.find('.cc-radio-box').length > 0) {
        showAlert('<div style="font-size: 130%; margin-bottom: 8px;">주의사항</div>객관식 선택 문제입니다. 답을 고르는 시간이 매우 짧으니, 미리 답을 생각해 두세요.', null, function() { setTimeout(function() { setQuestFlip(true); }, 500); });
        return;
      }
    }
    <? endif; ?>

    cur_quest.addClass('showing-flip');

    /*var t1 = performance.now();
    console.log("f1: " + (t1 - t0) + 'ms');*/

    setProgress(0);
    getLimitSec(cur_quest);
    setTimeout(function() {
      $('input[type=text]', cur_quest)
          .removeAttr('disabled')
          .focus();

      before = new Date();
      clearInterval(timer2);
      timer2 = setInterval(updateProgressbar2, 200);
    }, 100);

    /*var t2 = performance.now();
    console.log("f2: " + (t2 - t1) + 'ms');*/
  }
}

function showSpeedResult(is_show, is_next) {
  clearInterval(timer2);
  if (radio_timer != null) {
    clearTimeout(radio_timer);
    radio_timer = null;
  }

  var cur_quest = $('.speed_quiz_row.current.showing').first();
  if (cur_quest.length > 0 && cur_quest.hasClass('showing-flip') == false) {
    setTimeout(function() {
      setQuestFlip();
    }, 100);
    return;
  }

  console.log('showSpeedResult', is_show, is_next);

  console.log(cur_quest.find('.btn-order-close'));
  cur_quest.find('.btn-order-close').click();
  cur_quest.find('.btn-sentence-order').addClass('hidden');

  // 2017-10-11 이슈 1800번 : 피드백 제거 처리
  // 2017-11-28 SB 3.41 : 피드백 옵션 처리
  if ($('.btn-show-feedback').length > 0 && $('.btn-show-feedback').hasClass('active') == true) {
    $('.speed-quiz-results').removeClass('hidden');
  } else {
    is_show = false;
    $('.speed-quiz-results').addClass('hidden');
  }

  var target = $('.speed-quiz-results .result.timeout');
  var answer_el = $('.speed-quiz-results .result.result-info');
  var cur_quest = $('.speed_quiz_row.current.showing').first();
  var user_answer = '';
  var answer = '';
  var answer_html = '';
  if (cur_quest.length > 0) {
    answer = cur_quest.find('.answer').text();
    answer_html = cur_quest.find('.answer').html();
    if (cur_quest.find('input[name="subjective_yn[]"]').val() == 0) {
      console.log('user_answer---------', $('input:radio[name=input_radio_'+cur_quest.data('idx')+']:checked').next());
      // 			user_answer = $('input:radio[name=input_radio_'+cur_quest.data('idx')+']:checked').val();
      user_answer = $('input:radio[name=input_radio_'+cur_quest.data('idx')+']:checked').next().text();
    } else {
      user_answer = cur_quest.find('input[name="input_answer[]"]').val();
      cur_quest.find('input[name="input_answer[]"]').attr('disabled', true);
    }
  }

  var font_max = 80;
  if (user_answer !== undefined && user_answer.length > 0) {
    <? if ($test_info->case_sensitive_yn == 1): ?>
    var is_cap = false;
    <? else: ?>
    var is_cap = true;
    <? endif; ?>

    if (checkAnswer(user_answer, answer, is_cap)) {
      target = $('.speed-quiz-results .result.correct');
      font_max = 160;

      // 정답일때는 피드백 없이 바로 다음으로 가게 처리한다.
      is_show = false;
      $('.speed-quiz-results').addClass('hidden');
    } else {
      target = $('.speed-quiz-results .result.wrong');
    }
  } else if (is_next == true) {
    target = $('.speed-quiz-results .result.wrong');
  }
  answer_el.removeClass('fadeIn fadeOut')
      .find('span').html(answer_html);

  $('.speed-quiz-results .result').addClass('hidden').removeClass('fadeInDown fadeOutUp');

  // unscramble 에서 틀린 피드백 이후 이면 다음 문제로 넘어가게 변수처리
  if (
      is_show == true
      && $('.btn-show-feedback').length > 0 && $('.btn-show-feedback').hasClass('active') == true
      && $('.txt-next-guide').hasClass('active') == true
  ) {
    console.log('force next quest........');
    is_show = false;
  }

  $('#testForm').css('pointer-events', 'none');

  if (is_show == true) {
    $('.btn-next-quiz').attr('disabled', true);
    target.addClass('fadeInDown').removeClass('hidden');
    // var delay = 1300;
    var delay = 700;
    if (target.hasClass('correct') == false) {
      delay = 2300;
      // 			answer_el.addClass('fadeIn').removeClass('hidden');

      if (cur_quest.find('.test-sentence-input').length == 0) {
        target.html(answer_html);
        var auto_height = $('.speed-quiz-results').height() - 100;
        target.dotdotdot().trigger( 'destroy.dot' );
        target.parent().textfill({
          explicitHeight: auto_height,
          maxFontPixels: font_max,
          minFontPixels: 30,
          innerTag: 'div',
          is_force: true
        });
        target.dotdotdot({height: auto_height});
      } else {
        font_max = 160;
        target.html('<i class="material-icons">close</i>').css('font-size', font_max);
        cur_quest.find('.txt-correct-answer').text(answer);
        cur_quest.find('.btn-sentence-word').addClass('hidden');
      }

    } else {
      target.css('font-size', font_max);
    }

    setTimeout(function() {
      console.log('showSpeedResult', 'ani 2');
      showSpeedResult(false, is_next);
    }, delay);
  } else {
    target.addClass('fadeOutUp').removeClass('hidden');
    if (
        target.hasClass('correct') == false
        && cur_quest.find('.test-sentence-input').length > 0
        && $('.btn-show-feedback').length > 0 && $('.btn-show-feedback').hasClass('active') == true
        && $('.txt-next-guide').hasClass('active') == false
    ) {
      // 			answer_el.addClass('fadeOut').removeClass('hidden');
// 				target.text(answer);
      $('.txt-next-guide').addClass('active');
      $('#testForm').css({'pointer-events': '', 'cursor': 'pointer'});
      cur_quest.find('.test-sentence-words, .test-sentence-input').css('pointer-events', '').css('pointer-events', 'none');
      $('.btn-next-quiz').removeAttr('disabled');
    } else {
      $('.btn-next-quiz').attr('disabled', true);
      setTimeout(function() {
        answer_el.addClass('hidden');
        $('.txt-next-guide').removeClass('active');
        $('#testForm').css({'cursor': ''});
        console.log('showSpeedResult');
        nextQuiz();
      }, 400);
    }

    setProgress(0);
  }
}

function nextQuiz(){
  // if (card_idx>1) {return;}

  console.log('nextQuiz');
  if (card_idx==total_card_cnt) {
    console.log('show send', card_idx);
    $('.btn-next-quiz').addClass('hidden');
    $('.btn-submit-quiz').removeClass('hidden');
    <?  if (!$is_owner && $ex!=1): ?>
    $('.btn-submit-quiz').removeClass('hidden');
    <? endif; ?>

    $('#testForm').css('pointer-events', '');
    $('.btn-submit-quiz').first().click();
    return;
  }

  $('.btn-next-quiz').attr('disabled', true);
  setTimeout(function() {
    $('.btn-next-quiz').removeAttr('disabled');
    $('#testForm').css('pointer-events', '');
  }, 600);

  setProgress(0);
  clearInterval(timer2);
  setProgress(0);
  card_idx++;
  $cur_obj = $(".speed_quiz_row_"+card_idx);

  $cur_obj.find('.CardItemSide').first().click(function(e) {
    console.log('CardItemSide click');
    console.log('showSpeedResult', '1');
    showSpeedResult(true, true);
    e.preventDefault();
    return false;
  });

  /*
          if (card_idx == 1) 
          {
              $(".speed_quiz_row_"+card_idx).addClass('showing');
              getLimitSec($cur_obj);
              console.log('=='+ card_idx +' 번째 카드, ' + total_sec + '초');
  
              if ($('.btn_audio', $cur_obj).length == 0) {
                  before = new Date();
                  clearInterval(timer2);
                  timer2 = setInterval(updateProgressbar2, 200);
              } else {
                  is_auto_audio = true;
                  $('.btn_audio', $cur_obj).click();
              }
          } 
          else 
  */
  {
    /*
                $(".speed_quiz_row_"+card_idx).addClass('showing');
                $(".speed_quiz_row_"+(card_idx - 1)).removeClass('showing');
    */
    $cur_obj.prevAll().removeClass('previous next current showing').addClass('hidden');
    $cur_obj.prevAll().first().removeClass('hidden').addClass('previous showing');
    $cur_obj.nextAll().removeClass('previous next current showing').addClass('hidden');
    if ($cur_obj.nextAll().first().hasClass('speed_quiz_row')) {
      $cur_obj.nextAll().first().removeClass('hidden').addClass('next showing');
    }
    $cur_obj.removeClass('previous next').addClass('current showing');
    getLimitSec($cur_obj);
    console.log('=='+ card_idx +' 번째 카드, ' + total_sec + '초');

    if ($('.btn_audio', $cur_obj).length == 0) {
      before = new Date();
      clearInterval(timer2);
      timer2 = setInterval(updateProgressbar2, 200);
    } else {
      is_auto_audio = true;
      $('.btn_audio', $cur_obj).click();
    }
  }
}

function getLimitSec(obj) {
  $obj = $(obj);
  if ($obj.hasClass('showing-flip') == true) {
    total_sec = $obj.data('sec');
  } else {
    // 2017-12-28 SB 3.7 - 제시어를표시한후타이머진행 :공통5초
    // 2018-01-04 SB 3.73 - 문제 글자수에 따라 타이머시간 설정
    total_sec = $obj.data('show-sec');
  }
// 		total_sec = 60;
}

$(function () {
  $('.btn-quiz-start').click(function(e) {
    <? if ($is_owner && $test_info->test_status==0): ?>
    $('.btn-test-start').addClass('hidden');
    <? if ($test_type==2): ?>
    $('.btn-test-stop').removeClass('hidden');
    $('.speed_quiz_txt').addClass('hidden');
    <? endif; ?>
    <? endif; ?>
    <? if (isset($is_std_start) == FALSE || $is_std_start == TRUE): ?>
    startQuiz();
    <? else: ?>
    $.isLoading({ text: "테스트 문제를 생성중 입니다." });
    setTimeout(function() {
      $.cookie("is_std_start", 1, { path: '/', expires:1 });
      document.location.reload();
    }, 100);
    <? endif; ?>
  });

  $('.btn-test-stop').click(function(e) {
    document.location.href = '/ClassTest/' + class_idx + '/' + set_idx + '?st=1';
  });

  $('.btn-next-quiz').click(function(e) {
// 			nextQuiz();
    console.log('showSpeedResult', '2');
    showSpeedResult(true, true);
    e.preventDefault();
    return false;
  });

  $('.btn-submit-quiz').click(function(e) {
    clearInterval(timer2);
    <? if ($is_owner && $ex!=1): ?>
    // showAlert('테스트 체험 상태에서는 제출 할 수 없습니다.');
    isChange = false;
    $(".speed_quiz_row").removeClass("showing");
// 			$(".speed_quiz_row").parent().height(0);
    $(".quiz-end-div").removeClass("hidden");
    $(".progressbar").addClass("hidden");
    $('.btn-show-feedback').addClass('hidden');
    <? else: ?>
    checkSubmitTest(2);
    <? endif; ?>

    e.preventDefault();
    return false;
  });

  $(document).unbind('keydown').keydown(function(e) {
    console.log(e);

    if ($('#alertModal').css('display') == 'block') {
      e.preventDefault();
      return;
    }

    if ($('.quiz-start-quest').hasClass('hidden') == true) {
      return;
    }

    if ($('.txt-next-guide').hasClass('active') == true) {
      console.log('showSpeedResult', '3');
      showSpeedResult(true, true);
      e.preventDefault();
    }

    if (e.target.tagName == 'INPUT' && e.target.name != 'input_answer[]' && e.target.name.indexOf('input_radio_') == -1) {
      return;
    }

    // backspace 처리
    if (event.keyCode == 8) {
      var t = document.activeElement;
      // console.log(t.tagName);
      if (t.tagName != "INPUT")
        return false;
    }

    if ($('.btn-next-quiz').attr('disabled') == 'disabled') {
      return;
    }

    if (e.keyCode === 49 || e.keyCode === 97) {
      clickAnswer(0, e);
    } else if (e.keyCode === 50 || e.keyCode === 98) {
      clickAnswer(1, e);
    } else if (e.keyCode === 51 || e.keyCode === 99) {
      clickAnswer(2, e);
    } else if (e.keyCode === 52 || e.keyCode === 100) {
      clickAnswer(3, e);
    } else if (e.keyCode === 53 || e.keyCode === 101) {
      clickAnswer(4, e);
    } else if (e.keyCode === 13 || (e.target.name != 'input_answer[]' && e.keyCode === 32)) {
// 				nextQuiz();
      console.log('showSpeedResult', '3');
      showSpeedResult(true, true);
      e.preventDefault();
    }
  });

  <? if (($is_owner == TRUE && $p == 1) || (isset($is_std_start) == TRUE && $is_std_start == TRUE)): ?>
  $('.btn-quiz-start').click();
  <? elseif (isset($is_std_start) == TRUE && $is_std_start == FALSE): ?>
  $(".quiz-start-div").removeClass("hidden");
  $('.test-setting-layer').removeClass('hidden');
  <? else: ?>
  $(".quiz-start-div").removeClass("hidden");
  <? endif; ?>
});

function clickAnswer(idx, ev) {
  if ($(".speed_quiz_row_"+card_idx).find('input[type="radio"]').length == 0) {
    return;
  }

  if (idx >= $(".speed_quiz_row_"+card_idx).find('input[type="radio"]').length) {
    return;
  }

  $(".speed_quiz_row_"+card_idx).find('input[type="radio"]')[idx].click();
  ev.preventDefault();
}

function startQuiz() {
  // 응시을 시작하면 0으로 하고 응시 중 백버튼 클릭시 경고 팝업이 나오게 한다.
  is_submited = 0;
  $(".quiz-start-div").addClass("hidden");
  $('.quiz-start-quest').removeClass('hidden');
  <? if ($is_owner == FALSE): ?>
// 		$('.speed_quiz_title').removeClass('hidden');
  <? endif; ?>
  /*
          $(".speed_quiz_row_1").removeClass("hidden");
          getLimitSec($(".speed_quiz_row_1"));
          $(".progressbar").progressbar({
              value: progress
          });
  */
  console.log('startQuiz');
  nextQuiz();
}


<? endif; ?>
</script>`;

export const hugeHTMLBlockCaseThree = `<link rel="stylesheet" href="/styles/v2/reset.css" />
<link rel="stylesheet" href="/styles/v2/grammar_info.css?v=20230718" />
<div id="wrap" style="<? if (isset($page_mode) && $page_mode == 'home' && (isset($deviceType) && ($deviceType == 'phone' || $deviceType == 'tablet')) ): ?>overflow-x: hidden;<? endif; ?>">
    <? require_once('./application/views/template/v2/main_top.php'); ?>

<div class="section s1">
<a name="g_intro"></a>
    <div class="content">
<div class="title1">
    선생님 문법수업에
<span class="text-gclass">문법훈련<img class="img1" src="/images/v3/grammar/img_twingcle01.png" /><img class="img2" src="/images/v3/grammar/img_line01.png" /></span>을 추가하세요!
    </div>

    <div class="container1">
<div class="container2">
<div class="title2 arrow1">유닛별 100문항</div>
<div class="title2 arrow2">오답 다시풀기</div>
<div class="title2 arrow3">선생님의</br>오답관리</div>
</div>
<div class="title3">모든 시중 문법교재 유닛마다</br>온라인 문법 훈련 프로그램 제공</div>
</div>

<div class="container3" ><img class="img3" src="/images/v3/grammar/img_section01_book.png" /></div>

    </div>
    </div>

    <div class="section s2">
<div class="content">
<div class="container1">
<iframe width="1092" height="614" src="https://www.youtube.com/embed/5H1KwleLDqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>
</div>
</div>

<div class="section s3">
<a name="g_ct"></a>
    <div class="content">
<div class="cc-table fill-parent-w middle">
<div class="img1">
<img src="/images/v3/grammar/img_question01.png" />
</div>
<div>
<div class="title1">
    효과적 반복과 오답관리 가능한<br>초등, 중등 문법훈련용 20,000문항
</div>
<div class="title2">
    <!-- 15,000 문항 <span class="text-light">✕</span> 반복학습 -->
</div>
</div>
</div>
</div>
</div>

<div class="section s4">
<div class="content">
<div class="cc-table fill-parent-w middle">
<div>
    <div class="title1">
    초등 대상 84개 유닛<br>중등 대상 148개 유닛
</div>
<div class="title2">
    <!-- 148개 유닛 -->
</div>
</div>
<div class="img1">
<div class="chapter-box">
<div class="cc-scroll-y gclass chapter-list" style="height: 400px;">

    </div>
    <div class="scroll-box">
<div class="cc-table fill-parent middle">
<div class="text-center">
<img src="/images/v3/grammar/ic_mouse01.png" />
<div class="title3">스크롤을 해보세요</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


<div class="section s5">
<div class="content">
<div class="cc-table middle w-100p">
<div class="left-cell">
<img src="/images/v3/grammar/grammargif.gif" style="border-radius:20px;" class="w-100p"/>
    </div>
    <div class="right-cell">딱3분!<br>재미있는 문법개념 영상</div>
</div>
</div>
</div>


<div class="section s6">
<a name="g_fc"></a>
    <div class="content">
<div class="title1">자동채점 됩니다</div>
<div class="title2">내신대비 서술형 중심</div>
<div class="img1">
<img src="/images/v3/grammar/img_q1.png" />
<img src="/images/v3/grammar/img_q2.png" />
    </div>
    </div>
    </div>

    <div class="section s7">
<div class="content">
<div class="title1">지루하지 않아요</div>
<div class="title2">다양한 인터랙티브 문항</div>
<div class="img1">
<img src="/images/v3/grammar/img_q3.png" />
<img src="/images/v3/grammar/img_q4.png" />
<img src="/images/v3/grammar/img_q5.png" />
    </div>
    </div>
    </div>

    <div class="section s8">
<div class="content">
<div><img src="/images/v3/grammar/ic_test01.png" /></div>
    <div class="cc-table fill-parent-w m-t">
<div class="td">
<div class="title1">
    선생님을 도와주는<br>
완벽한 관리 도구
</div>
<div class="bg1 border18 p-48" style="margin-top: 35px;">
<div class="title2">실시간 모니터링하며 관리하기</div>
<div class="title3">점수와 학생의 오답까지 즉시 파악하여 도울 수 있습니다</div>
<div class="m-t-lg"><img src="/images/v3/grammar/img_exersise_test01.png" /></div>
    <div class="m-t-lg"><img src="/images/v3/grammar/img_incorrect01.png" /></div>
    </div>
    </div>
    <div class="space">&nbsp;</div>
<div class="td bg1 border18 p-48 p-b-none">
<div class="title2">학부모께 성적표 보내기</div>
<div class="title3">클래스카드를 이용하여 성적표를 보내세요</div>
<div class="img1"><img src="/images/v3/grammar/img_kakao01.png" /></div>
    </div>
    </div>
    </div>
    </div>

    <div class="section s9">
<div class="content">
<div><img src="/images/v3/grammar/ic_talk01.png" /></div>
    <div class="title1">
    Class Grammar 를 이용하는<br>
선생님, 학생들의 이야기
</div>
<div class="m-t-xxl cc-table box-body fill-parent-w">
<div class="td">
<div class="box">
<div><img src="/images/v3/grammar/ic_quot02.png" /></div>
    <div class="title2">
    오답까지 다 맞추려고 하는걸 보며 오~~ 했어요!
</div>
<div class="title3">
    교재로 문제 풀때는 고민을 하지 않고, 매우 지루해 하고 귀찮아하는게 보였는데 이상하게 닥터스 그래머로 하면  고민하며 다시 생각하고 풀어보고 오답까지 다 맞추려고 하는걸 보며 오~~ 했어요!
</div>
<div class="cc-table m-t-md">
<div class="middle p-r">
<img src="/images/v3/grammar/img_profile01.png" />
</div>
<div>
<div class="title4">뿡샘 선생님</div>
<div class="title5">초등 비중이 높은 학원 운영</div>
</div>
</div>
<div class="title6">
<a href="https://cafe.naver.com/classcardhakwon/6326" target="_blank">리뷰 자세히보기 <i class="material-icons text-gclass">arrow_forward</i></a>
</div>
</div>
</div>
<div class="space">&nbsp;</div>
<div class="td">
<div class="box">
<div><img src="/images/v3/grammar/ic_quot02.png" /></div>
    <div class="title2">
    수업연구에 더 많은 시간을 투입할 수 있습니다.
</div>
<div class="title3">
    아이들의 오답율을 확인하여 약점을 지우고, 저는 정기고사 대비 기출문제풀이에 더욱 집중할 수 있습니다. 수업연구에 더 많은 시간을 투입할 수 있습니다.
</div>
<div class="cc-table m-t-md">
<div class="middle p-r">
<img src="/images/v3/grammar/img_profile02.png" />
</div>
<div>
<div class="title4">핑코 선생님</div>
<div class="title5">중고등 보습학원 운영</div>
</div>
</div>
<div class="title6">
<a href="https://cafe.naver.com/classcardhakwon/6218" target="_blank">리뷰 자세히보기 <i class="material-icons text-gclass">arrow_forward</i></a>
</div>
</div>
</div>
<div class="space">&nbsp;</div>
<div class="td">
<div class="box">
<div><img src="/images/v3/grammar/ic_quot02.png" /></div>
    <div class="title2">
    100점 맞은거 보고 제가 더 기분 좋은 날입니다.
</div>
<div class="title3">
    문법 개념을 이해 못하는 게 아니라, 영어 문장이 익숙치 않아 문장 해석 자체가 어려운 친구인데, &lt;개념-연습-서술형-실전&gt; 순서대로 쭉 풀다보니 어느새 익숙해지나봐요. 100점 맞은거 보고 제가 더 기분 좋은 날입니다.
</div>
<div class="cc-table m-t-md">
<div class="middle p-r">
<img src="/images/v3/grammar/img_profile03.png" />
</div>
<div>
<div class="title4">지쌤 선생님</div>
<div class="title5">초중등 영어선생님</div>
</div>
</div>
<div class="title6">
<a href="https://cafe.naver.com/classcardhakwon/6595" target="_blank">리뷰 자세히보기 <i class="material-icons text-gclass">arrow_forward</i></a>
</div>
</div>
</div>
</div>
</div>
</div>

<div class="section s10">
<a name="g_price"></a>
    <div class="content">
<div class="title2">지금 바로 학생들에게 문법훈련을 시작하세요!</div>
<div class="w-600 m-center p-t-lg">
    <? foreach($G_priceTableArr as $i=>$row): ?>
<? if ($i > 2) { break; } ?>
<div class="cc-table middle box">
<div class="title3">학생수 <?=$row['max_std_cnt']?>명</div>
<div class="text-right">
<div class="title4">
<span class="font-80p">월이용료</span> <?= number_format($row['list_price']) ?>원
    </div>
    <div class="m-t-xs">
<span class="title5">Pro 고객</span>
<span class="title6"><?= number_format($row['list_price'] * 0.9) ?>원</span>
</div>
</div>
</div>
<? endforeach; ?>
</div>
<div class="title7">
<a data-toggle="modal" data-target="#GPriceTable">가격표 자세히보기 <i class="material-icons text-gclass">arrow_forward</i></a>
</div>
</div>
</div>

<div class="section s11">
<iframe width="1092" height="614" src="https://www.youtube.com/embed/FAWz1CgDAOU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

</div>

<div class="tmp hidden">
<div class="chapter-item"></div>
    <div class="modal-unit-item" data-grade="">
<div class="cc-table fill-parent-w ">
<div class="w-150 chapter font-bold">1</div>
    <div class="unit-name font-bold">2</div>
    <div class="grade p-r text-right w-60">3</div>
    </div>
    </div>
    </div>
    <div class="modal fade" id="GPriceTable" tabindex="-1" role="dialog">
    <style>
.info-table { width: 100%; margin-top: 20px; text-align: center; font-size: 12px; border-radius: 10px; border-style: hidden; box-shadow: 0 0 0 2px #7f5ac8;}
.info-table td { width: 33%; padding: 6px 0px; }
.info-table td { border-left: 1px solid #ddd; border-bottom: 1px solid #ddd; }
.info-table td:last-child { border-right: 1px solid #ddd; }
.info-table td.title { border: none; padding:6px 8px; }
.info-table td.empty { border-left: none; }
.info-table td.header { background: #444; color: #fff; font-weight: 600; border: none; }
.info-table td.header.pro { background: #78d024; color: #fff; }
.info-table td.sub { background: #F2EBFF; font-weight: 600; text-align: left; padding-left: 25px; }
.info-table td.left { text-align: left; padding-left: 30px; }
.info-table td.pro-border { border-left: 3px solid #78d024; border-right: 3px solid #78d024; }
.info-table td.pro-border-b { border-bottom: 3px solid #78d024; }
.info-table td.etc { text-align: left; padding: 0px 10px; }
.info-table td.title { border: none; padding:6px 8px; vertical-align:middle; background:#979797; color:#fff}
</style>
<div class="modal-dialog" style="width:520px">
<div class="modal-content" style="border-radius: 0px;">
<div style="position: absolute; top: 10px; right: 10px;">
<a data-dismiss="modal"><i class="cc times" style="font-size: 28px;"></i></a>
</div>
<div style="padding: 40px;">
<div class="cc-table middle">
<div><img src="/images/v2/pro/img_title_info01.png" style="height:120px;z-index:100"></div>
    <div class='p-l font-24 font-bold text-left fill-parent-w'>
    Class Grammar 월 이용요금

<div class='m-t-sm font-14 text-left'>
<div class="font-normal font-16 m-t-xs">
    * 해지 수수료 없음<br>
* 1명당 4,400원<br>
* Pro 이용고객 10% 할인 (1명당 3,960원)
</div>
</div>
</div>
</div>

<div style='height:450px' class='m-t-25 cc-scroll-y success'>
<table style='margin-top:0px'class="info-table">
<tr class='h-50'>
<th class="w-20p bg-gclass text-white" style='text-align:center'>
<div class="font-16 font-bold">학생수</div>
    </th>
    <th class="w-40p bg-gclass text-white" style='text-align:center '>
<div class="font-16 font-bold">월 이용료</div>
</th>
<th class="w-40p bg-gclass text-white" style='text-align:center '>
<div class="font-16 font-bold">Pro고객 이용료</div>
</th>
</tr>
<tr>
<td class='sub font-bold font-16' style='width:10%; text-align:center'>1 명
</td>
<td class='font-bold font-16 p-r-sm' style='text-align:right'> 사용불가
    </td>
    <td class='font-bold font-16 p-r-sm' style='text-align:right'> 무료
</td>
</tr>
<? foreach($G_priceTableArr as $i=>$row):
$sale_price = number_format($row['list_price'] * 0.9);
    ?>
<tr>
    <td class='sub font-bold font-16' style='width:10%; text-align:center'> <?=$row['max_std_cnt']?> 명
</td>
<td class='font-bold font-16 p-r-sm' style='text-align:right'> <?= number_format($row['list_price']) ?> 원
</td>
<td class='font-bold font-16 p-r-sm' style='text-align:right'> <?= $sale_price ?> 원
</td>
</tr>
<?endforeach;?>
</table>
</div>
</div>
</div>
</div>
</div>

<div class="modal fade" id="grammarPriceTable" tabindex="-1" role="dialog">
    <style>
        #grammarPriceTable .img1 { position: absolute; right: 60px; bottom: -20px; }
#grammarPriceTable table { width: 100%; }
#grammarPriceTable table th, #grammarPriceTable table td { font-size: 14px; line-height: 160%; vertical-align: middle; width: 25%; text-align: center; }
#grammarPriceTable table th.discount, #grammarPriceTable table td.discount { width: 50%; }
#grammarPriceTable table th { position: sticky; color: #0085FF; height: 34px; top: 0px; background: #EEF5FB; }
#grammarPriceTable table td { height: 38px; border-bottom: 1px solid #EBEBEB; }
</style>
<div class="modal-dialog" style="width:658px">
<div class="modal-content" style="border-radius: 20px;">
<div style="position: absolute; top: 18px; right: 20px;">
<a data-dismiss="modal"><i class="cc times font-32"></i></a>
</div>
<div class="p-xl">
<div class="font-20 font-bold">Class Grammar 가격표</div>
<div class="m-t-xs font-14">클래스카드는 해지수수료가 없습니다. 부담없이 이용하세요.</div>
<div class="m-t-xs pos-relative">
<div class="img1">
<img src="/images/v3/common/img_grammar_price01.png" />
    </div>
    </div>
    <div style="height:450px" class="m-t-25 cc-scroll-y gclass">
    <table>
        <tr>
            <th>학생수</th>
    <th>월 이용료</th>
<th class="discount">Pro 고객 이용료(10% 할인)</th>
</tr>
<? foreach($G_priceTableArr as $i=>$row): ?>
<tr>
    <td><?=$row['max_std_cnt']?>명</td>
<td><?= number_format($row['list_price']) ?>원</td>
<td class="discount"><?= number_format($row['list_price'] * 0.9) ?> 원</td>
</tr>
<?endforeach;?>
</table>
</div>
</div>
</div>
</div>
</div>
<div class="modal fade" id="preExperienceModal" tabindex="-1" role="dialog">
<div class="modal-dialog" style="width:658px">
<div class="modal-content" style="border-radius: 20px;">
<div style="position: absolute; top: 22px; right: 25px;">
<a data-dismiss="modal"><i class="cc times font-32"></i></a>
</div>

<div class="text-center" style="padding:60px 75px 65px 75px">
<div class="font-bold" style="font-size:30px">1개월 무료 체험</div>
<div class="m-t-sm font-22" style="line-height:160%">
    클래스카드 <a class="text-gclass text-underline font-bold anchor-underline" href="/Login">로그인</a> 후 업그레이드 하세요
    <br>
    아직 계정이 없다면 <a class="text-gclass text-underline font-bold anchor-underline" href="/Login">회원가입</a> 해주세요
    </div>
    <div class="m-t-lg">
<img src="/images/v3/common/pre_Grammar_img.png" style="margin-left:-40px"/>
    </div>
    </div>
    </div>
    </div>
    </div>

    <script type="text/javascript">
    jQuery(function($){
      var unit_list = <?=json_encode($grammar_unit_list)?>;
      sortGrammarChapter(unit_list);
      filterChange('모두');
      function sortGrammarChapter (grammar_unit_list){
        var sort_chapter_list = {};
        $.each(grammar_unit_list, function(i, unit_info){
          if (sort_chapter_list[unit_info.chapter] == undefined){
            sort_chapter_list[unit_info.chapter] = [];
            sort_chapter_list[unit_info.chapter].push(unit_info)
          }else{
            sort_chapter_list[unit_info.chapter].push(unit_info)
          }
        });
        setGrammarUnit(sort_chapter_list);
      }
      function setGrammarUnit(sorted_grammar_chapter){
        var list = $('.chapter-list');
        list.empty();
        $.each(sorted_grammar_chapter, function(chapter, unit_list){
          var chapter_body = $('.tmp .chapter-item').clone();
          $.each(unit_list, function(i, v){
            var unit_body = $('.tmp .modal-unit-item').clone();
            unit_body.find('.chapter').text(v.chapter);
            unit_body.find('.unit-name').text(v.unit_name);
            unit_body.find('.grade').text(v.grade);

            chapter_body.append(unit_body);
          });
          list.append(chapter_body);
        });
      }
      function filterChange(sort_val){
        $('.chapter-item').removeClass('hidden');
        $('.modal-unit-item').removeClass('hidden');
        $('.modal-unit-item .chapter').removeClass('visible');

        if (sort_val == '모두'){

        }else{
          $('.modal-unit-item').addClass('hidden');
          $('.modal-unit-item[data-grade="'+sort_val+'"]').removeClass('hidden');
        }
        $('.chapter-item').each(function(){
          if($(this).find('.modal-unit-item:not(.hidden)').length == 0){
            $(this).addClass('hidden');
          }else{
            $(this).find('.modal-unit-item:not(.hidden)').eq(0).find('.chapter').addClass('visible');
          }
        });
      }
      if ($('body').width() < 1240) {
        $('#wrap').css('overflow-x', 'hidden');
      }
      $('.btn-pre-experience').click(function(){
        $('#preExperienceModal').modal('show')

      });
    });
</script>`;

export const hugeHTMLBlockCaseFour = `<?
    $sid = null;
    if (array_key_exists('sid', $_GET)) {
        $sid = $_GET["sid"];
    }
?>

<link rel="stylesheet" href="/styles/v2/login.css?v=20230222" />
<div class="cc-row fill-parent">

    <? if (strlen($login_img) > 0): ?>
        <? if (strlen($target_url) > 0): ?>
        <a href="<?= $target_url ?>" target="_blank">
        <? endif; ?>
            <div class="cc-col w-60p left-img" style="background-image: url(<?= $this->config->item('media_domain').$login_img ?>);">
                <div class="left-bottom">
                    <div class="row2" style="align-items: flex-end; justify-content: center;">
                        <? if (strlen($login_msg) > 0 || strlen($login_txt) > 0): ?>
                        <div class="col-auto" style="width: 165px;">
                            <? if (strlen($logo_img) > 0): ?>
                            <img src="<?= $this->config->item('media_domain').$logo_img ?>" style="width: 165px;" />
                            <? elseif (strlen($login_txt) > 0): ?>
                            <div class="login-txt hidden"><div class="cc-ellipsis l2"><?= $login_txt ?></div></div>
                            <? endif; ?>
                        </div>
                        <? endif; ?>
                        <? if (strlen($login_msg) > 0 || strlen($login_contact) > 0): ?>
                        <div class="col text-center <? if (strlen($logo_img) > 0): ?>p-l-lg p-r-lg<? endif; ?>">
                            <? if (strlen($login_msg) > 0): ?>
                            <div class="cc-ellipsis l2"><?= preg_replace("/\\n/i", "<br>", $login_msg) ?></div>
                            <? endif; ?>
                            <? if (strlen($login_contact) > 0): ?>
                            <div class="login-contact <? if (strlen($login_msg) > 0): ?>m-t-12<? endif; ?>"><?= $login_contact ?></div>
                            <? endif; ?>
                        </div>
                        <? endif; ?>
                        <? if (strlen($login_msg) > 0 || strlen($login_txt) > 0): ?>
                        <div class="col-auto" style="width: 165px;">&nbsp;</div>
                        <? endif; ?>
                    </div>
                </div>
            </div>
        <? if (strlen($target_url) > 0): ?>
        </a>
        <? endif; ?>
    <? else: ?>
        <a href="/WordTour" onclick="if ( typeof ga != 'undefined' ) { ga('send', 'event', 'ne', 'click', 'ne_login_image'); }">
        <div class="cc-col w-60p left-connect-bg">
        </div>
        </a>
    <? endif; ?>
    <div class="cc-col w-40p fill-parent-h">
        <div class="cc-table middle fill-parent">
            <div>
            <? if ($is_login && $sid == null): ?>
                <div class="m-center font-24 text-gray text-center">
                    현재 <?= $login_info->login_id ?> 으로 로그인 중입니다.<br><br>
                    <a class="btn btn-lg btn-primary w-180" href="/Main">학습 홈으로</a>
                </div>
            <? else: ?>
                <div class="w-370 m-center">                    
                    <!-- <div class="w-250 m-center">
                        <a class="btn btn-lg btn-block shadow btn-danger2 btn-ex-login font-15"  data-facebook="0">
                            <i class="fa fa-google"></i> Google로 로그인
                        </a>
                        <a class="btn btn-lg btn-block shadow btn-facebook m-t-12 btn-ex-login font-15"  data-facebook="1">
                            <i class="fa fa-facebook"></i> Facebook으로 로그인
                        </a>
                    </div>
                    <div class="text-seperate m-t-25">
                        <span>또는</span>
                    </div> -->
                    <form id="loginForm" method="post" onsubmit="loginProc(); return false;">
                    <input type="hidden" name="sess_key" value="<?= session_id(); ?>">
                    <input type="hidden" name="redirect" value="<?= $redirect ?>">
                    <div class="m-l m-r m-t-25 text-center">
                        <input type="text" placeholder="아이디" title="아이디" required="" value="<?= $sid ?>" name="login_id" id="login_id" class="form-control input-lg font-15" autocomplete="off" autocapitalize="off" onkeydown="hideLoginIdMsg();" />
                        <span id="login_fail_id" class="text-danger small hidden"><?= lang('login_fail_id') ?></span>

                        <input type="password" title="비밀번호" placeholder="비밀번호" required="" value="" name="login_pwd" id="login_pwd" class="form-control input-lg m-t-12 font-15" autocapitalize="off" onkeydown="hideLoginPwdMsg();" />
                        <span id="login_fail_pwd" class="text-danger small hidden"><?= lang('login_fail_pwd') ?></span>
                        
                    </div>
                    <div class="m-t-md text-center">Google 계정으로 가입하셨나요? <a class="btn-ex-login text-primary anchor-underline" data-facebook="0">자세히</a></div>
                    
                    <div class="checkbox primary text-primary text-center m-t-md" style="padding-left: 0; margin: 0px 15px;">
                        <input name="id_remember" id="id_remember" type="checkbox"><label for="id_remember" class="text-default text-left"> 아이디 기억하기</label><br>
                        <button class="btn btn-block btn-lg btn-success shadow m-t-lg font-15">로그인</button>
                    </div>
                    

                    <div class="text-center m-t-lg">
                        <a id="findpwd_btn" class="text-primary anchor-underline font-bold2" href="/LoginPage/findpwd" data-toggle="modal" data-target="#psw_find_modal">아이디/비번찾기</a>
                        <span class="text-ccc" style="padding: 0 12px;">|</span>
                        <a href="/Login/regist" class="text-success anchor-underline font-bold2">회원가입</a>
                    </div>
                    </form>
                    
                </div>
            <? endif; ?>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="psw_find_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content" style="width: 500px; min-height: 600px;">
            <!-- remote find pwd popup 영역 -->
        </div>
    </div>
</div>
<div class="modal fade" id="find_user_list_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog">
        <div class="modal-content" style="width: 500px;">
            <div class="modal-header" style="color: #333; border: none;">
                <div class="pull-right">
                    <a class="font-22" data-dismiss="modal"><i class="cc times"></i></a>
                </div>
            </div>
            <div class="modal-body font-14">
                <div class="text-center font-16 font-bold p-b">아래에서 자신의 이름을 선택해 주세요.</div>
                <div class="m-t-xs find-select-ly cc-scroll-y success" style="max-height:350px;padding-left: 80px;">
                </div>
                <div class="text-center m-t-lg"><a class="btn-send-id-multi-ok btn btn-lg btn-success"></a></div>
            </div>
        </div>
    </div>
</div>
<? if ($is_login == false || $sid != null): ?>

<div class="modal fade" id="google_fb_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" >
        <div class="modal-content">
            <div class="modal-body" style='padding:0px'>
            <!-- remote find pwd popup 영역 -->
            <div style="padding: 20px;">최근 구글/페이스북의 연동장애가 빈번하여 로그인 후 자체계정으로 전환하는 것을 권고 드립니다. 새로운 클래스카드 ID로 변경하셔도 기존 모든 세트, 클래스정보와 학습정보는 그대로 유지되며 더욱 편리하게 이용가능합니다.</div>
                <img src='/images/main/google_fb_login_info.png' style='width:100%'>
            </div>
            <div class='text-center p-sm'>
                <div class=' btn btn-success w-200 login-api google_modal_btn hidden' data-url="<?= $google_url ?>" data-facebook="0">확인</div> 
                <div class=' btn btn-success w-200 login-api fb_modal_btn hidden'  data-url="<?= $facebook_url ?>" data-facebook="1">확인</div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="fb_modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" >
        <div class="modal-content">
            <div class="modal-body" style='padding:0px'>
                <div class="text-center" style="padding: 40px;"><span class="font-bold">Facebook 정책으로 연동계정이 중단되었습니다.</span><br><br>Facebook 계정 연동 사용자께서는 고객센터로 연락주시면<br>클래스카드 자체 계정으로 변경해 드리겠습니다.<br><br>고객센터 : 070-4042-1075<br><br><a class="btn btn-primary w-100" data-dismiss="modal">확인</a></div>
            </div>
        </div>
    </div>
</div>
<?endif;?>
<script type="text/javascript">
    if (typeof(Storage) !== "undefined") {
        var rem_id = localStorage.getItem('id_remember');
    } else {
        var rem_id = '';
    }
    if (rem_id !== undefined && rem_id != null && rem_id != '') {
        $('#login_id').val(rem_id);
        $('#id_remember').prop("checked", true);
    }
    function loginProc() {
        $('#login_fail_id').addClass('hidden');
        $('#login_fail_pwd').addClass('hidden');

        if (typeof(Storage) !== "undefined") {
            if ($('#id_remember')[0].checked) { 
                // 로컬 스토리지 저장
                localStorage.setItem('id_remember', $('#login_id').val());
            } else {
                localStorage.removeItem('id_remember');
            }
        }

        jQuery.ajax({
            url: "<?= $this->config->item('loginproc_url') ?>",
            global: false,
            type: "POST",
            data: $('#loginForm').serialize(),
            dataType: "json",
            async: true,
            success: function(data) {
                console.log(data);
                if (data.result == 'ok') {
                    <?
                        if ($redirect==null || $redirect=="") {
                            $enc_redirect = '';                       
                        } else {
                            // $enc_redirect = urlencode($redirect);
                            $enc_redirect = $redirect;
                        }
                    ?>

                    var is_pro = false;
                    var redirect_url = '<?= $enc_redirect ?>';
                    if (redirect_url.length == 0 && data.b_s_idx !== undefined && data.is_b_s_owner !== undefined && data.go_pro_page !== undefined && data.is_b_s_owner == 1 && data.go_pro_page == 1) {
                        redirect_url = '/Pro/intro/' + data.b_s_idx;
                    } else if (data.pro_request_move == 1){
                        redirect_url = '/Pro/request';
                    } else if (data.max_std_page_move == 1){
                        redirect_url = '/RemoveStudent';
                    } else if (data.go_user_page !== undefined && data.go_user_page == 1) {
                        redirect_url = '/Main?w=1';
                        // is_pro = true;
                    } else if (data.go_first_class !== undefined && data.go_first_class != 0) {
                        redirect_url = data.go_first_class;
                    }

                    if (data.b_s_idx !== undefined && data.b_s_idx > 0) {
                        is_pro = true;
                    } else {
                        is_pro = true;
                    }

                    if (redirect_url.indexOf('/ClassTest') != -1 || redirect_url.indexOf('/GclassTest') != -1 ){
                            redirect_url = '/Main';
                    }
                    if (data.alert_msg != '') {
                        showAlert(data.alert_msg, null, function() { setTimeout(function() { document.location.href = '/Main'; }, 500); });
                        return;
                    }

                    if (is_pro) {
                        <? if ($this->config->item('is_all_https') == 0): ?>
                        document.location.href = '/Register/goHttp?redirect=' + redirect_url;
                        <? else: ?>
                        if (redirect_url == null || redirect_url== '') {
                            document.location.href = '/Main';
                        } else {
                            document.location.href = redirect_url;
                        }
                        
                        <? endif; ?>
                    } else {
                        showAlert('사용자가 많아 일시적으로 로그인이 어렵습니다. 조금만 기다려주세요.', null, function() { setTimeout(function() { document.location.href = '/Main/logout'; }, 500); });
                    }
                } else {
                    if (data.msg == 'id') {
                        $('#login_fail_id').removeClass('hidden');
                        $('#login_id').focus();
                    } else if (data.msg == 'pwd') {
                        $('#login_fail_pwd').removeClass('hidden');
                        $('#login_pwd').val('');
                        $('#login_pwd').focus();
                    } else if (data.msg == 'explorer'){
                         // 브라우저 호환 점검
                        $.reject({  
                            // reject: { all: true },\t// Test 용
                            reject: {  
                                // safari: true, // Apple Safari  
                                msie: true,\t// Covers MSIE <= 6 (Blocked by default)
                                firefox: true, // Mozilla Firefox  
                                opera: true, // Opera  
                                konqueror: true, // Konqueror (Linux) 
                                unknown: true // Everything else  
                            },
                            display: ['chrome'], // Displays only chrome, IE
                            header: '<div style="line-height: 1.5;">클래스카드는 빠르고 보안이 강력한 <span class="text-success">구글 크롬</span> 브라우저에 최적화 되어 있습니다.</div>', // Header Text  
                            paragraph1: '', // Paragraph 1  
                            paragraph2: '',  
                            closeMessage: '<div style="font-size: 1.3em"><div>또 MS가 지원중단한 IE를 이용하지 않기를 권고 드립니다. 클래스카드는 IE에서 <span class="text-danger">일부 기능이 동작하지 않고 학습 정보가 저장되지 않을 수 있습니다.</span></div><div class="text-center"><img class="w-150" src="/images/main/img_block_ie_01.png" /></div></div>', // Message below close window link  
                            closeLink: '<div class="text-center" style="margin-top: -20px;"><span class="bottom btn btn-info btn-lg mw-180">확인</span></div>',
                            close: true,
                            closeESC: true,
                            closeCookie: true,
                            cookieSettings: {  
                                // Path for the cookie to be saved on  
                                // Should be root domain in most cases  
                                path: '/',  
                                // Expiration Date (in seconds)  
                                // 0 (default) means it ends with the current session  
                                // expires: 86400\t\t// 1day
                                expires: 1\t\t// 1hour
                            }
                        }); // Customized Browsers  
                        
                    }else {
                        console.log('fail.... i do not know');
                    }
                }
            },
            error: function(response, textStatus, errorThrown) {
                console.log('response : ' + response);
            }
        });
    }
    
    function saveRememberLogin(el)
    {
        var chk_val = 'off';
        var redirect = '<? if ($redirect==null || $redirect==""): ?><? else: ?><?= $redirect ?><? endif; ?>';
        
        jQuery.ajax({
            url: "/LoginProc/saveRememberLogin",
            global: false,
            type: "POST",
            data: {login_remember: chk_val, login_redirect: redirect},
            dataType: "json",
            async: true,
            success: function(data) {
                console.log(data);
                if (data.result == 'ok') {
                    if ($(el).data('facebook') == '1') {
                        logInWithFacebook();
                    } else {
                        window.location.href = $(el).data('url');
                    }
                }
            },
            error: function(response, textStatus, errorThrown) {
                console.log('response : ' + response);
            }
        });
    }
    
    function hideLoginIdMsg() {
        $('#login_fail_id').addClass('hidden');
    }
    
    function hideLoginPwdMsg() {
        $('#login_fail_pwd').addClass('hidden');
    }

    $('#psw_find_modal').on('shown.bs.modal', function () {
        setTimeout(function() {
            $('#pw_find_login_id', $('#pwdFindForm')).focus();
        }, 700);
    });

    $('.btn-ex-login').unbind('click').click(function() {
        if ($(this).data('facebook') == "0"){
            $('.google_modal_btn').removeClass('hidden');
            $('.fb_modal_btn').addClass('hidden');
            $('#google_fb_modal').modal('show');
        }else{
            $('.google_modal_btn').addClass('hidden');
            $('.fb_modal_btn').removeClass('hidden');
            $('#fb_modal').modal('show');
        }  
        
    });
    $('#google_fb_modal .login-api').unbind('click').click(function(){
        saveRememberLogin($(this));
    })

jQuery(function($){
    
    // 브라우저 호환 점검
    $.reject({  
        // reject: { all: true },\t// Test 용
        reject: {  
            // safari: true, // Apple Safari  
            msie: true,\t// Covers MSIE <= 6 (Blocked by default)
            firefox: true, // Mozilla Firefox  
            opera: true, // Opera  
            konqueror: true, // Konqueror (Linux) 
            unknown: true // Everything else  
        },
        display: ['chrome'], // Displays only chrome, IE
        header: '<div style="line-height: 1.5;">클래스카드는 빠르고 보안이 강력한 <span class="text-success">구글 크롬</span> 브라우저에 최적화 되어 있습니다.</div>', // Header Text  
        paragraph1: '', // Paragraph 1  
        paragraph2: '',  
        closeMessage: '<div style="font-size: 1.3em"><div>또 MS가 지원중단한 IE를 이용하지 않기를 권고 드립니다. 클래스카드는 IE에서 <span class="text-danger">일부 기능이 동작하지 않고 학습 정보가 저장되지 않을 수 있습니다.</span></div><div class="text-center"><img class="w-150" src="/images/main/img_block_ie_01.png" /></div></div>', // Message below close window link  
        closeLink: '<div class="text-center" style="margin-top: -20px;"><span class="bottom btn btn-info btn-lg mw-180">확인</span></div>',
        close: true,
        closeESC: true,
        closeCookie: true,
        cookieSettings: {  
            // Path for the cookie to be saved on  
            // Should be root domain in most cases  
            path: '/',  
            // Expiration Date (in seconds)  
            // 0 (default) means it ends with the current session  
            // expires: 86400\t\t// 1day
            expires: 1\t\t// 1hour
        }
    }); // Customized Browsers  

    
    if (!$.browser.msie) {
        if (rem_id !== undefined && rem_id != null && rem_id != '') {
            $('#login_pwd').focus();
        } else {
            $('#login_id').focus();
        }
    }

<?
    if (isset($deviceType) && $deviceType == 'phone') :
        if (isset($_SESSION['rfr']) == TRUE) {
            $utm_source = $_SESSION['rfr'];
        } else {
            $utm_source = 'cta_android';
        }

        if ($is_android==1):
            $r_val = "utm_source=". $utm_source ."&utm_medium=web&utm_campaign=appdownload";
            $r_val = urlencode($r_val);
            $r_url = "https://play.google.com/store/apps/details?id=classcard.net&referrer=".$r_val;
        else:
            $r_val = "utm_source=cta_android&utm_medium=web&utm_campaign=appdownload";
            $enc_r_val = base64_encode($r_val);
            $r_url = "https://itunes.apple.com/kr/app/id1176435331?mt=8";
        endif;
?>
        showConfirm('스마트폰에서는 클래스카드 앱 이용을 권장합니다.', null, function() { document.location.href = '<?= $r_url ?>'; }, null, null, null, '앱 설치하러 가기', '계속하기');

<?
    elseif (isset($deviceType) && $deviceType == 'tablet') :
?>
        if ($.cookie('tb_noti') == undefined || eval($.cookie('tb_noti')) != 1) {
            showConfirm('태블릿에서는 외장 키보드를 함께 이용하거나, 스크린 키보드를 잘 설정하여 이용해 주세요.', null, function() { document.location.href = 'https://cafe.naver.com/classcardhakwon/6012'; }, null, null, null, '자세히 보기', '계속하기', null, null, null, null, 'tb_noti');
        }
<?
    endif;
?>

});
</script>`;
