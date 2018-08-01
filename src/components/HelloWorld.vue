<template>
  <div class="hello">
    {{ testValue.cheese }}
  </div>
</template>

<script>
import db from "../db";

export default {
  name: "HelloWorld",
  data() {
    return {
      testValue: []
    };
  },
  firebase: {
    testValue: {
      source: db.ref("data"),
      asObject: true
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
