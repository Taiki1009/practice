for(let i =1; i <= 10; i++){
  console.log(i + "枚");
} 


const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for(const n of numbers){
  sum += n;
}
console.log(sum);


const data = '1,2,3,4,5';
let sum2 = 0;
for(const n of data.split(',')){
  sum2 += Number.parseInt(n);
}
console.log(sum2);

//参照  https://note.com/erukiti/n/n8709d49efbef