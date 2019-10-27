package main

import "fmt"

// スコアをask関数で計算→戻り値をmainで合計して表示
// ask関数ごとにスコアを出して返す(戻り値は0,10)→main関数で合計
func main() {
	totalScore := ask(1, "dog")
	totalScore += ask(2, "cat")
	totalScore += ask(3, "fish")

	fmt.Println("スコア", totalScore)
}

func ask(number int, question string) int/*戻り値の型*/ {
	var input string
	fmt.Printf("[質問%d] 次の単語を入力してください: %s\n", number, question)
	fmt.Scan(&input)

	if question == input {
	    fmt.Println("正解!")
	    return 10
			} else {
	    fmt.Println("不正解!")
	    return 0
	}
}
