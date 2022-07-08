<template>
  <div class="relative">
    <!-- sidenav -->
    <sidenav
      @closeSideNav="displaySideNav = false"
      v-if="displaySideNav == true"
      class="absolute z-50 min-h-screen h-auto shadow-sm w-56 shadow-lg"
    />
    <!-- header -->
    <appHeader @showSideNav="displaySideNav = true" />
    <!-- main -->
    <Nuxt />
  </div>
</template>
<script>
export default {
  data() {
    return { displaySideNav: false };
  },
  created() {
    this.$nuxt.$on("closeNav", () => (this.displaySideNav = false));
  },
};
</script>

<style>
select {
  background-color: transparent;
  width: 100%;
}
.grey {
  color: rgb(106, 103, 103);
}
</style>
