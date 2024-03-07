<script setup lang="js">
import EasterEgg from '../assets/images/easter_eggs.jpg'
</script>

<template>
  <div class="grid grid-cols-1 text-white font-bold text-xl w-full">
    <span
      class="shadow-md h-[60px] w-full text-white font-bold bg-[#2e2e2f] text-2xl flex items-center p-2"
    >
      Annoucements
    </span>
    <div class="w-full flex flex-col justify-center items-center p-4 gap-12">
      <div class="flex flex-col justify-center items-center gap-12 w-[60%] max-md:w-[80%]">
        <h1>Easter Egg Extravaganza</h1>
        <img class="max-w-fit max-md:w-[100%]" :src="EasterEgg" alt="Easter Egg" />
        <div class="text-base font-normal max-w-prose prose flex flex-col gap-4">
          <p>
            Greetings, fellow puzzle enthusiasts and seekers of hidden treasures! We are thrilled to
            unveil an exhilarating endeavor that will set your hearts racing and your minds buzzing
            with excitement. Get ready to embark on a journey filled with mystery, riddles, and the
            thrill of discovery as we introduce our Easter Egg Extravaganza, starting March 15th!
          </p>
          <p>
            What exactly are these Easter eggs, you might wonder? Well, they are hidden gems
            scattered throughout our website, waiting to be unearthed by the keen-eyed and the
            clever-minded. Each egg holds a clue, a puzzle piece in a grand enigma waiting to be
            solved.
          </p>
          <p>
            Your mission, should you choose to accept it, is to hunt down all the Easter eggs
            concealed within the depths of our digital domain. These hidden treasures will test your
            wit, your intuition, and perhaps even your patience. But fear not, for the rewards are
            bountiful.
          </p>
          <p>
            But wait, what's the reward for those who crack all the eggs? Get ready for the big
            reveal – it's none other than some sweet IITM Paradox merch, exclusively yours to flaunt
            your puzzle-solving prowess!
          </p>
          <p>
            Consider this Easter Egg Extravaganza as a warmup, a prelude to the main event – our
            legendary Cryptic Hunt. For those unfamiliar, the Cryptic Hunt is an annual tradition
            filled with even greater challenges, mind-bending puzzles, and glory for those who
            emerge victorious.
          </p>
          <p>
            So, dear adventurers, are you ready to embark on this thrilling quest? Sharpen your
            minds, hone your senses, and prepare to delve into the unknown. The Easter Egg
            Extravaganza awaits, beckoning you to uncover its secrets and claim your reward. Let the
            hunt begin!
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
