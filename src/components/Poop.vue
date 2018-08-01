<template>
  <div class="PoopContainer">
    <div class="PoopContainer__hero">
      <h1>Kevin Saw Poo</h1>
    </div>
    <router-link to="/faq">But Kevin, why did you make this?</router-link>
    <ul class="PoopContainer__data">
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
    padding: 10px;
    display: inline-block;
    background-color: #2b0025;
    color: white;
    font-family: "eldwin-script", sans-serif;
    font-weight: bold;
  }
  .normal {
    font-size: 20px;
    font-weight: light;
    font-family: "Roboto", sans-serif;
  }
  &__hero {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 130px;
    background: linear-gradient(to bottom right, #822d99, #bc131d);
    color: white;
    margin-bottom: 25px;
  }
  &__data {
    list-style: none;
    padding: 0;
    font-size: 18px;
    max-width: 700px;
    margin: auto;

    li {
      border: 1px solid gray;
      margin-top: -1px;
    }
  }
}
</style>
