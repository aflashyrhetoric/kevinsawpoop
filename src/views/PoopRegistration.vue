<template>
  <div class="PoopRegistration">
    <h1>Hi Kevin add poop sightings here</h1>
    <a href="" @click="addPoop">
      I Seen'd Poop
    </a>
  </div>
</template>

<script>
import db from "../db";

const poopRef = db.ref("poopsightings");

export default {
  name: "HelloWorld",
  data() {
    return {
      poopSightings: []
    };
  },
  firebase: {
    poopSightings: {
      source: poopRef
    }
  },
  methods: {
    addPoop: function() {
      poopRef.push({
        time: Date.now()
      });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
