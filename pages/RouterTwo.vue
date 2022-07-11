<script>
export default {
  definePageMeta: {
    title: "Page two",
    key: () => {
      this.$route.fullPath;
    },
  },
};
</script>
<template>
  <div>router 2</div>
</template>
