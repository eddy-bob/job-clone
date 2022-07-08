<template>
  <transition name="slide">
  <div class="py-4 space-y-14 bg-white grey">
    <!-- logo -->
    <div class="flex w-full justify-center">
      <img src="../static/svg/logo.svg" class="w-16" alt="" />
    </div>
    <div class="space-y-5 text-sm">
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink to="/" id="router1">
          <div
            class="flex justify-between w-full font-extrabold pr-4 pl-9 py-2 rounded-sm"
          >
            <p>Router 1</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router2"
          to="/router2"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 2</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router3"
          to="/router3"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 3</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router4"
          to="/"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 4</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router5"
          to="/router2"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 5</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router6"
          to="/"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 6</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router7"
          to="/router1"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 7</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router8"
          to="/router1"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 8</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router9"
          to="/router1"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 9</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <div @click="$emit('closeSideNav')">
        <!--  -->
        <NuxtLink
          id="router10"
          to="/router1"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 10</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router11"
          to="/router1"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 11</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
      <!--  -->
      <div @click="$emit('closeSideNav')">
        <NuxtLink
          id="router12"
          to="/router1"
          class="flex justify-between w-full font-extrabold"
        >
          <div class="flex justify-between w-full font-extrabold pr-4 pl-9">
            <p>Router 12</p>
            <i class="fas fa-chevron-down fa-xs mt-2"></i>
          </div>
        </NuxtLink>
      </div>
    </div>



  </div>
  <transition/>
</template>

<script>
export default {
  methods: {
    makeActive: (id) => {
      document.getElementById(id).style.backgroundColor = "rgb(218, 218, 252)";
    },
  },
};
</script>

<style scoped>
.slide-enter-active {
  transform: translateX(20px);
  transition: all 0.3s linear;
  opacity: 0.1;
}
.slide-leave-active {
  transform: translateX(-20px);
  opacity: 0.1;
  transition: all 0.3s linear;
}

.slide-enter-from {
  opacity: 0.1;
  transition: all 0.3s linear;
  transform: translateX(-20px);
  opacity: 0;
}
.slide-leave-to {
  transition: all 0.3s linear;
  transform: translateX(-20px);
  opacity: 0.1;
}
</style>
