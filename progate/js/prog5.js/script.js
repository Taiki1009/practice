　// importすることで、他のファイルで定義したモジュールを利用できる
// ここでは、dog1とdog2 を ./data/dogData からインポートしている
import { dog1, dog2 } from "./data/dogData";

console.log("---------");
dog1.info();
console.log("---------");
dog2.info();