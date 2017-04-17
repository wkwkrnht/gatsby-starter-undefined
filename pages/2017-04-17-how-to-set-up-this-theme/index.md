---
title: テーマ設定方法
date: "2017-04-04T00:19:00.000Z"
path: "/how-to-set-up-this-theme"
---
## テーマカラー設定
ヘッダーやフッター、リンクのカラーを変更すること可能です。

```scss
...
$primaryColor: #9347A0;
$secondaryColor: #586365;
...
```
`css/style.scss`の`$primaryColor`と`$secondaryColor`の値を変更します。

## 著者情報設定
```yml
authorName = "kentaro-m"
authorDetail = "I'm a application engineer."
twitterId = ""
facebookId = ""
githubId = "kentaro-m"
```
著者情報の設定は`config.toml`の値を変更します。

## Analytics設定
```yml
googleAnalyticsId = ""
```
Google Analyticsでアクセス情報を取得したい場合は`config.toml`にトラッキングIDを設定します。

## シンタックスハイライトのテーマ変更
```yml
syntaxTheme = "atom-one-dark"
```
シンタックスハイライトは[highlight.js](https://highlightjs.org/)を使用しています。使用可能なテーマは[こちら](https://github.com/isagalaev/highlight.js/tree/master/src/styles)を確認してください。デフォルトはAtom One Darkが設定されています。
