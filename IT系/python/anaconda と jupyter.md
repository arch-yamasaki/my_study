## jupyterのkernel変更
ju@yterにカーネルを入れるやり方。
sa labして環境に入って実行。

```bash
python -m ipykernel install --user --name=ENV --display-name=DISPLAY-NAME
```

* `--name=ENV`
  * ENV には設定ファイルを保存するディレクトリ名を入れる
  * 既に同一のディレクトリが存在する場合上書きされてしまうので注意
  * 保存先ディレクトリのパスは, 後述
* `--display=name=DISPLAY`
  * jupyter notebook 上で表示するカーネルの名前を入れる

## conda の環境をcopyする方法
仮想環境の外からかな？
```
# 環境保存
conda list --explicit > env_name.txt
# 環境再構築
conda create -n [env_name] --file env_name.txt
# 環境追加(既存の環境に足し合わせる)
conda install --name [env_name] --file env_name.txt
```

次のの方法は1と違い、アーキテクチャに依存しません。別のOS・アーキテクチャのマシン上へも移行できます。ただ既存の環境に追加して環境を足すのは無理そう。
```
# 環境保存
conda env export -n [env_name] > env_name.yml
# 再構築
conda env create -f=env_name.yml
```

