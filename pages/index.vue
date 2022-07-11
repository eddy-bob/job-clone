<template>
  <div class="w-full flex justify-center" @click="$nuxt.$emit('closeNav')">
    <div class="space-y-16">
      <div class="border-b flex sm:justify-end justify-center">
        <div
          class="flex space-x-4 font-extrabold justify-start text-sm pb-4 grey"
        >
          <!-- main -->

          <div class="w-full flex sm:space-x-20 space-x-2 space-x-2 border-b-2">
            <p>color</p>
            <i class="fas fa-chevron-down mt-3 fa-xs"></i>
          </div>

          <div class="w-full flex sm:space-x-20 space-x-2 border-b-2">
            <p>material</p>
            <i class="fas fa-chevron-down mt-3 fa-xs"></i>
          </div>

          <div class="w-full flex sm:space-x-20 space-x-2 border-b-2">
            <p>size</p>
            <i class="fas fa-chevron-down mt-3 fa-xs"></i>
          </div>
          <div class="w-full">
            <button
              class="text-white py-2 px-3 font-extrabold bg-black rounded-sm text-xs"
            >
              APPLY FILTER
            </button>
          </div>
        </div>
      </div>
      <!-- grid -->
      <div class="grid sm:grid-cols-4 gap-16 grid-cols-2">
        <div class="space-y-5 grey" v-for="i in 6" :key="i">
          <div class="flex justify-center w-full" :id="i">
            <img src="../public/images/svg/torah.svg" class="w-20" alt="" />
          </div>
          <div class="space-y-2">
            <div class="flex space-x-5 sm:justify-end justify-center sm:mr-7">
              <p
                class="rounded-full h-2 w-2"
                style="background-color: grey"
              ></p>
              <p
                class="rounded-full h-2 w-2"
                style="background-color: orange"
              ></p>
            </div>
            <p class="font-extrabold text-xs text-center">SEVEN BRANCH NORAH</p>
            <p class="font-extrabold text-sm sm:text-justify text-center">
              0.00
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  definePageMeta: {
    title: "Home page",
    key: () => {
      this.$route.fullPath;
    },
  },
};
</script>
