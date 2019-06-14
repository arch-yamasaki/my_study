CSSで適用要素を決定したり、クローリングする際に必要。

```html
<div id="headline">
  <h1>CSS入門</h1>
  <p>これは段落です<p>
</div>

<div class="main">
  <h2> 見出し <h2>
  <p> <span class="light">内容について</span>です</p>
  <div class="contents">
    <p> 内容1 </p>
    <p> 内容2 </p>
    <p> 内容3 </p>
  </div>

<div id="items">
  <div class= "item item1">
    <a href="url1"> item1のリンクです<a>
  </div>

  <div class= "item item2">
      <a href="url1"> item1のリンクです<a>
  </div>

</div>

</div>

```

- タグ : タグ
`p {}`
- id : #id
`#headline`
- class : .class
`div.main`
- 複数クラス: A.B
`div.item.item2`
- 子孫クラス(あるタグ以下全て) : A B C (スペース)
`div.main p`
- 子要素のみ探す : A > B > C
`.main > p`
- 最初の要素だけ : A:first
- 子要素のn番目を取り出す nth-child(n)
`.main div.contents p:nth-child(3)  #= > 内容2`