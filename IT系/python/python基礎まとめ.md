面白そうなライブラリ
pandas_profiling
keras-viz
recurrent_shop
[言語解析100本のっく](http://www.cl.ecei.tohoku.ac.jp/nlp100/)

# 関連URL
[Python3で色々する時の個人的Tips(リンク集)](https://qiita.com/KoheiKanagu/items/477ed2faa585d875ea53)

---
# iterate

```py
list = ["hoge", "huga", "poti"]

# 基本
for i in range(5):

for i, v in enumrate(list):

for (i, v) in zip(range(3),list):

# 辞書
dict = #何か辞書
for key in dict:

for key, value in dict.items():

for value in dict.values():

```

---
# list


---
# numpy


---
# juputer ショートカットまとめ
[Jupyterのショートカットキー一覧を調べてみた](https://qiita.com/masafumi_miya/items/6524dbd227705351a00c)
[Jupyter Notebookをより便利に使うために、色々まとめ](https://qiita.com/ishizakiiii/items/b98bbf8997f039f40058)

---
# pandas

---
# matplotlib,seaborn可視化
とりあえずjupyter使うならこれ。
`%matplotlib inline`

よく使うやつ。
データはkaggleのsales price prediction を使用。

```python 
df_train = pd.read_csv("./train.csv")
# ヒストグラム。連続変数に使える。
var='SalePrice'
plt.figure(figsize=(16,8)) #figsize調整
plt.hist( df_train[var],bins=50,rwidth=0.8)

# 棒グラフ。離散変数に使える。
sns.countplot(x = "Neighborhood",data=df_train)

# 箱ひげ図(kind="box")。離散値と連続値の相関が見れる。
sns.factorplot(x = "Neighborhood",y="SalePrice",data=df_train,aspect=3,kind="box")

# 分布図。連続値と連続値の相関をみれる。snsだと相関係数も出る。
sns.jointplot("SalePrice", "TotalBsmtSF", data=df_train)



```