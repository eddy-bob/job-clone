<script>
export default {
  definePageMeta: {
    title: "Page three",
    key: () => {
      this.$route.fullPath;
    },
  },
};
</script>
<template>
  <div>router 3</div>
</template>




