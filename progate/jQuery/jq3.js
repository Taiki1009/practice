
// スライド
$(function() {

    //  next-btn , prev-btn
    function toggleChangeBtn() {
        // activクラスのスライドのインデックスを取得
        var slideIndex = $('.slide').index($('.active'));
        // ボタンの再読み込み
        $('.change-btn').show();
        // 始めの画像と最後の画像でprevとnextを非表示
        if (slideIndex == 0) {
        $('.prev-btn').hide();
        } else if (slideIndex == $('.slide').length-1) {
        $('.next-btn').hide();
        }
    }
    
    //  indexの変更
    $('.index-btn').click(function() {
        // 変更前画像のactive取り消し
        $('.active').removeClass('active');
        // 変更後画像のindex取得
        var clickedIndex = $('.index-btn').index($(this));
        // 変更後画像active追加
        $('.slide').eq(clickedIndex).addClass('active');
        toggleChangeBtn();
    });

    // 画像スライド
    $('.change-btn').click(function() {
        // activeのスライド取得
        var $displaySlide = $('.active');
        // activeクラスを取り消し
        $displaySlide.removeClass('active');
        // 画像をスライド
        if ($(this).hasClass('next-btn')) {
        $displaySlide.next().addClass('active');
        } else {
        $displaySlide.prev().addClass('active');
        }
        toggleChangeBtn();
    });
});



//  フォーム
$(function() {
    //  フォームの取得、表示
    $('#form').submit(function() {
        // 選択、テキストフォームの値取得
        var selectItem = $('#select-form').val();
        var textItem = $('#text-form').val();
        // テキストフォーム未入力時
        if (textItem == '') {
        $('#error-message').text('理由を記入してください');
        } else {
        $('#error-message').text('');
        }
        // 取得値を結果フォームに表示
        $('#output-select').text(selectItem);
        $('#output-text').text(textItem);
        // リセット
        return false;
    });

    // ボタン投票
    $('.option-btn').click(function() {
        // 選択ボタンのテキスト、番号取得
        var optionText = $(this).text();
        var clickedOption = $(this).attr('data-option');
        // 結果フォームに表示
        $('#text-form').val(optionText + 'が好きな理由は、');
        $('#select-form').val(clickedOption);
    });
});






// topへ移動
$('#top-btn').click(function(){
    $('html,body').scrollTop(0);
});

// scrollでtopへ移動
$('#top-btn').click(function(){
    $('html, body').animate({
        'scrollTop':0
    },'slow');
});


//  headerのaタグからページ内リンク
$('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    
    $('html,body').animate({
      'scrollTop' : position
    },500)
});
