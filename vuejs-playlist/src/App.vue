<template>
  <div>
    <app-header v-bind:title="title" v-on:changeTitle="updateTitle($event)">
    </app-header>
    <app-ninjas v-bind:ninjas="ninjas"></app-ninjas>
    <app-footer v-bind:title="title"></app-footer>
  </div>
</template>

<script>
import Header from "./component/Header.vue";
import Footer from "./component/Footer.vue";
import Ninjas from "./component/Ninjas.vue";

export default {
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "app-ninjas": Ninjas,
  },
  data() {
    return {
      ninjas: [
        { name: "Ryu", speciality: "Vue Component", show: false },
        { name: "Crystal", speciality: "HTML Wizardry", show: false },
        { name: "Hitoshi", speciality: "Click Events", show: false },
        { name: "Tango", speciality: "Conditionals", show: false },
        { name: "Kami", speciality: "Webpack", show: false },
        { name: "Yoshi", speciality: "Data Diggin", show: false },
        { name: "Ryu", speciality: "Vue Component", show: false },
      ],
      title: "Vue Ninjas",
    };
  },
  methods: {
    // updatedTitle = $event (above)
    updateTitle: function (updatedTitle) {
      this.title = updatedTitle;
    },
  },
};
</script>

<style scoped>
</style>
