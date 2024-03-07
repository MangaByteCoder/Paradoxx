<script setup lang="ts">
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isMenuVisible = ref(false)

function toggleMenu() {
  isMenuVisible.value = !isMenuVisible.value
}
</script>

<template>
  <div class="flex flex-col">
    <div
      class="h-[60px] w-full text-white flex justify-between items-center p-4 backdrop-blur-md sticky top-0 z-60"
    >
      <div class="flex gap-2 items-center">
        <faIcons
          @click="toggleMenu"
          :class="{ hidden: isMenuVisible, 'visible cursor-pointer': !isMenuVisible }"
          icon="bars"
        />
        <faIcons
          @click="toggleMenu"
          :class="{ hidden: !isMenuVisible, 'visible cursor-pointer': isMenuVisible }"
          :icon="['fas', 'times']"
        />
        <h1 class="font-bold text-lg">PARADOX</h1>
      </div>
      <button class="bg-blue-500 p-2 rounded-md pr-4 pl-4">Login</button>
    </div>

    <div
      v-show="isMenuVisible"
      class="text-white font-bold flex flex-col z-30 w-screen gap-4 p-4 fixed backdrop-blur-xl min-h-[calc(100vh-60px)] bottom-0 overflow-y-auto"
    >
      <RouterLink @click="toggleMenu" to="/">HOME</RouterLink>
      <RouterLink @click="toggleMenu" to="/about">ABOUT US</RouterLink>
      <RouterLink @click="toggleMenu" to="/register">REGISTER</RouterLink>
      <RouterLink @click="toggleMenu" to="/sponsors">SPONSORS</RouterLink>
      <RouterLink @click="toggleMenu" to="/annoucements">ANNOUNCEMENTS</RouterLink>
      <RouterLink @click="toggleMenu" to="/faq">FAQ</RouterLink>
      <RouterLink @click="toggleMenu" to="/contactus">CONTACT US</RouterLink>
    </div>
  </div>
</template>
