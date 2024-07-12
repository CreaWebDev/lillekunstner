<template>
  <div 
    class="flex flex-col md:flex-row bg-mint bg-img bg-contain bg-repeat h-full w-full z-0" 
    :class="bgMobileClass"
  >
    <ProtoDisclaimer :colors="'bg-ocean text-tomato'" >
      Bemærk, dette er en prototype, ingen bestilling endnu.
    </ProtoDisclaimer>
    
    <div class="flex flex-col w-full h-auto">
      <header class="flex flex-row justify-between z-20 md:h-48">
        <div class="w-28 m-8 hover:opacity-60 hover:border-b-2 border-ocean transition-all">
          <RouterLink to="/">
            <img src="/images/text_logo.svg">
          </RouterLink>  
        </div>
        <button class="fixed top-8 right-8 bg-ocean hover:bg-abricot rounded-lg px-4 py-2 font-display text-lg text-velvet">
          <RouterLink to="/basket">
            Bestil nu
          </RouterLink>
        </button>
      </header>
      <div class="fixed bottom-4 md:sticky w-full md:top-0 z-20">
        <MenuBar />
      </div>
      
      <Container class="grow z-10 p-8">
        <slot />
      </Container>
      <footer class="w-full place-self-end mb-16 z-10">
        <LilleFooter></LilleFooter>
      </footer>
    </div>
    
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ProtoDisclaimer from '@/components/generic/ProtoDisclaimer.vue';
import MenuBar from "~~/components/layout/MenuBar.vue"
import LilleFooter from "~~/components/layout/LilleFooter.vue"
import Container from "~~/components/layout/Container.vue"

const windowInnerWidth = ref(1)
const isMobile = computed(() => {
  const minWidth = 768; // Minimum width for desktop devices
  return windowInnerWidth.value < minWidth || screen.width < minWidth;
})

const bgClass = ref('bg-[url("/images/bg/bg.svg")]')
const bgMobileClass = ref('bg-[url("/images/bg/bg_mobile.svg")]')

onMounted(() => {
  windowInnerWidth.value = window.innerWidth
})
</script>