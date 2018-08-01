<template>
  <div class="home">
    <Poop msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Poop from "@/components/Poop.vue";

export default {
  name: "home",
  components: {
   Poop 
  }
};
</script>
