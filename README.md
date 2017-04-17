# gatsby-starter-undefined
React製静的サイトジェネレーター「Gatsby」でブログを始めるためのスターターキットです。

![](./images/gatsbyjs001.png)

## 特徴
* シンプルなデザイン
* 日本語フォントを想定したデザイン（HTML/CSSフレームワーク musubiiを使用）
* テーマカラーを選択可能
* シンタックスハイライトテーマを選択可能（スタイルはhighlight.jsに準拠）
* 著者情報表示
* Google Analytics対応

## 始め方
※事前にNode.jsが使用できる環境を準備しておく必要があります。

```
$ npm install -g gatsby
```
gatsbyをグローバルインストールします。

```bash
$ gatsby new blog https://github.com/kentaro-m/gatsby-starter-undefined.git
```
ブログを新規に作成します。

```
$ npm run develop
```
作成したディレクトリ内で上記コマンドを実行すると、[http://localhost:8000](http://localhost:8000)でブログを確認することができます。

## GitHub Pagesで公開する
事前にGitHubにリポジトリを作成し、このプロジェクトをプッシュしておく必要があります。

```yml
prefix = "/<リポジトリ名>"
```
`config.toml`の`prefix`がリポジトリ名になっているかを確認する。デフォルトでは`username.github.io/リポジトリ名`にブログが公開される。

```
$ npm run deploy
```
プロジェクトフォルダ以下で上記コマンドを実行すると、リモートの`gh-pages`ブランチにブログがデプロイされて公開となります。

その他の使い方は`$ npm run develop`でローカルサーバーを立ち上げて確認してください。
