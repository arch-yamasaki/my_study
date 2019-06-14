## docker基本

```bash
# dockerへの接続
$ docker exec -it コンテナ名 /bin/bash
```

## docker-machine概要
---
- docker engine?
dockerの管理・実行を行う環境
- docker ホスト
docker engine がインストールされた仮想マシン
- docker machine
docker ホストの 作成・起動・停止・再起動をCLIから実行するツール。
ローカルだけでなく、AWS,GCPなどのリモートのクラウドプロパイダでdockerホストの管理することも可能。


## docker-machine コマンド


```sh
# docker-machine の状態確認
# ACTIVEが*のものがactive状態なdockerホスト。
$ docker-machine ls
NAME      ACTIVE   DRIVER       STATE     URL                         SWARM   DOCKER        ERRORS
default   -        virtualbox   Running   tcp://192.168.99.100:2376           v18.06.1-ce 

# driver にvirtualboxを指定したdefaultという名前のdocker hostを作成。
$ docker-machine create -driver virtualbox default

# docker-machineをactiveにするための環境変数設定のやり方がわかる。
# deactivateするには-uをつけると詳細がわかる。。
$ docker-machine env default
export DOCKER_TLS_VERIFY="1"
export DOCKER_HOST="tcp://192.168.99.100:2376"
export DOCKER_CERT_PATH="/Users/yohei/.docker/machine/machines/default"
export DOCKER_MACHINE_NAME="default"
# Run this command to configure your shell: 
# eval $(docker-machine env default)

$ docker-machine env -u default
unset DOCKER_TLS_VERIFY
unset DOCKER_HOST
unset DOCKER_CERT_PATH
unset DOCKER_MACHINE_NAME
# Run this command to configure your shell: 
# eval $(docker-machine env -u)


# docker-machineの再開・停止
$ docker-machine start default
$ docker-machine stopt default

# docker-machineへの接続。exitで抜けれる。
$ docker-machine ssh default

# docker-machineのIP表示
$ docker-machine ip default
192.168.99.100


# activeにした状態でdockerコマンドを打つと、activeなdocker host上で実行される。
$ docker run hello-world


```

外部サービスへの
```sh
$ docker-machine create --driver amazonec2 --amazonec2-open-port 8000 --amazonec2-region ap-northeast-1 --amazonec2-ami=ami-3d71225b aws-sandbox


master-diorama-216609

docker run -d -p 9000:9000 --name portainer  -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
```