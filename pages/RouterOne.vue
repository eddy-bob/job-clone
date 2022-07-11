export default {
  definePageMeta: {
    title: "Page One",
    key: () => {
      this.$route.fullPath;
    },
  },
};
</script>
<template>
  <div>router 1</div>
</template>
<script>

<style></style>
