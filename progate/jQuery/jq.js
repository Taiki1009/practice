    基本構文

$('セレクタ').fadeOut(mili-second);
  // セレクタの書き方　＝　[id: #name, class: .name];




    イベント

$('イベントセレクタ').イベント名(function(){
    $('セレクタ').Animetion();
    $('セレクタ').html('タグ');        //セレクタのタグを変更
    $(this).css('プロパティ','値');    //親要素のイベントセレクタがthisに代入

});

// findメソッドで、セレクタ内にあるすべての「a」要素を取得
// childrenメソッドなら、直下の子要素のみ取得できる
$(function() {
    $('イベントセレクタ').click(function() {
      $('セレクタ').find('a').css('color','red');
    });
});

// hover: hover時と解除時の２つの関数をかく
$('イベントセレクタ').hover(
    function(){
      $('.language-text').fadeIn();
    },
    function(){
      $('.language-text').fadeOut();

    }
);


