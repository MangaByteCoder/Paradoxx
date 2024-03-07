<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <div
    class="w-full bg-[url(../assets/images/DSC08688.webp)] min-h-[calc(100vh-60px)] bg-cover bg-no-repeat bg-center"
  >
    <div
      class="w-full h-[60px] font-bold text-2xl text-white backdrop-blur-xl flex justify-center items-center"
    >
      PARADOX'24
    </div>

    <div
      class="absolute bottom-8 flex w-full justify-center items-center text-white h-[60px] gap-8 shadow-md max-[400px]:gap-4 max-[400px]:flex-col"
    >
      <h1 class="text-2xl font-semibold max-sm:text-lg">Register for Paradox'24</h1>
      <RouterLink to="/register"
        ><button
          onclick=""
          class="p-2 pr-4 pl-4 bg-green-500 font-semibold rounded-sm max-sm:text-sm"
        >
          Register Now <faIcons :icon="['fas', 'arrow-up-right-from-square']" /></button
      ></RouterLink>
    </div>
  </div>
</template>
