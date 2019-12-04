// Dogクラスはオーバーライドしたいので
// 親クラスのAnimalをインポートしなければいけない
import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`犬種は${this.breed}です`);
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}
// 他のファイルでインポートする際に、{指定がない、名前が間違い}の場合
// defaultのモジュールが利用される
export default Dog;