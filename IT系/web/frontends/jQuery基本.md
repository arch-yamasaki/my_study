## jQuery基本
### jQueryのインストールは以下。
'\<head>'タグ以下に記載する

```html
<head>
<!-- ... -->
 <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
<!--versionは最適なものを参照-->
</head>

```

### コードを書く場所
scriptを実際に書く場所について
- headタグ内
- jQuery本体のコードの後
- css読み込みのあと
  jsは毎回読み込むので、cssをjsの後に記載するとcssも毎回読み込むことになり、ページの表示速度遅くなる。

```html
<head>
  <!--...-->
  <link rel="stylesheet" href="style.css" /> <!--先にcss読み込む-->
  <script type="text/javascript" src="ライブラリをアップロードした場所/jquery-1.8.2.min.js"></script>
  <script type="text/javascript" src="script.js"></script>
  <!--...-->
</head>
```

### jqueryの基本概念
jQueryは、
「指定したセレクタAの要素に」「 Bというメソッドを行う」
という処理をするライブラリ。

```js
// jqueryの関数の基本形
// "A"はセレクタ、"B"はメソッド
// $ = JQuery、というクラスなのでおまじない。
$(function(){
  $("A").B()
});
```
- $(“#hoge”) : idセレクタ
- $(“.hogehoge”) : クラスセレクタ
- $(“li a”) : 子孫セレクタ
- $(“p.hoge, p.hogehoge”) : グループセレクタ

セレクタは「“」「’」で囲む。
メソッドはチェーンできる。(`$("A").B().C()`)

以下、具体例
``` html
<div class="hoge1">
このテキストは青くなりますこのテキストは青くなりますこのテキストは青くなりますこのテキストは青くなりますこのテキストは青くなりますこのテキストは
</div>
```

```js
$(function(){
  $(".hoge1").css("color", "blue")
});
```

### イベント
```js
// AセレクタをB(イベントメソッド)した時に、CセレクタをDする。
$(function(){
  $("A").B(function{
    $("C").D()
  });
});
```
- .click()（セレクタをクリックした時に実行)
- mouseover()（セレクタにマウスを当てた時に実行)
- .on_load()
- etc...

具体例
```html
<div class="hoge2A">クリックすると緑色になります</div
```
```js
//サンプル2A
$(function(){
    $(".hoge2A").click(function(){
        $(this).css("background-color","green")
    });
});
```
`$(this)`はイベントと同じセレクタを使用することを明示している。