<template>
  <div class="hello">
    { testValue }
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  firebase: function() {
    return {
      testValue: this.db.ref("test")
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
