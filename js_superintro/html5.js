let enemy = 100;
let attack;
let count = 0;

window.alert('戦闘スタート');
while(enemy > 0){
  attack = Math.floor(Math.random()*30)+1;
  console.log('モンスターに'+ attack + 'のダメージ');
  enemy -= attack;
  count++ ;
}

console.log(count + '回でモンスターを倒した！');