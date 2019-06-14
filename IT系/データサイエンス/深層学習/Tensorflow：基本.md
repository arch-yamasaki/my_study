テンソルの種類
- tf.constant(定数)
- 演算
- tf.Variable(変数)
- tf.Placeholder(外部から与えるデータ)
feed_dict={}でデータを指定する。

tensorflow使用時に気づいた面倒なこと。
- 入力テンソルも指定する必要がある。(以下に例)
```py
x = tf.placeholder(tf.float32, name="x")
x_1 = tf.reshape(x, [-1,28,28,1])



# convolution
# イメージデータのテンソルは以下のようになる。
# カーネルは[画像横幅, 画像縦幅, 　入力チャンネル, 出力チャンネル]
# stridesは[バッチサイズ, 画像横幅, 画像縦幅, チャンネル]
# kerasならConv(32,(3,3))(x_1)でいい。strideの設定は引数。カーネルも出力チャネルの指定だけでいい。

k_0 = tf.Variable(tf.truncated_normal([4,4,1,10], mean=0.0, stddev=0.1))
conv = tf.nn.conv2d(
    x_1,
    k_0,
    strides=[1, 3, 3, 1],
    padding='VALID'
)

conv_relu = tf.nn.relu(conv)

# pooling
pool = tf.nn.max_pool(
    conv_relu,
    ksize=[1,3,3,1],
    strides=[1,2,2,1],
    padding="VALID"
)


# Flatten
# kerasならFlatten()との違いは、適切なflatten_dimを設定してくれること。
# tfの場合、1サンプルが持つべきflatten_dimをきちんと計算してあげないといけない。 これは本当にめんどい。
flatten_dim = 160
flatten = tf.reshape(pool, [-1, flatten_dim])


```
- dropoutの設定面倒すぎる。placeholderを作成しないといけない。
```py
DROPOUT_PROB_1 = 0.2
DROPOUT_PROB_2 = 0.5

dropout_prob = {p_1: DROPOUT_PROB_1, p_2: DROPOUT_PROB_2}

sess.run(tf.global_variables_initializer())
for i in range(NUM_TRAIN):
    batch = mnist.train.next_batch(BATCH_SIZE)
    inout = {x: batch[0], labels: batch[1]}
    if i % OUTPUT_BY == 0:
        train_accuracy = accuracy.eval(feed_dict={ **inout, p_1:1.0, p_2:1.0})
        print('step {:d}, accuracy {:.2f}'.format(i, train_accuracy))
    optimizer.run(feed_dict={**inout, **dropout_prob})

test_accuracy = accuracy.eval(feed_dict={x: mnist.test.images, labels: mnist.test.labels, p_1:1.0, p_2:1.0})
print('test accuracy {:.2f}'.format(test_accuracy))
```