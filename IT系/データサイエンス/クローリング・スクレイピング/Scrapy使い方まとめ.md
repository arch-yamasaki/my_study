

## Scrapy内部仕様
1. start_urls属性に含まれるURLを指すRequestオブジェクトが作られ、Schdularのキューに追加される。
2. DownloderがRequestオブジェクトが指すURLからResponseオブジェクトを作成する。
3. Downloderの処理が完了すると、SpiderがそれぞれのResponseオブジェクトを引数としてコールバック関数を実行する。(最初はparse)
4.コールバック関数の実行。RequestオブジェクトかItemオブジェクトをyield。(両方も可能。)
    1. Requestの場合：urlとコールバック関数を指定。URLのRequestがキューに追加される。
    2. Itemの場合：ファイルの保存等行われる。
5. ScedulerのキューのRequestオブジェクトが全てなくなるとSpiderの実行が終了する。

---
## Spiderの作成プロセス

###1. Scrapyプロジェクトの開始
```bash
$scrapy startproject myyahoo

$tree myyahoo/
myyahoo/
├── myyahoo
│   ├── __init__.py
│   ├── __pycache__
│   ├── items.py
│   ├── middlewares.py
│   ├── pipelines.py
│   ├── settings.py
│   └── spiders
│       ├── __init__.py
│       └── __pycache__
└── scrapy.cfg

$ cd myyahoo
```
スクレイピングようプロジェクト作成。
またsetting.pyに以下は絶対に記述。
```py
# setting.py
DOWNLOAD_DELAY = 1 # ページのダウンロード間隔あける。
```

### 2. Itemの作成
```py
# items.py
import scrapy

class MyprojectItem(scrapy.Item):
    """
    ニュースのヘッドラインを示すItem。
    """
    title = scrapy.Field()
    body = scrapy.Field()

```
定義されてないFiledに入力できなくなる。
辞書のように使用可能。

###3. Spiderの作成
```bash
$scrapy genspider myyahoo domein_name(yahoo.co.jp)
```
spidersディレクトリにmyspieder.pyが作成される。
これを編集してspiderを作成していく。

scrapy.SpiderでのSpieder作成。
```py
# myspieder.py
# -*- coding: utf-8 -*-
import scrapy

from myyahoo.items import MyprojectItem

class NewsSpider(scrapy.Spider):
    # スパイダーの名前。CLIから実行する際にこのnameを使用。
    name = 'news'
    # crawlingの対象となるドメインリスト
    allowed_domains = ['news.yahoo.co.jp']
    # crawlingを開始するURLリスト。
    start_urls = ['http://news.yahoo.co.jp/']

    def parse(self, response):
        for url in response.css('ul.topics a::attr("href")').re(r'pickup/\d+$'):
            yield scrapy.Request(response.urljoin(url), self.parse_topic)
    
    # Responseを処理する。
    def parse_topic(self, response):
        item = MyprojectItem()
        item["title"] = response.css('#link ::text').extract_first()
        item["body"] = response.css('.hbody').xpath('string()').extract_first()
        yield item
```

