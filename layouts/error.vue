<template>
  <div class="flex justify-center pt-5">
    <div>
      <h1>
        <span class="text-red-500 text-2xl font-extrabold">{{
          error.statusCode
        }}</span>
        seems you are lost?
      </h1>

      <nuxt-link to="/" class="text-center text-blue-800 text-sm underline"
        >Take me back to homepage</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ["error"],
  layout: "error",
};
</script>

<style></style>
