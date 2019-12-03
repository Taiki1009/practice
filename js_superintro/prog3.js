const number1 = 103;
const number2 = 720;
const number3 = 189;

// getMax関数を定義してください
const getMax = (a, b, c)=>{
  let max = a;
  
  if(b>max){
    max = b;
  }else if(c>max){
    max = c;
  }else{
  }
  
  return max;
}

// 「最大値は○○です」と出力してください
// シングルクォーテーションではなく、バッククォーテーション(Shift + @)

let max = getMax(number1, number2, number3);
console.log(`最大値は${max}です`);
