# vue-tags

> A Vue plugin for awesome tags

### Installation

```
npm i @ichbinkour/vue-tags
```

### Usage

Inside any of your components:

```js
  <template>
    <vue-tags
      :options="options"
      @delete-tag="(newTags) => (options = newTags)"
      closable
    />
  </template>
```

```js
  <script>
    import VueTags from "@ichbinkour/vue-tags"

    data() {
      return {
        options: ['VueJs', 'vue', 'tags']
      }
    }
  </script>
```