scrapy.spiders.CrwalSpiderでのSpider作成。
perse関数がいらない！
```py
import scrapy
from scrapy.spiders import CrawlSpider, Rule
from scrapy.linkextractors import LinkExtractor

from myyahoo.items import Headline

class CrawlNewsSpider(CrawlSpider):
    # スパイダーの名前。CLIから実行する際にこのnameを使用。
    name = 'crawl_news'
    # crawlingの対象となるドメインリスト
    allowed_domains = ['news.yahoo.co.jp']
    # crawlingを開始するURLリスト。
    start_urls = ['http://news.yahoo.co.jp/']
    

    # def perseは記述しない。
    rules = [
        Rule(LinkExtractor(allow=r'/pickup/\d+$'), callback='parse_topic')
        ]

    def parse_topic(self, response):
        pass # あとは上と一緒
```
以下はruleの例
```py
# 書籍ページとニュースページのそれぞれのリンクをクロールし、perse_book()とprase_news()と言う別々のメソッドで処理。
rures = [
  Rule(LinkExtractor(allow=r'/book/\w+$'), callback='parse_book'),
  Rule(LinkExtractor(allow=r'/news/\d+$'), callback='parse_news')
]

# カテゴリページ->商品ページと辿り、perse_product()で処理。
rures = [
  Rule(LinkExtractor(allow=r'/category/\w+$')),
  Rule(LinkExtractor(allow=r'/procuct/\d+$'), callback='parse_product')
]

# 上記例でカテゴリページもparse_category()で処理。(follow=Trueじゃないとcallbackだけで終了。)
rures = [
  Rule(LinkExtractor(allow=r'/category/\w+$'),callback='parse_category', follow=True)
  Rule(LinkExtractor(allow=r'/procuct/\d+$'), callback='parse_product')
]
```
###4. クローリングのテスト
インタラクティブにスクレイピングができる、
scrapy shell機能を使用できる。
```bash
$ scrapy shell 'URL'

# Responseオブジェクトを指定したURLのものに更新
> fetch('URL')
# 指定したResponseをブラウザで表示。
> view(response)
# cssセレクターでマッチするノード一覧を取得
> response.css('#link ::text')
# extract():ノードの一覧を文字列のlistとして取得
> response.css('#link ::text').extract()
# extract_first():ノードの一覧の最初の要素を文字列として取得
> response.css('#link ::text').extract_first()
# re(regex):ノードの一覧の内、正規表現(rejex)にマッチする部分を文字列のリストとして取得
> response.css('#link ::text').re(r'\w*$')
# re_first(regex):正規表現(rejex)にマッチする部分をの最初の部分を文字列として取得
> response.css('#link ::text').re_first(r'\w*$')
```
でURLにアクセスできる。



###5. Pipeline処理
pipeline.pyにpipelineの処理を書くことができる。
- classはobjectを継承
- 記述する関数
  - process_item((self, spider, item))
  spiderで定義されたitemを受けとる度に処理を行う。
  - open_spider(self, spider)
  spiderの開始時に呼ばれる
  - close_spider(self, spider)
  spiderの終了時に呼ばれる
  - from_crawler(cls, crawler)
  謎すぎる

```py
# pipeline
from scrapy.exceptions import DropItem
from pymongo import MongoClient

class ValidationPipeline(object):
    """
    Itemを検証するpipline
    """

    def process_item(self, item, spider):
        if not item["title"]:
            # titleフィールドが取得できてない場合は破棄する。
            raise DropItem("Missing title")

        return item #Itemを正しく取得できている場合。

class DatabasePipeline(object):
    """
    ItemをMongoに保存するpileline
    """

    def open_spider(self,spider):
        self.client = MongoClient("localhost",27017)
        self.db = self.client["scraping-book"]
        self.collection = self.db["items"]

    def close_spider(self,spider):
        self.client.close()

    def process_item(self, item, spider):
        self.collection.insert_one(dict(item))
        return item

```

setting.pyに使用するpipelineを記述。
```py
# setting.py
# モジュールとして作成したpipelineのクラスを記述。
# 番号が小さい順に実行される。
ITEM_PIPELINES = {
   'myyahoo.pipelines.ValidationPipeline': 300,
   'myyahoo.pipelines.DatabasePipeline': 800,
}
```
###6. その他設定
- settingの設定
  - コマンドラインオプション
  - Spiderごとの設定(custom_settingsというdictを記述)
  - プロジェクトごとの設定(setting.pyに記述)
  - ...

の場所に設定できる。
上の設定から順番に優先される。


- DOWNLOAD\_DELAY デフォ0
ダウンロード間隔。1以上を推奨。
- RANDOMIZE\_DOWNLOAD\_DELAY デフォTrue
Webのダウンロード間隔をランダムにするかどうか。上記の0.5 ~ 1.5倍のどれかで取得。
- 並行処理
- HTTPリクエストに関して
- HTTPキャッシュに関して
- エラー処理に関して


###7. spiderの実行
```bash
scrapy crawl news_crawl(myspiderで定義したclassのnameの値) -o news.jl
```


###8. その他
- JavaScriptページにSplashで対応
  1. scrapy-splashのインストール
  2. Splashサーバを起動
  3. settings.pyにSplash関連の設定を行う
  4. SpiderでRequestの代わりにSplashRequestを使用する。(よくわからん)
  

