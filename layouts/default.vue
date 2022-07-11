<script>
export default {
  data() {
    return { displaySideNav: false };
  },
  useHead: {
    meta: [
      {
        name: "og:title",
        content: `App Name -My Nuxt App
        }`,
      },
    ],
  },
  created() {
    this.$nuxt.$on("closeNav", () => (this.displaySideNav = false));
  },
};
</script>
<template>
  <div class="relative">
    <!-- sidenav -->
    <LazySideNav
      @closeSideNav="displaySideNav = false"
      v-if="displaySideNav == true"
      class="absolute z-50 min-h-screen h-auto shadow-sm w-56 shadow-lg"
    />
    <!-- header -->
    <AppHeader @showSideNav="displaySideNav = true" />
    <!--Router view -->
    <Nuxt />
  </div>
</template>

<style>
select {
  background-color: transparent;
  width: 100%;
}
.grey {
  color: rgb(106, 103, 103);
}
</style>
