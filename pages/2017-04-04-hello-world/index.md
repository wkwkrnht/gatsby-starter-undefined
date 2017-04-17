---
title: はじめに
date: "2017-04-04T00:19:00.000Z"
path: "/hello-world/"
---
このテーマはHTML/CSSフレームワーク「[MUSUBii](https://qrac.github.io/musubii/)」をベースに作られています。

## ブログの始め方
事前にNode.jsが使用できる環境を準備しておく必要があります。

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

## ブログをGitHub Pagesで公開する
事前にGitHubにリポジトリを作成し、このプロジェクトをプッシュしておく必要があります。

```yml
prefix = "/<リポジトリ名>"
```
`config.toml`の`prefix`がリポジトリ名になっているかを確認する。デフォルトでは`username.github.io/リポジトリ名`にブログが公開される。

```
$ npm run deploy
```
プロジェクトフォルダ以下で上記コマンドを実行すると、リモートの`gh-pages`ブランチにブログがデプロイされて公開となります。

## ブログをgithub.ioドメインのルートに公開する
`username.github.io`直下にブログを公開したい場合は`utils`の`deploy.js`を使用する。

まずはGitHubに`username.github.io`という名前のリポジトリを作成する。

```javascript
const options = {
  repo: 'git@github.com:username/username.github.io.git', // usernameを自分のユーザー名に書き換える
  branch: 'master'
}
```
次に`deploy.js`を修正する。

```json
{
  ...
  "scripts": {
    ...
    "deploy": "gatsby build --prefix-links && node ./utils/deploy.js"
  }
  ...
}
```
`package.json`の`deploy`を上記のとおり書き換える。

```
$ npm run deploy
```
上記コマンド実行で`username.github.io`直下にブログが公開されます。
