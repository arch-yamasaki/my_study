辞書のリストをDataFrameに。

```py

# djangoのDBをdumpしてjsonとかにすると、filedに辞書のリストになる。
dict_list = [{"a": 10, "b":100, "c":1000}, {"a": 10, "b":20, "c":30}]
pd.Dataframe.from_records(dict_list)
```