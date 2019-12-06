const printWanko = () => {
  console.log("にんじゃわんこ");
};


// 引数callbackに関数名を代入して、その関数を呼び出す
const call = (callback) => {
  console.log("コールバック関数を呼び出します。");
  callback();
};
call(printWanko);       // printWanko()と同じ出力  

// 呼び出す関数の定義を省略した形
call(()=>{
  console.log("ひつじ仙人");
});




// 引数に代入する値をここで定義する
const Ncall = (callback) => {
  callback("にんじゃわんこ", 14);
};

// この中で呼び出す関数/引数の型を定義をする
Ncall((name,age) => {
  console.log(`${name}は${age}歳です。`);
});
