# 目次
<!-- TOC -->

- [目次](#%E7%9B%AE%E6%AC%A1)
- [gcloud sdkコマンド概要](#gcloud-sdk%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89%E6%A6%82%E8%A6%81)
- [gcloud コマンド](#gcloud-%E3%82%B3%E3%83%9E%E3%83%B3%E3%83%89)
  - [gcloud config](#gcloud-config)
  - [gcloud config configurations](#gcloud-config-configurations)
  - [gloud auth(認証について)](#gloud-auth%E8%AA%8D%E8%A8%BC%E3%81%AB%E3%81%A4%E3%81%84%E3%81%A6)
  - [gcloud clusters](#gcloud-clusters)
- [勉強用サイト](#%E5%8B%89%E5%BC%B7%E7%94%A8%E3%82%B5%E3%82%A4%E3%83%88)

<!-- /TOC -->

# gcloud sdkコマンド概要
| command | explanation |
| ------- | ----------- |
|gcloud         |  GCPサービスを操作するためのコマンドラインツール           |
|bq      |      BigQueryにアクセスするためのコマンドラインツール       |
|gsuril    |       Cloud Storageにアクセスするためのコマンドラインツール   |


# gcloud コマンド
- メリット
  - 処理の自動化や複数の処理をまとめることが容易にできる
  - 実行履歴から直前の操作の確認がしやすい
  - 慣れれば画面（WEB管理コンソール）より高速に処理可能
- 使用方法
    ```sh
     gcloud <GROUP> <OPERATION> <TARGET> <OPTION>
    ```
    > alpha, betaなどをつけることで、早期リリースのものが使える。
    - GROUP
        コマンドのグループ指定。
      - config: 設定に関するコマンド
      - compute: Compute Engine に関連するコマンド
      - gcloud compute instance: リCompute Engine インスタンスに関連するコマンド
      - etc..
    - OPERATION
        各GRUOPに属する処理を記述。
    - TARGET
      - 各OPERATIONの対象となる処理を記述。

## gcloud config
`~/.config/gcloud/configurations`で管理されている。

```sh
# list: config設定を全て確認する
gcloud config list

# get-value: 指定したconfigの設定を確認する
gloucd config get-value project
> springschool2018-204307

# set: configの設定を変更する
gcloud config set account "yohei7328@gmail.com"
gcloud config set project "springschool2018-204307"
> Updated property [core/account].

```

## gcloud config configurations
config設定をそれぞれに設定できるため、複数のプロジェクトやアカウントの行き来が簡単になる。
```sh
# configの環境の管理をする。
gcloud config configurations create <name>
gcloud config configurations activate <name>
```


## gloud auth(認証について)
gcpの認証情報の管理・設定をするコマンド。認証のやり方は以下。
- 手段１：gcloud initで認証と初期設定（プロジェクトの設定）などが行われる。※ブラウザ必須
- 手段２：gcloud auth loginで認証し、gcloud config set projectでプロジェクトIDを設定　※ブラウザ必要なし。
- 手段3:サービスアカウントの秘密鍵を事前にダウンロードし、以下のコマンドを実行
  ```sh
  gcloud auth activate-service-account <account_address> --key-file <account_ssh_secret_key>
  ```

```sh
# 現在設定されている認証情報を表示
gcloud auth list
# 認証情報を削除
gcloud auth revoke
# インストール済みのコンポーネント一覧表示
gcloud components list
```

## gcloud clusters
kubernetes用のクラスさ作成におけるコマンド。
```sh
# clusterの作成・羅列・削除。
gcloud container clusters create <CLUSTER-NAME> --num-nodes=2
gcloud container clusters list
gcloud container clusters delete <CLUSTER-NAME>

# ノード数変更（デフォルトは3）
gcloud container clusters resize <CLUSTER-NAME> --size=2

# cluster の選択
gcloud container clusters get-credentials <CLUSTER-NAME> \
    --zone asia-northeast1-c --project <Project-Name>

```





# 勉強用サイト
[[GCP\_Professional\_Data\_Engineerに合格してきたので勉強法等書く](https://yomon.hatenablog.com/entry/2018/06/18/GCP_Professional_Data_Engineer%E3%81%AB%E5%90%88%E6%A0%BC%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%AE%E3%81%A7%E5%8B%89%E5%BC%B7%E6%B3%95%E7%AD%89%E6%9B%B8%E3%81%8F)]([https://yomon.hatenablog.com/entry/2018/06/18/GCP\_Professional\_Data\_Engineerに合格してきたので勉強法等書く](https://yomon.hatenablog.com/entry/2018/06/18/GCP_Professional_Data_Engineer%E3%81%AB%E5%90%88%E6%A0%BC%E3%81%97%E3%81%A6%E3%81%8D%E3%81%9F%E3%81%AE%E3%81%A7%E5%8B%89%E5%BC%B7%E6%B3%95%E7%AD%89%E6%9B%B8%E3%81%8F))