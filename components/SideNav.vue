<template>
  <transition name="slide">
    <div class="py-4 space-y-14 bg-white grey">
      <!-- logo -->
      <div class="flex w-full justify-center">
        <img src="/images/svg/logo.svg" class="w-16" alt="" />
      </div>
      <div class="space-y-5 text-sm">
        <!--  -->
        <div @click="$emit('closeSideNav')">
          <NuxtLink to="/" id="Router1">
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
            id="RouterTwo"
            to="/RouterTwo"
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
            id="RouterThree"
            to="/RouterThree"
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
            id="RouterFour"
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
            id="RouterFive"
            to="/RouterOne"
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
            id="RouterSix"
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
            id="RouterSeven"
            to="/RouterOne"
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
            id="RouterEight"
            to="/RouterOne"
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
            id="RouterNine"
            to="/RouterOne"
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
            id="RouterTen"
            to="/RouterOne"
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
            id="RouterEleven"
            to="/RouterOne"
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
            id="RouterTwelve"
            to="/RouterOne"
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
  </transition>
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
