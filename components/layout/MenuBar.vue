<template>
  <div class="bg-aqua flex flex-row justify-around md:justify-between md:px-4 h-20 z-50">
    <div 
      v-for="button in menuButtons" :key="button.id"
      :class="$route.path == button.linkTo ? 'border-b-4 md:border-b-4 border-ocean' : ''"
    >
      <RouterLink :to="button.linkTo"
        class="flex flex-col md:flex-row px-2 py-2 md:m-2 md:p-2 justify-center md:justify-start text-ocean hover:text-abricot hover:bold transition-all"
      >
        <img :src="button.icon" class="flex w-10 h-10 md:w-12 md:h-12">
        <p class="flex text-sm md:text-lg font-display text-center self-center">
          {{ button.title }}
        </p>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const menuButtons = ref([
  { id: 1, title: 'Galleri', linkTo: '/gallery', icon: '/images/buttons/rose.svg'},
  { id: 2, title: 'Årstider',  linkTo: '/seasons', icon: '/images/buttons/xmas.svg'},
  { id: 3, title: 'Produkter',  linkTo: '/products', icon: '/images/buttons/face.svg'},
  { id: 4, title: 'Køb',  linkTo: '/basket', icon: '/images/buttons/basket.svg'},
  { id: 5, title: 'Kontakt',  linkTo: '/about', icon: '/images/buttons/bird.svg'}
])
</script>