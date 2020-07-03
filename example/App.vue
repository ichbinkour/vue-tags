<template>
  <div>
    <div>
      <input
        class="ic-input ic-input-text"
        type="text"
        v-model="tag"
        placeholder="Enter a tag name"
        v-on:keyup.enter="addTagToList()"
      />
      <button @click="addTagToList()">Add</button>
    </div>

    <div class="tags-container">
      <vue-tags :options="options" @delete-tag="newTags => (options = newTags)" closable></vue-tags>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: ['Vue', 'JavaScript', 'Python'],
      option: '',
      tag: null
    };
  },
  methods: {
    addTagToList() {
      this.options.push(this.tag);
      this.tag = null;
    }
  }
};
</script>

<style scoped>
.tags-container {
  margin-top: 1em;
}
.ic-input {
  padding: 4px;
  background-color: #f0f1f2;
  border: 1px solid #9fa5a2;
  border-radius: 3px;
}
.ic-input-text {
  border: 1px solid #37b77c;
}
</style>
