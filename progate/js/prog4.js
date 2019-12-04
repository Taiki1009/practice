class Animal {
  // constructorはクラスからインスタンスが作成されるとすぐに実行される
  constructor(name, age) {
    // thisを使って引数をクラス内に登録する
    this.name = name;
    this.age = age;
  }
  
  greet() {
    console.log("こんにちは");
  }
  
  info() {
    // クラス内で定義したメソッドは、別のメソッドでも利用できる
    this.greet();
    console.log(`名前は${this.name}です`);
    console.log(`${this.age}歳です`);
  }
}

// オーバーライドすると親クラスのメソッドも利用できる
class Dog extends Animal {
  // constructorをオーバーライドする場合は
  // メソッド内にsuper()で親クラスの引数を呼び出す
  constructor(name,age,breed){
    super(name,age);
    // superの後に、追加するプロパティを入力
    this.breed = breed;
  }
  
  info() {
    // オーバーライドする場合、メソッドの中身は空になるので1から書く
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

const dog = new Dog("レオ", 4, "チワワ");
dog.info();

