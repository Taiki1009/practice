const Characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const characters = [
  {id: 1, name: "にんじゃわんこ", age: 6},
  {id: 2, name: "ベイビーわんこ", age: 2},
  {id: 3, name: "ひつじ仙人", age: 100},
  {id: 4, name: "とりずきん", age: 21}
];
const names = [
  {firstName: "Kate", lastName: "Jones"},
  {firstName: "John", lastName: "Smith"},
  {firstName: "Denis", lastName: "Williams"},
  {firstName: "David", lastName: "Black"}
];

//  ------------------------------------------------------

// 配列の要素を追加
Characters.push("とりずきん");
// Characters = ["にんじゃわんこ", "ベイビーわんこ", "ひつじ仙人","とりずきん"]
console.log(Characters);


// 配列をすべて1つずつ表示
characters.forEach((character)=>{
  console.log(character);
});




// findメソッド: 指定した条件の要素を見つけ、最初の1つを表示
// 配列numbersから3の倍数を見つける
const foundNumber = numbers.find((number)=>{
  return number % 3 === 0;
});
console.log(foundNumber);

// charactersからidが3のオブジェクトを見つける
const foundCharacter = characters.find((character)=>{
  return character.id===3;
});
console.log(foundCharacter);




// filterメソッド: 指定した条件の要素を見つけ、すべて表示
// numbersから偶数を見つける
const evenNumbers = numbers.filter((number)=>{
  return number % 2 === 0;
});
console.log(evenNumbers);

// charactersから20歳未満を見つける
const underTwenty = characters.filter((character)=> {
  return character.age < 20;
});
console.log(underTwenty);




// mapメソッド: 配列numbersの要素全てに処理をかけ、新しい配列として表示
// numbersに2をかける
const doubledNumbers = numbers.map((number)=>{
  return number*2;
});
console.log(doubledNumbers);

// firstNameとlastNameを結合する
const fullNames = names.map((name)=>{
  return name.firstName + name.lastName;
});
console.log(fullNames);
