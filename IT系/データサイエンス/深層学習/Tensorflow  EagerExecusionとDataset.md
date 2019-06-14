## EagerExecusion
EagerExecutionはTensorflowの値を簡単に扱えるようにする手法の１つ。以下のようなことが可能になる。
- print等ですぐに値を確認できる。
- 

EagerExecution環境にするには以下を実行。
```py
# この２つは同時に実行する必要がある。
import tensorflow as tf
tf.enable_eager_execution()

tf.executing_eagerly()        # => True
```

以下のように、tf.Tensorに対して、通常の演算やnumpy.arrayとtf.Tensorを共に演算したり、numpyメソッドの適用したりできる。
```py
v = tf.constant(1) + tf.constant(1)
print("v : ", v)
# v :  tf.Tensor(2, shape=(), dtype=int32)

tensor1 = tf.constant([[1,2,3],[4,5,6]])
tensor2 = tf.constant([[100,200,300],[400,500,600]])
print("add : ", tensor1 + tensor2)
# add :  tf.Tensor(
# [[101 202 303]
#  [404 505 606]], shape=(2, 3), dtype=int32)

# pythonの通常operandを用いた演算が可能
print(tensor1 + 100)
# <tf.Tensor: id=52, shape=(2, 3), dtype=int32, numpy=
# array([[101, 102, 103],
#        [104, 105, 106]], dtype=int32)>


# shapeの取得も可能
print(tensor1.shape[0].value, tensor1.shape[1].value)
# 2,3

# numpy配列とtf.Tensorの演算も可能！numpyメソッドを使用した場合、返り値はnumpy.arrayになる。
np.multiply(np.array([[100,200,300],[400,500,600]]), tensor1)
# array([[ 100,  400,  900],
#        [1600, 2500, 3600]])

# np.arrayにtfの関数を適用させると勝手にtf.Tensorになる。
oneimage = np.ones((784,))
oneimage = tf.reshape(oneimage, [28,28,1])
print(oneimage.shape)
# TensorShape([Dimension(28), Dimension(28), Dimension(1)])


def fizzbuzz(max_num):
  counter = tf.constant(0)
  max_num = tf.convert_to_tensor(max_num)
  for num in range(max_num.numpy()):
    num = tf.constant(num)
    if int(num % 3) == 0 and int(num % 5) == 0:
      print('FizzBuzz')
    elif int(num % 3) == 0:
      print('Fizz')
    elif int(num % 5) == 0:
      print('Buzz')
    else:
      print(num)
    counter += 1
  return counter

```


```py
EPOCHS = 10
BATCH_SIZE = 256

# データのload
(mnist_images, mnist_labels), _ = tf.keras.datasets.mnist.load_data()

# データの前処理１
dataset = tf.data.Dataset.from_tensor_slices(
    # shape=(60000, 28, 28)の入力データをtf.Tensorの(60000, 28, 28, 1)にした後に255で割る。
    (tf.reshape(mnist_images, [-1,28,28,1]) / 255,
     # shape=(60000,)のラベルデータをtf.Tensorの型に変換。(tf.castは型変換のmethod)
     tf.cast(mnist_labels, tf.int64))
)
# データの前処理２(shuffleとBATCH_SIZEを定義。
# datasetはshape=(BATCH_SIZE, 28, 28, 1)をイテレータとして返す。)
dataset = dataset.shuffle(1000).batch(BATCH_SIZE)

# modelの作成
mnist_model = keras.Sequential([
    keras.layers.Conv2D(16,[3,3], padding="same",activation="relu", input_shape=(28,28,1)),
    keras.layers.GlobalAveragePooling2D(),
    keras.layers.Dense(10)
])
keras.

# optimizerの設定
optimizer = tf.train.AdamOptimizer()
loss_history = []

# モデル学習
for i in range(EPOCHS):
    for batch, (images, labels) in enumerate(dataset):
        if batch % 100 == 1:
            print("\n loss : ", loss_value)
        print(".", end="")
        
        # forward計算 + loss計算
        # 勾配計算するために、上記はGradientTapeの中で実行する。(tapeに計算過程が保存される？)
        with tf.GradientTape() as tape:
            forwards = mnist_model(images)
            loss_value = tf.losses.sparse_softmax_cross_entropy(labels, forwards)
        loss_history.append(loss_value)
        
        # 勾配の計算。loss_valueとmodelのパラメータベクトルが必要...。使わないようにしてくれたらいいのに...。
        #  tfe.gradients_function()とかだとどうなるのかは要検証。
        grads = tape.gradient(loss_value, mnist_model.variables)
        
        # パラメータ更新
        optimizer.apply_gradients(zip(grads, mnist_model.variables),
                            global_step=tf.train.get_or_create_global_step())
        
            
```

> Eager Modeにしてしまうと model.compile()やmodel.fit()ができない！！！
...がversion1.10より可能になった。よって、estimatorにも変更可能。

> optimizer.apply_gradientsのglobal_stepよくわからん。Noneでも動く？？


## Dataset

Iteratorがよくわからん。いつ使うんや。


fileから読み込む方法。

```py
# Make a Dataset of file names including all the PNG images files in
# the relative image directory.
filename_dataset = tf.data.Dataset.list_files("../images/0_Non/*.png")

# Make a Dataset of image tensors by reading and decoding the files.
image_dataset = filename_dataset.map(lambda x: tf.decode_png(tf.read_file(x)))


```



