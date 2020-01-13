基本構文

$('セレクタ').fadeOut(mili-second);

    // セレクタ　＝　[id: #name, class: .name];


イベント

$('イベントセレクタ').イベント名(function(){
    $('セレクタ').Animetion();
    $('セレクタ').css('プロパティ','値');
    $('セレクタ').html('タグ');
    $('this').css('','')     //親要素のイベントセレクタがthisに代入

});


$(function() {
    $('#find-method').click(function() {
      // findメソッドで、「#wrapper」内にあるすべての「a」要素を取得し、
      $('#wrapper').find('a').css('color','red');
    });
    
    $('#children-method').click(function() {
      // childrenメソッドで、「#wrapper」の一階層下にある「a」要素を取得し、
      $('#wrapper').children('a').fadeOut();
    });

});

// hover: hover時と解除時の２つの関数をかく
$('#language-wrapper').hover(
    function(){
      $('.language-text').fadeIn();
    },
    function(){
      $('.language-text').fadeOut();

    }
);


