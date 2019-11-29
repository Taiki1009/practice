let fizzbuzz = function(num){
  if(num % 3 === 0 && num % 5 === 0){
    return 'FizzBuzz';
  }else if(num % 3 === 0){
    return 'Fizz';
  }else if(num % 5 === 0){
    return 'Buzz';
  }else{
    return num;
  }
}
for(let i= 1;i <= 30; i++){
  console.log(fizzbuzz(i));
}

let todo =['あ','い','う','え','お'];
//push: 配列に追加
todo.push('か');
for(let j=0;j<todo.length;j++){
  let li = document.createElement('li');
  li.textContent = todo[j];
  document.getElementById('list').appendChild(li);
  console.log(todo[j]);
}