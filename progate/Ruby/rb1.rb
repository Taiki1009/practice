# lesson1
number = 60

if number % 3 == 0 && number % 5 == 0
    puts "15の倍数です"
    
    elsif number % 5 == 0
    puts "5の倍数です"
    
    elsif number % 3 == 0
    puts "3の倍数です"
    
    else
    puts "3の倍数でも5の倍数でもありません"
end


# lesson2
characters = [
    {name: "にんじゃわんこ", age: 14},
    {name: "ひつじ仙人"},
    {name: "ベイビーわんこ", age: 5},
    {name: "とりずきん"}
]

characters.each do |character|
    puts "--------------------"
    puts "名前は#{character[:name]}です"
    
    # キー:ageの値に応じて年齢の情報を出力してください
    if character[:age]
        puts "年齢は#{character[:age]}歳です"
    else
        puts "年齢は秘密です"
    end
    
end


# lesson3
def price_with_shopping(price)
	if price >= 50000
	    return price
	end
	return price + 1000
end
def buy(item:, price:, count:)
    total_price = price * count
    puts "-----------------------------------"
	puts "#{item}を#{count}台のお買い上げです"
    puts "商品の合計金額は#{total_price}円です"
    puts "お支払い金額は、送料込みで#{price_with_shopping(total_price)}円です"
end

buy(price: 15000,item: "テレビ",count: 3)