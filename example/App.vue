<template>
  <div>
    Hello {{ msg }}!
    <vue-tags />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'world'
    };
  }
};
</script>

<style></style>
