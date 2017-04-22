---
title: How to set up this theme
date: "2017-04-04T00:19:00.000Z"
path: "/how-to-set-up-this-theme"
---
## Set up a theme color
It is possible to change the header, footer, link color.

```scss
...
$primaryColor: #9347A0;
$secondaryColor: #586365;
...
```
Change the value of `$ primaryColor` and` $ secondaryColor` in `css / style.scss`.

## Set up an author bio
```yml
authorName = "kentaro-m"
authorDetail = "I'm a application engineer."
twitterId = ""
facebookId = ""
githubId = "kentaro-m"
```
Setting of author bio changes the value of `config.toml`.

## Set up Google Analytics
```yml
googleAnalyticsId = ""
```
If you want to get access information with Google Analytics, set the tracking ID in `config.toml`.

## Change theme of syntax highlight
```yml
syntaxTheme = "atom-one-dark"
```
Syntax highlighting uses [highlight.js](https://highlightjs.org/). Please check available themes [here](https://github.com/isagalaev/highlight.js/tree/master/src/styles). The default is Atom One Dark.
