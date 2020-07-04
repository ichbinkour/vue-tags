<template>
  <div id="tag">
    <span v-for="option in optionsList" :key="option.id" class="ic-tag">
      <slot name="icon"></slot>
      {{ option.name }}
      <font-awesome-icon
        v-if="closable"
        class="ic-delete-icon"
        icon="times"
        @click="removeOption(option)"
      />
    </span>
  </div>
</template>

<script>
export default {
  name: "VueTags",
  props: {
    options: {
      type: Array,
      default: Array,
    },
    closable: {
      type: Boolean,
    },
  },
  data() {
    return {
      optionsList: [],
    };
  },
  watch: {
    options() {
      this.updateList();
    },
  },
  methods: {
    removeOption(toRemoveElem) {
      var optionsToParent = [];
      this.optionsList.filter((v) => {
        if (v.id != toRemoveElem.id) {
          optionsToParent.push(v.name);
        }
      });
      this.$emit("delete-tag", optionsToParent);
    },
    updateList() {
      this.optionsList = [];
      this.options.filter((v) => {
        if (v) {
          this.optionsList.push({
            name: v,
            id: Date.parse(new Date()) * Math.random(1, 10),
          });
        }
      });
    },
  },
  mounted() {
    this.updateList();
  },
};
</script>

<style lang="scss" scoped>
.ic-tag {
  background-color: #e6e7e8;
  border-radius: 3px;
  margin-right: 8px;
  padding: 5px;
  color: #323232;
  display: inline-block;
}
.ic-tags-container {
  display: inline-block;
}
.ic-delete-icon {
  margin-left: 5px;
  color: #37b77c;
}
#tag {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 0.5px;
}
</style>
