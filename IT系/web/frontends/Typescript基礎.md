## 概要
javascriptのラッパー。コンパイルするとjavascriptになる。
- 静的型付け(しなくてもいい、がしたほうがいい。)
- classが簡単にかける。
- etc...
- 変数宣言


```ts
<!--よくある変数宣言-->
var a : number
a = 100;

<!--let もvarも変数の宣言だが、ifとかのネスト内で参照が変わる。-->
<!--みんなjsにひきづられてvarを使うが、ほぼ全てletでもいいっぽい(?)-->
let b : string = "name";

<!--配列-->
let array1 : Array<number> = [1,2,3,4,5];
var array2 : string[] = Array(3)
array[0] = "abc";
array[1] = "cde";
array[2] = "efg";

<!--連想配列(辞書,ハッシュ)-->
<!--実は配列宣言いらないが、してもいい-->
var dict = {weight: 0.5, mode:"web"}
var dict = {"alpha 1": 0, "mode":"web"}
```

- 条件分岐
  - if(条件式){} ... else{}
  - switch(変数){case 条件式1: ...; case 条件式2}
  - ?演算子
式の値が0であればfalseとみなされ、0以外であればtrueと見なされる。
```ts
var h: number, d: Date;
d = new Date();  // （1）
h = d.getHours();  // （2）
if (h < 12) {
  c = "skyblue";
} else {
  c = "lightyellow";
}

var discount: number;   // 割引金額
var price: number = 1000;       // 1000円の商品
var rank: string = "gold";      // 顧客ランク（goldランクとする）
// goldなら2割引、それ以外なら1割引
discount = (rank == "gold" ? price * 0.2 : price * 0.1);        // （1）
alert(discount);
```

- 関数
```ts
function add (x:number, y:number): number {
  return x + y;
}
var add = function (x:number, y:number): number {
  return x + y;
}
var add = (x:number, y:number): number => {
  return x + y;
}

<!--opsion引数。?はあってもなくてもいい。-->
function calcCost(price: number, amount: number, discount?: number): number { // （1）
  if (discount) {  // （2）
    return price * amount * (1 - discount); // （3） 
  } else {
    return price * amount;   // （4）
  }
}
alert(calcCost(1200, 10));   // （5）
```

- クラス定義
  - constructor < \_\_init\_\_
  - functionいらない。python見たくselfいらない。
  - 継承はextendsを使用。
  - ジェネリックスも使用可能(<T>みたいなやつ。)
```ts
class Cat{
    public length: number;
    public weight: number;
    private name: string;

    <!--コンストラクタ(__init__みたいなもん)-->
    constructor(name: string) {
      this.name = name.slice(0, 8);
    }

    getName(): string{
        return this.name;
    }

    public eat(pl_length: number, pl_weight: number) {
        this.length += pl_length;
        this.weight += pl_weight;
    }

    public meow(): string {
      return "にゃーん";
    }
}

class Tiger extends Cat{
    public meow(): string{
        return "がおー"
    }
}


var taro = new Tiger("taro");
taro.length = 100
taro.weight = 1.5
taro.eat(10, 0.5)
alert([taro.getName(), taro.length, taro.weight, taro.meow()])
window.close()

```

- ジェネリックス
データ型を仮に決めておき、実際に使用するデータ型を呼び出し時に変えられるようにする機能で、総称型とも呼ばれる。引数がどんな型でも同じような作業をする時に使用。(辞書でも配列でもいいような処理とかに使われる??)
```ts
<!--今回はTが仮のデータ型。なんでもいい。-->
function parrot<T>(data: T): T {  // （1）
  var ret: T; // （2）
  ret = data;
  return ret;
}
alert(parrot<number>(100)); // （3）
alert(parrot<string>("hello")); // （3）
window.close();
```