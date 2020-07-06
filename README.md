# vue-tags

> ✨ A Vue plugin for awesome tags ✨

[![npm version](https://badge.fury.io/js/%40ichbinkour%2Fvue-tags.svg)](https://badge.fury.io/js/%40ichbinkour%2Fvue-tags)
[![GitHub stars](https://img.shields.io/github/stars/ichbinkour/vue-tags?style=social&label=Star&maxAge=2592000)](https://github.com/ichbinkour/vue-tags)

## Introduction

The library vue-tags allows you to implement easily a list of tags in your Vue components.

[Demo](https://google.com)

## Documentation

### Installation

```js
npm i @ichbinkour/vue-tags
```

### Usage

#### Basic

Inside any of your components:

```vue
<template>
  <vue-tags
    :options="options"
    @delete-tag="(newTags) => (options = newTags)"
    closable
  />
</template>
```

```vue
<script>
import VueTags from "@ichbinkour/vue-tags"

data() {
  return {
    options: ['VueJs', 'vue', 'tags']
  }
}
</script>
```

## API

| Props      | Type |Description                         |
| :--------- | :----|:------------------------------ |
| `options`  | `Array` |Array of tags name of type |
| `closable` | `Boolean` - Default `false`|Add an icon to close the tag        |

| Methods        | Description                                           |
| :------------- | :---------------------------------------------------- |
| `delete-tag()` | Executed method when the user click on the close icon |

Check on [Github](https://github.com/ichbinkour/vue-tags)
