# Installation

## Direct Download / CDN

https://unpkg.com/vue-tags/dist/vue-tags 

[unpkg.com](https://unpkg.com) provides NPM-based CDN links. The above link will always point to the latest release on NPM. You can also use a specific version/tag via URLs like https://unpkg.com/vue-tags@{{ $version }}/dist/vue-tags.js
 
Include vue-tags after Vue and it will install itself automatically:

```html
<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-tags/dist/vue-tags.js"></script>
```

## NPM

```sh
$ npm install vue-tags
```

## Yarn

```sh
$ yarn add vue-tags
```

When used with a module system, you must explicitly install the `vue-tags` via `Vue.use()`:

```javascript
import Vue from 'vue'
import vue-tags from 'vue-tags'

Vue.use(vue-tags)
```

You don't need to do this when using global script tags.

## Dev Build

You will have to clone directly from GitHub and build `vue-tags` yourself if
you want to use the latest dev build.

```sh
$ git clone https://github.com//vue-tags.git node_modules/vue-tags
$ cd node_modules/vue-tags
$ npm install
$ npm run build
```

