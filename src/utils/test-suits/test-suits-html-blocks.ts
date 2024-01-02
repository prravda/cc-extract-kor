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
};

export const hugeHtmlBlock = `<?php
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
