# AED Opendata CSV to JSON @ 上田市
## これはなに？
上田市オープンデータサイトで公開している[上田市内AED設置箇所]([http://linkdata.org/work/rdf1s1202i](https://www.city.ueda.nagano.jp/soshiki/tokei/3784.html#c))のオープンデータをTSV形式でダウンロードし、JSONに変換しています。
JSONファイルに変換することで、様々なアプリケーションへの再利用が容易になることを期待しています。  
このオープンデータでは、上田市の公共施設に設置されているAEDの場所を知ることができます。

以下の著作物を改変して利用しています。  
出典：AED設置箇所（[上田市オープンデータサイト URL](https://www.city.ueda.nagano.jp/soshiki/tokei/3784.html)、2023/5/19）、  
上田市、クリエイティブ・コモンズ・ライセンス表示 4.0 国際  
(https://creativecommons.org/licenses/by/4.0/deed.ja)

## 実行方法
### ローカルで実行する場合
1. 依存関係を解決  
`$ npm install`
2. スクリプトの実行  
`$ npm start`

## JSONファイルのフォーマット
下記フォーマットの配列となっています。
|Property|Desc.|
|-|-|
|name|設置場所の名称|
|address|設置場所の住所|
|lat|設置場所の緯度|
|lon|設置場所の経度|
