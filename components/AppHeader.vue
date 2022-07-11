<template>
  <div class="sm:flex sm:justify-between py-5 sm:px-3">
    <!--  -->
    <div class="flex sm:space-x-3 space-x-4 sm:px-0 px-5">
      <div class="mt-5">
        <i class="fas fa-bars cursor-pointer" @click="$emit('showSideNav')"></i>
      </div>
      <div><img src="../public/images/svg/logo.svg" class="w-16" alt="" /></div>
      <div
        class="w-full rounded-sm bg-white px-2 flex space-x-1 border-2 mt-3 rounded-full"
      >
        <span class="mt-2">
          <svg
            width="16"
            height="15"
            viewBox="0 0 16 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.73185 12.8287C8.1551 12.8284 9.53733 12.352 10.6585 11.4753L14.1833 15L15.3171 13.8663L11.7923 10.3416C12.6695 9.22038 13.1462 7.83791 13.1466 6.41437C13.1466 2.87765 10.2688 0 6.73185 0C3.19494 0 0.317139 2.87765 0.317139 6.41437C0.317139 9.95109 3.19494 12.8287 6.73185 12.8287ZM6.73185 1.60359C9.38513 1.60359 11.5429 3.76123 11.5429 6.41437C11.5429 9.06751 9.38513 11.2251 6.73185 11.2251C4.07856 11.2251 1.92082 9.06751 1.92082 6.41437C1.92082 3.76123 4.07856 1.60359 6.73185 1.60359Z"
              fill="#757575"
            />
          </svg>
        </span>
        <input
          type="text"
          placeholder="Search"
          class="py-1 w-full font-extrabold border-none outline-none focus:outline-none text-sm"
        />
      </div>
    </div>
    <div class="flex sm:px-0 px-5">
      <div class="flex justify-between w-full sm:space-x-4">
        <div class="flex space-y-3 sm:space-x-2 space-x-1">
          <div class="w-full flex mt-3 space-x-1">
            <p class="font-extrabold text-sm">ENGLISH</p>
            <i class="fas fa-chevron-down mt-3 fa-xs"></i>
          </div>

          <div>
            <i class="fas fa-user"></i>
          </div>
        </div>

        <div>
          <i class="fas fa-cart-arrow-down mt-4"></i>
        </div>
      </div>
      <!--  -->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped></style>
