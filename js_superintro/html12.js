//onchange: 入力内容やプルダウンの項目が変更になるとイベント発生
//プルダウンでのonchangeイベントは<select>に発生する
document.getElementById('form').select.onchange = function(){
  //location: URLの表示＝URLへ移行
  location.href = document.getElementById('form').select.value;
}