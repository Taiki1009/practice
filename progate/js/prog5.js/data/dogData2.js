// readline-syncをインポートしてください
import readlineSync from "readline-sync";

import Dog from "../class/dog";

const dog1 = new Dog("レオ", 4, "チワワ");


// コンソール内に質問を表示し、その後の入力値を取得
// 取得するデータ型も指定可能
const name = readlineSync.question("名前を入力してください: ");
const age = readlineSync.questionInt("年齢を入力してください: ");
const breed = readlineSync.question("犬種を入力してください: ");

const dog2 = new Dog(name, age, breed);

export { dog1, dog2 };
