---
title: Hello World
date: "2017-04-04T00:19:00.000Z"
path: "/hello-world/"
---
This theme is based on the HTML / CSS framework "[MUSUBii](https://qrac.github.io/musubii/)".

## How to start a blog
It is necessary to prepare an environment that Node.js can use beforehand.

```
$ npm install -g gatsby
```
global install "gatsby"

```bash
$ gatsby new blog https://github.com/kentaro-m/gatsby-starter-undefined.git
```
Create a new blog.

```
$ npm run develop
```
Start a hot-reloading development server accessible at [http://localhost:8000](http://localhost:8000)

## Publish a blog on GitHub Pages
It is necessary to create a repository in GitHub in advance and push this project.

```yml
prefix = "/<repository name>"
```
Make sure `prefix` in `config.toml` is the repository name. By default the blog is published in `username.github.io/<repository name>.

```
$ npm run deploy
```
The blog will be deployed on the remote `gh-pages` branch and made public.

## Publish a blog to root of github.io domain
If you want to publish a blog directly under `username.github.io`, use` deploy.js`.

Create a repository named `username.github.io` in GitHub.

```javascript
const options = {
  repo: 'git@github.com:username/username.github.io.git',
  branch: 'master'
}
```
Modify `deploy.js`.

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
Rewrite `deploy` of` package.json` as described above.

```
$ npm run deploy
```
A blog is published to `username.github.io`.
