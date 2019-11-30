let addZero = function(num,digit){
  //'0'+'1'のように文字列で連結する→numString:入力された数をStringにする
  let numString = String(num);
  while(numString.length < digit){
    numString = '0' + numString;
  }
  return numString;
}
//console.log(addZero(1,2));

let songs = [
  'song1','song2','song3','song4','song5',
  'song6','song7','song8','song9','song10'
];

for(let i=0;i<songs.length;i++){
  let paragraph = document.createElement('p');
  paragraph.textContent = addZero(i + 1,2) + '.' + songs[i];
  document.getElementById('list').appendChild(paragraph);
};