# 基本

```py
import torch
import torch.nn

```


# 自動微分1
参考：[ディープラーニングをやらないPyTorch入門](https://orizuru.io/blog/machine-learning/pytorch/)
$$y = x^2 - 2 $$
y = 0となるようなxを勾配法を用いて解く。

```py
import torch
import torch.nn as nn
import torch.optim as optim

# x(今回のパラメータ)の初期値を指定。実際なんでもいい。
# require_gradをしなければ、微分の計算をしてくれない。
x = torch.tensor([1.], requires_grad=True)

# targetの指定。y -> 0にすることが今回の目的。
target = torch.tensor([0.])

# loss関数の設定。後で使う。
loss_func = nn.MSELoss()

# optimizerの指定
optimizer = optim.SGD([x], lr=0.01)

# 学習の開始。
for iter_num in range(100):
    # optimizerの初期化。
    optimizer.zero_grad()
    
    # yを更新されたxを用いて出力。
    # 実際はoutput = Net(input)みたいな感じか。
    y = x ** 2 - 2
    
    # lossを計算する。
    # 実際はloss = loss_func(output, target)みたいな感じか。
    loss = loss_func(y, target)
    
    # lossから、パラメータxの勾配(x.grad)を計算する。
    loss.backward()
    
    print("{0}: x={1:.7f}, y={2:.7f}, dL/dx={3:.7f}".format(iter_num, x.data.numpy()[0], y.data.numpy()[0], x.grad.data.numpy()[0]))
    
    # x.gradと定義されたoptimizerからパラメータxの値を更新
    optimizer.step()

```

# 自動微分2

[PyTorchで高階偏微分係数](https://qiita.com/tmasada/items/9dee38e5bc1482217493)

# Nueral Networkの作成と学習

```py

import torch
import torch.nn as nn
import torch.nn.functional as F

# Netの作成
class Net(nn.Module):
    # 作成
    def __init__(self):
        super(Net, self).__init__()
        # one input channel, output channel 5,  
        self.conv1 = nn.Conv2d(1,6,5)
        self.conv2 = nn.Conv2d(6,16,5)

        self.fc1 = nn.Linear(16 * 5 * 5, 120)
        self.fc2 = nn.Linear(120, 84)
        self.fc3 = nn.Linear(84, 10)

    def forward(self, x):
        x = F.max_pool2d(F.relu(self.conv1(x)), (2, 2))
        # If the size is a square you can only specify a single number
        x = F.max_pool2d(F.relu(self.conv2(x)), 2)
        x = x.view(-1, self.num_flat_features(x))
        x = F.relu(self.fc1(x))
        x = F.relu(self.fc2(x))
        x = self.fc3(x)
        return x
    
    def num_flat_features(self, x):
        size = x.size()[1:]  # all dimensions except the batch dimension
        num_features = 1
        for s in size:
          num_features *= s
        return num_features

net = Net()
print(net)
>  Net(
>    (conv1): Conv2d(1, 6, kernel_size=(5, 5), stride=(1, 1))
>    (conv2): Conv2d(6, 16, kernel_size=(5, 5), stride=(1, 1))
>    (fc1): Linear(in_features=400, out_features=120, bias=True)
>    (fc2): Linear(in_features=120, out_features=84, bias=True)
>    (fc3): Linear(in_features=84, out_features=10, bias=True)
)
```

```py
# net.parameters()はgeneratorを返す。
params = list(net.parameters())

# a dummy target, for example
target = torch.randn(10)
# make it the same shape as output
target = target.view(1, -1)
# outputの計算
output = net(input)
# loss関数の定義
criterion = nn.MSELoss()
# optimizerを定義。
optimizer = optim.SGD(net.parameters(), lr=0.01)
# 勾配(tensor.grad)を0にする。(パラメータ自体の値ではない。) これしないと、再度自動微分できない！
optimizer.zero_grad()
# lossの計算
loss = criterion(output, target)
# lossに対する各パラメータの勾配を求める。
loss.backward()
# パラメータ更新。
optimizer.step()  

# lossに対する各パラメータの勾配を求める。
net.zero_grad() 
loss.backward()
# 角パラメータの勾配を用いて、パラメータを更新
learning_rate = 0.01
for f in net.parameters():
    f.data.sub_(f.grad.data * learning_rate)
    

```
> optimを使わない以下のやり方でも勾配計算可能。
```py
# lossに対する各パラメータの勾配を求める。
net.zero_grad() 
loss.backward()
# 角パラメータの勾配を用いて、パラメータを更新
learning_rate = 0.01
for f in net.parameters():
    f.data.sub_(f.grad.data * learning_rate)
```

# データのロードと学習

```
```

