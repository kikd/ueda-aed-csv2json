# AED Opendata TSV to JSON @ 上田市
## これはなに？
LinkDataで公開している[上田市内AED設置場所](http://linkdata.org/work/rdf1s1202i)のオープンデータをTSV形式でダウンロードし、JSONに変換しています。
JSONファイルに変換することで、様々なアプリケーションへの再利用が容易になることを期待しています。

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
