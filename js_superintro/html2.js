//html内で <script src="script.js"></script> を
// <body>内に入力して使用

//floor: randomの数を整数に整える
let number = Math.floor(Math.random()*6);
//parseInt: 入力された文字列を整数表示にする
let answer = parseInt(window.prompt('数当てゲーム。０～５の数字を入力してね'));
let message;
if(answer === number){
  message = 'あたり！';
  }else if(answer < number){
    message = '残念でした！もっと大きい';
  }else if(answer > number){
    message = '残念でした！もっと小さい';
  }else{
    message = '０～５の数字を入れてね';
}
window.alert(message);