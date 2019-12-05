// chalk: (ライブラリ)指定のコンソールに色付け
import chalk from "chalk";
import Animal from "./animal";

class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age);
    this.breed = breed;
  }

  info() {
    this.greet();
    // 文字色やバックグランド指定
    console.log(chalk.yellow(`名前は${this.name}です`));
    console.log(chalk.bgCyan(`犬種は${this.breed}です`));
    console.log(`${this.age}歳です`);
    const humanAge = this.getHumanAge();
    console.log(`人間年齢で${humanAge}歳です`);
  }

  getHumanAge() {
    return this.age * 7;
  }
}

export default Dog;