<template>
  <div id="app">
    <vue-tags
      :options="options"
      @delete-tag="(newTags) => (options = newTags)"
      closable
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ["Vue", "JavaScript", "Python"],
    };
  },
};
</script>

<style lang="scss"></style>
