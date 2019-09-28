英日翻訳やれること
- generator実装による学習データ増加
- 学習データが相当難しい可能性あるので帰る選択もあり。
- 前処理
  - テキストクリーニング(おんなじ意味の単語を同じ文字に)or
  - word2vecによる単語表現(多分辞書も変わるのでその実装も)
  - 日本語の助詞なんとかしたい。(- ストップワード除去)
  - 英語の"I'm", "He isn't" とかをなくす。
  - ?は残したほうがいいかもしれない。
  - [mecab前に日本語の文章の正規化](https://boomin.yokohama/archives/634)
  - 固有名詞or頻度の少ない語を(None)に変える作業
  - 漢数字->数字
  - jenome tokenizerなら名詞・動詞原型のみを配列で抽出する関数を定義できる。

優先順位
  1. 品詞の選択(名詞・動詞・形容詞・副詞・(助動詞？))と、原型に戻した分かち書き。
  [jenome](https://qiita.com/makaishi2/items/63b7986f6da93dc55edd) jenomeのが楽そう...?
  [mecabでもいけそうではある](https://foolean.net/p/576)
  2. 学習済word2vec使用andword2vecにないものはNoneもしくは無視する(で、一回データ眺める)(動詞を原型にに変える作業は必要そう。)[word2vec試す](https://qiita.com/omuram/items/6570973c090c6f0cb060)
  もしくはfasttextの方がいい精度って記事もあり。[fasttextで自分らしさに](https://recruit.gmo.jp/engineer/jisedai/blog/word2vec-fasttext-me/)
  2. generator作成して学習データ増やす。
  3. データを変えるandさらに増やす(多分generatorの作業とか少し変わりそう。一緒にやっていいかも。)
  4. なんか原型も良くないぽいから、サブワードに変換とかいうのやる。語彙数が一気に減る。日本語英語どちらも行けそう。sentence
  5. Biderectional と BatchNormalizationと多層化LSTMの実装。(適当にしてみた。最後まで結果見てないけど、val_loss見るとあんま精度向上せず...)
  4. loss関数をcross_entoropyから変える。いいのありそう。
  4. beam search decoding(softmaxの裁量を出力するのではなく、各々のsoftmaxの最優推定をすることで、「ちゃんとした分っぽい」出力を行う。)(kength-normalizationで長い文章も出力されるようにする手法。)また、学習時にもbeam searceするbeam search optimizationもある。
  [beam search基礎の解説](https://deepage.net/machine_learning/2017/07/06/beam-search.html)
  [beam search 実装例](http://pythonexample.com/code/beam-search-keras/)
  cp -R /usr/local/lib/mecab/dic/mecab-ipadic-neologd ~/Google\ ドライブ/Colab\ Notebooks/seq2seq
  
  


## 翻訳・時系列処理で使用するkerasメソッドや他のメソッド

- keras.preprocessing
  - pad_sequences(時系列入力を同じ長さに揃える。)
    - 例
      - `pad_sequences(sequences, maxlen=5)`
      - 入力：[[1,1,1,1],[1,2,3],[1,2,3,4,5,6,7], ...]
      - 出力：[[0,1,1,1,1], [0,0,1,2,3], [1,2,3,4,5], ...]
    - padding="pre" : preは、postは後ろを埋める。
    - value=0 : 埋めるvalueを設定
  - skipgrams(勉強したい。)
  - keras.preprocessing.text.Tokneizer[keras Doc](https://keras.io/ja/preprocessing/text/)
    - 最初に目的となるtextsで学習必須。
    ```
    tok = Toknizer()
    tok.fit_on_texts(texts)
    ```
    - text->[1,3,5,7]とかにできる。
    - text->[on-hot]にもできる。
    - indexとwordの対応表などもえらえる。
- rnn class
  - LSTM, GRU, ConvLSSTM2d
- rnn.rapper
  - Bi-directional RNN
- keras.layers.embeddings.Embedding
  - 例
    - `Embedding(input_dim=1000, output_dim=64, input_length=timestep)`
    - 入力：shape = (None, timestamp)([1,20, 7, 63, 33,2], [1, 3, 103, 53, 66], ...)とか。今回は語彙数は1000とする。
    - 出力：shpe=(None, timestep, 64)
  - input_dim : 語彙数。入力データの最大インデックス+1
  - output_dim : 出力次元数。
  - mask_zero : 入力0を欠損値を示す特別値とみなす。(0 を無視するのか0->[0,0...0に]にするのかは謎。後者ならMasking layerが必要)
- keras.layers.Masking
  - 例
  ```
  inputs = Input(shape=(timesteps, features))
  x = Masking(mask_value=0. ))(inputs)
  lstm = LSTM(32)(x)
  ```
  - rnn層の前で使用する。embedding層あるならいらない？
- from keras.layers.core.RepeatVector
  同じ入力を複数回入れる。(ぶっちゃけ使い所よくわからん...・)
- from keras.layers.wrappers.TimeDistributed
  time次元(sampleの後。shape = (samples, time, heights, widths, chanell))のtimeごとにconvなどできる。(上の例はぶっちゃけconvlstm2d使えばいい。)
  またshape=(samples, times, latent)などの場合にdenseでlatent_2次元する場合、keras2.0以降はTimeDistributedを使わず普通のdenseでもいい。



---
## word2vecのembedding層を使用する。
参考URL[gensimでkerasのEmbedding層を取得する](http://hironsan.hatenablog.com/entry/keras-gensim-integration)
今回は学習させているが、学習済みの重みを使用する方法もある。
```py
from gensim.models import word2vec
from sklearn.datasets import fetch_20newsgroups

# データの用意。headerは削除。
twenty_train = fetch_20newsgroups(subset='train')
labels = twenty_train.target
texts = []
for doc in twenty_train.data:
    i = doc.find('\n\n')  # skip header
    texts.append(doc[i:])

# word2vecの学習    
w2v = word2vec.Word2Vec(min_count=1)
w2v.build_vocab([doc.split(' ') for doc in texts])
w2v.train(texts, total_examples=w2v.corpus_count, epochs=w2v.iter)

# layer取得。train_embeddingsで重みを以後更新するかしないかを決定できる。
embedding_layer = w2v.wv.get_embedding_layer(train_embeddings=True)

"""
しばらくコードが開く。
"""
# 実際に使うとき
inputs = Input((None, ))
embedding = embedding_layer(inputs)

```

---
## seq2seq
[Keras Blog : seq2seq in Keras](https://blog.keras.io/a-ten-minute-introduction-to-sequence-to-sequence-learning-in-keras.html)
[github : lstm seq2seq](https://github.com/keras-team/keras/blob/master/examples/lstm_seq2seq.py)

RNN,GRUは出力までの中間状態を2つ
LSTMはh\_tとc\_t(cは詳しく分かってない。)

```python

# decoderの入力。num_encoder_tokensは英語の文字数を表す1-hot vectorで71
encoder_inputs = Input(shape=(None, num_encoder_tokens))

# return_state=Trueにより出力以外の隠れ層も帰ってくる
# RNN,GRULSTMの場合は二つ、LSTMは三つの変数が返ってくる。
# 中間層のshapeはunitsで指定したものと同じになる
encoder = LSTM(units=256, return_state=True)
encoder_outputs, state_h, state_c = encoder(encoder_inputs)
encoder_states = [state_h, state_c]

# decoderの設計。num_decoder_tokensはフランス語の文字数を表す1-hot vectorで94。
# (Noneなのは可変長扱えるよう...?)
decoder_inputs = Input(shape=(None, num_decoder_tokens))

# 中間状態を保持したdecoderLSTMの設計。
# return_sequences=Trueで(None,None,256)の出力にしている。
# 出力のshapeは(サンプル数,timestep,入力次元)(timestepはNoneで可変長いけるのかな...)
# 出力しか使ってないのに、return_state=Trueの意味はよくわからん。Falseで良さげ？
decoder_lstm = LSTM(units=256, return_sequences=True, return_state=True)
decoder_outputs = decoder_lstm(decoder_inputs,
                                     initial_state=encoder_states)
                                     
decoder_dense = Dense(num_decoder_tokens, activation='softmax')
decoder_outputs = decoder_dense(decoder_outputs)

model = Model([encoder_inputs, decoder_inputs], decoder_outputs)
```
最終的な学習モデル
![model.png](resources/257D9213778DBA034242DF3581BB3B1C.png =961x395)
スペック足りないので学習させてない。

次に推論モデル。
モデルの設計。(学習できてないからか、止まる)
```python
# 後の推論実行で使用。
encoder_model = Model(encoder_inputs, encoder_states)

# decoderモデルの設計

# 推論用の隠れ状態h,cを定義。
decoder_state_input_h = Input(shape=(latent_dim,))
decoder_state_input_c = Input(shape=(latent_dim,))
decoder_states_inputs = [decoder_state_input_h, decoder_state_input_c]
decoder_outputs, state_h, state_c = decoder_lstm(
    decoder_inputs, initial_state=decoder_states_inputs)
decoder_states = [state_h, state_c]
decoder_outputs = decoder_dense(decoder_outputs)
decoder_model = Model(
    [decoder_inputs] + decoder_states_inputs,
    [decoder_outputs] + decoder_states)
```

モデルによる推論実行。
```python
def decode_sequence(input_seq):
    # Encode the input as state vectors.
    states_value = encoder_model.predict(input_seq)

    # Generate empty target sequence of length 1.
    target_seq = np.zeros((1, 1, num_decoder_tokens))
    # Populate the first character of target sequence with the start character.
    target_seq[0, 0, target_token_index['\t']] = 1.

    # Sampling loop for a batch of sequences
    # (to simplify, here we assume a batch of size 1).
    stop_condition = False
    decoded_sentence = ''
    while not stop_condition:
        output_tokens, h, c = decoder_model.predict(
            [target_seq] + states_value)

        # Sample a token
        sampled_token_index = np.argmax(output_tokens[0, -1, :])
        sampled_char = reverse_target_char_index[sampled_token_index]
        decoded_sentence += sampled_char

        # Exit condition: either hit max length
        # or find stop character.
        if (sampled_char == '\n' or
           len(decoded_sentence) > max_decoder_seq_length):
            stop_condition = True

        # Update the target sequence (of length 1).
        target_seq = np.zeros((1, 1, num_decoder_tokens))
        target_seq[0, 0, sampled_token_index] = 1.

        # Update states
        states_value = [h, c]

    return decoded_sentence
```

### stateful RNNとstateless RNNの違い
[Stateful LSTM in Keras](http://philipperemy.github.io/keras-stateful-lstm/)



---
## 非教師学習翻訳
二つのコーパスの対応づけなしに、
独自の言語コーパス二つで実装可能。
参考URL：[教師なし学習は機械翻訳に魔法をかけるか？](http://deeplearning.hatenablog.com/entry/unsupervised_machine_translation)
1. まず最初に各言語において、ノイズ除去処理を行うDenoising Autoencoderを作成する。
  - ノイズ除去わかりやすくした図
![スクリーンショット 2018-09-24 1.06.22.png](resources/0A83E4053277C7BBF4173F1FF267E332.png =673x443)
(日本語から日本語、英語から英語のエンコーダ。)
2. 日本語->(共有エンコーダ->共有デコーダ)->擬似英語->(共有エンコーダ->共有デコーダ)->擬似日本語という学習を行う。
  - ![スクリーンショット 2018-09-24 1.11.57.png](resources/371DA05421549359B02DC2BADDA9CDA7.png =651x442)

また実際は精度向上のために以下のようにエンコーダとデコーダを共有している。
- 共有デコーダは入力に生成したい言語の識別子を必要とする。
![スクリーンショット 2018-09-24 1.05.43.png](resources/A06BCC6B6D7CEA0EE27DD4130350EE04.png =640x317)

## Transfomer
Googleが開発した言語通訳用ニューラルネットワーク。
ライブラリなども存在するっぽい。
詳細はattentionを用いた多層LSTMっぽい気がする。
[Transfomer](https://gigazine.net/news/20170901-transformer-neural-network-language-understanding/)

## Attention
seq2seqにおいてエンコードで圧縮されたベクトルからデコードするのでなく、
ある出力時刻にてどの入力時刻に注目するかの重みスコア$\alpha_t$を求め、それを元に新たな$h_t$を決める手法。
Attentionのやり方は複数存在している。
- 入力を全結合したものをconcatする。
- [Soft Attention](https://qiita.com/ymym3412/items/c84e6254de89c9952c55)
- CNN?
- [そのほか実装](https://github.com/philipperemy/keras-attention-mechanism)
- [tensorflow attenition](http://gtech.hatenablog.com/entry/2016/11/28/114821)tensofflowはseq2seqもattenstionもtranslatorもあるだとか...。tensorflowが一番楽そうって記事。ww
- [Chainerでattention](https://qiita.com/kenchin110100/items/eb70d69d1d65fb451b67)
  attenitionはchainerのが描きやすくね？？？wって思わされた記事。seq2seqもある。まあでもtensorflowにパッケージあるからな...。
- [How to Develop an Encoder-Decoder Model with Attention for Sequence-to-Sequence Prediction in Keras](https://machinelearningmastery.com/encoder-decoder-attention-sequence-to-sequence-prediction-keras/)
  Repeatvectorやtimedistributedを使用したendcoder-decoderの実装。
  attentionはぶっちゃけ難易度高い実装してる。



## mecab
mecabの徐庶は色々。
その中でおすすめmecab-ipadic-NEologd

```bash
git clone --depth 1 https://github.com:neologd/mecab-ipadic-neologd.git
cd mecab-ipadic-neologd
./bin/install-mecab-ipadic-neologd -n
# ./bin/install-mecab-ipadic-neologd -n -aとしたらよりたくさんの辞書が手に入る.

vim /usr/local/etc/mecabrc

---
dicdir =  /usr/local/lib/mecab/dic/ipadic
を下に変更
dicdir =  /usr/local/lib/mecab/dic/mecab-ipadic-neologd
---
```

