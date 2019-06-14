## 日本語化
---

```py
# キャッシュ
import matplotlib
matplotlib.font_manager._rebuild()
```

フォントの設定。
```py
# フォントの設定。
font = {"family":"Noto Sans CJK JP"}
mpl.rc('font', **font)
```
以下でも代用可能。
```py
mpl.matplotlib_fname()
# 上記のpathにmatplotlibrcを作成して以下を記載。
# font.family : IPAexMincho
```

## Dataframe.plot
---
[Pandasのplotの全引数を解説](http://own-search-and-study.xyz/2016/08/03/pandas%E3%81%AEplot%E3%81%AE%E5%85%A8%E5%BC%95%E6%95%B0%E3%82%92%E4%BD%BF%E3%81%84%E3%81%93%E3%81%AA%E3%81%99/)