// コンソール出力
//実行：  node <filename>   (in powershell)
console.log('Hello World');

//ダイアログ
window.alert('Love You');

//現在時刻
console.log(document.getElementById('choice'));
document.getElementById('choice').textContent = new Date();
console.log(document.getElementById('choice').textContent);
console.log(new Date());

//   OK or CANSEL
console.log(window.confirm('ゲームスタート！準備はいい？'));
      
if(window.confirm('Are You Ready?')){
  window.alert("Let's start!")
}else{
  window.alert('See You Later')
};

//   input text
let answer = window.prompt('Can you help me? \n  yes/no');
if(answer === 'yes'){
  window.alert('Fight!');
}else if(answeer === no){
  window.alert('You can do it!');
}else{
  window.alert('yes/no');
}