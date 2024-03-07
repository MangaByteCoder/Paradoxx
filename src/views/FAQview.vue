<script setup lang="ts">
import { FAQ } from '../stores/faq'
import { ref, type Ref } from 'vue'

interface FAQVisibility {
  [key: number]: boolean
}

const faqVisibility: Ref<FAQVisibility> = ref({})

function toggleValue(id: number): void {
  faqVisibility.value[id] = !faqVisibility.value[id]
}
</script>

<template>
  <div class="grid grid-cols-1 text-white font-bold text-xl w-full">
    <span
      class="shadow-md h-[60px] w-full text-white font-bold bg-[#515153] text-2xl flex items-center p-2"
    >
      FAQ
    </span>
    <div class="w-full flex flex-col justify-center items-center p-4 bg-black">
      <div
        class="flex flex-col justify-center items-center gap-8 w-[65%] max-md:w-full max-sm:mr-4"
      >
        <h1 class="text-2xl">Help</h1>
        <div class="w-[100%] flex gap-4 justify-center items-center">
          <input
            class="w-[90%] h-[45px] p-6 rounded-lg bg-[#27272a] text-sm font-normal"
            type="text"
            placeholder="search"
            name="search"
          />
          <faIcons :icon="['fas', 'magnifying-glass']" />
        </div>
        <div class="flex flex-col gap-2 w-full">
          <div class="flex flex-col flex-wrap gap-4 p-2 w-full" v-for="faq in FAQ" :key="faq.id">
            <div
              @click="() => toggleValue(faq.id)"
              class="w-full flex justify-between cursor-pointer"
            >
              <h2 class="text-white font-normal max-sm:text-base">{{ faq.question }}</h2>
              <span
                :class="{
                  'visible font-extralight text-xl text-gray-400 max-sm:text-sm':
                    !faqVisibility[faq.id],
                  hidden: faqVisibility[faq.id]
                }"
                >&lt;</span
              >
              <span
                :class="{
                  'rotate-90 font-extralight text-balance text-xl text-gray-400 max-sm:text-sm':
                    faqVisibility[faq.id],
                  hidden: !faqVisibility[faq.id]
                }"
                >&gt;</span
              >
            </div>
            <p
              :class="{
                'text-white font-normal text-base max-sm:text-sm': faqVisibility[faq.id],
                hidden: !faqVisibility[faq.id]
              }"
            >
              {{ faq.answer }}
            </p>
            <span class="h-[.5px] w-[100%] bg-gray-700 text-white"></span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
