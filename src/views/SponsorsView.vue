<script setup lang="ts">
import {
  TitleSponsors,
  FestSponsors,
  EventSponsors,
  PlatformSponsors,
  EventPartners
} from '../stores/sponsors'
</script>

<template>
  <div class="grid grid-cols-1 z-10 text-white font-bold text-xl">
    <span
      class="shadow-md h-[60px] w-full text-white font-bold bg-[#2e2e2f] text-2xl flex items-center p-2"
    >
      Our Past Sponsors
    </span>
    <div class="w-full flex flex-col justify-center items-center p-4 gap-12">
      <div class="flex flex-col justify-center items-center gap-12">
        <h1>TITLE SPONSORS</h1>
        <div class="flex flex-wrap max-w-[1000px] justify-center items-center gap-4">
          <div
            v-for="sponsor in TitleSponsors"
            :key="sponsor.id"
            class="flex flex-col items-center justify-center cursor-pointer h-[220px] w-[300px] max-[280px]:w-[240px] relative p-4 rounded-lg hover:opacity-80 overflow-hidden outline-none data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-offset-2 shadow-md transition-transform motion-reduce:transform-none duration-200 z-0"
            :style="{ backgroundColor: sponsor.bg }"
          >
            <img
              class="hover:w-[120px] duration-300 ease-in-out w-[100px]"
              :src="sponsor.img"
              :alt="sponsor.Sponsor"
            />

            <faIcons
              class="absolute bottom-4 right-4 transition-opacity motion-reduce:transition-none duration-300 rounded-none"
              :style="{ color: sponsor.iconcolor }"
              :icon="['fas', 'arrow-up-right-from-square']"
              data-loaded="true"
            />
          </div>
        </div>
      </div>
      <!-- 2ND -->
      <div class="flex flex-col justify-center items-center gap-12">
        <h1>FEST SPONSORS</h1>
        <div class="flex flex-wrap max-w-[800px] justify-center items-center gap-4">
          <div
            v-for="sponsor in FestSponsors"
            :key="sponsor.id"
            class="flex flex-col items-center justify-center cursor-pointer h-[250px] w-[350px] max-[360px]:w-[240px] relative p-4 rounded-lg hover:opacity-80 overflow-hidden outline-none data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-offset-2 shadow-md transition-transform motion-reduce:transform-none duration-200 z-0"
            :style="{ backgroundColor: sponsor.bg }"
          >
            <img
              class="hover:w-[120px] duration-300 ease-in-out w-[100px]"
              :src="sponsor.img"
              :alt="sponsor.Sponsor"
            />

            <faIcons
              class="absolute bottom-4 right-4 transition-opacity motion-reduce:transition-none duration-300 rounded-none"
              :style="{ color: sponsor.iconcolor }"
              :icon="['fas', 'arrow-up-right-from-square']"
              data-loaded="true"
            />
          </div>
        </div>
      </div>
      <!-- 3RD -->
      <div class="flex flex-col justify-center items-center gap-12">
        <h1>EVENT SPONSORS</h1>
        <div class="flex flex-wrap max-w-[800px] justify-center items-center gap-4">
          <div
            v-for="sponsor in EventSponsors"
            :key="sponsor.id"
            class="flex flex-col items-center justify-center cursor-pointer h-[130px] w-[130px] relative p-4 rounded-lg hover:opacity-80 overflow-hidden outline-none data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-offset-2 shadow-md transition-transform motion-reduce:transform-none duration-200 z-0"
            :style="{ backgroundColor: sponsor.bg }"
          >
            <img
              class="hover:w-[120px] duration-300 ease-in-out w-[60px]"
              :src="sponsor.img"
              :alt="sponsor.Sponsor"
            />

            <faIcons
              class="absolute bottom-4 right-4 transition-opacity motion-reduce:transition-none duration-300 rounded-none"
              :style="{ color: sponsor.iconcolor }"
              :icon="['fas', 'arrow-up-right-from-square']"
              data-loaded="true"
            />
          </div>
        </div>
      </div>

      <!-- 4TH -->
      <div class="flex flex-col justify-center items-center gap-12">
        <h1>PLATFORM SPONSORS</h1>
        <div class="flex flex-wrap max-w-[900px] justify-center items-center gap-4">
          <div
            v-for="sponsor in PlatformSponsors"
            :key="sponsor.id"
            class="flex flex-col items-center justify-center cursor-pointer h-[130px] w-[130px] relative p-4 rounded-lg hover:opacity-80 overflow-hidden outline-none data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-offset-2 shadow-md transition-transform motion-reduce:transform-none duration-200 z-0"
            :style="{ backgroundColor: sponsor.bg }"
          >
            <img
              class="hover:w-[120px] duration-300 ease-in-out w-[60px]"
              :src="sponsor.img"
              :alt="sponsor.Sponsor"
            />

            <faIcons
              class="absolute bottom-4 right-4 transition-opacity motion-reduce:transition-none duration-300 rounded-none"
              :style="{ color: sponsor.iconcolor }"
              :icon="['fas', 'arrow-up-right-from-square']"
              data-loaded="true"
            />
          </div>
        </div>
      </div>
      <!-- 5TH -->
      <div class="flex flex-col justify-center items-center gap-12 mb-20">
        <h1>EVENT PARTNERS</h1>
        <div class="flex flex-wrap max-w-[900px] justify-center items-center gap-4">
          <div
            v-for="sponsor in EventPartners"
            :key="sponsor.id"
            class="flex flex-col items-center justify-center cursor-pointer h-[130px] w-[130px] relative p-4 rounded-lg hover:opacity-80 overflow-hidden outline-none data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-offset-2 shadow-md transition-transform motion-reduce:transform-none duration-200 z-0"
            :style="{ backgroundColor: sponsor.bg }"
          >
            <img
              class="hover:w-[120px] duration-300 ease-in-out w-[60px]"
              :src="sponsor.img"
              :alt="sponsor.Sponsor"
            />

            <faIcons
              class="absolute bottom-4 right-4 transition-opacity motion-reduce:transition-none duration-300 rounded-none"
              :style="{ color: sponsor.iconcolor }"
              :icon="['fas', 'arrow-up-right-from-square']"
              data-loaded="true"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
