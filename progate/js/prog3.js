const number1 = 103;
const number2 = 720;
const number3 = 189;

// function(a,b,c) を省略して、 (a,b,c)=> だけで良い
const getMax = (a, b, c)=>{
  let max = a;
  
  if(b > max){
    max = b;
  }else if(c > max){
    max = c;
  }else{} // 何もしたくない場合はスルー
  
  return max;
}

// シングルクォーテーションではなく、バッククォーテーション(Shift + @)

let max = getMax(number1, number2, number3);
console.log(`最大値は${max}です`);
