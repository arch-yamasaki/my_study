### 配列
```rb
# 配列の宣言
arr_var = []
arr_var = Array.new
arr_var = [1, "piyo", nil, nil]
arr_ints = [10 ,20 ,30]
range = 5..10

# 配列への宣言
arr_var[2]
# => piyo

# fetchは第2引数指定により、配列がない場合default値を返す。
arr_var.fetch(1)
# => 1
pry(main)> arr_var[10000]
# => nil
arr_var.fetch(10000, 0)
# => 0

# length, sort, append
arr_var.length
# => 4
arr_ints.sort
arr_ints << 100
# [10 ,20 ,30, 100]
```

### 繰り返し (for というか do end AND each)

```rb
# for記法
for num in 5..10 do
  print("num = ", num)
end

# eachはイテレータ返す。よく使われる記法。
# pythonと逆感ある。
# do end構文か、{}で囲むか、の二通り。
arr_var.each do |val|
  puts "value: #{val}"
end

(18..20).each{|num|
  print("num = ", num, "¥n")
}

```
### if
二個以上の分岐の場合に毎回のthen・else if でなく elsif・最後のendに注意
```rb
if city == "Tokyo" then
  print("東京です")
elsif city == "Osaka" then
  print("大阪です")
elsif city == "Nagoya" then
  print("名古屋です")
else
  print("その他の都市です")
end

# 論理演算子は || と &&
carrier_b = 10
commuting_time_b = 0.5
if carrier_b > 3 && commuting_time_b > 1.5
    puts "通勤手当対象者です。"
    # 通勤手当処理に続く
else
    puts "対象外です。"
end

# nil判定
member = { "name" => "tanaka", "age" => "25" }
if member["birth"].nil?
    puts "誕生日に関するデータは存在しません。"
end

# 三項演算子。(jsと同じ)
age = 23
result_b = age < 20 ? "未成年" : "大人"
```