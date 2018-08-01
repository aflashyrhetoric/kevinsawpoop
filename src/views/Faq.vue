<template>
  <div class="FAQ">
    <h1 class="animated wobble">BECAUSE YALL DIDNT BELIEVE ME</h1>
    <router-link to="/">Go back</router-link>
  </div>
</template>

<script>
export default {
  name: "FAQ"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../basics";

.FAQ {
  display: flex;
  align-items: center;
  flex-flow: column nowrap;

  h1,
  a {
    margin: 0;
    font-size: 80px;
    @include bp(sm) {
      font-size: 190px;
    }
    @include bp(md) {
      font-size: 200px;
    }
    @include bp(lg) {
      font-size: 250px;
    }
  }
}
</style>
