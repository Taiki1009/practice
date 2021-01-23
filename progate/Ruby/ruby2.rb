def buy(item:, price:, count:)
    total_price = price * count
    puts "-----------------------------------"
	puts "#{item}を#{count}台のお買い上げです"
    puts "商品の合計金額は#{total_price}円です"
    puts "お支払い金額は、送料込みで#{price_with_shopping(total_price)}円です"
end

buy(price: 15000,item: "テレビ",count: 3)