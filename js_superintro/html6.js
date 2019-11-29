let total = function(price){
  let tax = 0.08;
  return price + price * tax;
}

//html内に<p id='output'></p>を入力して使用

document.getElementById('output').textContent = 'コーヒーメーカーの値段は' + total(Number(prompt('税込表示にしたい値段を入力してね'))) + '円(税込)です';

console.log(document.getElementById('output').textContent);