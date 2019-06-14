## Keras rl
Keras reinforcement learning(強化学習)の略。
pipでインストールできる強化学習用ライブラリ。

## 学習した重み層を使って色々する
[Deep LearningをKerasで可視化したい](https://recruit.gmo.jp/engineer/jisedai/blog/deep-learning-keras/)

- 学習した重みの取得
- 学習した重み層を一部取得し新たな学習・予測
- 学習した重みを可視化

## 謎メソッド
keras.la

## connection temporal classification
音声認識とか

## tensorflow serving
[とある自然言語処理ベンチャーのテックブログ](http://nlp-tech-blog.hatenablog.com/entry/2018/02/19/172104)

## kearsの高速化
kerasで複数のモデルを作る場合(kfoldなどでも)以下じゃメモリは消えない。
```py
del model
# とか...
model = gen_mode()
# とかじゃ、実はmodelがbackendに残ってて、実行速度が遅くなる。

# 以下の操作をすると高速になる。
from keras import backend as K 
K.clear_session()
```


kerasもモデルをsikit learnのように使えるようにする。
KerasClassifier or KerasRegressorが使用可能。

## sklearn wrapper


---

```py
from keras.wrappers.scikit_learn import KerasClassifier
from sklearn.model_selection import StratifiedKFold, cross_validate
from keras.callbacks import EarlyStopping

dataset = numpy.loadtxt("pima_indians_diabetes.csv", delimiter=",")
X = dataset[:, 0:8]
Y = dataset[:, 8]

# modelの定義
def gen_model():
    model = Sequential()
    model.add(Dense(12, input_dim=8, activation='relu'))
    model.add(Dense(6, activation='relu'))
    model.add(Dense(1, activation='sigmoid'))
    model.compile(loss='binary_crossentropy', optimizer='adam',
                  metrics=['accuracy'])
    return model


# kerasのモデルをwrapする。
model = KerasClassifier(build_fn=gen_model, epochs=10, batch_size=10)

# scikit_learn's cross-validation flow
kfold = StratifiedKFold(n_splits=10, shuffle=True, random_state=1)
results = cross_validate(model, X, Y, cv=kfold)
print(results.mean())

# modelのsave(確かではない)
model.model.save("PATH/model.hd5f")
```

callback設定したいときは以下。(で行ける...?)
```py
model = KerasClassifier(build_fn=gen_model, epochs=10, batch_size=10), fit=dict(callbacks=[EarlyStopping(patience=0)]))
```


> ### cross_validateについて
> 以前はsklearn.cross_validationが使用されていたが、sklearn.model_selectionになった。(使用はできるが、今後のサポートはしない様子。)
またcross_validationのやり方も２つ存在し、
> - model_selection.cross_val_score(古い)
> - model_selection.cross_validate(新しい。推奨。)
>   - 評価に複数の指標を考慮できる
>   - テストスコアに加えて、学習の時のスコア、学習時間、テストの時間などを算出してくれる。
>```py
> scoring = ["f1_macro", "recall_macro"]
> clf = SVC(C=1)
> scores = cross_validate(clf, digits.data, digits.target,
> scoring=scoring, cv=5)
> for key,value in scores.items():
>   print("{}:{:.2f}+/-{:.2f}".format(key, value.mean(), value.std()))
> ```

## Callbacks

## TesnorBoard
[TensorBoardまとめ](https://qiita.com/agumon/items/114da6921c5dc4f7d7f9)