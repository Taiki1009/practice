//  jQueryの読み込み: <head>内で読み込み、<body>の最下部でstylesheetを読みこむ
//  https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js


    モーダル
 
/*    //index.html
<div class="login" id="login-show">ログイン</div>

<div class="signup-modal-wrapper" id="signup-modal">
    <div class="modal">
      <div class="close-modal">
        <i class="fa fa-2x fa-times"></i>
      </div>
      <div id="signup-form">
        <h2>Emailで新規登録</h2>
        <form action="#">
          <input class="form-control" type="text" placeholder="メールアドレス">
          <input class="form-control" type="password" placeholder="パスワード">
          <div id="submit-btn">新規登録</div>
        </form>
      </div>
    </div>
</div>
*/
// .signup-modal-wrapper　は display: none; の状態

//  script.css
$(function() {
    $('#login-show').click(function() {
      $('#login-modal').fadeIn();
    });
    
    $('.signup-show').click(function() {
      $('#signup-modal').fadeIn();
    });
    
    $('.close-modal').click(function() {
      $('#login-modal').fadeOut();
      $('#signup-modal').fadeOut();
    });
});
// ログインボタンをクリック→モーダル表示
// iタグ（×印）をクリック→モーダル非表示

  


    アコーディオン
$('.faq-list-item').click(function() {
    var $answer = $(this).find('.answer');

    if($answer.hasClass('open')) { 
        $answer.removeClass('open');
        $answer.slideUp();
        $(this).children('span').text('+');
                
    } else {
      　$answer.addClass('open'); 
      　$answer.slideDown();
        $(this).children('span').text('-');              
    }
});

// FAQをクリック→セレクトリにopenクラスがあるか確認
// open（アンサーが表示されている）：　openを削除、スライドを隠す、右端を＋にする
// non-open（クエスチョンのみ） 　：　openクラスを追加、スライド表示、右端を-にする
