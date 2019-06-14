cd gitのやつ

```bash
$ docker-compose up -d

# サーバ止める
$ docker-compose pause
$ docker-compose unpause

# サービス内に入る
# docker-compose exec <service name> /bin/bash
$ docker-compose exec web /bin/bash

# サービス内でコマンド実行
# docker-compose run <service name> <command>
$ docker-compose run web ./manage.py makemigrations
$ docker-compose run web ./manage.py createsuperuser
# 次のコードは実行したからやったらあかんけど笑
$ docker-compose run web ./manage.py startapp nephrosis

```


# cloudでの実行
```bash
$ gcloud compute instances create nephrosis4\
    --image cos-stable-65-10323-62-0 \
    --image-project cos-cloud \
    --zone asia-northeast1-a \
    --machine-type g1-small
    
$ gcloud compute ssh nephrosis4 \
    --project springschool2018-204307 \
    --zone asia-northeast1-a
    
    
$ git clone https://github.com/docker/dockercloud-hello-world.git

$ docker run docker/compose:1.22.0 version

$ echo alias docker-compose="'"'docker run \
    -v /var/run/docker.sock:/var/run/docker.sock \
    -v "$PWD:/rootfs/$PWD" \
    -w="/rootfs/$PWD" \
    docker/compose:1.22.0'"'" >> ~/.bashrc
 
//再読み込み
$ source ~/.bashrc

// 確認
$ docker-compose -v

$ git clone https://github.com/arch-yamasaki/django-uwsgi-nginx
$ cd nephrosisPrediction
$ docker-compose up -d

```