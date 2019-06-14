setting.pyにホストを追加する。

localの作業をgitにcommitする。
```sh
# サーバ内
gcloud compute ssh nephrosis4 \
    --project springschool2018-204307 \
    --zone asia-northeast1-a
    
# ssh and cd 後
# git の差分をpull
$ git pull
# or 
$ git fetch origin master && git reset --hard origin/master

# dockerコンテナを消して、新しいものに変える。
# docker-compose怪しいため、volumeのattachできないためこんなクソ仕様になった。
$ docker rm -f nephrosis && docker run -d --name nephrosis -v $PWD/:/home/docker/code -p 80:80 django_nginx:0.0.10
$ docker rm -f nephrosis && docker run -d --name nephrosis -v $PWD/:/home/docker/code -p 80:80 nephrosis:0.0.2

```

http://35.190.235.117/admin
35.190.235.117/

--- 

色々メモ
```sh
docker rm -f nephrosis && docker rmi nephrosis:0.0.2
docker build -t nephrosis:0.0.1 . 
docker run -d --name nephrosis -p 80:80 nephrosis:0.0.2
# or
docker rm -f nephrosis && docker run -d --name nephrosis -p 80:80 nephrosis:0.0.7

docker exec -it nephrosis /bin/bash
```


```sh
# sshのしかた
gcloud compute ssh nephrosis4 \
    --project springschool2018-204307 \
    --zone asia-northeast1-a
```

```sh
$ docker build -t nephrosis:0.0.2 . 

# 全消しの場合
$ docker rm -f nephrosis && docker rmi django_nginx:0.0.8
$ docker rm -f nephrosis && docker rmi django_nginx_king:0.0.1

$ django-admin startproject website ./app

# docekr run
$ docker run -d --name nephrosis -v $PWD/:/home/docker/code -p 80:80 django_nginx:0.0.5
# 開発時推奨。forground。
$ docker run --name nephrosis -v $PWD/app:/home/docker/code/app -p 80:80 django_nginx:0.0.5

$ docker exec -it nephrosis /bin/bash

# docker内実行
$ docker exec nephrosis python3 /home/docker/code/app/manage.py migrate
$ docker exec nephrosis python3 /home/docker/code/app/manage.py collectstatic
```

注意！