let countdown = function(due){
  let now = new Date();

  //現在時刻との差
  let rest = due.getTime() - now.getTime();

  let sec = Math.floor(rest / 1000 % 60);
  let min = Math.floor(rest / 1000 % 60) / 60;
  let hours =  Math.floor(rest / 1000 % 60 % 60) / 24;
  let days =  Math.floor(rest / 1000 / 60 / 60 / 24);

  let count = [days, hours, min, sec];
  return count;
}

//同日の23時59分59秒までの時間
let goal = new Date();
//取得した現在時刻の[時間, 分, 秒]を指定
goal.setHours(23);
goal.setMinutes(59);
goal.setSeconds(59);
//同日23時59分59秒の時間データをcountdown関数に入力
console.log(countdown(goal));

/*
//Id=timer の箇所に残り時間を表示する
let counter = countdown(goal);
let time = counter[1] + '時間' + counter[2] + '分' + counter[3] + '秒';
document.getElementById('timer').textContent = time;
*/

//残り時間の表示を関数化
let recalc = function(){
  let counter = countdown(goal);
  let time = counter[1] + '時間' + counter[2] + '分' + counter[3] + '秒';
  document.getElementById('timer').textContent = time;
  refresh();
}
//1秒ごとに再表示
let refresh = function(){
  setTimeout(recalc, 1000);
}
recalc();