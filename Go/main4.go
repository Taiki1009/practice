package main

import "fmt"

//戻り値で変数を返すと関数間で同名の関数(別物)ができ、値は共有されない

// スコアをask関数で計算→mainでtotalScore(座標)を表示
// mainでScoreを定義→Scoreのポインタをaskへ→askの結果(スコア)を座標に入れる
func main() {
	totalScore := 0
	ask(1, "dog", &totalScore)
	ask(2, "cat", &totalScore)
	ask(3, "fish", &totalScore)

	fmt.Println("スコア", totalScore)
}

func ask(number int, question string, scorePtr *int) {
	var input string
	fmt.Printf("[質問%d] 次の単語を入力してください: %s\n", number, question)
	fmt.Scan(&input)

	if question == input {
		fmt.Println("正解!")
		*scorePtr += 10

	} else {
		fmt.Println("不正解!")
	}
}
