<template>
  <div class="hello">
    <h1>Kevin Saw Poop In NYC</h1>
    <ul>
      <li v-for="poop in poopSightings" :key="poop.key">
        {{ poop[".key"] }}
      </li>
    </ul>
  </div>
</template>

<script>
import db from "../db";

export default {
  name: "HelloWorld",
  data() {
    return {
      poopSightings: []
    };
  },
  firebase: {
    poopSightings: {
      source: db.ref("poopsightings")
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
