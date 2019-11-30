let now = new Date();
let year = now.getFullYear();
let month = now.getMonth();
let date = now.getDate();
let hour = now.getHours();
let min = now.getMinutes();

let ampm = '';
if(hour < 12){
  ampm = 'a.m.';
}else{
  ampm = 'p.m.';
}


let output = year + '/' + (month + 1) + '/' + date + ' ' + (hour % 12) + ':' + min + ' ' + ampm;
document.getElementById('time').textContent = output;





//フォーム入力
document.getElementById('form').onsubmit = function(){
  // console.log('クリックされました。');
  let search = document.getElementById('form').word.value;
  document.getElementById('output').textContent = '「' + search + '」の検索中…';
  return false;
};