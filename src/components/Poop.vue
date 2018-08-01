<template>
  <div class="PoopContainer">
    <div class="PoopContainer__hero animated fadeIn">
      <h1 class="animated fadeInDown delay-1s">Kevin Saw Poo</h1>
      <p class="animated fadeInDown delay-2s">in NYC</p>
    </div>
    <router-link to="/faq" class="animated fadeIn">But Kevin, why did you make this?</router-link>
    <ul class="PoopContainer__data animated fadeIn">
      <li
        v-for="poop in poopSightings.slice().reverse()"
        :key="poop.key">
          <span class="highlight">On {{ poop.time | getDay }} at {{ poop.time | getTime }},</span><span class="normal"> while {{ poop.activity}}, <span class="sawpoo">Kevin saw poo</span>:(</span>
      </li>
    </ul>
  </div>
</template>

<script>
import db from "../db";
import dayjs from "dayjs";

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
  },
  filters: {
    getTime(val) {
      return dayjs(val).format("HH:mm A");
    },
    getDay(val) {
      return dayjs(val).format("MMMM D");
    }
  }
};
</script>

<style scoped lang="scss">
@import "../basics";

.PoopContainer {
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  h1 {
    font-family: "sheila", script, sans-serif;
    font-size: 50px;
  }
  a {
    font-size: 18px;
    margin-bottom: 20px;
  }
  .highlight {
    width: 100%;
    padding: 10px;
    display: inline-block;
    background-color: #2b0025;
    color: white;
    font-family: "eldwin-script", sans-serif;
    font-weight: bold;
    @include bp(md) {
      width: 230px;
    }
  }
  .normal {
    font-size: 20px;
    font-weight: light;
    font-family: "Roboto", sans-serif;
    @include bp(md) {
      padding-left: initial;
    }
  }
  &__hero {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    background: linear-gradient(to bottom right, #822d99, #bc131d);
    color: white;
    margin-bottom: 25px;
    @include bp(md) {
      height: 250px;
    }
  }
  &__data {
    display: flex;
    flex-flow: column nowrap;
    max-width: 95%;

    @include bp(md) {
      display: list-item;
      flex-flow: initial;
      max-width: initial;
    }
    list-style: none;
    padding: 0;
    font-size: 18px;
    width: 700px;
    margin: auto;

    li {
      margin-bottom: 15px;
      max-width: 100%;
      overflow: hidden;
      border: 1px solid gray;
      margin-top: -1px;
      padding-right: 10px;
      @include bp(md) {
        margin-bottom: 0;
      }
    }
  }
}
</style>
